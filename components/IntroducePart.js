import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '@ant-design/react-native/lib/button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function IntroducePart({ imgURL, description }) {
    return (
        <View className="relative">
            <Image source={imgURL} alt="location slide" className="w-full h-80 object-cover " />
            <View className="absolute top-10 left-5">
                <Text
                    className="text-4xl  text-primary"
                    style={{
                        color: '#212460',
                        fontWeight: 800,
                    }}
                >
                    BK - <Text style={{ color: 'red' }} className="text-secondary">Travel</Text>
                </Text>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: hp('1%'), marginTop: hp('1%'), paddingHorizontal: wp('2%'), paddingVertical: wp('3%') }}>
                    <Text
                        style={{
                            fontSize: hp('2%'),
                            fontWeight: 'regular',
                            color: 'white',
                            width: hp('40%'),
                            height: hp('8%'),
                        }}
                    >{description}</Text>
                </View>
               
                <Button style={{ 
                    width: hp('20%'),
                    height: hp('5%'),
                    marginTop: 10,
                    borderRadius: 10,
                }} type="primary">Đặt tour ngay</Button>
            </View>
        </View>
    )
}