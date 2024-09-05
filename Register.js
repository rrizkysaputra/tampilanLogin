import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#eeeeee'}}>
      <View>
        <Image source={require('./src/image_1.png')} />

        <Text style={[styles.teksPendek]}>Welcome Onbard!</Text>

        <Text style={[styles.teksPanjang]}>
          Let’s help you meet up your tasks.
        </Text>

        <TextInput
          style={[styles.content]}
          placeholder="Enter your full name"></TextInput>

        <TextInput
          style={[styles.content]}
          placeholder="Enter your email"></TextInput>

        <TextInput
          style={[styles.content]}
          placeholder="Create password"
          secureTextEntry={true}></TextInput>

        <TextInput
          style={[styles.content]}
          placeholder="Confirm password"
          secureTextEntry={true}></TextInput>

        <TouchableOpacity style={styles.register}>
          <Text style={{color: '#fafafa', fontWeight: 600, fontSize: 20}}>
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.footer, {color: 'black'}]}>
            Already have an account?{' '}
            <Text style={{color: '#50c2c9', fontWeight: 500}}>Login</Text>
          </Text>
        </TouchableOpacity>
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
    fontWeight: 900,
  },

  teksPanjang: {
    paddingHorizontal: 60,
    textAlign: 'center',
    paddingTop: 20,
    marginBottom: 50,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  register: {
    backgroundColor: '#50c2c9',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 60,
    padding: 10,
    borderRadius: 22,
    elevation: 3,
  },

  content: {
    backgroundColor: '#ffffff',
    elevation: 1,
    marginHorizontal: 40,
    marginTop: 18,
    borderRadius: 22,
    paddingHorizontal: 20,
  },

  footer: {
    paddingHorizontal: 60,
    textAlign: 'center',
    paddingTop: 20,
    marginBottom: 80,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
