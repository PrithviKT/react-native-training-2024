import React, { useState, useEffect } from 'react';
import { View, Text, Button, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
 
const App = () => {
  const [location, setLocation] = useState({latitude: 0, longitude: 0});
  const [placeName, setPlaceName] = useState(null);
 
  useEffect(() => {
    requestLocationPermission();
  }, []);
 
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location to function properly.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
 
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        getPlaceName(latitude, longitude);
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
 
  const getPlaceName = async (latitude:any, longitude:any) => {
    try {
      const response = await fetch(
`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      if (data && data.display_name) {
        setPlaceName(data.display_name);
      }
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20 }}>Current Location Details:</Text>
      {location ? (
        <View>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
          {placeName && <Text>Place Name: {placeName}</Text>}
        </View>
      ) : (
        <Text>No location available</Text>
      )}
      <Button title="Get Location" onPress={getLocation} />
    </View>
  );
};
 
export default App;