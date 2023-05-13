import { configureStore } from "@reduxjs/toolkit";
import addContract from "./contract";

export default configureStore({
  reducer: {
    addContract,
  },
});
