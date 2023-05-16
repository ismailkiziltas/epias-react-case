import { configureStore } from "@reduxjs/toolkit";
import addContract from "./contract";
import savedLayout from "./savedLayout";

export default configureStore({
  reducer: {
    addContract,
    savedLayout,
  },
});
