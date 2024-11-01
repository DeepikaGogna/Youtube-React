import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./chatSlice";

const store = configureStore(({
    reducer:{
        app: appSlice,
        search:searchSlice,
        chat:ChatSlice
    }
}))

export default store;