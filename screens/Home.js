import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

import Swiper from 'react-native-swiper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import IntroducePart from '../components/IntroducePart';
import { IntroduceImage } from '../constants'
import FeaturedTour from '../components/FeaturedTour/FeaturedTour';
import FamousLocation from '../components/FamousLocation/FamousLocation';
import BestLocation from '../components/BestLocation/BestLocation';
import Homeheader from '../components/Homeheader';
export default function Home() {
  return (

    <SafeAreaView className="flex-1"> 
      <Homeheader/>
      <ScrollView
      >
        <View style={{
          height: hp(36), width: wp('100%'),
          backgroundColor: 'black'
        }}>
          <Swiper
            activeDot={<View style={{ backgroundColor: '#007AFF', width: 15, height: 15, borderRadius: 50, marginLeft: 3, marginRight: 3 }} />}
            paginationStyle={{
              position: 'absolute', bottom: 20, left: -20
            }}
          >
            <IntroducePart
              imgURL={IntroduceImage[0]}
              description="Chào mừng bạn đến với thế giới của chúng tôi, nơi mà mỗi hành trình trở thành một cuộc phiêu lưu đặc biệt."
            />
            <IntroducePart
              imgURL={IntroduceImage[1]}
              description="Chào mừng bạn đến với thế giới của chúng tôi, nơi mà mỗi hành trình trở thành một cuộc phiêu lưu đặc biệt."
            />
            <IntroducePart
              imgURL={IntroduceImage[2]}
              description="Chào mừng bạn đến với thế giới của chúng tôi, nơi mà mỗi hành trình trở thành một cuộc phiêu lưu đặc biệt."
            />
            <IntroducePart
              imgURL={IntroduceImage[3]}
              description="Chào mừng bạn đến với thế giới của chúng tôi, nơi mà mỗi hành trình trở thành một cuộc phiêu lưu đặc biệt."
            />
            <IntroducePart
              imgURL={IntroduceImage[4]}
              description="Chào mừng bạn đến với thế giới của chúng tôi, nơi mà mỗi hành trình trở thành một cuộc phiêu lưu đặc biệt."
            />
            <IntroducePart
              imgURL={IntroduceImage[5]}
              description="Chào mừng bạn đến với thế giới của chúng tôi, nơi mà mỗi hành trình trở thành một cuộc phiêu lưu đặc biệt."
            />
          </Swiper>
        </View>
        <View
          className="mt-2 p-5"
          style={{ height: hp('15%'), width: wp('100%'), }}
        >
          <Text className="text-lg">Chào bạn !</Text>
          <Text className="text-3xl font-bold">Bạn đã chọn được địa điểm du lịch chưa ?</Text>
        </View>
        {/* Các tour nổi bật của BK Travel */}
        <View
          className="mt-2 p-5"
          style={{

            width: wp('100%'),
          }}
        >


          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{
              fontWeight: '600',
              fontSize: 17,
            }}>Các tour nổi bật của BK Travel</Text>
            <Text style={{
              fontWeight: '600',
              fontSize: 17,
              color: '#686868'
            }}>Xem thêm</Text>
          </View>
          <FeaturedTour />
        </View>
        {/* các địa điểm nổi bật của bk travel  */}
        <View style={{
          marginTop: 2,
          padding: 20,
          // height: 300,
          width: wp('100%'),
          // backgroundColor: 'black'
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{
              fontWeight: '600',
              fontSize: 17,
            }}>Các địa điểm nổi bật của BK Travel</Text>
            <Text style={{
              fontWeight: '600',
              fontSize: 17,
              color: '#686868'
            }}>Xem thêm</Text>
          </View>
          <FamousLocation />
        </View>
        {/* không thể không đến  */}
        <View style={{
          marginTop: 2,
          padding: 20,
          // height: 300,
          // backgroundColor:'red',
          width: wp('100%'),
          // backgroundColor: 'black'
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{
              fontWeight: '600',
              fontSize: 17,
            }}>Không thể không đến</Text>
            <Text style={{
              fontWeight: '600',
              fontSize: 17,
              color: '#686868'
            }}>Xem thêm</Text>
          </View>
          <BestLocation/>
        </View>
        <Text> Hello </Text>
      </ScrollView>
    </SafeAreaView>
  )
}
