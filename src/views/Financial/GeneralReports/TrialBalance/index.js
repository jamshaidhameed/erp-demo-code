import SubHeader from 'shared/layout/subHeader';
import Card from 'shared/components/card';
import { DEFAULT_COA_LEVEL, elementIds } from 'constants/financial';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import { toast } from 'react-toastify';
import { exportToExcel, printContainer } from 'utils/shared/files';
import TBReportSearch from './components/searchSection';
import TBReportPrint from './components/printSection';
import { DATE_FORMATE, DEFAULT_AUTO_COMPLETE, DEFAULT_MSG } from 'constants/shared/common';
import { Form } from 'antd';
import { getTBReport } from 'services/api/actions/financial/generalReports/generalReports.api';
import {
  useFinancialYearsQuery,
  useMainAccountsQuery,
} from 'services/api/actions/financial/configurations';
import { dateTimeToString, formReadableDT } from 'utils/shared/dateTime';

export default function TrialBalance() {
  const organization_id = useSelector((state) => state.configs.location);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [initialValues, setInitialValues] = useState({
    financial_year: undefined,
    financial_period: undefined,
    fromDate: formReadableDT(new Date()),
    toDate: formReadableDT(new Date()),
    level: DEFAULT_COA_LEVEL,
    cost_centre: undefined,
    zero_balance: false,
    consolidated: false,
  });

  const [fromGlAccount, setFromGlAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [toGlAccount, setToGlAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [preview, setPreview] = useState(false);
  const [reportData, setReportData] = useState([]);

  const { getList: getFinancialYears } = useFinancialYearsQuery();
  const { getList: getMainAccounts } = useMainAccountsQuery();

  useEffect(() => {
    if (getMainAccounts?.data) {
      const lastIndex = getMainAccounts?.data?.length - 1;
      setFromGlAccount((prevState) => ({
        ...prevState,
        defaultValue: getMainAccounts.data?.[0].value,
      }));
      setToGlAccount((prevState) => ({
        ...prevState,
        defaultValue: getMainAccounts.data?.[lastIndex].value,
      }));
    }
  }, [getMainAccounts?.data]);

  const handleChange = (name, value) => {
    setInitialValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeFromAccount = (values) => {
    setFromGlAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const handleChangeToAccount = (values) => {
    setToGlAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const onGenerate = (values) => {
    const isValid = true;

    form
      .validateFields()
      .then((values) => {
        if (isValid) {
          const { financial_year, financial_period, fromDate, toDate, cost_centre, zero_balance } =
            values;
          const dataToSend = {
            organization_ID: organization_id,
            financial_year_ID: financial_year,
            financial_period_ID: financial_period,
            from_date: dateTimeToString(new Date(fromDate), DATE_FORMATE[9]),
            to_date: dateTimeToString(new Date(toDate), DATE_FORMATE[9]),
            from_main_account: parseInt(fromGlAccount.option?.code),
            to_main_account: parseInt(toGlAccount.option?.code),
            cost_centre_ID: cost_centre,
            zero_balance_include: zero_balance === true ? 1 : 0,
          };
          dispatch(updatePageLoader(true));
          getTBReport(dataToSend)
            .then((response) => {
              setReportData(response);
              setPreview(true);
              dispatch(updatePageLoader(false));
            })
            .catch((error) => {
              dispatch(updatePageLoader(false));
              toast.error(parseError(error));
            });
        }
      })
      .catch(() => toast.error(DEFAULT_MSG.FormValidationMsg));
  };

  const buttons = [
    {
      label: 'Print',
      key: 'Print',
      disabled: !preview,
      onClick: () => printContainer(elementIds.TB_REPORT_PRINT_CONTENT),
    },
    {
      label: 'Export To Excel',
      key: 'ExportToExcel',
      disabled: !preview,
      onClick: () => exportToExcel(elementIds.TB_REPORT_PRINT_CONTENT),
    },
  ];

  return (
    <>
      <SubHeader name="Trial Balance Report" buttons={buttons} />
      <div className="app_page_content">
        <Card>
          <TBReportSearch
            form={form}
            initialValues={initialValues}
            onChange={handleChange}
            getFinancialYears={getFinancialYears}
            fromGlAccount={fromGlAccount}
            handleChangeFromAccount={handleChangeFromAccount}
            toGlAccount={toGlAccount}
            handleChangeToAccount={handleChangeToAccount}
            onGenerate={onGenerate}
          />
          {preview && (
            <div className="px-4">
              <TBReportPrint
                initialValues={initialValues}
                toGlAccount={toGlAccount}
                fromGlAccount={fromGlAccount}
                data={reportData}
              />
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
