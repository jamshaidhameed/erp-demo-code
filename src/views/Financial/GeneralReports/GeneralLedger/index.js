import SubHeader from 'shared/layout/subHeader';
import Card from 'shared/components/card';
import { DEFAULT_COA_LEVEL, elementIds } from 'constants/financial';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import { toast } from 'react-toastify';
import { exportToExcel, printContainer } from 'utils/shared/files';
import GLReportSearch from './components/searchSection';
import GLReportPrint from './components/printSection';
import { DATE_FORMATE, DEFAULT_AUTO_COMPLETE, DEFAULT_MSG } from 'constants/shared/common';
import { Form } from 'antd';
import { getGLReport } from 'services/api/actions/financial/generalReports/generalReports.api';
import { useConfigBooksQuery } from 'services/api/actions/financial/configurations';
import { dateTimeToString, formReadableDT } from 'utils/shared/dateTime';
import { useMainAccountsQuery } from 'services/api/actions/financial/configurations';

export default function GeneralLedger() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { getList: getAllBooks } = useConfigBooksQuery();
  const organization_id = useSelector((state) => state.configs.location);

  const [initialValues, setInitialValues] = useState({
    voucher_type: 'all',
    fromDate: formReadableDT(new Date()),
    toDate: formReadableDT(new Date()),
    book_id: 'all',
  });

  const [fromGlAccount, setFromGlAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [toGlAccount, setToGlAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [level, setLevel] = useState(DEFAULT_COA_LEVEL);
  const [preview, setPreview] = useState(false);
  const [reportData, setReportData] = useState([]);

  const { getList } = useMainAccountsQuery();

  useEffect(() => {
    if (getList?.data) {
      const lastIndex = getList?.data?.length - 1;
      setFromGlAccount((prevState) => ({
        ...prevState,
        defaultValue: getList.data?.[0].value,
      }));
      setToGlAccount((prevState) => ({
        ...prevState,
        defaultValue: getList.data?.[lastIndex].value,
      }));
    }
  }, [getList?.data]);

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
          dispatch(updatePageLoader(true));
          const body = {
            organization_id,
            from_main_account_id: fromGlAccount.option?.value ?? 0,
            to_main_account_id: toGlAccount.option?.value ?? 0,
            from_date: dateTimeToString(new Date(values.fromDate), DATE_FORMATE[9]),
            to_date: dateTimeToString(new Date(values.toDate), DATE_FORMATE[9]),
            gl_book_id: values.book_id,
          };
          getGLReport(body)
            .then((response) => {
              // const filter = response?.filter((item) => item.children?.length > 0);
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
      onClick: () => printContainer(elementIds.GL_REPORT_PRINT_CONTENT),
    },
    {
      label: 'Export To Excel',
      key: 'ExportToExcel',
      disabled: !preview,
      onClick: () => exportToExcel(elementIds.GL_REPORT_PRINT_CONTENT),
    },
  ];

  return (
    <>
      <SubHeader name="General Ledger Report" buttons={buttons} />
      <div className="app_page_content">
        <Card>
          <GLReportSearch
            form={form}
            initialValues={initialValues}
            setInitialValues={setInitialValues}
            level={level}
            setLevel={setLevel}
            allBooks={getAllBooks}
            fromGlAccount={fromGlAccount}
            handleChangeFromAccount={handleChangeFromAccount}
            toGlAccount={toGlAccount}
            handleChangeToAccount={handleChangeToAccount}
            onGenerate={onGenerate}
          />

          {preview && (
            <div className="px-4">
              <GLReportPrint data={reportData} />
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
