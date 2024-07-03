// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity, View, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';

const stories = [
    { id: '1', title: 'The Tortoise and the Hare', content: 'Once upon a time, there was a tortoise and a hare...' },
    { id: '2', title: 'The Boy Who Cried Wolf', content: 'There was once a shepherd boy who was bored...' },
    { id: '3', title: 'Cinderella', content: 'Once upon a time, in a land far away...' },
    { id: '4', title: 'Jack and the Beanstalk', content: 'Jack was a poor boy who lived with his mother...' },
    { id: '5', title: 'Little Red Riding Hood', content: 'Once upon a time, there was a little girl who wore a red cape...' },
];

const StoryList = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.storyContainer} onPress={() => navigation.navigate('Story', { story: item })}>
            <Text style={styles.storyTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={stories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

const StoryScreen = ({ route }) => {
    const { story } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{story.title}</Text>
                <Text style={styles.content}>{story.content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bedtime Stories</Text>
            <StoryList />
        </SafeAreaView>
    );
};

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={App} options={{ headerShown: false }} />
                <Stack.Screen name="Story" component={StoryScreen} options={{ headerTitle: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

registerRootComponent(Navigation);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginVertical: 20,
        textAlign: 'center',
    },
    list: {
        paddingBottom: 20,
    },
    storyContainer: {
        backgroundColor: '#1e1e1e',
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
    },
    storyTitle: {
        fontSize: 18,
        color: '#ffffff',
    },
    content: {
        fontSize: 16,
        color: '#d3d3d3',
    },
});