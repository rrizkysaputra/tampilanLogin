import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View>
        <View>
          <Image source={require('./src/image_1.png')} />
        </View>

        <View>
          <Text style={[styles.teksPendek, {fontWeight: 900}]}>
            Welcome Onbard!
          </Text>
        </View>

        <View style={styles.teksPanjang}>
          <Text style={{color: 'black', alignContent: 'center'}}>
            Let’s help you meet up your tasks.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.register}>
        <Text style={{color: '#fafafa', fontWeight: 600, fontSize: 20}}>
          Register
        </Text>
      </TouchableOpacity>

      <View style={styles.teksPanjang}>
        <Text style={{color: 'black', alignContent: 'center'}}>
          Already have an account? Login
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  teksPendek: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    paddingTop: 40,
  },

  teksPanjang: {
    paddingHorizontal: 60,
    paddingTop: 20,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  register: {
    backgroundColor: '#50c2c9',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 20,
    padding: 10,
    borderRadius: 22,
    elevation: 3,
  },
});

export default App;
