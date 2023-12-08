import SelectField from '../inputs/selectField';
import { useDispatch, useSelector } from 'react-redux';
import { updateLocation } from 'store/actions/shared/configs';

const OrganizationSelect = ({ disabled = false }) => {
  const { configs } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLocation = (e) => dispatch(updateLocation(e));

  return (
    <SelectField
      parentClassName="subheader_location_container"
      className="subheader_locations"
      placeholder="Select site"
      onChange={handleLocation}
      controlled={true}
      value={configs.location}
      fieldNames={{ label: 'ORGANIZATION_NAME', value: 'OID' }}
      options={configs?.locations}
      disabled={disabled}
    />
  );
};

export default OrganizationSelect;
