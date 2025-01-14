import React, { useState } from 'react';
import { router } from 'expo-router';
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

// Firebase functions
import { getAuth } from 'firebase/auth';
import { firestoreDB } from '@/config/firebaseConfig';
import { collection, doc, addDoc } from 'firebase/firestore';

const Form = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const auth = getAuth();
    const user = auth.currentUser;
    const tasksCollection = collection(firestoreDB, 'tasks');

    const addTask = async () => {
        try {
            if (user) {
                await addDoc(tasksCollection, { title, date, complete: false, description, userId: user.uid });
                setTitle('');
                setDate('');
                setDescription('');
            }
        } catch (error: any) {
            alert(`error: ${error.message}`);
        }
    }

    const goBack = () => {
        router.replace("/(tabs)/home");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Create new task</Text>

            {/* Form box */}
            <View style={styles.input_box}>
                <View style={styles.input_field}>
                    <Text style={styles.label}>Task Title</Text>
                    <TextInput
                        style={styles.task_title}
                        placeholder='Title'
                        placeholderTextColor='#989898'
                        value={title}
                        onChangeText={setTitle}
                    />
                </View>
                <View style={styles.input_field}>
                    <Text style={styles.label}>Expiration Date</Text>
                    <TextInput
                        style={styles.task_title}
                        placeholder='YYYY-MM-DD format'
                        placeholderTextColor='#989898'
                        value={date}
                        onChangeText={setDate}
                    />
                </View>
                <View style={styles.input_field}>
                    <Text style={styles.label}>Task Description</Text>
                    <TextInput
                        style={styles.description}
                        placeholder='Content of the task'
                        placeholderTextColor='#989898'
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>
            </View>

            {/* Buttons */}
            <View style={styles.add_button}>
                <TouchableOpacity onPress={addTask}>
                    <Text style={styles.button_text}>Add Task</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cancel_button}>
                <TouchableOpacity onPress={goBack}>
                    <Text style={styles.cancel_text}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Form;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 20
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Poppins'
    },
    input_box: {
        width: '90%'
    },
    input_field: {
        marginBottom: 20
    },
    label: {
        fontSize: 18,
        fontWeight: 'semibold',
        fontFamily: 'Poppins',
        marginBottom: 15
    },
    task_title: {
        height: 60,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#989898',
        fontFamily: 'Poppins'
    },
    description: {
        height: 70,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#989898',
        borderRadius: 10,
        fontFamily: 'Poppins'
    },
    add_button: {
        width: '90%',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#000000'
    },
    cancel_button: {
        width: '90%',
        paddingVertical: 15,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#FFFFFF'
    },
    button_text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#FFFFFF'
    },
    cancel_text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Poppins'
    }
})