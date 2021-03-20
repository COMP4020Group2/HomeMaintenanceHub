import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Avatar } from 'react-native-paper';
import { buildStars, buildDollars } from '../utils/stringUtils';

const SearchResultCard = ({ contractorInfo, navigate }) => {
  return (
    <TouchableOpacity
      style={styles.entryBox}
      onPress={() =>
        navigate('Contractor Profile', {
          ...contractorInfo
        })
      }
    >
      <View style={styles.row}>
        <Avatar.Image
          size={64}
          source={require('../images/brett.jpg')}
          style={styles.Avatar}
        />
      </View>
      <Text style={styles.entryText}>{contractorInfo.name}</Text>
      <Text style={styles.rateText}>{buildStars(contractorInfo.stars)}</Text>
      <Text style={styles.priceText}>{buildDollars(contractorInfo.price)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  entryBox: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    marginHorizontal: '5%',
    marginVertical: '3%',
    width: '90%',
    height: '16%'
  },
  entryText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
    marginLeft: '22%'
  },
  rateText: {
    color: '#2196F3',
    fontSize: 16,
    textAlign: 'left',
    marginLeft: '22%'
  },
  priceText: {
    color: 'green',
    fontSize: 18,
    textAlign: 'left',
    marginLeft: '22%'
  },
  Avatar: {
    marginRight: 'auto',
    marginTop: 5
  },
  row: {
    flex: 1
  }
});

export default SearchResultCard;