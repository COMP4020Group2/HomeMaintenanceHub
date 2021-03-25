import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Avatar, Card, FAB } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { buildDollars, buildStars } from '../utils/stringUtils';
import { getContractorReviews } from '../stubs/reviews';
import ReviewCard from '../components/ReviewCard';
import { useIsFocused } from '@react-navigation/native';
import { commonStyles } from '../styles';

const ContractorProfileScreen = ({ navigation, route }) => {
  const [reviews, setReviews] = useState();
  const isFocused = useIsFocused();
  const [contractorInfo, setContractorInfo] = useState({ ...route.params });

  useEffect(() => {
    setReviews(getContractorReviews(contractorInfo.name));
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.row}>
            <Avatar.Image
              size={90}
              source={require('../images/brett.jpg')}
              style={styles.Avatar}
            />
          </View>
          
          <View style={styles.headerTitle}>
            <Text style={styles.reviewsTitle}>{contractorInfo.name}</Text>
            <View style={styles.contractorInfoText}>
              <Text style={styles.subtitle}>{contractorInfo.category}</Text>
              <Text style={styles.subtitle, styles.dollars}>{buildDollars(contractorInfo.price)}</Text>
              <Text style={styles.subtitle, styles.stars}>{buildStars(contractorInfo.stars)}</Text>
            </View>
            <View style={styles.contractorDescription}>
              <Text style={styles.aboutInfo}>{contractorInfo.description}</Text>
            </View>
          </View>

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
        </Card.Content>
      </Card>

      <TouchableOpacity
        style={styles.reviewsCard}
        onPress={() =>
          navigation.navigate('Reviews', {
            contractor: contractorInfo.name,
            reviews: reviews
          })
        }
      >
        <Text style={styles.reviewsTitle}>Top 2 Reviews</Text>
        {reviews?.slice(0, 2).map((review, index) => (
          <ReviewCard key={index} reviewInfo={review} />
        ))}
      </TouchableOpacity>

      <Card style={styles.photosCard}>
        <Card.Title titleStyle={styles.reviewsTitle} title={'Photos'} />
        <Card.Content style={styles.photosBox}>
          <Image style={styles.photo} source={require('../images/brett.jpg')} />
          <Image style={styles.photo} source={require('../images/brett.jpg')} />
          <Image style={styles.photo} source={require('../images/brett.jpg')} />
        </Card.Content>
      </Card>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Book', { ...contractorInfo });
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Add Review', {
              contractorInfo: contractorInfo
            })
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    width: '47%',
    marginLeft: -195
  },
  container: {
    alignItems: 'center'
  },
  card: {
    ...commonStyles.Card,
    width: '90%',
    marginTop: 5,
    paddingVertical: -10
  },
  reviewsCard: {
    marginTop: 5,
    width: '90%',
    ...commonStyles.Card
  },
  contractorInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 18
  },
  row: {
    flex: 1
  },
  subtitle: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 14
  },
  reviewsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 5,
    padding: 0
  },
  headerTitle: {
    justifyContent: 'center',
    marginLeft: '33%'
  },
  photosCard: {
    paddingTop: -15,
    marginTop: 5,
    paddingHorizontal: 10,
    width: '90%',
    ...commonStyles.Card
  },
  photosBox: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contractorText: {
    flexDirection: 'column',
    marginLeft: 40
  },
  contractorDescription: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30
  },
  typeMetadata: {
    textTransform: 'capitalize'
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white'
  },
  button: {
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    marginHorizontal: 10,
    marginVertical: 5,
    width: '90%',
    height: 50
  },
  photoTitle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  photo: {
    width: '20%',
    height: 60,
    resizeMode: 'contain'
  },
  headerRow: {
    flexDirection: 'row'
  },
  contactInfo: {
    flexDirection: 'row'
  },
  rateMetadata: {
    color: 'black',
    fontSize: 10
  },
  priceMetadata: {
    color: 'green',
    fontSize: 10
  },
  Avatar: {
    marginTop: 5
  },
  fab: {
    width: 56,
    position: 'absolute',
    right: 0,
    top: -75
  },
  stars: {
    color: '#2196F3',
  },
  dollars: {
    color: 'green',
  }
});

export default ContractorProfileScreen;
