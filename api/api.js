import axios from 'axios';

const getCriptoList = async() => {
    const coins = await(await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=104b97ab-405e-44d6-8ab3-3ff4cfcde0e7")).data.data
    const coinList = [];
    
    coins.forEach((coin) => {
        if(coin.name && coin.symbol && coin.quote.USD.price){
            
            const newCoin = {
                "name": coin.name,
                "symbol": coin.symbol,
                "price":coin.quote.USD.price,
            }
            coinList.push(newCoin)
        }     
    });

    
}

export default getCriptoList;
    