import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import LottieView from "lottie-react-native";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            {/* Lottie Animation */}
            <LottieView
                source={require("../../assets/lottie/women_justice.json")}
                autoPlay
                loop
                style={styles.lottie}
            />

            {/* Card */}
            <View style={styles.card}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Login to continue</Text>

                {/* Email */}
                <View style={styles.inputContainer}>
                    <Icon name="mail" size={18} color="#7A7A7A" />
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Password */}
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={18} color="#7A7A7A" />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                {/* Forgot Password */}
                <TouchableOpacity style={styles.forgot}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerContainer}>
                    <View style={styles.line} />
                    <Text style={styles.or}>OR</Text>
                    <View style={styles.line} />
                </View>

                {/* Lottie Google Alternative */}
                <TouchableOpacity style={styles.googleButton}>
                    <LottieView
                        source={require("../../assets/lottie/google.json")}
                        autoPlay
                        loop
                        style={styles.googleLottie}
                    />
                    <Text style={styles.googleText}>Continue</Text>
                </TouchableOpacity>

                {/* Signup */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.signup}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7FB",
    },

    lottie: {
        backgroundColor: "#093c3e",
        width: "100%",
        height: 250,
    },

    card: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },

    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#2C3E50",
    },

    subtitle: {
        color: "#7A7A7A",
        marginBottom: 20,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F1F4F9",
        borderRadius: 12,
        paddingHorizontal: 12,
        marginBottom: 15,
    },

    input: {
        flex: 1,
        padding: 12,
    },

    forgot: {
        alignSelf: "flex-end",
        marginBottom: 20,
    },

    forgotText: {
        color: "#4A90E2",
        fontSize: 12,
    },

    button: {
        backgroundColor: "#093c3e",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
    },

    buttonText: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 16,
    },

    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#E0E0E0",
    },

    or: {
        marginHorizontal: 10,
        color: "#999",
    },

    googleButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F1F4F9",
        padding: 12,
        borderRadius: 10,
    },

    googleLottie: {
        width: 30,
        height: 30,
        marginRight: 10,
    },

    googleText: {
        color: "#333",
        fontWeight: "500",
    },

    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },

    footerText: {
        color: "#666",
    },

    signup: {
        color: "#3D6DCC",
        fontWeight: "600",
    },
});