import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'; 

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        position: 'absolute', 
                    },
                    default: {},
                }),
            }}
        >
            <Tabs.Screen
                name="index" 
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="about" 
                options={{
                    title: 'Sobre a Loja',
                    tabBarIcon: ({ color }) => <Ionicons name="information-circle-outline" size={28} color={color} />, 
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Carrinho',
                    tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={28} color={color} />,
                }}
            />
        </Tabs>
    );
}
