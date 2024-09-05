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
        <Text style={[styles.teksPendek]}>Welcome Back!</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 35,
          paddingBottom: 8,
        }}>
        <Image source={require('./src/image_3.png')} />
      </View>

      <View>
        <TextInput
          style={[styles.content]}
          placeholder="Enter your email"></TextInput>

        <TextInput
          style={[styles.content]}
          placeholder="Confirm password"
          secureTextEntry={true}></TextInput>

        <TouchableOpacity>
          <Text style={[styles.forget]}>Forget Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.login}>
          <Text style={{color: '#fafafa', fontWeight: 600, fontSize: 20}}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.footer, {color: 'black'}]}>
            Already have an account?{' '}
            <Text style={{color: '#50c2c9', fontWeight: 500}}>Register</Text>
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

  login: {
    backgroundColor: '#50c2c9',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 40,
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
    fontWeight: 600,
  },

  forget: {
    paddingHorizontal: 60,
    textAlign: 'center',
    paddingTop: 20,
    marginVertical: 30,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#50c2c9',
    fontWeight: 500,
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
