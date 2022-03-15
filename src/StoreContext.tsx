import React from "react";
import {AppStoreType, DispatchType} from "./redax/reduxStore";

export const StoreContext = React.createContext<Partial<AppStoreType | DispatchType>>({})

export type ProviderType = {
    store: AppStoreType | DispatchType | {}
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}