import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { deletedItemsSlice } from "./deletedProducts";
import { likedProductsSlice } from "./likedProducts";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    deletedItems: deletedItemsSlice.reducer,
    likedItems: likedProductsSlice.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(productsApi.middleware),
});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
