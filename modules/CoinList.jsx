import React, { useEffect, useState } from "react";
import getCriptoList from "../api/api";
import { 
  TextInput, 
  Text, 
  View, 
  FlatList, 
  StyleSheet 
} from "react-native";

const CoinList = () => {
  const [coinList, setCoinList] = useState([]);
  

  useEffect(() => {
    getCoinList();
  }, []);

  const getCoinList = async () => {
    const coins = await getCriptoList();
    setCoinList(coins);
  };

  const handleChangeTest = (value, id) =>{
    coinList[id].quantity = value;
    // console.log(value, id, coinList[id].result)
    coinList[id].result = coinList[id].price *value;
    
    setCoinList(coinList)

   
    
  }

  return (
    <View>
      {coinList.length > 0 ? (
        (         
          <FlatList
            data={coinList}
            renderItem={({ item }) => (
              (item.price > 0 &&
              <View style={styles.coinContainer}>
                <Text style={styles.coinBlock}>
                  {item.symbol} - $ {item.price}
                </Text>
                <Text >
                  {item.key}
                </Text>
                <TextInput 
                style={styles.quantityContainer} 
                onChangeText = {(value) => handleChangeTest(value,item.key)}
                >
                </TextInput>
                <Text style={styles.resultContainer}>
                  {item.result}
                </Text>
              </View>)
            )}
          ></FlatList>
        )
      ) : (
        <Text>No data</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: 'row',
  },
  coinBlock: {
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginLeft: 20,
    padding: 15,
    borderRadius: 20,
    flex: 3,
  },
  quantityContainer: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#20232a",
  },
  resultContainer: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#20232a",
  },
  
});

export default CoinList;
