import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './styles';
import {NO_INTERNET} from '@images';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '@constants/styles';
import {ThemeContext} from '@hooks/useTheme';
import {showToast} from '@services/utility';
import useNetInfo from '@hooks/useNetInfo';

const NoInternet = ({callbackFunction}) => {
  // hooks
  const isConnected = useNetInfo();

  // Theme
  const {theme} = useContext(ThemeContext);

  // Styles
  const {container, header, subHeader, buttonIcon, button, Img} = styles;
  const {row} = globalStyles;

  // States
  const [loading, setLoading] = useState(false);

  const loadingFuncion = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!isConnected) {
        showToast({message: 'No Internet Connection !'});
      }
    }, 3000);
  };

  return (
    <View style={container}>
      <Image source={NO_INTERNET} style={Img} />
      <Text style={header}>No Internet Connection Found !</Text>
      <Text style={subHeader}>Check Your Connection</Text>
      {/* Retry Button */}
      <TouchableWithoutFeedback
        onPress={() => {
          loadingFuncion();
          callbackFunction();
        }}>
        <View
          style={{...row, ...button, backgroundColor: theme.button ?? 'green'}}>
          <View>
            <Text
              style={{
                color: theme.buttonTxt ?? '#FFFFFF',
              }}>
              Try Again
            </Text>
          </View>
          <View style={buttonIcon}>
            {loading ? (
              <ActivityIndicator
                color={theme.buttonTxt ?? '#FFFFFF'}
                size={20}
              />
            ) : (
              <Icon
                name="reload"
                size={20}
                color={theme.buttonTxt ?? '#FFFFFF'}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

NoInternet.defaultProps = {
  callbackFunction: () => {},
};

export default NoInternet;
