import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react'
import FeaturedTourList from './FeaturedTourList'
import { IntroduceImage } from '../../constants'
export default function FeaturedTour() {
    //list of feature tour
    const [featuredTour, setFeaturedTour] = useState([
        {
            id: 1,
            url: IntroduceImage[0],
            date: '12/10/2023',
            dateOfTour: '4 ngày 3 đêm',
            title: 'Tour tham quan hội an với xe đón chung và riêng',
            startingPlace: 'TP Hồ Chí Minh',
            availableSeat: 10,
            reservationDeadline: '10/10/2023',
            price: '10.500.802'
        },
        {
            id: 2,
            url: IntroduceImage[1],
            date: '12/10/2023',
            dateOfTour: '4 ngay 3 dem',
            title: 'Tour tham quan hoi an voi xe don chung/rieng',
            startingPlace: 'TP Ho Chi Minh',
            availableSeat: 10,
            reservationDeadline: '10/10/2023',
            price: '10.500.802'
        },
        {
            id: 3,
            url: IntroduceImage[2],
            date: '12/10/2023',
            dateOfTour: '4 ngày 3 đêm',
            title: 'Tour tham quan hội an với xe đón chung và riêng',
            startingPlace: 'TP Hồ Chí Minh',
            availableSeat: 10,
            reservationDeadline: '10/10/2023',
            price: '10.500.802'
        },
    ])
    return (
        <View>
            <FlatList
                data={featuredTour}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) =>
                    <FeaturedTourList item={item} index={index}/>
                }
            />
        </View>
    )
}