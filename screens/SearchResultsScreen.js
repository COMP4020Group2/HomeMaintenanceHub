import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

const buildStars = (numStars) => {
  let stars = '';
  for (let i = 0; i < numStars; i++) stars += '★';
  for (let i = numStars; i < 5; i++) stars += '☆';
  return stars;
};

const buildDollars = (numDollars) => {
  let dollars = '';
  for (let i = 0; i < numDollars; i++) dollars += '$';
  return dollars;
};

const SearchResultsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.entryBox}
        onPress={() =>
          navigation.navigate('Contractor Profile', {
            data: 'Bretts Premium',
            workType: route.params.data,
            priceRate: '$$$',
            rating: '4/5'
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
        <Text style={styles.entryText}>Bretts Premium {route.params.data}</Text>
        <Text style={styles.rateText}>★★★★☆</Text>
        <Text style={styles.priceText}>$$$</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.entryBox}
        onPress={() =>
          navigation.navigate('Contractor Profile', {
            data: 'Bretts Mediocre',
            workType: route.params.data,
            priceRate: '$$',
            rating: '3/5'
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
        <Text style={styles.entryText}>
          Brett's Mediocre {route.params.data}
        </Text>
        <Text style={styles.rateText}>★★★☆☆</Text>
        <Text style={styles.priceText}>$$</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.entryBox}
        onPress={() =>
          navigation.navigate('Contractor Profile', {
            data: 'Bretts Budget',
            workType: route.params.data,
            priceRate: '$',
            rating: '3/5'
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
        <Text style={styles.entryText}>Brett's Budget {route.params.data}</Text>
        <Text style={styles.rateText}>★★★☆☆</Text>
        <Text style={styles.priceText}>$</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.entryBox}
        onPress={() =>
          navigation.navigate('Contractor Profile', {
            data: 'Bretts Bad',
            workType: route.params.data,
            priceRate: '$$$$',
            rating: '2/5'
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
        <Text style={styles.entryText}>Brett's Bad {route.params.data}</Text>
        <Text style={styles.rateText}>★★☆☆☆</Text>
        <Text style={styles.priceText}>$$$$</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.entryBox}
        onPress={() =>
          navigation.navigate('Contractor Profile', {
            data: 'Bretts Horrible',
            workType: route.params.data,
            priceRate: '$',
            rating: '1/5'
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
        <Text style={styles.entryText}>
          Brett's Horrible {route.params.data}
        </Text>
        <Text style={styles.rateText}>★☆☆☆☆</Text>
        <Text style={styles.priceText}>$</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '3%'
  },
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

export default SearchResultsScreen;
