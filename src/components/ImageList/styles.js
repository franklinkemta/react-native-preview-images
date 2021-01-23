import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backBtnTouchableOpacity: {
    flex: 0,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: 35,
  },
  backBtnView: {
    flexDirection: 'row',
    minHeight: '8%',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 8,
    left: 0,
    right: 0,
    top: 0,
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
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
});

export default styles;
