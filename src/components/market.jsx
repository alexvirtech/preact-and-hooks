import { useState, useEffect } from "preact/hooks"
import CoinRow from "./coinRow"

export default function Market() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://api.mtw-testnet.com/assets/all")
            .then((response) => response.json())
            .then((d) => {
                setData(d)
                console.log(d)
            })
    }, [])

    return (
        <div>
            <h1 class="text-2xl font-bold pb-4">Cryptocurrencies</h1>
            {data &&
                Object.entries(data).map(([key, value], index) => (
                    <CoinRow
                        symbol={key}
                        coin={value}
                        index={index}
                        key={index}
                    />
                ))}
        </div>
    )
}
