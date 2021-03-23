import axios from 'axios';

const getCriptoList = async() => {
    const coins = await(await axios.get("https://rest.coinapi.io/v1/assets?apikey=B19A3422-6601-4F4A-A352-F298FF0CE694")).data
    const coinList = [];
    console.log(coins[1])
    coins.forEach((coin,index) => {
       
        if( coin.asset_id){            
            const newCoin = {
                key: index.toString(),
                name: coin.name|| coin.asset_id,
                symbol: coin.asset_id,
                price:coin.price_usd ? Number(coin.price_usd).toFixed(4):0,
                quantity:0,
                result:0,
            }
            coinList.push(newCoin)
        }     
    });

    return coinList;    
}

export default getCriptoList;
    