import { legacy_createStore } from "redux";
import {produitsReducer} from "./reducer/produitsReducer"

const store = legacy_createStore(produitsReducer)
export default store