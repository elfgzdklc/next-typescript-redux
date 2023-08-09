import {combineReducers} from "redux"
import counterReducer from "./counter"
import itemsReducer from "./items"
import selectItemReducer from "./select"
import checkItemReducer from "./check"

const rootReducer = combineReducers({
    counter: counterReducer,
    items: itemsReducer,
    select: selectItemReducer,
    check: checkItemReducer,

    // Diğer reducer'lar eklenir
})
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;