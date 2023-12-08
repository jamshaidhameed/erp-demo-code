import SubHeader from 'shared/layout/subHeader';
import Card from 'shared/components/card';
import { DEFAULT_COA_LEVEL, elementIds } from 'constants/financial';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePageLoader } from 'store/actions/shared';
import { parseError } from 'utils/shared';
import { toast } from 'react-toastify';
import { getCOAReport } from 'services/api/actions/financial/generalReports/generalReports.api';
import { exportToExcel, printContainer } from 'utils/shared/files';
import COAReportSearch from './components/searchSection';
import COAReportPrint from './components/printSection';

export default function ChartOfAccountsReport() {
  const organization_id = useSelector((state) => state.configs.location);
  const dispatch = useDispatch();
  const [level, setLevel] = useState(DEFAULT_COA_LEVEL);
  const [preview, setPreview] = useState(false);
  const [reportDate, setReportDate] = useState([]);

  const onGenerate = () => {
    dispatch(updatePageLoader(true));
    getCOAReport(organization_id, level)
      .then((response) => {
        setReportDate(response);
        setPreview(true);
        dispatch(updatePageLoader(false));
      })
      .catch((error) => {
        dispatch(updatePageLoader(false));
        toast.error(parseError(error));
      });
  };

  const buttons = [
    {
      label: 'Print',
      key: 'Print',
      disabled: !preview,
      onClick: () => printContainer(elementIds.COA_REPORT_PRINT_CONTENT),
    },
    {
      label: 'Export To Excel',
      key: 'ExportToExcel',
      disabled: !preview,
      onClick: () => exportToExcel(elementIds.COA_REPORT_PRINT_CONTENT),
    },
  ];

  return (
    <>
      <SubHeader name="Chart Of Accounts Report" buttons={buttons} />
      <div className="app_page_content">
        <Card>
          <COAReportSearch level={level} setLevel={setLevel} onGenerate={onGenerate} />

          {preview && (
            <div className="px-4">
              <COAReportPrint data={reportDate} />
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
