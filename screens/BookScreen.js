import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Text, Portal, Dialog, Button} from 'react-native-paper';
import { getAvailabilities } from '../stubs/availabilities';
import { addAppointment } from '../stubs/appointments';

const getMonday = (day) => {
  const date = new Date(day.timestamp);
  let d = date.getDay();
  if (d === 6) { d = -1; }
  date.setDate(date.getDate() - d);

  return date;
};

const BookScreen = ({ navigation, route }) => {
  const [items, setItems] = useState({});
  const [dialogVisible, setDialogVisible] = useState(false);
  const [time, setTime] = useState("");
  const [type, setType] = useState("");
  const [day, setDay] = useState("");

  const showDialog = (time, type) => {
    setTime(time);
    setType(type);
    setDialogVisible(true);
  }

  const hideDialog = () => setDialogVisible(false);

  const loadItems = (day) => {
    setItems(getAvailabilities(getMonday(day)));
  };

  const formatDate = (day) => {
    let month = "";
    switch(day.month) {
      case 1:
        month = 'January'
        break;
      case 2:
        month = 'February'
        break;
      case 3:
        month = 'March'
        break;
      case 4:
        month = 'April'
        break;
      case 5:
        month = 'May'
        break;
      case 6:
        month = 'June'
        break;
      case 7:
        month = 'July'
        break;
      case 8:
        month = 'August'
        break;
      case 9:
        month = 'September'
        break;
      case 10:
        month = 'October'
        break;
      case 11:
        month = 'November'
        break;
      case 12:
        month = 'December'
        break;
    }
    return `${month} ${day.day}, ${day.year}`;
  }

  const bookAppointment = () => {
    addAppointment({
      name: route.params.name,
      date: day,
      time: time,
      description: type
    });
    hideDialog();
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 30, height: 60}} onPress={() => showDialog(item.time, item.type)}>
        <Card style={{height: '100%'}}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.time}</Text>
              <Text>{item.type}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        minDate={new Date()}
        items={items}
        loadItemsForMonth={loadItems}
        selected={new Date()}
        renderItem={renderItem}
        onDayPress={(day) => {setDay(formatDate(day))}}
      />
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={hideDialog}>
          <Dialog.Title>Confirm</Dialog.Title>
          <Dialog.Content>
            <Text>Book Appointment for {type} on:</Text>
            <Text>{day} at {time}?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={bookAppointment}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default BookScreen;
