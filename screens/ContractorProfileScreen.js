import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SearchBar, Image } from 'react-native';
import { Avatar } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ContractorProfileScreen = ({ navigation,route }) => {
  var title = route.params.data +" "+route.params.workType;
  var priceRate = route.params.priceRate;
  var rating = route.params.rating;
  var occupation = "";

  return (<View style={styles.container} >
    <View style = {styles.headerBox}>
      <View style={styles.row}>
        <Avatar.Image size={90} source={require('../images/brett.jpg')} style={styles.Avatar} />
      </View>
      <View style={styles.headerTitle}>
        <Text style = {styles.entryText}>{title}</Text>
        <View style={styles.headerRow}>
          <Text style = {styles.typeMetadata}>{route.params.workType}</Text>
          <Text style = {styles.priceMetadata}>{priceRate}</Text>
          <Text style = {styles.rateMetadata}>{rating}</Text>
        </View>
      </View>
    </View>

    <View style={styles.aboutBox}>
      <Text style={styles.aboutTitle}>ABOUT ME</Text>
      <Text style={styles.aboutInfo}>I am a premium carpenter</Text>
      <Text></Text>
      <View style={styles.contactInfo}>
        <MaterialCommunityIcons name="web"size={18} />
        <Text>brettspremiumcarpentry.com</Text>
        <MaterialCommunityIcons style={styles.phoneNumber} name="phone"size={18} />
        <Text>555-555-5555</Text>
      </View>
    </View>

    <View style={styles.reviewBox}>
      <Text style={styles.aboutTitle}>3 Reviews</Text>
      <View style={styles.reviewTitle}>
        <Text style={styles.reviewName}>Caden Chabot</Text>
        <Text style={styles.reviewDate}>20 March 2021</Text>
      </View>
      <Text style={styles.ratingText}>★★★☆☆</Text>
      <Text style={styles.reviewBody}>I wouldnt say premium but he does good enough work</Text>

      <Text></Text>

      <View style={styles.reviewTitle}>
        <Text style={styles.reviewName}>Jordan Portz</Text>
        <Text style={styles.reviewDate}>20 March 2021</Text>
      </View>
      <Text style={styles.ratingText}>★★★★☆</Text>
      <Text style={styles.reviewBody}>Great work, but a little slow</Text>

      <Text></Text>

      <View style={styles.reviewTitle}>
        <Text style={styles.reviewName}>Carl Wiebe</Text>
        <Text style={styles.reviewDate}>20 March 2021</Text>
      </View>
      <Text style={styles.ratingText}>★★★★★</Text>
      <Text style={styles.reviewBody}>Brett is a great carpenter, I would highly recommend</Text>      
    </View>

    <View style={styles.reviewBox}>
      <Text style={styles.photoTitle}>Photos</Text>
      <View style={styles.photosBox}>
        <Image style={styles.photo} source={require('../images/brett.jpg')}/>
        <Image style={styles.photo} source={require('../images/brett.jpg')}/>
        <Image style={styles.photo} source={require('../images/brett.jpg')}/>
      </View>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
    
</View> );
};

const styles = StyleSheet.create({
  container:{
    marginTop:"1%"
  },
  buttonText:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 14,
    color:'white'
  },
  button:{
    paddingVertical:20,
    paddingHorizontal:10,
    justifyContent:'center',
    backgroundColor:"#2196F3",
    marginHorizontal:"5%",
    marginVertical: "2%",
    marginBottom: "1%",
    width: "90%",
    height: '5%'
  },
  photoTitle:{
    marginLeft: "3%",
    fontWeight: 'bold',
    fontSize:14
  },
  photo:{
    flex:1,
    width:60,
    height:50,
    resizeMode:'contain'
  },
  photosBox:{
    flexDirection:'row',
    marginLeft: "5%",
    marginTop: "1%",
    marginRight: "5%",
    justifyContent: 'space-between',
    backgroundColor:'white'
  },
  reviewBody:{
    marginLeft:"3%"
  },
  ratingText:{
    color: "#2196F3",
    fontSize: 10,
    textAlign:'left',
    marginLeft: "3%"
  },
  headerRow:{
    flexDirection:'row'
  },
  reviewDate:{
    fontSize: 10,
    textAlign:'right'
  },
  reviewName:{
    fontSize: 14,
    fontWeight: 'bold',
    width:"70%"
  },  
  reviewTitle:{
    flexDirection:'row',
    fontSize: 12,
    marginLeft: "3%",
  },
  reviewBox:{
    marginLeft: "5%",
    marginTop: "5%",
    marginRight: "5%",
    justifyContent: 'space-between',
    backgroundColor:'white'
  },
  aboutBox:{
    marginLeft: "5%",
    marginTop: "5%",
    marginRight: "5%",
    justifyContent: 'space-between',
    backgroundColor:'white'
  },
  contactInfo:{
    flexDirection: 'row',
    marginLeft:"1%"
  },
  phoneNumber:{
    marginLeft:"3%"
  },
  aboutInfo:{
    marginLeft:"3%"
  },  
  aboutTitle:{
    marginLeft:"3%",
    fontWeight: 'bold',
    fontSize: 15,
  },
  headerBox:{
    marginLeft: "5%",
    justifyContent: 'space-between',
    flexDirection:'row'
  },
  headerTitle:{
    justifyContent: 'center',
    marginRight: "6%"
  },
  rateMetadata:{
    color: "black",
    fontSize: 10,
    textAlign:'left',
    marginLeft: "5%"
  },
  priceMetadata:{
    color: "green",
    fontSize: 10,
    textAlign:'left',
    marginLeft: "5%"
  },
  typeMetadata:{
    color: "black",
    fontSize: 10,
    textAlign:'left',
    marginLeft: "22%"
  },
  entryText:{
    color: "black",
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'left',
    marginLeft: "22%"
  },
  Avatar: {
    marginRight: 'auto',
    marginTop: 5
  },
  row:{
    flex: 1
  }
});

export default ContractorProfileScreen;
