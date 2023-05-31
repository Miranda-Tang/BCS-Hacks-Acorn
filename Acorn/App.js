import React from "react";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import HomeCalendarScreen from "./app/Screens/HomeCalendarScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function WelcomeScreen({ navigation }) {
	return (
		<View
			style={{
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#EEE4FF",
				width: "100%",
				height: "100%",
			}}
		>
			<Image
				source={require("/app/assets/acorn-logo.png")}
				style={{
					width: 100,
					height: 130,
				}}
			/>
			<TouchableOpacity
				onPress={() => navigation.navigate("LoginScreen")}
				style={{
					marginTop: 20,
					width: 150,
					height: 30,
					justifyContent: "center",
					alignItems: "center",
					padding: 10,
					borderRadius: 40,
					backgroundColor: "#bface2",
				}}
			>
				<Text
					style={{
						fontWeight: "bold",
						fontSize: 16,
						color: "#EEE4FF",
					}}
				>
					Sign In
				</Text>
			</TouchableOpacity>
		</View>
	);
}

function LoginScreen({ navigation }) {
	const [username, onChangeUsername] = React.useState();
	const [password, onChangePassword] = React.useState();

	return (
		<View
			style={{
				backgroundColor: "#f5f5f5",
				width: "100%",
				height: "100%",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Image
				source={require("/app/assets/acorn-logo-login.png")}
				style={{
					height: 120,
					width: 120,
				}}
			/>
			<Text
				style={{
					color: "#655DBB",
					fontWeight: "bold",
					fontSize: 27,
				}}
			>
				acorn
			</Text>
			<TextInput
				style={{
					height: 40,
					margin: 12,
					borderWidth: 1,
					padding: 10,
					borderRadius: 40,
				}}
				onChangeText={onChangeUsername}
				value={username}
				placeholder="Username"
				placeholderTextColor="#d3d3d3"
			/>
			<TextInput
				style={{
					height: 40,
					margin: 12,
					borderWidth: 1,
					padding: 10,
					borderRadius: 40,
				}}
				onChangeText={onChangePassword}
				value={password}
				secureTextEntry={true}
				placeholder="Password"
				placeholderTextColor="#d3d3d3"
			/>
			<TouchableOpacity
				onPress={() => navigation.navigate("HomeCalendarScreen")}
				style={{
					marginTop: 20,
					width: 150,
					height: 30,
					justifyContent: "center",
					alignItems: "center",
					padding: 10,
					borderRadius: 40,
					backgroundColor: "#655DBB",
				}}
			>
				<Text
					style={{
						fontWeight: "bold",
						fontSize: 16,
						color: "#EEE4FF",
					}}
				>
					Sign In
				</Text>
			</TouchableOpacity>
		</View>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="WelcomeScreen">
				<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen
					name="HomeCalendarScreen"
					component={HomeCalendarScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
		// <WelcomeScreen />
		// <LoginScreen />
		// <HomeCalendarScreen />
	);
}
