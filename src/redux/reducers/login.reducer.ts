import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageKeys } from '../../config/LocalStorageKeys';


const DEFAULT_VALUE = {
  googleData: { decodeJwt: {}, data: {} },
  token: '',
  responseValidToken: false,
};

const login = createSlice({
  name: 'LOGIN-HANDLER',
  initialState: {},
  reducers: {
    loginAction: (state, action: PayloadAction<any>) => {
      const token = JSON.stringify(action.payload.token)
      const user = JSON.stringify(action.payload.googleData.user)
      localStorage.setItem(LocalStorageKeys.TOKEN, token);
      localStorage.setItem(LocalStorageKeys.USER, user);
    }
  },
});

export const { loginAction } = login.actions;
export default login.reducer;
