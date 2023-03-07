/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ChatViewer = ({profileImage, userName, lastMessage, lastMessageDate}) => {
  const {container, row} = styles;

  return (
    <View style={container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: wp('3.5%'),
          }}>
          <Image
            source={profileImage}
            style={{
              width: 65,
              height: 65,
              borderRadius: wp('50%'),
            }}
          />
        </View>
      </View>
      <View
        style={{width: wp('75%'), display: 'flex', justifyContent: 'center'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: '#000000',
              }}>
              {userName}
            </Text>
          </View>
          <View>
            <Text>{lastMessageDate}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
              }}>
              {lastMessage}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'flex-end',
            }}>
            <Image
              source={profileImage}
              style={{
                width: 20,
                height: 20,
                borderRadius: wp('50%'),
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatViewer;
