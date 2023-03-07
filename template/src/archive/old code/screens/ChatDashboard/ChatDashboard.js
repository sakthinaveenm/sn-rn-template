import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import ChatViewer from '../../components/ChatViewer';
import {PROFILE_IMG} from '../../assets/images';
const ChatDashboard = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <ScrollView style={container} showsVerticalScrollIndicator>
        <ChatViewer
          profileImage={PROFILE_IMG}
          userName={'Vinoth'}
          lastMessage={'Hello'}
          lastMessageDate={'24/01/03'}
          isActive={true}
        />
      </ScrollView>
    </View>
  );
};

export default ChatDashboard;
