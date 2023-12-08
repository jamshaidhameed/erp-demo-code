import { elementIds } from 'constants/financial';
import { DATE_FORMATE } from 'constants/shared/common';
import { useMemo } from 'react';
import { dateTimeToString } from 'utils/shared/dateTime';
import { resolveArray } from 'utils/shared/list';

const styles = {
  headerTitle: {
    fontWeight: 600,
    fontSize: 24,
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
    border: '1px solid #000',
  },
  heading: {
    paddingInline: 10,
    border: '1px solid #000',
    textWrap: 'nowrap',
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

export default function PrintSection({ data, initialValues }) {
  const {
    AdminHCBTotal,
    AdminHOTotal,
    // CavalryGroundBranchTotal,
    ClinicsTotal,
    FinanceHOTotal,
    FinanceTotal,
    HRHOTotal,
    HeadOfficeTotal,
    ITHOTotal,
    MainStoreHCBTotal,
    NotApplicableTotal,
    OnlineStoreTotal,
    OpticsStoreTotal,
    PharmacyStoreTotal,
    PharmacyTSBTotal,
    PinkStoreTotal,
    ProcurementHOTotal,
    // TownshipBranchTotal,
    // WarehouseTotal,
  } = data.totalOfAll;

  const processData = (data) => {
    const content = [];
    if (data?.stats?.length > 0) {
      const list = resolveArray(data.stats);
      for (const item of list) {
        const {
          OID,
          ST_MAIN_ACCOUNT_CODE,
          ST_MAIN_ACCOUNT_DESC,
          Category,
          AdminHCB,
          AdminHO,
          Clinics,
          FinanceHCB,
          FinanceHO,
          ProcurementHO,
          HRHO,
          HeadOffice,
          ITHO,
          MainStoreHCB,
          NotApplicable,
          OnlineStore,
          OpticsStore,
          PharmacyStore,
          PharmacyTSB,
          PinkStore,
          // CavalryGroundBranch,
          // TownshipBranch,
          // Warehouse,
        } = item;

        const total =
          AdminHCB +
          AdminHO +
          Clinics +
          FinanceHCB +
          FinanceHO +
          ProcurementHO +
          HRHO +
          HeadOffice +
          ITHO +
          MainStoreHCB +
          NotApplicable +
          OnlineStore +
          OpticsStore +
          PharmacyStore +
          PharmacyTSB +
          PinkStore;

        content.push(
          <tr key={OID}>
            <CustomData>{ST_MAIN_ACCOUNT_CODE ?? ''}</CustomData>
            <CustomData>{Category}</CustomData>
            <CustomData>{ST_MAIN_ACCOUNT_DESC}</CustomData>
            <CustomData>{Clinics}</CustomData>
            <CustomData>{AdminHCB}</CustomData>
            <CustomData>{FinanceHCB}</CustomData>
            <CustomData>{AdminHO}</CustomData>
            <CustomData>{FinanceHO}</CustomData>
            <CustomData>{ProcurementHO}</CustomData>
            <CustomData>{HRHO}</CustomData>
            <CustomData>{ITHO}</CustomData>
            <CustomData>{MainStoreHCB}</CustomData>
            <CustomData>{PharmacyStore}</CustomData>
            <CustomData>{PharmacyTSB}</CustomData>
            <CustomData>{PinkStore}</CustomData>
            <CustomData>{OpticsStore}</CustomData>
            <CustomData>{OpticsStore}</CustomData>
            <CustomData>{OnlineStore}</CustomData>
            <CustomData>{HeadOffice}</CustomData>
            <CustomData>{NotApplicable}</CustomData>
            <CustomData>{total}</CustomData>
          </tr>
        );
      }

      content.push(
        <tr style={{ height: '40px' }}>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>Total:</strong>
          </td>

          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 80 }}></td>

          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}></td>

          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 80 }}>
            <strong>{ClinicsTotal}</strong>
          </td>

          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{AdminHCBTotal}</strong>
          </td>

          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{FinanceTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{AdminHOTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{FinanceHOTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{ProcurementHOTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{HRHOTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{ITHOTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{MainStoreHCBTotal}</strong>
          </td>

          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{PharmacyStoreTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{PharmacyTSBTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{PinkStoreTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{OpticsStoreTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{OpticsStoreTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{OnlineStoreTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            <strong>{HeadOfficeTotal}</strong>
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
            {NotApplicableTotal}
          </td>
          <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 80 }}></td>
        </tr>
      );
    }
    return content;
  };

  const reportRender = useMemo(() => processData(data), [data]);

  return (
    <>
      {data && (
        <div style={{ overflowX: 'auto' }} id={elementIds.PL_REPORT_PRINT_CONTENT}>
          <div style={styles.headerTitle}>Journal Voucher</div>

          <table style={styles.table}>
            <tbody>
              <tr>
                <td style={styles.infoTitle}>From Date:</td>
                <td style={styles.infoDetails}>
                  {dateTimeToString(initialValues.fromDate, DATE_FORMATE[10])}
                </td>

                <td colSpan={2} />

                <td style={styles.infoTitle}>To Date:</td>
                <td style={styles.infoDetails}>
                  {' '}
                  {dateTimeToString(initialValues.toDate, DATE_FORMATE[10])}
                </td>
              </tr>
            </tbody>
          </table>

          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr style={{ background: '#fafafa', height: '40px' }}>
                {/* <td style={{ paddingInline: 10, textWrap: 'nowrap', width: 130 }}>
                  <strong>ST_MAIN_ACCOUNT_CODE</strong>
                </td> */}
                <CustomHead>ST_MAIN_ACCOUNT_CODE</CustomHead>
                <CustomHead>Category</CustomHead>
                <CustomHead>ST_MAIN_ACCOUNT_DESC</CustomHead>
                <CustomHead>Clinics</CustomHead>
                <CustomHead>Admin - HCB</CustomHead>
                <CustomHead>Finance - HCB</CustomHead>
                <CustomHead>Admin - HO</CustomHead>
                <CustomHead>Finance - HO</CustomHead>
                <CustomHead>Procurement - HO</CustomHead>
                <CustomHead>HR - HO</CustomHead>
                <CustomHead>IT - HO</CustomHead>
                <CustomHead>Main Store - HCB</CustomHead>
                <CustomHead>Pharmacy Store</CustomHead>
                <CustomHead>Pharmacy Store1</CustomHead>
                <CustomHead>Pink Store</CustomHead>
                <CustomHead>Optics Store</CustomHead>
                <CustomHead>Optics Store1</CustomHead>
                <CustomHead>Online Store</CustomHead>
                <CustomHead>Head Office</CustomHead>
                <CustomHead>Not Applicable</CustomHead>
                <CustomHead>SUM</CustomHead>
              </tr>
            </thead>

            <tbody className={styles.body}>{reportRender}</tbody>
          </table>
        </div>
      )}
    </>
  );
}
