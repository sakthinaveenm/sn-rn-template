import {StyleSheet} from 'react-native';
// import {OPENSANS_SEMIBOLD} from '../../constants/fonts';

export const styles = StyleSheet.create({
  header: {
    // fontFamily: OPENSANS_SEMIBOLD,
    color: '#FF5733',
    fontSize: 40,
    padding: 0,
    margin: 0,
    letterSpacing: 1,
    includeFontPadding: false,
    fontWeight: '600',
  },
  subHeader: {
    // fontFamily: OPENSANS_SEMIBOLD,
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
    marginTop: -10,
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
