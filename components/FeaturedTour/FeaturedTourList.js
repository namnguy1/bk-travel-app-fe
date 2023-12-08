import { View, Text, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function FeaturedTourList(props) {
    const { item, index } = props
    return (
        <View style={{
            width: wp('60%'),

            marginTop: 15,
            marginRight: 30
        }}>
            <Image
                source={item.url}
                style={{
                    width: 250,
                    height: 150,
                    resizeMode: 'cover',
                    borderRadius: 25
                }}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#686868'
                }}>{item.date} -
                </Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#686868'
                }}> {item.dateOfTour}
                </Text>
            </View>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black'
                }}
            >{item.title}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text>Nơi khởi hành:</Text>
                <Text>{item.startingPlace}</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text>Số chỗ trống:</Text>
                <Text>{item.availableSeat}</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text>Hạn đặt chỗ:</Text>
                <Text>{item.reservationDeadline}</Text>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text
                    style={{
                        fontSize: 25,
                        color: "#ff5f73",
                        fontWeight: "bold",
                    }}
                >đ {item.price}</Text>
            </View>


        </View>
    )
}