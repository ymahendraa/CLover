import React from 'react';
import { View, StyleSheet, Button, TextInput, Text, TouchableOpacity} from 'react-native';

const Login = () => {
    return (
        <View>
            <View>
                <Text>E-Money</Text>
                <TextInput placeholder="Email"/>
                <TextInput placeholder="Password" secureTextEntry/>
                <Button  title="LOGIN"/>
                <TouchableOpacity style={Styles.register}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
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

export default Login;