import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

 type HomeScreenProps = {
  navigation: any; 
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handlePress = () => {
    if (validateEmail(email)) {
      navigation.navigate('ListScreen');
    } else {
      Alert.alert('Invalid Email', 'Please enter valid email address.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email..."
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Submit" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default HomeScreen;
