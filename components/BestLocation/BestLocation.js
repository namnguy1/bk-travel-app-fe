import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { IntroduceImage } from '../../constants'
import BestLocationList from './BestLocationList'
import { useState } from 'react'
export default function BestLocation() {
  const [bestLocation, setBestLocation] = useState([
    {
      id: 1,
      name: 'Đà nẵng',
      detailTour: [
        {
          name: 'Bà nà hill',
          url: IntroduceImage[0],
          description: 'thông tin chi tiết...'
        },
        {
          name: 'Bà nà hill',
          url: IntroduceImage[5],
          description: 'thông tin chi tiết...'
        },
        {
          name: 'Bà nà hill',
          url: IntroduceImage[4],
          description: 'thông tin chi tiết...'
        }
      ]
    },
    {
      id: 2,
      name: 'Đà nẵng',
      detailTour: [
        {
          name: 'Bà nà hill',
          url: IntroduceImage[0],
          description: 'thông tin chi tiết...'
        },
        {
          name: 'Bà nà hill',
          url: IntroduceImage[1],
          description: 'thông tin chi tiết...'
        },
        {
          name: 'Bà nà hill',
          url: IntroduceImage[2],
          description: 'thông tin chi tiết...'
        }
      ]
    },
    {
      id: 3,
      name: 'Đà nẵng',
      detailTour: [
        {
          name: 'Bà nà hill',
          url: IntroduceImage[0],
          description: 'thông tin chi tiết...'
        },
        {
          name: 'Bà nà hill',
          url: IntroduceImage[1],
          description: 'thông tin chi tiết...'
        },
        {
          name: 'Bà nà hill',
          url: IntroduceImage[2],
          description: 'thông tin chi tiết...'
        }
      ]
    }
  ])
 
  return (

    <FlatList
      style = {{
        flex:1,
      }}
      data={bestLocation}
      horizontal={true}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) =>
        <BestLocationList item={item} index={index} />
      }
    />


  )
}