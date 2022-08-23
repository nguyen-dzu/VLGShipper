import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "menu",
  initialState: {
    detailCart: [],
    amount: 1,
    idOrder: '',
    loading: true
  },
  reducers: {
    setDetailCart(state, actions) {
      state.detailCart = actions.payload;
    },
    setOrderDetail (state, actions) {
      state.idOrder = actions.payload
    },
    setAmount(state, actions) {
      state.amount = actions.payload;
    },
    increaseAmount(state, actions) {
      let temp = actions.payload;
      state.detailCart.map((item: any) => {
        if (item.id === temp) {
          item.amount += 1;
        }
      });
    },
    decreaseAmount(state, actions) {
      let temp = actions.payload;
      state.detailCart.map((item: any) => {
        if (item.id === temp) {
          if (item.amount > 1) {
            item.amount -= 1;
          }
        }
      });
    },
    stopCallApi(state, actions){
      state.loading = actions.payload
    }
  },
});

export const menuActions = slice.actions;
export const menuReducers = slice.reducer;
