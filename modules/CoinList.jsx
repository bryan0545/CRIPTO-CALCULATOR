import React, { Component } from 'react';
import getCriptoList from '../api/api';
import {Text} from 'react-native';



class CoinList extends Component {
    async componentDidMount() {
        getCriptoList()
        

    }
    

    render() {
        return (
            <Text>
                crypto calculator            
            </Text>
        );
    }
}

export default CoinList;
