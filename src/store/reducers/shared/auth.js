import { UPDATE_AUTH, LOGOUT } from '../../types';

const iState = {
  token: '',
  user: null,
};

const Auth = (state = iState, action) => {
  switch (action.type) {
    case UPDATE_AUTH: {
      const user = action.payload;
      return { ...state, token: user.ACCESS_TOKEN, user };
    }

    case LOGOUT: {
      return { ...state, token: '', user: null };
    }

    default: {
      return state;
    }
  }
};

export default Auth;
