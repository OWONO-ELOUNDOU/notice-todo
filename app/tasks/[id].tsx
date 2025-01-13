import React from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import { Link, Stack, useGlobalSearchParams } from 'expo-router';

// Font Awesome icons
import { FontAwesome } from '@expo/vector-icons';

// Import Constants
import {tasks} from "@/assets/tasks";
import { images } from "@/assets/images";

const Details = () => {
    const { id } = useGlobalSearchParams();
    const task = tasks[Number(id) - 1];

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerTitle: `Details of ${id}` }} />
            <View>
                <View style={styles.header}>
                    <Text style={styles.text}>Details for Task: {id}</Text>
                </View>
                <View style={styles.image_container}>
                    <Image source={task.picture ? task.picture : images.splash_icon} style={styles.image} />
                </View>
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.date}>Due Date : {task.dueDate}</Text>
                <Text style={styles.description}>
                    { task.description
                        ? task.description :
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore temporibus aperiam dolore?Earum, rerum modi ex architecto incidunt ducimus odio, alias veniam enim laborum repellendus, corrupti optio eos itaque?'
                    }
                </Text>

                <View style={styles.buttons}>
                    <Link style={styles.delete} href="/home">
                        <FontAwesome size={20} name='trash'/>
                        Delete
                    </Link>
                    <Link style={styles.done} href="/home">
                        <FontAwesome size={20} name='check'/>
                        Done
                    </Link>
                </View>
            </View>

            <View style={styles.buttons}>
                {
                    task.id > 1 ?
                        <Link style={styles.prev_btn} href={`/tasks/${Number(task.id) - 1}`}>Previous</Link>
                        : null
                }
                {
                    task.id === tasks.length - 1 ?
                        null
                        : <Link style={styles.next_btn} href={`/tasks/${Number(task.id) + 1}`}>Next</Link>
                }
            </View>
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: '#FFFFFF'
    },
    header: {
        width: '100%',
        paddingVertical: 15,
    },
    image_container: {
        width: '100%',
        height: 300,
        marginVertical: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E4E5E6'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Poppins'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        marginBottom: 15
    },
    date: {
        fontSize: 18,
        color: '#FF0000',
        marginBottom: 15
    },
    description: {
        fontSize: 15,
        lineHeight: 23,
        fontWeight: '600',
        marginBottom: 20
    },
    buttons: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    delete: {
        width: '48%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        borderRadius: 30,
        padding: 15,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ff0000',
        backgroundColor: '#ffdbdb',
    },
    done: {
        width: '48%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        borderRadius: 30,
        padding: 15,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#03a603',
        backgroundColor: '#dbfddb',
    },
    prev_btn: {
        width: '48%',
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 30,
        padding: 15,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#555555',
        backgroundColor: 'inherit',
    },
    next_btn: {
        width: '48%',
        borderRadius: 30,
        padding: 15,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#000000',
    }
})