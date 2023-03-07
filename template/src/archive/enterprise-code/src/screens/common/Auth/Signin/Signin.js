import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '@components/common/Input';
import styles from './styles';
// import globalStyles from '@constants/styles';
import {MOBILE_SIGNIN} from '@assets/images';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFormik} from 'formik';

const Signin = () => {
  const {posterImg, header, txtInput, txtContainerStyle} = styles;
  // const {row} = globalStyles;
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit(values) {
      console.log(values);
    },
  });

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={styles.container}>
          <Image source={MOBILE_SIGNIN} style={posterImg} />
          <View
            style={{
              padding: 10,
            }}>
            <Text style={header}>Login</Text>

            <View>
              <Input
                leftIcon={<Icon name={'user'} size={30} color="#900" />}
                style={txtInput}
                width={'100%'}
                height={80}
                txtContainerStyle={txtContainerStyle}
                placeholder="Email ID / Username / Mobile number"
                onChange={formik.handleChange('username')}
                value={formik.values.username}
                name={'username'}
              />
              <Input
                leftIcon={<Icon name={'user'} size={30} color="#900" />}
                style={txtInput}
                txtContainerStyle={txtContainerStyle}
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange('password')}
                name={'password'}
              />
            </View>

            <View />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Signin;
