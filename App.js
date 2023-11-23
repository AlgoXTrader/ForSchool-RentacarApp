import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack/';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('CitySelection');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/image1.jpg')}
        style={styles.imagec}
      />
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const CitySelectionScreen = ({ navigation }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  const handleContinue = () => {
    navigation.navigate('CarSelection');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/trmap.png')}
        style={styles.imagec}
      />
      <Text>From:</Text>
      <TextInput
        placeholder="From City"
        value={fromCity}
        onChangeText={(text) => setFromCity(text)}
      />
      <Text>To:</Text>
      <TextInput
        placeholder="To City"
        value={toCity}
        onChangeText={(text) => setToCity(text)}
      />
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

const CarSelectionScreen = ({ navigation }) => {
  const [selectedCar, setSelectedCar] = useState('');

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  const handleCompleteReservation = () => {
    navigation.navigate('ReservationResult');
  };

  return (
    <View style={styles.container}>
      <Text>Choose a Car:</Text>

      <View style={styles.carContainer}>
        <Button title="Car 1" onPress={() => handleSelectCar('Car 1')} />
        <Image source={require('./assets/car1.png')} style={styles.carImage} />
      </View>

      <View style={styles.carContainer}>
        <Button title="Car 2" onPress={() => handleSelectCar('Car 2')} />
        <Image source={require('./assets/car2.png')} style={styles.carImage} />
      </View>

      <View style={styles.carContainer}>
        <Button title="Car 3" onPress={() => handleSelectCar('Car 3')} />
        <Image source={require('./assets/car3.png')} style={styles.carImage} />
      </View>

      <Button title="Next" onPress={handleCompleteReservation} />
    </View>
  );
};

const ReservationResultScreen = () => {
  const [reservationStatus, setReservationStatus] = useState('');

  const handleCompleteReservation = (status) => {
    setReservationStatus(status);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/image1.jpg')}
        style={styles.imagec}
      />
      <Text>Reservation Status: {reservationStatus}</Text>
      <Button title="Confirm Reservation" onPress={() => handleCompleteReservation('Confirmed')} />
      <Button title="Cancel Reservation" onPress={() => handleCompleteReservation('Cancelled')} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CitySelection" component={CitySelectionScreen} />
        <Stack.Screen name="CarSelection" component={CarSelectionScreen} />
        <Stack.Screen name="ReservationResult" component={ReservationResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ass = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        stack.Screen name='Login' component={LoginScreen}

      </Stack.Navigator>
    </NavigationContainer>


  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carContainer: {
    marginBottom: 20,
  },
  carImage: {
    width: 200,
    height: 100,
    resizeMode: 'cover',

  }
});

export default App;
