import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        contacts: {},
        modals: {},
        auth: {},
    }
})
