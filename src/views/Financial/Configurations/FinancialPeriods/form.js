import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CONFIGURATIONS_FP, CONFIGURATIONS_FP_FORM_BASE } from 'router/routes/financialRoutes';
import { getPeriodsByYearId } from 'services/api/actions/financial/configurations/financialPeriods/financialPeriods.api';
import SubHeader from 'shared/layout/subHeader';
import { parseError } from 'utils/shared';
import YearDetailSection from './Components/yearDetailSection';
import Card from 'shared/components/card';
import PeriodFormSection from './Components/periodFormSection';
import { Form } from 'antd';
import PeriodsListSection from './Components/periodsListSection';
import { dateTimeToString, formReadableDT } from 'utils/shared/dateTime';
import { updatePageLoader } from 'store/actions/shared';
import { useDispatch } from 'react-redux';
import {
  useFinancialYearsQuery,
  useFinancialPeriodsQuery,
} from 'services/api/actions/financial/configurations';
import { DATE_FORMATE, DEFAULT_MSG } from 'constants/shared/common';

export default function FinancialPeriodForm() {
  const { id } = useParams();
  const isNew = id === 'new';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { addRecord, updateRecord } = useFinancialPeriodsQuery(false);
  const { getList } = useFinancialYearsQuery();

  if (getList.isError) return navigate(CONFIGURATIONS_FP);
  const resolvedYearsData = getList.isError ? [] : getList?.data || [];

  const [financialYear, setFinancialYear] = useState(undefined);
  const [yearDetails, setYearDetails] = useState(null);
  const [minDate, setMinDate] = useState(null);
  const [periodsList, setPeriodsList] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const initialValues = {
    period_code: '',
    period_description: '',
    from_date: null,
    to_date: null,
    period_status: '1',
    status: true,
  };

  const onYearChange = (val) => {
    setFinancialYear(val?.OID ?? undefined);
    setYearDetails(val ?? null);
    if (val) {
      getPeriodsByYear(val.OID);
    } else {
      resetForm();
      setPeriodsList([]);
    }
  };

  const onSubmit = () => {
    dispatch(updatePageLoader(false));
    resetForm();
    getPeriodsByYear(financialYear);
  };

  const onSave = (values) => {
    addRecord
      .mutateAsync(values)
      .then(() => onSubmit())
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const onUpdate = (values) => {
    updateRecord
      .mutateAsync(values)
      .then(() => onSubmit())
      .catch(() => dispatch(updatePageLoader(false)));
  };

  const validateSubmit = () => {
    let isValid = true;

    if (!financialYear) {
      isValid = false;
      toast.error('Financial year is required');
    }

    form
      .validateFields()
      .then((values) => {
        if (!isValid) return;
        dispatch(updatePageLoader(true));
        values.financial_year_ID = financialYear;
        values.status = values.status == true ? 1 : 0;
        values.period_status = parseInt(values.period_status);
        values.from_date = dateTimeToString(new Date(values.from_date), DATE_FORMATE[9]);
        values.to_date = dateTimeToString(new Date(values.to_date), DATE_FORMATE[9]);
        if (selectedPeriod) {
          values.period_id = selectedPeriod.OID;
          onUpdate(values);
        } else onSave(values);
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const onFieldsChange = (changedFields, allFields) => {
    if (changedFields[0].name[0] === 'from_date') {
      const startVal = changedFields[0].value;
      const endVal = form.getFieldValue('to_date');
      setMinDate(startVal);
      if (startVal && endVal && startVal > endVal) form.setFieldValue('to_date', startVal);
    }
  };

  const updateYearDetail = (yearId) => {
    if (resolvedYearsData.length > 0) {
      const selectedYear = resolvedYearsData.find((item) => item.OID === yearId);
      setYearDetails(selectedYear ?? null);
    }
  };

  const resetForm = () => {
    form.resetFields();
    setMinDate(null);
    setSelectedPeriod(null);
  };

  const resetPage = () => {
    setFinancialYear(undefined);
    setYearDetails(null);
    setPeriodsList([]);
    resetForm();
    navigate(`${CONFIGURATIONS_FP_FORM_BASE}/new`);
  };

  const loadData = (data) => {
    const startDate = data.FROM_DATE ? formReadableDT(data.FROM_DATE) : null;
    const endDate = data.TO_DATE ? formReadableDT(data.TO_DATE) : null;
    form.setFields([
      { name: 'period_code', value: data.ST_PERIOD_CODE },
      { name: 'period_description', value: data.ST_PERIOD_DESC },
      { name: 'from_date', value: startDate },
      { name: 'to_date', value: endDate },
      { name: 'period_status', value: data.PeriodStatus.toString() },
      { name: 'status', value: data.POST },
    ]);
    setMinDate(startDate);
    setSelectedPeriod(data);
  };

  const getPeriodsByYear = (
    yearId,
    period_id = '',
    redirectOnError = false,
    updateYear = false
  ) => {
    dispatch(updatePageLoader(true));
    getPeriodsByYearId(yearId)
      .then((response) => {
        // set year
        if (updateYear) {
          setFinancialYear(yearId);
          updateYearDetail(yearId);
        }

        // set periods
        setPeriodsList(response);
        if (period_id) {
          const selected = response.find((item) => item.OID == period_id);
          if (selected) loadData(selected);
        } else resetForm();

        dispatch(updatePageLoader(false));
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
        if (redirectOnError) navigate(CONFIGURATIONS_FP);
      });
  };

  useEffect(() => {
    if (!getList.isLoading && !isNew) {
      const [yearId, period_id] = id.split('_');
      if (yearId && period_id) getPeriodsByYear(parseInt(yearId), period_id, true, true);
      else {
        toast.error(DEFAULT_MSG.InvalidId);
        navigate(CONFIGURATIONS_FP);
      }
    }
  }, [getList.isLoading, id]);

  const buttons = [
    {
      label: 'New',
      key: 'add',
      onClick: resetPage,
    },
  ];

  return (
    <>
      <SubHeader name={`${isNew ? 'Add' : 'Edit'} Financial Period`} buttons={buttons} />
      <div className="app_page_content">
        <Card>
          <YearDetailSection
            yearsLoading={getList.isLoading}
            resolvedYearsData={resolvedYearsData}
            yearDetails={yearDetails}
            financialYear={financialYear}
            onYearChange={onYearChange}
          />

          <PeriodFormSection
            initialValues={initialValues}
            form={form}
            minDate={minDate}
            selectedPeriod={selectedPeriod}
            onFieldsChange={onFieldsChange}
            validateSubmit={validateSubmit}
            disabled={financialYear ? false : true}
          />

          <PeriodsListSection data={periodsList} onEdit={loadData} />
        </Card>
      </div>
    </>
  );
}
