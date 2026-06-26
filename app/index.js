import { View, Text } from "react-native";

export default function MainPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Welcome to the Main Page!
      </Text>
    </View>
  );
}
