import { elementIds } from 'constants/financial';
import {
  DATE_FORMATE,
  DEFAULT_PRINT_FONT_SIZE,
  TRANSACTION_TYPES_ENUM,
} from 'constants/shared/common';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { HeaderTD, BodyTD } from 'shared/components/printTD';
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

export default function PrintSection({ data, costCentresById }) {
  const { user } = useSelector((state) => state.auth);

  const processData = (data) => {
    const content = [];
    if (data?.list?.length > 0) {
      const list = resolveArray(data.list);
      for (const item of list) {
        const {
          OID,
          VOUCHER_NUMBER,
          ST_MAIN_ACCOUNT_CODE,
          ST_MAIN_ACCOUNT_DESC,
          ST_SUB_ACCOUNT_CODE,
          ST_SUB_ACCOUNT_DESC,
          D_VOUCHER_DATE,
          voucher_post,
          CostCentre,
          ST_BOOK_DESC,
          TYPE,
          original_amount,
          ST_LINE_NARRATION,
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
          <tr style={styles.thead} key={OID}>
            <BodyTD label={VOUCHER_NUMBER} />
            <BodyTD label={mainAccount} />
            <BodyTD label={subAccount} />
            <BodyTD label={dateTimeToString(D_VOUCHER_DATE, DATE_FORMATE[10])} />
            <BodyTD label={voucher_post == 1 ? 'Posted' : 'Un Posted'} />
            <BodyTD label={costCentresById[CostCentre]?.title ?? ''} />
            <BodyTD label={ST_BOOK_DESC ?? ''} />
            <BodyTD
              label={TYPE === TRANSACTION_TYPES_ENUM.debit ? thousandFormat(original_amount) : ''}
            />
            <BodyTD
              label={TYPE === TRANSACTION_TYPES_ENUM.credit ? thousandFormat(original_amount) : ''}
            />
            <BodyTD label={ST_LINE_NARRATION} />
          </tr>
        );
      }

      content.push(
        <tr>
          <BodyTD />
          <BodyTD />
          <BodyTD />
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

          <BodyTD />
        </tr>
      );
    }
    return content;
  };

  const reportRender = useMemo(() => processData(data), [data]);
  const isUnPosted = useMemo(
    () => (data?.list ?? []).find((item) => item.voucher_post == '0'),
    [data]
  );

  return (
    <>
      {data && (
        <div id={elementIds.JV_REPORT_PRINT_CONTENT}>
          <div style={styles.headerTitle}>Journal Voucher</div>

          <table style={styles.table}>
            <tbody>
              <tr>
                <td style={styles.infoTitle}>From Date:</td>
                <td style={styles.infoDetails}>
                  {dateTimeToString(data.from_date, DATE_FORMATE[10])}
                </td>

                <td colSpan={2} />

                <td style={styles.infoTitle}>User:</td>
                <td style={styles.infoDetails}>{user?.USERNAME ?? ''}</td>
              </tr>

              <tr>
                <td style={styles.infoTitle}>To Date:</td>
                <td style={styles.infoDetails}>
                  {dateTimeToString(data.to_date, DATE_FORMATE[10])}
                </td>

                <td colSpan={2} />

                <td style={styles.infoTitle}>Time:</td>
                <td style={styles.infoDetails}>{dateTimeToString(new Date(), DATE_FORMATE[1])}</td>
              </tr>
            </tbody>
          </table>

          {isUnPosted && (
            <div style={{ fontWeight: 600, marginBottom: 20, fontSize: DEFAULT_PRINT_FONT_SIZE }}>
              Disclaimer: This document contain un-posted vouchers also and cannot be recommend for
              further process.
            </div>
          )}

          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr style={{ background: '#fafafa', height: '40px' }}>
                <HeaderTD label="Code" />
                <HeaderTD label="Main Account" />
                <HeaderTD label="Sub Account" />
                <HeaderTD label="Date" styles={{ minWidth: 50 }} />
                <HeaderTD label="Post" styles={{ minWidth: 50 }} />
                <HeaderTD label="Cost Center" />
                <HeaderTD label="Book Type" />
                <HeaderTD label="Debit(Rs)" />
                <HeaderTD label="Credit(Rs)" />
                <HeaderTD label="Narration" />
              </tr>
            </thead>

            <tbody>{reportRender}</tbody>
          </table>
        </div>
      )}
    </>
  );
}
