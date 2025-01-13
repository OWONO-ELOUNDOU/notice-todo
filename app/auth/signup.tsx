import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// Firebase functions
import { auth } from '@/config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async () => {
       try {
           const user = await createUserWithEmailAndPassword(auth, email, password);
           if (user) router.replace("/(tabs)/home");
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } 
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Notice</Text>
            <View style={styles.input_fields}>
                <View style={styles.input_box}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={"#BBBBBB"}
                        placeholder='Your email address'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.input_box}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={"#BBBBBB"}
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={signUp}>
                    <Text style={styles.signup_button}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <Text>Already Member ? <Link href="/auth/login">Login</Link></Text>
        </View>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 40
    },
    logo: {
        fontSize: 55,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        letterSpacing: 1.5
    },
    input_fields: {
        width: '100%',
        height: 'auto'
    },
    input_box: {
        marginBottom: 15
    },
    label: {
        fontSize: 15,
        fontWeight: 'semibold',
        fontFamily: 'Poppins',
        marginBottom: 10
    },
    input: {
        height: 50,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#969391',
    },
    button: {
        width: '100%',
    },
    signup_button: {
        paddingVertical: 20,
        borderRadius: 30,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#000000'
    }
})