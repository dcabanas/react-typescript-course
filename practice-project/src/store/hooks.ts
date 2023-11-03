import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store.ts";

/*
    there's no need to be creating these for each store slice
    hence we can call these useAppDispatch and useAppSelector
 */

type DispatchFunction = () => AppDispatch
export const useAppDispatch: DispatchFunction = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector