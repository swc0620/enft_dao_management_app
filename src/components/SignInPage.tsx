import {StatusBar} from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SignInPage = ({navigation}: any) => {
    const correctPassword = "enft"
    const [inputID, setInputID] = useState<string>();
    const [inputPassword, setInputPassword] = useState<string>();
   
    const [min, setMin] = useState(3);
    const [sec, setSec] = useState(0);
    const time = useRef(180);
    const timerId = useRef<any>(null);
    const flag = useRef(false);

    const startCounting = () => {
        flag.current = true;
        timerId.current = setInterval(() => {
            setMin(Math.floor(time.current / 60));
            setSec(time.current % 60);
            time.current -= 1;
        }, 1000);
    }

    useEffect(() => {
        if (time.current <= 0) {
            flag.current = true;
            time.current = 180
            clearInterval(timerId.current);
        }
    }, [sec]);

    const displayTime = () => {
        if (time.current === 180) {
            return " "
        } else {
            return `${min}:${sec.toString().padStart(2, '0')}`
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../images/telegram-logo.png")} />
            <StatusBar style="auto"/>
            <View style={styles.inputView}>    
                <TextInput
                    style={styles.TextInput}
                    placeholder="Telegram ID"
                    placeholderTextColor="#003f5c"
                    underlineColorAndroid="transparent"
                    onChangeText={(inputText) => {setInputID(inputText)}}
                />
            </View>
            <View style={styles.inputView}>    
                <TextInput
                    style={styles.TextInput}
                    placeholder="Passcode"
                    placeholderTextColor="#003f5c"
                    underlineColorAndroid="transparent"
                    onChangeText={(inputText) => {setInputPassword(inputText)}}
                />
            </View>
            <TouchableOpacity
                style={styles.sendBtn}
                onPress={startCounting}
                disabled={flag.current}
            >
                <Text >Send Passcode</Text>
            </TouchableOpacity>
            <View style={styles.time}>
                <Text style={styles.timeText}>{`${displayTime()}`}</Text>
            </View>
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => {
                    if (inputPassword === correctPassword) {
                        navigation.navigate("TABBAR")
                    }
                }}
            >
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignInPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "40%",
        height: "30%",
        resizeMode: 'contain',
        marginBottom: 30
      },    
    inputView: {
        backgroundColor: "#6CC1E3",
        borderRadius: 5,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "space-between"
    },
    TextInput: {
        backgroundColor: "#6CC1E3",
        height: 50,
        flex: 1,
    },
    sendBtn: {
        height: 20,
    },
    time: {
        height: 30,
        marginBottom: 20,
    },
    timeText: {
        color: 'red'
    },
    loginBtn: {
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: "#4995BE",
        borderRadius: 5,
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
})