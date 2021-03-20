import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ContractorProfileScreen = ({ navigation }) => {
  return (<View>
        <Text>Contractor Profile Screen</Text>
        </View>);
};
const styles = StyleSheet.create({
  container:{
    marginTop:"20%"
  },
  Avatar:{
    marginTop:15
  },
  entry:{

  },
  button:{
    borderRadius:8,
    paddingVertical:20,
    paddingHorizontal:10,
    backgroundColor:"#2196F3",
    marginHorizontal:"5%",
    marginVertical:"5%",
    width: "90%"
  },
  buttonText:{
    color: "white",
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign:'center'
  }
});
export default ContractorProfileScreen;
