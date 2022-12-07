import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import * as Location from 'expo-location';

import mapStyles from '../assets/styles/mapStyles';
import {
    getAddressFromLocation,
    getGasStations,
    getDistanceFromLatLonInKm,
} from '../services/map';
import BottomBar from './BottomBar';

export default function Map() {
    const [address, setAddress] = useState(null);
    const [location, setLocation] = useState(null);
    const [gasStations, setGasStations] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied');
                return;
            }
            const loc = await Location.getCurrentPositionAsync({});
            setLocation(loc.coords);
            getAddressFromLocation(
                loc.coords.longitude,
                loc.coords.latitude
            ).then((res) => {
                setAddress(res);
            });
        })();
    }, []);

    useEffect(() => {
        if (!address) {
            return;
        }
        getGasStations(address.city).then((res) => {
            setGasStations(res);
        });
    }, [address]);

    useEffect(() => {
        if (!gasStations) {
            return;
        }
        setGasStations(
            gasStations.sort((a, b) => {
                return (
                    getDistanceFromLatLonInKm(
                        location.latitude,
                        location.longitude,
                        a.geometry.coordinates[1],
                        a.geometry.coordinates[0]
                    ) -
                    getDistanceFromLatLonInKm(
                        location.latitude,
                        location.longitude,
                        b.geometry.coordinates[1],
                        b.geometry.coordinates[0]
                    )
                );
            })
        );
        setIsLoading(false);
        console.log(gasStations);
    }, [gasStations, location]);

    if (isLoading) {
        return (
            <View style={mapStyles.loading}>
                <ActivityIndicator color="red" />
            </View>
        );
    }

    return (
        <View style={mapStyles.container}>
            <Text style={mapStyles.title}>Map</Text>
            <Text>
                {error ? error : address?.label ?? 'Adresse introuvable'}
            </Text>
            {gasStations
                ? gasStations.map((stat) => {
                      return (
                          <View key={stat.recordid}>
                              <Text key={stat.recordid}>
                                  {`${stat.fields.adresse} - ${getDistanceFromLatLonInKm(
                                      location.latitude,
                                      location.longitude,
                                      stat.geometry.coordinates[1],
                                      stat.geometry.coordinates[0]
                                  ).toFixed(2)} km`}
                              </Text>
                          </View>
                      );
                  })
                : null}
            <BottomBar />
        </View>
    );
}
