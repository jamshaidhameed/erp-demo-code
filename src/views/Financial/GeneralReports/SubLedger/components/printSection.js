import { elementIds } from 'constants/financial';
import { DATE_FORMATE } from 'constants/shared/common';
import { useMemo } from 'react';
import { dateTimeToString } from 'utils/shared/dateTime';

const styles = {
  headerTitle: {
    marginTop: 40,
    fontWeight: 600,
    fontSize: 24,
    textAlign: 'center',
    height: 50,
  },
  infoTitle: {
    width: 200,
    fontWeight: 600,
    textWrap: 'nowrap',
    paddingBottom: 20,
  },
  infoDetails: {
    fontWeight: 400,
    width: 200,
    paddingBottom: 20,
  },
  table: {
    borderCollapse: 'collapse',
    fontSize: '14px',
    border: '0',
    width: '100%',
    marginBottom: 20,
  },
  content: {
    paddingInline: 10,
  },
  thead: {
    borderTop: 'solid 1px rgb(239, 242, 245)',
    borderBottom: 'solid 1px rgb(239, 242, 245)',
  },
  heading: { paddingInline: 10, textWrap: 'nowrap' },
};

const CustomHead = ({ children }) => {
  return (
    <td style={styles.heading}>
      <strong>{children}</strong>
    </td>
  );
};

const CustomData = ({ children }) => {
  return <td style={styles.content}>{children}</td>;
};

export default function SLReportPrint({ data, costCentresById }) {
  const processData = (data) => {
    return data?.map((parent) => {
      const content = [];
      if (parent?.children?.length > 0) {
        const list = parent?.children ?? [];
        for (const item of list) {
          const {
            OID,
            voucher_code,
            voucher_date,
            voucher_type,
            cost_centre,
            narration,
            credit_amount,
            debit_amount,
          } = item;

          const balance = debit_amount - credit_amount;

          content.push(
            <tr key={OID}>
              <CustomData>{voucher_type}</CustomData>
              <CustomData>{voucher_code}</CustomData>
              <CustomData>
                {voucher_date ? dateTimeToString(voucher_date, DATE_FORMATE[10]) : ''}
              </CustomData>
              <CustomData>{narration}</CustomData>
              <CustomData>{narration}</CustomData>
              <CustomData>{''}</CustomData>
              <CustomData>{''}</CustomData>
              <CustomData>{cost_centre}</CustomData>
              <CustomData>{debit_amount ?? 0}</CustomData>
              <CustomData>{credit_amount ?? 0}</CustomData>
              <CustomData>{balance ?? 0}</CustomData>
            </tr>
          );
        }

        content.push(
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td style={{ paddingInline: 10 }}>
              <strong>Total: </strong>
            </td>
            <td
              style={{
                paddingInline: 10,
                borderTop: '1px solid #000',
                borderBottom: '1px solid #000',
              }}>
              <strong>{data.totalDebit ?? 0}</strong>
            </td>
            <td
              style={{
                paddingInline: 10,
                borderTop: '1px solid #000',
                borderBottom: '1px solid #000',
              }}>
              <strong>{data.totalCredit ?? 0}</strong>
            </td>
            <td></td>
          </tr>
        );
      }
      return (
        <div key={parent.OID}>
          <div style={styles.headerTitle}>Sub Ledger</div>

          <table style={styles.table}>
            <tbody>
              <tr>
                <td style={styles.infoTitle}>Account Code:</td>
                <td style={styles.infoDetails}>{parent.account_code}</td>

                <td colSpan={2} />

                <td style={styles.infoTitle}>Account Name:</td>
                <td style={styles.infoDetails}>{parent.account_name}</td>
              </tr>
              <tr>
                <td style={styles.infoTitle}>GL Book:</td>
                <td style={styles.infoDetails}>{parent.book_name}</td>

                <td colSpan={2} />

                <td style={styles.infoTitle}>Opening Balance:</td>
                <td style={styles.infoDetails}>{parent.total_amount ?? 0}</td>
              </tr>
            </tbody>
          </table>

          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr style={{ background: '#fafafa', height: '40px' }}>
                <CustomHead>Vr Type</CustomHead>
                <CustomHead>Vr Code</CustomHead>
                <CustomHead>Vr Date</CustomHead>
                <CustomHead>Narration</CustomHead>
                <CustomHead>Detail Narration</CustomHead>
                <CustomHead>Cheque No</CustomHead>
                <CustomHead>Ref_No</CustomHead>
                <CustomHead>Cost Center</CustomHead>
                <CustomHead>Debit Rs.</CustomHead>
                <CustomHead>Credit Rs</CustomHead>
                <CustomHead>Balance Rs.</CustomHead>
              </tr>
            </thead>

            <tbody>{content}</tbody>
          </table>
        </div>
      );
    });
  };

  const reportRender = useMemo(() => processData(data), [data]);

  return <>{data && <div id={elementIds.SL_REPORT_PRINT_CONTENT}>{reportRender}</div>}</>;
}
