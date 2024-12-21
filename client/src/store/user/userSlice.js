import { createSlice } from '@reduxjs/toolkit';
import * as actions from './asyncActions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    current: null,
    token: null,
    isLoading: false,
    mes: '',
    currentCart: []
  },
  reducers: {
    login: (state, action) => {
      const { isLogin, token, userData } = action.payload;
      state.isLogin = isLogin;
      state.token = token;
      state.current = userData;
    },
    logout: (state) => {
      state.isLogin = false
      state.current = null
      state.token = null
      state.isLoading = false
      state.mes = ''
    },
    clearMessage: (state) => {
      state.mes = '';
    },
    updateCart: (state, action) => {
      const {pid, variant, quantity} = action.payload;
      const upCart = JSON.parse(JSON.stringify(state.currentCart));
       state.currentCart =upCart.map(el => {
        if(el.variant === variant && el.product?._id === pid ) {
          return {...el, quantity};
        }else return el;
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(actions.getCurrent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(actions.getCurrent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.current = action.payload;
        state.isLogin = true;
        state.currentCart = action.payload.cart;
      })
      .addCase(actions.getCurrent.rejected, (state) => {
        state.isLoading = false;
        state.current = null;
        state.isLogin = false;
        state.token = null;
        state.mes = 'Phiên đăng nhập đã hết hạn, hãy đăng nhập lại';
      });
  }
});

export const { login, logout, clearMessage, updateCart } = userSlice.actions;
export default userSlice.reducer;
