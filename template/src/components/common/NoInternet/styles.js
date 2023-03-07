import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  header: {
    //   fontFamily: OPENSANS_SEMIBOLD,
    color: '#FF5733',
    fontSize: 20,
    padding: 0,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  Img: {
    width: wp('40'),
    height: hp('40'),
  },
});

export default styles;
