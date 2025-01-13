import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default () => {
    return(
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={20} name="home" color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={20} name="user" color={color} />
                }}
            />
        </Tabs>
    )
}