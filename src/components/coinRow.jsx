export default function CoinRow({ symbol, coin, index }) {
    return (
        <div class={`border-b border-gray-200 py-2 grid grid-cols-12 
            ${index === 0 && "border-t"}`}>
            <div class="col-span-1">
                <img src={coin.image} class="max-h-8" />
            </div>
            <div class="col-span-1">{symbol}</div>
            <div class="col-span-2">{coin.name}</div>
            <div class="col-span-8 text-sm">{coin.summary}</div>
        </div>
    )
}
