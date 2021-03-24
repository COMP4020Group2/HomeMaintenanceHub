import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Avatar, FAB } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { buildDollars, buildStars } from '../utils/stringUtils';
import { getContractorReviews } from '../stubs/reviews';
import ReviewCard from '../components/ReviewCard';
import { useIsFocused } from '@react-navigation/native';

const ContractorProfileScreen = ({ navigation, route }) => {
  const [reviews, setReviews] = useState();
  const isFocused = useIsFocused();
  const [contractorInfo, setContractorInfo] = useState({ ...route.params });

  useEffect(() => {
    setReviews(getContractorReviews(contractorInfo.name));
  }, [isFocused]);

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
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <View style={styles.row}>
          <Avatar.Image
            size={90}
            source={displayImage}
            style={styles.Avatar}
          />
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.entryText}>{contractorInfo.name}</Text>
          <View style={styles.headerRow}>
            <Text style={styles.typeMetadata}>{contractorInfo.category}</Text>
            <Text style={styles.priceMetadata}>
              {buildDollars(contractorInfo.price)}
            </Text>
            <Text style={styles.rateMetadata}>
              {buildStars(contractorInfo.stars)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.aboutBox}>
        <Text style={styles.aboutTitle}>ABOUT ME</Text>
        <Text style={styles.aboutInfo}>{contractorInfo.description}</Text>
        <Text></Text>
        <View style={styles.contactInfo}>
          <MaterialCommunityIcons name="web" size={18} />
          <Text>{contractorInfo.website}</Text>
          <MaterialCommunityIcons
            style={styles.phoneNumber}
            name="phone"
            size={18}
          />
          <Text>{contractorInfo.phone}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.reviewBox}
        onPress={() =>
          navigation.navigate('Reviews', {
            contractor: contractorInfo.name,
            reviews: reviews
          })
        }
      >
        <Text style={styles.aboutTitle}>Top 3 Reviews</Text>
        {reviews?.slice(0, 3).map((review, index) => (
          <ReviewCard key={index} reviewInfo={review} />
        ))}
      </TouchableOpacity>
      <FAB
        color={'blue'}
        style={styles.fab}
        icon={'plus'}
        onPress={() =>
          navigation.navigate('Add Review', {
            contractorInfo: contractorInfo
          })
        }
      />

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
          navigation.navigate('Book', { ...contractorInfo });
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
    marginTop: 20,
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
  },
  fab: {
    width: 56,
    position: 'absolute',
    right: 10,
    bottom: 140
  }
});

export default ContractorProfileScreen;
