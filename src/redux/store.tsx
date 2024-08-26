import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(productsApi.middleware),
});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
