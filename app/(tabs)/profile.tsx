import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
    return(
        <View style={styles.container}>
            <View style={styles.picture}>
                <Image style={styles.image} source={require('../../assets/images/adaptive-icon.png')} />
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>First Name</Text>
                <Text style={styles.text}>John Doe</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Last Name</Text>
                <Text style={styles.text}>Richard Nelson</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Email Address</Text>
                <Text style={styles.text}>JohnDoe@outlook.com</Text>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF'
    },
    picture: {
        width: 200,
        height: 200,
        marginBottom: 30,
        borderWidth: 2,
        borderColor: '#D4D5D6',
        borderRadius: '50%',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    field: {
        width: '100%',
        padding: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E4E5E6'
    },
    label: {
        fontSize: 15,
        fontWeight: 'semibold',
        fontFamily: 'Poppins',
        color: '#949596',
        marginBottom: 15
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins'
    }
})