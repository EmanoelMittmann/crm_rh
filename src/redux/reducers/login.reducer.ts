import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAction {
  loginAction: () => void;
}

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

export const { loginAction: IAction } = login.actions;
export default login.reducer;
