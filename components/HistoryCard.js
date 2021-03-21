import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HistoryCard = ({ history, navigate }) => {
    return (
      <TouchableOpacity style={styles.entryBox} onPress={() => navigate('PastOrderDetails',{ ...history })}>
        <View style={styles.textView}>
            <Text style={styles.entryText}>{history.name}</Text>
            <Text style={styles.dateText}>{history.date}</Text>
            <Text style={styles.priceText}>{"$"+history.price}</Text>
        </View>
        <View style={styles.iconView}>
            <MaterialCommunityIcons name={history.positive ?"check-circle-outline" :"close-circle-outline"} color={history.positive ?"green" :"red"} size={40} />
        </View> 
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
entryBox:{
    paddingVertical:10,
    paddingHorizontal:10,
    backgroundColor:"#FFFFFF",
    marginHorizontal:"5%",
    marginVertical:"3%",
    width: "90%",
    height: "16%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  entryText:{
    color: "black",
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'left'
  },
  dateText:{
    color: "black",
    fontSize: 16,
    textAlign:'left'
  },
  priceText:{
    color: "green",
    fontSize: 18,
    textAlign:'left'
  },
  iconView:{
    justifyContent: "center"
  },
  textView:{

  }
});

export default HistoryCard;