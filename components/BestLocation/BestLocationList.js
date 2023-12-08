import { View, Text, Image } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function BestLocationList(props) {
    const { item, index } = props;

    return (
        <View
            style={{
                flex: 1,
                width: wp('60%'),
                marginTop: 10,
                backgroundColor: 'white',
                marginRight: 30,
                borderRadius: 15
            }}
        >
            <View
                style={{
                    borderBottomColor: '#e7e7e',
                    borderBottomWidth: 0.5
                }}
            >
                <Text
                    style={{
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        fontSize: 24,
                    }}
                >
                    {item.name}
                </Text>
            </View>


            {item.detailTour.map((tour, index) => (
                <View
                    style={{
                        // width: wp('60%'),
                        // backgroundColor: 'gray',
                        // flexDirection: 'row',
                        // justifyContent: 'space-between',
                        // alignItems: 'center',
                        padding: 10,

                    }}
                    key={index}
                >
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 20,
                        
                    }}>
                        <Image
                            source={tour.url}
                            style={{
                                width: 80,
                                height: 80,
                                resizeMode: 'cover',
                                borderRadius: 80,
                            }}
                        />
                        <View style={{
                            // alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: '#212460',
                                    paddingBottom: 6,
                                    fontSize: 24,
                                }}
                            >{tour.name}</Text>
                            <Text>{tour.description}</Text>
                        </View>
                    </View>
                </View>
            ))}

        </View>
    );
}
