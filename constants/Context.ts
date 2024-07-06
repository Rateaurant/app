import { createContext, Dispatch, SetStateAction } from "react";

export type useStateType<T> = {
    get: T,
    set: Dispatch<SetStateAction<T>>
}

export const NavigationContext = createContext({
    get: 0,
    set: () => { }
} as useStateType<number>);

export const StoreContext = createContext({
    email: { get: '', set: () => { } },
    password: { get: '', set: () => { } },
    username: { get: '', set: () => { } },
} as {
    email: useStateType<string>;
    password: useStateType<string>;
    username: useStateType<string>;
});