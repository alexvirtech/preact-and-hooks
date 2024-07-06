import { useState, useEffect } from "preact/hooks"

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
                Object.entries(data).map(([key, value]) => {
                    return (
                        <div class="border-t border-gray-200 py-2 grid grid-cols-12">
                            <div class="col-span-1"><img src={value.image} class="max-h-8"/></div>
                            <div class="col-span-1">{key}</div>
                            <div class="col-span-2">{value.name}</div>
                            <div class="col-span-8 text-sm">{value.summary}</div>
                        </div>
                    )
                })}
        </div>
    )
}
