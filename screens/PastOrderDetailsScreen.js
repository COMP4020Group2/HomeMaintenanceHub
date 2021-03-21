import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Avatar } from "react-native-paper";
import { buildStars } from "../utils/stringUtils";
import { getUserContractorReview } from "../stubs/reviews";
import { getUser } from "../stubs/user";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

const PastOrderDetailsScreen = ({ navigation, route }) => {
  var reviewResponse = getUserContractorReview(
    getUser().name,
    route.params.name
  );
  var myReview;
  if (reviewResponse.length != 0) {
    myReview = reviewResponse[0];
  } else {
  }

  return (
    <View>
      <View style={styles.headerBox}>
        <View style={styles.row}>
          <Avatar.Image
            size={90}
            source={require("../images/brett.jpg")}
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
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Your Review</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.reviewStars}>{buildStars(myReview.stars)}</Text>
            <Text style={{ textAlign: "right" }}>{route.params.date}</Text>
          </View>
          <Text>{myReview.body}</Text>
        </View>
      ) : (
        <View style={styles.Box}>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>No Review</Text>
          <Button title="Leave A Review"/>
        </View>
      )}

      <View style={styles.Box}>
        <Text style={{ fontWeight: "bold" }}>Recommended?</Text>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            style={styles.icons}
            name="check-circle-outline"
            color={route.params.positive ? "green" : "grey"}
            size={100}
          />
          <MaterialCommunityIcons
            style={styles.icons}
            name="close-circle-outline"
            color={route.params.positive ? "grey" : "red"}
            size={100}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Full Invoice</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Again</Text>
      </TouchableOpacity>


    </View>
  );
};

export default PastOrderDetailsScreen;

const styles = StyleSheet.create({
  headerBox: {
    marginTop: "5%",
    marginLeft: "5%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icons: {
    marginLeft: "12%",
  },
  button: {
    marginTop:"10%",
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
    color: "#2196F3",
    width: "68%",
  },
  Box: {
    marginLeft: "5%",
    marginTop: "10%",
    marginRight: "5%",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  row: {
    flex: 1,
  },
  headerTitle: {
    justifyContent: "center",
    marginRight: "6%",
  },
  entryText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    marginLeft: "22%",
  },
  headerRow: {
    flexDirection: "row",
  },
  jobMetadata: {
    color: "black",
    fontSize: 14,
    textAlign: "left",
    marginLeft: "22%",
  },
  priceMetadata: {
    color: "green",
    fontSize: 14,
    textAlign: "left",
    marginLeft: "22%",
  },
  dateMetadata: {
    color: "black",
    fontSize: 14,
    textAlign: "left",
    marginLeft: "22%",
    textTransform: "capitalize",
  },
});
