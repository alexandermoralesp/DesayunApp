import { Animated, FlatList, StyleSheet, View } from 'react-native'
import OnBoardingItem from '../components/OnBoardingItem'
import Paginator from '../components/Paginator'
import React, { useState, useRef } from 'react'
import { primaryColor, secondaryColor } from '../utils/constants/colors'

const items = [
    {
        id: 1,
        title: "Pide tu desayuno cuando quieras",
        description: "Nosotros nos preocupamos en entregarte donde quieras.",
        image: require("../assets/images/onboarding_one.png")
    },
    {
        id: 2,
        title: "Ya no salgas a buscar",
        description: "Nuestro delivery personalizado se encargara de dar desayunos.",
        image: require("../assets/images/onboarding_two.png")
    },
    {
        id: 3,
        title: "Reserva tu pedido",
        description: "Haz tu pedido semanal. Nosotros nos encargaremos de que llegue a la hora",
        image: require("../assets/images/onboarding_three.png")
    },
]

const OnBoardingScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const slidesRef = useRef(null);

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={items} renderItem={({ item }) =>
                        <OnBoardingItem item={item}
                            navigation={navigation}
                        />}
                    horizontal
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([
                        {
                            nativeEvent:
                            {
                                contentOffset:
                                    { x: scrollX }
                            }
                        }], {
                        useNativeDriver: false,
                    })}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    slidesRef={slidesRef}
                />
            </View>
            <Paginator data={items} scrollX={scrollX} />
        </View>
    )
}

const styles = StyleSheet.create({
    body:
    {
        flex: 1, justifyContent: "center",
        backgroundColor: primaryColor
    },
    container:
    {
        flex: 3
    }
});

export default OnBoardingScreen