import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-paper';
import { buildStars } from '../utils/stringUtils';
import { getUserContractorReview } from '../stubs/reviews';
import { getUser } from '../stubs/user';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import { updateOrder } from '../stubs/pastorders';
import { useState } from 'react';

const PastOrderDetailsScreen = ({ navigation, route }) => {

  var displayImage;
  if ( route.params.name.includes("Brett's") ){
        displayImage = require("../images/brett.jpg");
  }else if ( route.params.name.includes("Phil's") ){
        displayImage = require("../images/phil.jpg");
  }else if ( route.params.name.includes("Jacob's") ){
        displayImage = require("../images/jacob.png");
  }else if ( route.params.name.includes("Mack's") ){
        displayImage = require("../images/mack.jpg")
  }

  const reviewResponse = getUserContractorReview(
    getUser().name,
    route.params.name
  );
  let myReview = reviewResponse[0];
  const [positive, setPositive] = useState(route.params.positive);

  const pressPositiveButton = () => {
    route.params.positive = true;
    setPositive(true);
    let order = {
      id: route.params.id,
      name: route.params.name,
      date: route.params.date,
      price: route.params.price,
      positive: true
    };
    updateOrder(order);
  };

  const pressNegativeButton = () => {
    route.params.positive = false;
    setPositive(false);
    let order = {
      id: route.params.id,
      name: route.params.name,
      date: route.params.date,
      price: route.params.price,
      positive: false
    };
    updateOrder(order);
  };

  return (
    <View>
      <View style={styles.headerBox}>
        <View style={styles.row}>
          <Avatar.Image
            size={90}
            source={displayImage}
            style={styles.Avatar}
          />
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.entryText}>{route.params.name}</Text>
          <View style={styles.headerRow}>
            <Text style={styles.dateMetadata}>Booked: {route.params.date}</Text>
          </View>
          <Text style={styles.jobMetadata}>Job: {}</Text>
          <Text style={styles.priceMetadata}>Cost: ${route.params.price}</Text>
        </View>
      </View>
      {reviewResponse.length > 0 ? (
        <View style={styles.Box}>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Your Review</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.reviewStars}>{buildStars(myReview.stars)}</Text>
            <Text style={{ textAlign: 'right' }}>{route.params.date}</Text>
          </View>
          <Text>{myReview.body}</Text>
        </View>
      ) : (
        <View style={styles.Box}>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>No Review</Text>
          <Button title="Leave A Review" />
        </View>
      )}

      <View style={styles.Box}>
        <Text style={{ fontWeight: 'bold' }}>Recommended?</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.icons} onPress={pressPositiveButton}>
            <MaterialCommunityIcons
              name="check-circle-outline"
              color={positive ? 'green' : 'grey'}
              size={100}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icons} onPress={pressNegativeButton}>
            <MaterialCommunityIcons
              name="close-circle-outline"
              color={positive ? 'grey' : 'red'}
              size={100}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Full Invoice</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Book')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Book Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PastOrderDetailsScreen;

const styles = StyleSheet.create({
  headerBox: {
    marginTop: '5%',
    marginLeft: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  icons: {
    marginLeft: '12%'
  },
  button: {
    marginTop: '10%',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#2196F3',
    marginHorizontal: '5%',
    width: '90%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center'
  },
  reviewStars: {
    color: '#2196F3',
    width: '68%'
  },
  Box: {
    marginLeft: '5%',
    marginTop: '10%',
    marginRight: '5%',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  row: {
    flex: 1
  },
  headerTitle: {
    justifyContent: 'center',
    marginRight: '6%'
  },
  entryText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
    marginLeft: '22%'
  },
  headerRow: {
    flexDirection: 'row'
  },
  jobMetadata: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: '22%'
  },
  priceMetadata: {
    color: 'green',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: '22%'
  },
  dateMetadata: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: '22%',
    textTransform: 'capitalize'
  }
});
