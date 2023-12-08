import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HOME } from 'router/routes';
import { useSelector, useDispatch } from 'react-redux';
import { loginValidate } from 'services/api/actions/shared';
import { parseError } from 'utils/shared';
import { app_logo } from 'utils/shared/images';
import { getOrganizations, setOrganization } from 'services/api/actions/shared';
import {
  resetOrganizationDetails,
  updateBaseUrls,
  updateLocation,
  updateLocations,
} from 'store/actions/shared/configs';
import OrganizationSelect from 'shared/controls/select/organizationSelect';
import { updateAuth } from 'store/actions/shared';
import UserInfoSection from './Components/userInfoSection';
import { AuthButton } from 'shared/controls/buttons/authButton';
import configs from 'configs';

const Login = () => {
  const { configs: stateConfig, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState(null);

  const submitOrganization = () => {
    setLoading(true);
    setOrganization(loginData.ACCESS_TOKEN, stateConfig.location)
      .then(() => {
        setLoading(false);
        dispatch(updateAuth(loginData));
        dispatch(
          updateBaseUrls({
            ams: configs.amsAPIBaseUrl,
            inventory: '',
            financial: configs.financialAPIBaseUrl,
            payroll: configs.payrollAPIBaseUrl,
          })
        );
        navigate(HOME);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(parseError(error));
      });
  };

  const getAllOrganizations = async (token) => {
    getOrganizations(token)
      .then((response) => {
        setLoading(false);
        if (response.data?.length > 0) {
          dispatch(updateLocations({ locations: response.data }));
          dispatch(updateLocation(response.data[0].OID));
        }
      })
      .catch((error) => {
        setLoginData(null);
        setLoading(false);
        toast.error(parseError(error));
      });
  };

  const loginUser = (values) => {
    setLoading(true);
    loginValidate(values)
      .then((response) => {
        dispatch(resetOrganizationDetails());
        getAllOrganizations(response.data.ACCESS_TOKEN);
        setLoginData(response.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(parseError(error));
      });
  };

  useEffect(() => {
    if (auth.token && auth.user) navigate(HOME);
  }, []);

  return (
    <div className="login_container w-100 h-screen">
      <div className="login_form">
        <div className="text-center mb-5">
          <img src={app_logo} />
          <div className="mb-3 auth_text_label">
            Welcome <span>Softech ERP</span> system
          </div>
        </div>

        {loginData ? (
          <>
            <OrganizationSelect />

            <AuthButton
              label="Submit"
              htmlType="button"
              className="mt-4"
              loading={loading}
              onClick={submitOrganization}
            />
          </>
        ) : (
          <UserInfoSection loading={loading} loginUser={loginUser} />
        )}
      </div>
    </div>
  );
};

export default Login;
