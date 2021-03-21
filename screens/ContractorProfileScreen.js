import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SearchBar,
  Image,
  Linking
} from 'react-native';
import { Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { buildDollars, buildStars } from '../utils/stringUtils';
import { getContractorReviews } from '../stubs/reviews';
import ReviewCard from '../components/ReviewCard';

const ContractorProfileScreen = ({ navigation, route }) => {
  const reviews = getContractorReviews(route.params.name);
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
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
            <Text style={styles.typeMetadata}>{route.params.category}</Text>
            <Text style={styles.priceMetadata}>
              {buildDollars(route.params.price)}
            </Text>
            <Text style={styles.rateMetadata}>
              {buildStars(route.params.stars)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.aboutBox}>
        <Text style={styles.aboutTitle}>ABOUT ME</Text>
        <Text style={styles.aboutInfo}>{route.params.description}</Text>
        <Text></Text>
        <View style={styles.contactInfo}>
          <MaterialCommunityIcons name="web" size={18} />
          <Text>{route.params.website}</Text>
          <MaterialCommunityIcons
            style={styles.phoneNumber}
            name="phone"
            size={18}
          />
          <Text>{route.params.phone}</Text>
        </View>
      </View>

      <View style={styles.reviewBox}>
        <Text style={styles.aboutTitle}>
          {reviews.length} Review{reviews.length !== 1 ? 's' : ''}
        </Text>
        {reviews.map((review, index) => (
          <ReviewCard key={index} reviewInfo={review} />
        ))}
      </View>

      <View style={styles.reviewBox}>
        <Text style={styles.photoTitle}>Photos</Text>
        <View style={styles.photosBox}>
          <Image style={styles.photo} source={require('../images/brett.jpg')} />
          <Image style={styles.photo} source={require('../images/brett.jpg')} />
          <Image style={styles.photo} source={require('../images/brett.jpg')} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Book Screen', { ...route.params });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '1%'
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white'
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    marginHorizontal: '5%',
    marginVertical: '2%',
    marginBottom: '1%',
    width: '90%',
    height: '5%'
  },
  photoTitle: {
    marginLeft: '3%',
    fontWeight: 'bold',
    fontSize: 14
  },
  photo: {
    flex: 1,
    width: 60,
    height: 50,
    resizeMode: 'contain'
  },
  photosBox: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginTop: '1%',
    marginRight: '5%',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  reviewBody: {
    marginLeft: '3%'
  },
  ratingText: {
    color: '#2196F3',
    fontSize: 10,
    textAlign: 'left',
    marginLeft: '3%'
  },
  headerRow: {
    flexDirection: 'row'
  },
  reviewDate: {
    fontSize: 10,
    textAlign: 'right'
  },
  reviewName: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '70%'
  },
  reviewTitle: {
    flexDirection: 'row',
    fontSize: 12,
    marginLeft: '3%'
  },
  reviewBox: {
    marginLeft: '5%',
    marginTop: '5%',
    marginRight: '5%',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  aboutBox: {
    marginLeft: '5%',
    marginTop: '5%',
    marginRight: '5%',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  contactInfo: {
    flexDirection: 'row',
    marginLeft: '1%'
  },
  phoneNumber: {
    marginLeft: '3%'
  },
  aboutInfo: {
    marginLeft: '3%'
  },
  aboutTitle: {
    marginLeft: '3%',
    fontWeight: 'bold',
    fontSize: 15
  },
  headerBox: {
    marginLeft: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  headerTitle: {
    justifyContent: 'center',
    marginRight: '6%'
  },
  rateMetadata: {
    color: 'black',
    fontSize: 10,
    textAlign: 'left',
    marginLeft: '5%'
  },
  priceMetadata: {
    color: 'green',
    fontSize: 10,
    textAlign: 'left',
    marginLeft: '5%'
  },
  typeMetadata: {
    color: 'black',
    fontSize: 10,
    textAlign: 'left',
    marginLeft: '22%',
    textTransform: 'capitalize'
  },
  entryText: {
    color: 'black',
    fontWeight: 'bold',
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

export default ContractorProfileScreen;
