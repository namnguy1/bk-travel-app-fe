import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Homeheader() {
  return (
    <View className="flex-row items-center justify-between p-3 ">
      <View className="mx-4 relative z-50">
        <View
          className="flex-row justify-end items-center rounded-full border-2 border-black"
          style={{
            backgroundColor: 'white',
            height: hp(6.5), width: hp(35), padding: 13
          }}
        >
          <TextInput placeholder="Pho nui gia lai"
            placeholderTextColor={'black'}
            className="pl-6 h-10 flex-1 text-base"
          />
          <TouchableOpacity>
            <MagnifyingGlassIcon size="25" color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => { }}>
        <Icon name="shopping-cart" size={35} color="black" />
      </TouchableOpacity>
    </View>
  )
}