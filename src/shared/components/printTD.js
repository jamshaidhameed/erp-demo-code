export const HeaderTD = ({ label, styles = {} }) => (
  <td style={{ paddingLeft: 5, paddingRight: 5, ...styles }}>
    <strong>{label}</strong>
  </td>
);

export const BodyTD = ({ label = '', styles = {}, children }) => (
  <td style={{ paddingLeft: 5, paddingRight: 5, ...styles }}>
    {children === undefined ? label : children}
  </td>
);
