import React from 'react';
import { StyleSheet, SafeAreaView, Image, StatusBar, View, TouchableOpacity } from 'react-native';
import COLORS from '../../consts/colors';

const OnboardScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar transluent backgroundColor={COLORS.transparent} />
            <Image
                source={require('../../assets/SystemImages/Room.jpg')}
                style={styles.image}
            />
            <View style={styles.indicatorContainer}>
                <View style={styles.indicator}></View>
                <View style={styles.indicator}></View>
                <View style={styles.indicator}></View>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <View>
                    <View  >Find Your</View>
                    <View  >sweet home</View>
                </View>
            </View>

            <TouchableOpacity
                // style={styles.Button}
                onPress={() => { props.navigation.navigate("Home") }}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    image: {
        height: 420,
        width: '100%',
        borderBottomLeftRadius: 100,
    },
    indicatorContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: COLORS.grey,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    indicatorActive: {
        backgroundColor: COLORS.dark,
    },
});

export default OnboardScreen;