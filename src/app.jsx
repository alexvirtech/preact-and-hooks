import CoinCard from "./components/coinCard"
import Market from "./components/market"
import MainLayout from "./layouts/mainLayout"
import { MarketContext } from "./utils/context"
import { initialState,reducer } from "./utils/reducer"
import { useReducer } from "preact/hooks"

export function App() {
const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <MarketContext.Provider value={{state,dispatch}}>
          <MainLayout>
              {state.selectedCoin ? <CoinCard/> : <Market />}
          </MainLayout>
        </MarketContext.Provider>
    )
}

