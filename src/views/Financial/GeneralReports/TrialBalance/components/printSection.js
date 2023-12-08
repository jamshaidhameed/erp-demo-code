import { elementIds } from 'constants/financial';
import { DATE_FORMATE } from 'constants/shared/common';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { currentDT, dateTimeToString } from 'utils/shared/dateTime';

const styles = {
  headerTitle: {
    fontWeight: 600,
    fontSize: 24,
    textAlign: 'center',
    height: 50,
  },
  infoTitle: {
    width: 200,
    fontWeight: 600,
    paddingBottom: 10,
  },
  infoDetails: {
    fontWeight: 400,
    width: 200,
    paddingBottom: 10,
  },
  table: {
    borderCollapse: 'collapse',
    fontSize: '14px',
    border: '0',
    width: '100%',
    marginBottom: 20,
  },
  thead: {
    borderTop: 'solid 1px rgb(239, 242, 245)',
    borderBottom: 'solid 1px rgb(239, 242, 245)',
  },
  content: {
    paddingInline: 10,
    width: 130,
  },
  heading: {
    paddingInline: 10,
    border: '1px solid #000',
    textWrap: 'nowrap',
  },
  split: {
    display: 'flex',
  },
};

const CustomData = ({ children }) => {
  return <td style={styles.content}>{children}</td>;
};

const CustomHead = ({ children }) => {
  return (
    <td style={styles.heading}>
      <strong>{children}</strong>
    </td>
  );
};

const CustomHeading = ({ children, ...prop }) => {
  return (
    <td
      {...prop}
      style={{
        width: '260px',
        textAlign: 'center',
        fontWeight: 'bold',
        borderTop: '1px solid #000',
        borderRight: '1px solid #000',
        borderLeft: '1px solid #000',
      }}>
      {children}
    </td>
  );
};

export default function TBReportPrint({ data, initialValues, fromGlAccount, toGlAccount }) {
  const { auth } = useSelector((state) => state);
  const { user } = auth;

  const processData = (data) => {
    const content = [];

    const obDebitTotal = data.reduce((total, item) => {
      return total + item.opening_debit_amount;
    }, 0);

    const obCreditTotal = data.reduce((total, item) => {
      return total + item.opening_credit_amount;
    }, 0);

    const pbDebitTotal = data.reduce((total, item) => {
      return total + item.period_debit_amount;
    }, 0);

    const pbCreditTotal = data.reduce((total, item) => {
      return total + item.period_credit_amount;
    }, 0);

    const cbDebitTotal = data.reduce((total, item) => {
      return total + item.closing_debit_amount;
    }, 0);

    const cbCreditTotal = data.reduce((total, item) => {
      return total + item.closing_credit_amount;
    }, 0);

    if (data?.length > 0) {
      const list = data;
      for (const item of list) {
        const {
          id,
          ST_MAIN_ACCOUNT_CODE,
          ST_MAIN_ACCOUNT_DESC,
          closing_credit_amount,
          closing_debit_amount,
          opening_credit_amount,
          opening_debit_amount,
          period_credit_amount,
          period_debit_amount,
        } = item;

        content.push(
          <tr key={id}>
            <CustomData>{ST_MAIN_ACCOUNT_CODE ?? ''}</CustomData>
            <CustomData>{ST_MAIN_ACCOUNT_DESC}</CustomData>
            <CustomData>{opening_credit_amount}</CustomData>
            <CustomData>{opening_debit_amount}</CustomData>
            <CustomData>{period_credit_amount}</CustomData>
            <CustomData>{period_debit_amount}</CustomData>
            <CustomData>{closing_credit_amount}</CustomData>
            <CustomData>{closing_debit_amount}</CustomData>
          </tr>
        );
      }

      content.push(
        <tr style={{ height: '40px' }}>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>Total:</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 80 }}></td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 80 }}>{obDebitTotal}</td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 80 }}>{obCreditTotal}</td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 80 }}>{pbDebitTotal}</td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 80 }}>{pbCreditTotal}</td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 80 }}>{cbDebitTotal}</td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 80 }}>{cbCreditTotal}</td>
        </tr>
      );
    }
    return content;
  };

  const reportRender = useMemo(() => processData(data), [data]);

  return (
    <>
      {data && (
        <div style={{ overflowX: 'auto' }} id={elementIds.TB_REPORT_PRINT_CONTENT}>
          <div style={styles.headerTitle}>Journal Voucher</div>

          <table style={styles.table}>
            <tbody>
              <tr>
                <td style={styles.infoTitle}>Financial Period:</td>
                <td style={styles.infoDetails}>{initialValues.financial_period?.ST_PERIOD_DESC}</td>
                <td colSpan={2} />
                <td style={styles.infoTitle}>User:</td>
                <td style={styles.infoDetails}>{user?.USERNAME ?? ''}</td>
              </tr>
              <tr>
                <td style={styles.infoTitle}>From Date:</td>
                <td style={styles.infoDetails}>
                  {' '}
                  {dateTimeToString(initialValues.fromDate, DATE_FORMATE[10])}
                </td>
                <td colSpan={2} />
                <td style={styles.infoTitle}>To Date:</td>
                <td style={styles.infoDetails}>
                  {' '}
                  {dateTimeToString(initialValues.toDate, DATE_FORMATE[10])}
                </td>
              </tr>
              <tr>
                <td style={styles.infoTitle}>From Account:</td>
                <td style={styles.infoDetails}>{fromGlAccount?.option?.code}</td>
                <td colSpan={2} />
                <td style={styles.infoTitle}>To Account:</td>
                <td style={styles.infoDetails}> {toGlAccount?.option?.code}</td>
              </tr>
              <tr>
                <td style={styles.infoTitle}>Time:</td>
                <td style={styles.infoDetails}>{currentDT(DATE_FORMATE[1])}</td>
                <td colSpan={2} />
                <td style={styles.infoTitle}>Cost Center:</td>
                <td style={styles.infoDetails}>{initialValues.cost_centre?.title}</td>
              </tr>
              <tr>
                <td style={styles.infoTitle}>Level:</td>
                <td style={styles.infoDetails}> {initialValues.level}</td>
                <td colSpan={2} />
              </tr>
            </tbody>
          </table>

          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr style={{ background: '#fafafa', height: '40px' }}>
                <CustomHeading>Account Code</CustomHeading>
                <CustomHeading>Description</CustomHeading>
                <CustomHeading colSpan={2}>Opening Balance</CustomHeading>
                <CustomHeading colSpan={2}>For The Period Balance</CustomHeading>
                <CustomHeading colSpan={2}>Closing Balance</CustomHeading>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: '1px solid #000',
                    borderRight: '1px solid #000',
                    borderLeft: '1px solid #000',
                  }}></td>
                <td style={{ borderBottom: '1px solid #000' }}></td>
                <CustomHead>Debit</CustomHead>
                <CustomHead>Credit</CustomHead>
                <CustomHead>Debit</CustomHead>
                <CustomHead>Credit</CustomHead>
                <CustomHead>Debit</CustomHead>
                <CustomHead>Credit</CustomHead>
              </tr>
            </thead>

            <tbody className={styles.body}>{reportRender}</tbody>
          </table>
        </div>
      )}
    </>
  );
}
