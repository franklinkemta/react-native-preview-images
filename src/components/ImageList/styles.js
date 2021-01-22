import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backBtnTouchableOpacity: {
    justifyContent: 'center',
    width: 35,
  },
  backBtnView: {
    flexDirection: 'row',
    minHeight: '6%',
    height: 'auto',
    paddingHorizontal: 6,
    width: '100%',
  },
  backBtnIcon: { height: 24 },
  caption: {
    color: 'lightgray',
    padding: 5,
    textAlign: 'center',
  },
  clickableImg: {
    marginBottom: 3,
  },
  container: {
    flex: 1,
    paddingHorizontal: 3,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    padding: 5,
    paddingRight: 35,
  },
});

export default styles;
