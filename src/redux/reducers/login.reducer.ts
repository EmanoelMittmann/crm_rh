import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_VALUE = {
  googleData: { decodeJwt: {}, data: {} },
  token: '',
  responseValidToken: false,
};

const login = createSlice({
  name: 'LOGIN-HANDLER',
  initialState: DEFAULT_VALUE,
  reducers: {
    loginAction: (state, action: PayloadAction<any>) => {
      console.log(state);
    },
  },
});

export const { loginAction } = login.actions;
export default login.reducer;
