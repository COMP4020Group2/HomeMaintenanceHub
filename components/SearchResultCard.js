import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Avatar, Card } from 'react-native-paper';
import { commonStyles, theme } from '../styles';
import { buildStars, buildDollars } from '../utils/stringUtils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchResultCard = ({ contractorInfo, navigate }) => {

  var displayImage;
  if ( contractorInfo.name.includes("Brett's") ){
        displayImage = require("../images/brett.jpg");
  }else if ( contractorInfo.name.includes("Phil's") ){
        displayImage = require("../images/phil.jpg");
  }else if ( contractorInfo.name.includes("Jacob's") ){
        displayImage = require("../images/jacob.png");
  }else if ( contractorInfo.name.includes("Mack's") ){
        displayImage = require("../images/mack.jpg")
  }

  return (
    <Card
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
          source={displayImage}
          style={styles.Avatar}
        />
      </View>
      <Text style={styles.entryText}>{contractorInfo.name}</Text>
      <Text style={styles.rateText}>{buildStars(contractorInfo.stars)}</Text>
      <Text style={styles.priceText}>{buildDollars(contractorInfo.price)}</Text>
      <MaterialCommunityIcons name={'chevron-right'} color={theme.colors.dark} style={styles.arrow} size={40} />
    </Card>
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
    ...commonStyles.Card
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
  },
  arrow: {
    position: 'absolute',
    top: 15,
    right: -10,
  }
});

export default SearchResultCard;
