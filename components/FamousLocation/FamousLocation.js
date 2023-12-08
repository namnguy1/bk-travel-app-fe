import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { IntroduceImage } from '../../constants'
export default function FamousLocation() {
    const [famousLocation, setFamousLocation] = useState([
        {
            id: 1,
            url: IntroduceImage[0],
            cityName: 'Thành Phố Hồ Chí Minh'
        },
        {
            id: 2,
            url: IntroduceImage[1],
            cityName: 'Thành Phố Đà lạt'
        },
        {
            id: 3,
            url: IntroduceImage[2],
            cityName: 'Thành Phố Hà Nội'
        },
        {
            id: 4,
            url: IntroduceImage[3],
            cityName: 'Thành Phố Hà Nội'
        }
    ])
    return (
        <View>
            <FlatList
                data={famousLocation}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) =>
                    <View
                        style={{
                            marginTop: 15,
                            marginRight: 30,
                            position: 'relative',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={item.url}
                            style={{
                                width: 250,
                                height: 150,
                                resizeMode: 'cover',
                                borderRadius: 25
                            }}
                        />
                        <Text
                            style={{
                                position: 'absolute',
                                fontWeight: 900,
                                fontSize: 18,
                                backgroundColor: 'rgba(0, 0, 0, 0.2)', // Tùy chỉnh màu nền nếu cần thiết
                                bottom: 0,
                                paddingHorizontal: 10, // Tùy chỉnh padding cho chữ
                                color: 'white', // Tùy chỉnh màu chữ
                            }}
                        >
                            {item.cityName}
                        </Text>
                    </View>
                }
            />
        </View>
    )
}