import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';

import firebase from 'firebase';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <View>
            <TextInput
                placeholder="name"
                onChangeText={(name) => setName(name)}
            />
            <TextInput
                placeholder="email"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />

            <Button
                onPress={() => onSignUp()}
                title="Sign Up"
            />
        </View>
    )
}

