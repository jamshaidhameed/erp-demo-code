import SubHeader from 'shared/layout/subHeader';
import Card from 'shared/components/card';
import { DEFAULT_COA_LEVEL, elementIds } from 'constants/financial';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import { toast } from 'react-toastify';
import { exportToExcel, printContainer } from 'utils/shared/files';
import SLReportSearch from './components/searchSection';
import SLReportPrint from './components/printSection';
import { DATE_FORMATE, DEFAULT_AUTO_COMPLETE, DEFAULT_MSG } from 'constants/shared/common';
import { Form } from 'antd';
import { getSLReport } from 'services/api/actions/financial/generalReports/generalReports.api';
import {
  useConfigBooksQuery,
  useMainAccountsQuery,
  useSubAccountGroupsQuery,
  useSubAccountsQuery,
} from 'services/api/actions/financial/configurations';
import { dateTimeToString, formReadableDT } from 'utils/shared/dateTime';

export default function SubLedger() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { getList: getAllBooks } = useConfigBooksQuery();
  const organization_id = useSelector((state) => state.configs.location);

  const { getList: getMainAccounts } = useMainAccountsQuery();

  const [initialValues, setInitialValues] = useState({
    voucher_type: 'all',
    fromDate: formReadableDT(new Date()),
    toDate: formReadableDT(new Date()),
    book_id: 'all',
    subAccountGroup: undefined,
    cost_centre: undefined,
    post: false,
  });

  const [mainAccount, setMainAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [fromSubAccount, setFromSubAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [toSubAccount, setToSubAccount] = useState({ ...DEFAULT_AUTO_COMPLETE });
  const [level, setLevel] = useState(DEFAULT_COA_LEVEL);
  const [preview, setPreview] = useState(false);
  const [reportData, setReportData] = useState([]);

  const { getList: getAllGroups } = useSubAccountGroupsQuery();

  const { getList: getSubAccounts } = useSubAccountsQuery({
    account_group_id: null,
  });
  const groupsList = getAllGroups?.data?.map((item) => ({
    label: `${item.ST_SUB_ACCOUNT_GROUP_CODE}-${item.ST_SUB_ACCOUNT_GROUP_DESC}`,
    value: item.OID,
  }));

  useEffect(() => {
    if (getSubAccounts?.data) {
      const lastIndex = getSubAccounts?.data?.length - 1;
      setFromSubAccount((prevState) => ({
        ...prevState,
        defaultValue: getSubAccounts.data?.[0].OID,
      }));
      setToSubAccount((prevState) => ({
        ...prevState,
        defaultValue: getSubAccounts.data?.[lastIndex].OID,
      }));
    }
  }, [getSubAccounts?.data]);

  const handleSubAccountGroup = (val) => {
    setInitialValues((prev) => ({
      ...initialValues,
      subAccountGroup: val,
    }));
  };

  const handleChangeMainAccount = (values) => {
    setMainAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const handleChangeFromAccount = (values) => {
    setFromSubAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const handleChangeToAccount = (values) => {
    setToSubAccount((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const onGenerate = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(updatePageLoader(true));
        const body = {
          organization_id,
          from_main_account_id: fromSubAccount.option?.value ?? 0,
          to_main_account_id: toSubAccount.option?.value ?? 0,
          from_date: dateTimeToString(new Date(values.fromDate), DATE_FORMATE[9]),
          to_date: dateTimeToString(new Date(values.toDate), DATE_FORMATE[9]),
          gl_book_id: values.book_id,
          cost_center_id: values.cost_centre,
          post: values.post ? 1 : 0,
        };
        getSLReport(body)
          .then((response) => {
            const filter = response?.filter((item) => item.children?.length > 0);
            setReportData(filter);
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

  const buttons = [
    {
      label: 'Print',
      key: 'Print',
      disabled: !preview,
      onClick: () => printContainer(elementIds.SL_REPORT_PRINT_CONTENT),
    },
    {
      label: 'Export To Excel',
      key: 'ExportToExcel',
      disabled: !preview,
      onClick: () => exportToExcel(elementIds.SL_REPORT_PRINT_CONTENT),
    },
  ];

  return (
    <>
      <SubHeader name="Sub Ledger Report" buttons={buttons} />
      <div className="app_page_content">
        <Card>
          <SLReportSearch
            form={form}
            initialValues={initialValues}
            setInitialValues={setInitialValues}
            handleSubAccountGroup={handleSubAccountGroup}
            subAccountsGroups={groupsList}
            getMainAccounts={getMainAccounts}
            level={level}
            setLevel={setLevel}
            allBooks={getAllBooks}
            getSubAccounts={getSubAccounts}
            mainAccount={mainAccount}
            handleChangeMainAccount={handleChangeMainAccount}
            fromSubAccount={fromSubAccount}
            handleChangeFromAccount={handleChangeFromAccount}
            toSubAccount={toSubAccount}
            handleChangeToAccount={handleChangeToAccount}
            onGenerate={onGenerate}
          />

          {preview && (
            <div className="px-4">
              <SLReportPrint data={reportData} />
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
