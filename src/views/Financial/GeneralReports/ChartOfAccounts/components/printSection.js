import { elementIds } from 'constants/financial';
import { DATE_FORMATE, DEFAULT_PRINT_FONT_SIZE } from 'constants/shared/common';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BodyTD, HeaderTD } from 'shared/components/printTD';
import { dateTimeToString } from 'utils/shared/dateTime';

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
    width: 150,
  },
  table: {
    borderCollapse: 'collapse',
    fontSize: DEFAULT_PRINT_FONT_SIZE,
    width: '100%',
    marginBottom: '20px',
  },
  thead: {
    borderTop: 'solid 1px rgb(239, 242, 245)',
    borderBottom: 'solid 1px rgb(239, 242, 245)',
  },
};

export default function COAReportPrint({ data }) {
  const { user } = useSelector((state) => state.auth);

  const processData = (data) => {
    let content = [];
    for (const account of data) {
      content.push(
        <tr
          key={account.ID}
          style={{
            background: account.ACCOUNT_LEVEl == 1 ? '#cbc9c9' : 'white',
            fontWeight: account.ACCOUNT_LEVEl == 1 ? 'bold' : 'normal',
          }}>
          <td style={{ textAlign: 'left', paddingLeft: (parseInt(account.ACCOUNT_LEVEl) - 1) * 8 }}>
            {account.ACCOUNT_CODE}
          </td>

          <BodyTD label={account.NAME} />
          <BodyTD label={account.accountNature} />
          <BodyTD label={account.isLeafNode ? 'Y' : 'N'} />
          <BodyTD label={account.subAccountDesc ?? ''} />
        </tr>
      );
      if (account.CHILDREN?.length > 0) content = [...content, ...processData(account.CHILDREN)];
    }
    return content;
  };

  const reportRender = useMemo(() => processData(data), [data]);

  return (
    <div id={elementIds.COA_REPORT_PRINT_CONTENT}>
      <div style={styles.headerTitle}>Chart Of Accounts</div>

      <table style={styles.table}>
        <tbody>
          <tr>
            <td colSpan={2} />
            <td style={styles.infoTitle}>Date:</td>
            <td style={styles.infoDetails}>{dateTimeToString(new Date(), DATE_FORMATE[10])}</td>
          </tr>

          <tr>
            <td colSpan={2} />
            <td style={styles.infoTitle}>User:</td>
            <td style={styles.infoDetails}>{user?.USERNAME ?? '-'}</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr style={{ background: '#fafafa', height: '40px' }}>
            <HeaderTD label="Code" styles={{ minWidth: 100 }} />
            <HeaderTD label="Description" />
            <HeaderTD label="Nature" />
            <HeaderTD label="Is Leaf" styles={{ minWidth: 40 }} />
            <HeaderTD label="Sub Account" styles={{ minWidth: 80 }} />
          </tr>
        </thead>

        <tbody>{reportRender}</tbody>
      </table>
    </div>
  );
}
