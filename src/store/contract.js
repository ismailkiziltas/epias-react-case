import { createSlice } from "@reduxjs/toolkit";

export const newContract = createSlice({
  name: "contract",
  initialState: {
    contractList: [
      {
        id: 1,
        contract: 2019,
        offer: 78125,
        data: "Alış",
      },
      {
        id: 2,
        contract: 2019,
        offer: 78125,
        data: "Satış",
      },
      {
        id: 3,
        contract: 2019,
        offer: 1485,
        data: "Satış",
      },
    ],
  },
  reducers: {
    addContract: (state, action) => {
      state.contractList.push(action.payload);
    },
  },
});

export const { addContract } = newContract.actions;

export default newContract.reducer;
