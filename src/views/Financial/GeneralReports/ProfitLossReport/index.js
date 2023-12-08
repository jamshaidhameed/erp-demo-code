import SubHeader from 'shared/layout/subHeader';
import Card from 'shared/components/card';
import { elementIds } from 'constants/financial';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import { toast } from 'react-toastify';
import { exportToExcel } from 'utils/shared/files';
import PLReportSearch from './components/searchSection';
import PLReportPrint from './components/printSection';
import { Form } from 'antd';
import { getPLReport } from 'services/api/actions/financial/generalReports/generalReports.api';
import { DATE_FORMATE, DEFAULT_MSG } from 'constants/shared/common';
import { dateTimeToString, formReadableDT } from 'utils/shared/dateTime';

export default function ProfitLossReport() {
  const organization_id = useSelector((state) => state.configs.location);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [initialValues, setInitialValues] = useState({
    toDate: formReadableDT(new Date()),
    fromDate: formReadableDT(new Date()),
  });
  const [preview, setPreview] = useState(false);
  const [reportData, setReportData] = useState(null);

  const onGenerate = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(updatePageLoader(true));
        getPLReport({
          organization_ID: organization_id,
          from: dateTimeToString(new Date(values.fromDate), DATE_FORMATE[9]),
          to: dateTimeToString(new Date(values.toDate), DATE_FORMATE[9]),
        })
          .then((response) => {
            setReportData(response.data);
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
      label: 'Export To Excel',
      key: 'ExportToExcel',
      disabled: !preview,
      onClick: () => exportToExcel(elementIds.PL_REPORT_PRINT_CONTENT),
    },
  ];

  return (
    <>
      <SubHeader name="Profit/Loss Report" buttons={buttons} />
      <div className="app_page_content">
        <Card>
          <PLReportSearch
            form={form}
            initialValues={initialValues}
            onGenerate={onGenerate}
            setInitialValues={setInitialValues}
          />

          {preview && (
            <div className="px-4">
              <PLReportPrint data={reportData} initialValues={initialValues} />
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
