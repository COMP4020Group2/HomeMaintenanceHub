import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { buildStars } from '../utils/stringUtils';
import { getUserContractorReview } from '../stubs/reviews';
import { getUser } from '../stubs/user';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import { updateOrder } from '../stubs/pastorders';
import { useState } from 'react';
import { getContractor } from '../stubs/contractors';
import { commonStyles } from '../styles';

const PastOrderDetailsScreen = ({ navigation, route }) => {
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
      <Card style={styles.headerBox}>
        <Card.Content>
          <View style={styles.row}>
            <Avatar.Image
              size={90}
              source={require('../images/brett.jpg')}
              style={styles.Avatar}
            />
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.entryText}>{route.params.name}</Text>
            <View style={styles.headerRow}>
              <Text style={styles.dateMetadata}>Booked: {route.params.date}</Text>
            </View>
            <Text style={styles.jobMetadata}>Job: {route.params.job}</Text>
            <Text style={styles.priceMetadata}>Cost: ${route.params.price}</Text>
          </View>
        </Card.Content>
      </Card>
      <Card style={styles.Box}>
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
          <View style={styles.reviewBox}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', marginBottom: 5 }}>No Review</Text>
            <TouchableOpacity style={styles.buttonReview}>
            <Text style={styles.buttonReviewText}>LEAVE A REVIEW</Text>
          </TouchableOpacity>
          </View>
        )}
      </Card>

      <Card style={styles.Box}>
        <Card.Content>
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Full Invoice</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              let contractor = getContractor(route.params.name);
              navigation.navigate('Book', { ...contractor });
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Book Again</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
      
    </View>
  );
};

export default PastOrderDetailsScreen;

const styles = StyleSheet.create({
  headerBox: {
    marginTop: 10,
    marginHorizontal: 20,
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    ...commonStyles.Card
  },
  reviewBox: {
    marginTop: 5,
    marginHorizontal: 20,
    width: '90%',
    justifyContent: 'space-between',
    ...commonStyles.Card
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
  buttonReview: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#2196F3',
    marginHorizontal: '5%',
    width: '90%'
  },
  buttonReviewText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center'
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
    marginTop: 10,
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    ...commonStyles.Card
  },
  row: {
    flex: 1
  },
  headerTitle: {
    justifyContent: 'center',
    marginLeft: '12%'
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
