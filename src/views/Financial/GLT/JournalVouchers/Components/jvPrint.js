import {
  DATE_FORMATE,
  DEFAULT_PRINT_FONT_SIZE,
  TRANSACTION_TYPES_ENUM,
} from 'constants/shared/common';
import { getJVStatus } from 'helpers/financial/journalVouchers';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BodyTD, HeaderTD } from 'shared/components/printTD';
import { dateTimeToString } from 'utils/shared/dateTime';
import { resolveArray } from 'utils/shared/list';
import { thousandFormat } from 'utils/shared/numbers';

const styles = {
  headerTitle: {
    fontWeight: 600,
    fontSize: 20,
    textAlign: 'center',
    height: 50,
  },
  infoTitle: {
    width: 100,
    fontWeight: 600,
  },
  infoDetails: {
    fontWeight: 400,
    width: 200,
  },
  table: {
    borderCollapse: 'collapse',
    fontSize: DEFAULT_PRINT_FONT_SIZE,
    width: '100%',
    marginBottom: 20,
  },
  thead: {
    borderTop: 'solid 1px rgb(239, 242, 245)',
    borderBottom: 'solid 1px rgb(239, 242, 245)',
  },
};

export default function JVPrint({ containerId, data, costCentresById }) {
  const { auth, configs } = useSelector((state) => state);
  const { user } = auth;
  const { locationsById } = configs;

  const processData = (data) => {
    const content = [];
    if (data?.voucherDetails?.length > 0) {
      const list = resolveArray(data.voucherDetails);
      for (const item of list) {
        const {
          id,
          ST_MAIN_ACCOUNT_CODE,
          ST_MAIN_ACCOUNT_DESC,
          ST_SUB_ACCOUNT_CODE,
          ST_SUB_ACCOUNT_DESC,
          CostCentre,
          ST_LINE_NARRATION,
          TYPE,
          original_amount,
        } = item;

        const mainAccount =
          ST_MAIN_ACCOUNT_CODE && ST_MAIN_ACCOUNT_DESC
            ? `${ST_MAIN_ACCOUNT_CODE}-${ST_MAIN_ACCOUNT_DESC}`
            : '';

        const subAccount =
          ST_SUB_ACCOUNT_CODE && ST_SUB_ACCOUNT_DESC
            ? `${ST_SUB_ACCOUNT_CODE}-${ST_SUB_ACCOUNT_DESC}`
            : '';

        content.push(
          <tr style={styles.thead} key={id}>
            <BodyTD label={mainAccount} />
            <BodyTD label={subAccount} />
            <BodyTD label={costCentresById[CostCentre]?.title ?? ''} />
            <BodyTD label={ST_LINE_NARRATION} />
            <BodyTD
              label={TYPE === TRANSACTION_TYPES_ENUM.debit ? thousandFormat(original_amount) : ''}
            />
            <BodyTD
              label={TYPE === TRANSACTION_TYPES_ENUM.credit ? thousandFormat(original_amount) : ''}
            />
          </tr>
        );
      }

      content.push(
        <tr>
          <BodyTD />
          <BodyTD />
          <BodyTD />
          <BodyTD />

          <BodyTD>
            <div
              style={{
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
              }}>
              {data.totalDebit}
            </div>
          </BodyTD>

          <BodyTD>
            <div
              style={{
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
              }}>
              {data.totalCredit}
            </div>
          </BodyTD>
        </tr>
      );
    }
    return content;
  };

  const reportRender = useMemo(() => processData(data), [data]);

  return (
    <>
      {data && (
        <div id={containerId} style={{ display: 'none' }}>
          <div style={styles.headerTitle}>Journal Voucher</div>

          <table style={styles.table}>
            <tbody>
              <tr>
                <td style={styles.infoTitle}>Voucher Date:</td>
                <td style={styles.infoDetails}>
                  {dateTimeToString(data.voucher_date, DATE_FORMATE[10])}
                </td>

                <td colSpan={2} />

                <td style={styles.infoTitle}>User:</td>
                <td style={styles.infoDetails}>{user?.USERNAME ?? ''}</td>
              </tr>

              <tr>
                <td style={styles.infoTitle}>Voucher Code:</td>
                <td style={styles.infoDetails}>{data.voucher_code}</td>

                <td colSpan={2} />

                <td style={styles.infoTitle}>Time:</td>
                <td style={styles.infoDetails}>{dateTimeToString(new Date(), DATE_FORMATE[1])}</td>
              </tr>

              <tr>
                <td style={styles.infoTitle}>Narration:</td>
                <td style={styles.infoDetails}>{data.voucher_narration}</td>

                <td colSpan={2} />

                <td style={styles.infoTitle}>Location:</td>
                <td style={styles.infoDetails}>
                  {locationsById[data.location]?.ORGANIZATION_NAME ?? ''}
                </td>
              </tr>

              <tr>
                <td style={styles.infoTitle}>Status:</td>
                <td style={styles.infoDetails}>
                  {getJVStatus(data.is_submitted, data.is_approved)}
                </td>

                <td colSpan={2} />

                <td style={styles.infoTitle}>Book Type:</td>
                <td style={styles.infoDetails}>{data.Trans_Name ?? ''}</td>
              </tr>
            </tbody>
          </table>

          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr style={{ background: '#fafafa', height: '40px' }}>
                <HeaderTD label="Main Account" />
                <HeaderTD label="Sub Account" />
                <HeaderTD label="Cost Centre" />
                <HeaderTD label="Line Narration" />
                <HeaderTD label="Debit(Rs)" />
                <HeaderTD label="Credit(Rs)" />
              </tr>
            </thead>

            <tbody>{reportRender}</tbody>

            <tfoot>
              <tr>
                <td>
                  <div style={{ height: 120 }}>&nbsp;</div>
                </td>
              </tr>
            </tfoot>
          </table>

          <table style={{ ...styles.table, position: 'fixed', bottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.infoTitle, borderTop: '1px solid black' }}>
                  <div style={{ paddingTop: 5 }}>
                    Prepared By
                    <br />
                    <span style={{ fontWeight: 500 }}>{data.insert_user ?? ''}</span>
                  </div>
                </td>

                <td />
                <td style={{ ...styles.infoTitle, borderTop: '1px solid black' }}>
                  <div style={{ paddingTop: 5 }}>
                    Checked By
                    <br />
                    <span style={{ fontWeight: 500 }}>{data.submitted_user ?? ''}</span>
                  </div>
                </td>

                <td />
                <td style={{ ...styles.infoTitle, borderTop: '1px solid black' }}>
                  <div style={{ paddingTop: 5 }}>
                    Audited By
                    <br />
                    <span style={{ fontWeight: 500 }}>{data.approved_user ?? ''}</span>
                  </div>
                </td>

                <td />
                <td style={{ ...styles.infoTitle, borderTop: '1px solid black' }}>
                  <div style={{ paddingTop: 5 }}>
                    Approved By
                    <br />
                    <span style={{ fontWeight: 500 }}>{data.approved_user ?? ''}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
