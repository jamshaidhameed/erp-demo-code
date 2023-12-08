import SubHeader from 'shared/layout/subHeader';
import Card from 'shared/components/card';
import { elementIds } from 'constants/financial';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import { toast } from 'react-toastify';
import { getJVReport } from 'services/api/actions/financial/generalReports/generalReports.api';
import { exportToExcel, printContainer } from 'utils/shared/files';
import JVReportSearch from './components/searchSection';
import { Form } from 'antd';
import JVReportPrint from './components/printSection';
import { useFinancialYearsQuery } from 'services/api/actions/financial/configurations';
import { dateTimeToString, formReadableDT } from 'utils/shared/dateTime';
import { DATE_FORMATE, DEFAULT_MSG } from 'constants/shared/common';
import { listByAttributeName } from 'utils/shared/list';
import { useCostCentreQuery } from 'services/api/actions/ams';
import { calculateJVStats } from 'helpers/financial/journalVouchers';

export default function JournalVoucherReport() {
  const [form] = Form.useForm();
  const organization_id = useSelector((state) => state.configs.location);
  const dispatch = useDispatch();

  const { getList: yearsList } = useFinancialYearsQuery();
  const { getList: getCostCentreList } = useCostCentreQuery();
  const costCentreList = getCostCentreList.isError ? [] : getCostCentreList?.data || [];
  const costCentresById = useMemo(
    () => listByAttributeName(costCentreList, 'id'),
    [costCentreList]
  );

  const [preview, setPreview] = useState(false);
  const [reportDate, setReportDate] = useState(null);
  const [search, setSearch] = useState({
    financial_year: undefined,
    financial_period: undefined,
    from_voucher_number: '',
    to_voucher_number: '',
    from_date: formReadableDT(new Date()),
    to_date: formReadableDT(new Date()),
    post_value: '3',
    report_type: '0',
  });

  const onGenerate = () => {
    form
      .validateFields()
      .then((values) => {
        values.from_date = dateTimeToString(new Date(values.from_date), DATE_FORMATE[9]);
        values.to_date = dateTimeToString(new Date(values.to_date), DATE_FORMATE[9]);
        values.organization_id = organization_id;
        dispatch(updatePageLoader(true));
        getJVReport(values)
          .then((response) => {
            const { totalCredit, totalDebit } = calculateJVStats(response);
            const data = {
              from_date: values.from_date,
              to_date: values.to_date,
              list: response,
              totalCredit,
              totalDebit,
            };
            setReportDate(data);
            setPreview(true);
            dispatch(updatePageLoader(false));
          })
          .catch((error) => {
            dispatch(updatePageLoader(false));
            toast.error(parseError(error));
          });
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const updateToDate = (from_date) => {
    setSearch({ ...search, from_date });
    const endVal = form.getFieldValue('to_date');
    if (from_date && endVal && from_date > endVal) form.setFieldValue('to_date', from_date);
  };

  const onPeriodChange = (value) => {
    const { FROM_DATE, TO_DATE } = value;
    if (TO_DATE) form.setFieldValue('to_date', formReadableDT(TO_DATE));
    if (FROM_DATE) {
      const dateValue = formReadableDT(FROM_DATE);
      form.setFieldValue('from_date', dateValue);
      updateToDate(dateValue);
    }
  };

  const onFieldsChange = (changedFields, allFields) => {
    if (changedFields.length !== 1) return;
    const fieldName = changedFields[0].name[0];
    if (fieldName === 'financial_year') {
      form.setFieldValue('financial_period', undefined);
      setSearch({ ...search, financial_year: changedFields[0].value });
    } else if (fieldName === 'from_date') updateToDate(changedFields[0].value);
  };

  const buttons = [
    {
      label: 'Print',
      key: 'Print',
      disabled: !preview,
      onClick: () => printContainer(elementIds.JV_REPORT_PRINT_CONTENT),
    },
    {
      label: 'Export To Excel',
      key: 'ExportToExcel',
      disabled: !preview,
      onClick: () => exportToExcel(elementIds.JV_REPORT_PRINT_CONTENT),
    },
  ];

  return (
    <>
      <SubHeader name="Journal Vouchers Report" buttons={buttons} />
      <div className="app_page_content">
        <Card>
          <JVReportSearch
            form={form}
            search={search}
            yearsList={yearsList}
            onGenerate={onGenerate}
            onFieldsChange={onFieldsChange}
            onPeriodChange={onPeriodChange}
          />

          {preview && (
            <div className="px-4">
              <JVReportPrint data={reportDate} costCentresById={costCentresById} />
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
