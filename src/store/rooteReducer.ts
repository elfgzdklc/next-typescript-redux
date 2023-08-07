import {combineReducers} from "redux"
import counterReducer from "./counter"
import itemsReducer from "./items"

const rootReducer = combineReducers({
    counter: counterReducer,
    items: itemsReducer,
    // Diğer reducer'lar eklenir
})
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;