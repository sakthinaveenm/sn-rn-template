import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  header: {
    //   fontFamily: OPENSANS_SEMIBOLD,
    color: '#000000',
    fontSize: 40,
    paddingTop: hp('5'),
    paddingBottom: hp('3'),
    margin: 0,
    letterSpacing: 1,
    includeFontPadding: false,
    fontWeight: '600',
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    borderRadius: 10,
  },
  subHeader: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 5,
  },
  container: {
    flex: 1,
    display: 'flex',
    paddingTop: 20,
  },
  buttonIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  posterImg: {
    width: wp('100'),
    height: hp('30'),
  },
  txtInput: {
    width: wp('90%'),
    height: 60,
    marginTop: 2,
    paddingLeft: 15,
    backgroundColor: '#000000',
  },
  txtContainerStyle: {
    backgroundColor: '#f8f9fb',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default styles;
