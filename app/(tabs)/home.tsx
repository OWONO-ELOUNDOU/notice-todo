import React, { useEffect, useState } from 'react';
import { Link, router } from "expo-router";
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

// Font Awesome Icons
import { FontAwesome } from '@expo/vector-icons';

// Firebase function
import { getAuth } from '@firebase/auth';
import { firestoreDB } from '@/config/firebaseConfig';
import { collection, getDocs, doc, query, where } from 'firebase/firestore';

const Home = () => {
    getAuth().onAuthStateChanged((user) => {
        if (!user) router.replace("/auth/login");
    });
    const [tasks, setTasks] = useState<any>([]);
    const auth = getAuth();
    const user = auth.currentUser;
    const tasksCollection = collection(firestoreDB, 'tasks');

    const fetchTasks = async () => {
        if (user) {
            const q = query(tasksCollection, where("userId", "==", user.uid));
            const data = await getDocs(q);
            setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } else {
            console.log("No user logged in");
        }
    }

    useEffect(() => {
        fetchTasks();
    }, [user]);

    return (
        <ScrollView alwaysBounceVertical={true} style={styles.container}>
            <View style={styles.header}>
                <Link style={styles.add} href="/form">
                    <FontAwesome size={20} name='plus' />
                    Add
                </Link>
            </View>
            <Text style={styles.title}>All Tasks</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.card_info}>
                            <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                            </svg>
                            <Text style={styles.due_date}>Due date: {item.date}</Text>
                        </View>
                        <View style={styles.card_info}>
                            <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"></path>
                            </svg>
                            <Text>{item.title}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: "#FFFFFF"
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20
    },
    add: {
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 30,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF',
        backgroundColor: '#000000'
    },
    icon: {
        width: 25,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: "Poppins",
        marginBottom: 20
    },
    subtitle: {
        fontSize: 18,
        fontFamily: "Poppins",
        color: "#55555",
        marginBottom: 20
    },
    card: {
        width: "100%",
        padding: 20,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 10,
        borderWidth: 1,
        borderColor: "#E3E4E7",
        borderRadius: 10,
        fontFamily: "Poppins",
        marginBottom: 15
    },
    card_info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 10
    },
    due_date: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#999999'
    }
})