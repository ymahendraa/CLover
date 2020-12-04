import React from 'react';
import { View, StyleSheet, Button, TextInput, Text, TouchableOpacity} from 'react-native';
import {Header} from '../../components/Header';
const Register = () => {
    return (
    <>
        <Header goBack title="Registrasi Akun"/>
        <View>
            <View>
                <Text>E-Money</Text>
                <TextInput placeholder="Email"/>
                <TextInput placeholder="Password" secureTextEntry/>
                <TextInput placeholder="Nama"/>
                <TextInput placeholder="No. Handphone"/>

                <Button  title="SUBMIT"/>
            </View>
        </View>
    </>
    );
}

const Styles = StyleSheet.create({
    register: {
        fontSize: 15,
        fontWeight: "600",
        color: "black",
        textAlign: "center"
      },
});

export default Register;