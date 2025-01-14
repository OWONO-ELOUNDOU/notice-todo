import React, { useState } from 'react';
import { auth } from '@/config/firebaseConfig';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Firebase functions
import { getAuth } from 'firebase/auth';
import { firestoreDB } from '@/config/firebaseConfig';
import { collection, getDoc, doc, query, where } from 'firebase/firestore';

const Profile = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const [profile, setProfile] = useState<any>({});

    const fetchUser = async () => {
        if (user) {
            const userRef = doc(firestoreDB, "users", user.uid);
            const userSnap = await getDoc(userRef);
            setProfile(userSnap.data());
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.picture}>
                <Image style={styles.image} source={require('../../assets/images/adaptive-icon.png')} />
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>First Name</Text>
                <Text style={styles.text}>{profile.firstName ? profile.firstName : 'John Doe'}</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Last Name</Text>
                <Text style={styles.text}>{profile.lastName ? profile.lastName : 'Richard Nelson'}</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Email Address</Text>
                <Text style={styles.text}>{user?.email}</Text>
            </View>

            {/* Sign Out */}
            <View style={styles.signout}>
                <Text style={styles.signout_text}>Sign Out</Text>
                <TouchableOpacity onPress={() => auth.signOut()}>
                    <Text style={styles.signout_button}>
                        <FontAwesome size={20} name='sign-out' />
                        Sign Out
                    </Text>
                </TouchableOpacity>
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
    },
    signout: {
        width: '100%',
        marginTop: 30
    },
    signout_text: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginBottom: 30,
    },
    signout_button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 20,
        borderRadius: 30,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#000000'
    }
})