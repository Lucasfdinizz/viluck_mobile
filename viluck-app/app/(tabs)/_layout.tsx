// app/tabs/_layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'; // Importando os ícones necessários

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
                name="index" // Tela Home
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />, // Ícone para Home
                }}
            />
            {/* Tela Sobre a Loja */}
            <Tabs.Screen
                name="about" // Nome da tela "Sobre a Loja"
                options={{
                    title: 'Sobre a Loja',
                    tabBarIcon: ({ color }) => <Ionicons name="information-circle-outline" size={28} color={color} />, // Ícone para Sobre a Loja
                }}
            />
            {/* Tela Carrinho com ícone de carrinho */}
            <Tabs.Screen
                name="explore" // Tela Carrinho
                options={{
                    title: 'Carrinho',
                    tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={28} color={color} />, // Ícone de Carrinho
                }}
            />
        </Tabs>
    );
}
