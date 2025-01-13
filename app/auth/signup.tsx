import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const Signup = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Sign up page works!</Text>
            </View>
        </SafeAreaView>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {},
    title: {}
})