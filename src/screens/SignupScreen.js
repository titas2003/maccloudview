import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import LottieView from "lottie-react-native";

const SignupScreen = ({ goBack }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [govId, setGovId] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        // ✅ Basic validation
        if (!name || !email || !phone || !password || !govId) {
            Alert.alert("Error", "Please fill all fields");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5005/api/user/register", // 🔥 CHANGE THIS
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        password,
                        govId,
                    }),
                }
            );

            // ✅ Safe JSON parsing
            let data = {};
            try {
                data = await response.json();
            } catch (e) {
                data = {};
            }

            console.log("Signup Response:", data);

            if (response.ok) {
                Alert.alert(
                    "Registration Successful 🎉",
                    `Your Client ID: ${data?.user?.clientId}`
                );

                // Reset form
                setName("");
                setEmail("");
                setPhone("");
                setPassword("");
                setGovId("");

                goBack(); // return to login
            } else {
                Alert.alert(
                    "Error",
                    data?.message || "Signup failed. Please try again."
                );
            }
        } catch (error) {
            console.log("Signup Error:", error);
            Alert.alert("Error", "Network error. Check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Lottie */}
            <LottieView
                source={require("../../assets/lottie/Success_law.json")}
                autoPlay
                loop
                style={styles.lottie}
            />

            {/* Card */}
            <View style={styles.card}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>
                    Allow Advocacy at your service
                </Text>

                {/* Name */}
                <View style={styles.inputContainer}>
                    <Icon name="user" size={18} color="#7A7A7A" />
                    <TextInput
                        placeholder="Full Name"
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                {/* Email */}
                <View style={styles.inputContainer}>
                    <Icon name="mail" size={18} color="#7A7A7A" />
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Phone */}
                <View style={styles.inputContainer}>
                    <Icon name="phone" size={18} color="#7A7A7A" />
                    <TextInput
                        placeholder="Phone"
                        keyboardType="phone-pad"
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>

                {/* Gov ID */}
                <View style={styles.inputContainer}>
                    <Icon name="credit-card" size={18} color="#7A7A7A" />
                    <TextInput
                        placeholder="Identity Number"
                        style={styles.input}
                        value={govId}
                        onChangeText={setGovId}
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

                {/* Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignup}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Sign Up</Text>
                    )}
                </TouchableOpacity>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={goBack}>
                        <Text style={styles.login}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7FB",
    },

    lottie: {
        backgroundColor: "#96cadd",
        width: "100%",
        height: 350,
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

    button: {
        backgroundColor: "#96cadd",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 10,
    },

    buttonText: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 16,
    },

    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },

    footerText: {
        color: "#666",
    },

    login: {
        color: "#3D6DCC",
        fontWeight: "600",
    },
});