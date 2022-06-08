import {StyleSheet} from 'react-native';
import {theme} from '../../Styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  buttonAll: {
    top: '3%',
  },
  imageContainer: {
    flex: 2,
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginRight: 20,
  },
  discount: {
    fontSize: 18,
    textAlign: 'center',
    color: theme.colors.white,
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: 40,
    maxWidth: 100,
    height: 25,
    backgroundColor: theme.colors.red,
    position: 'absolute',
    top: '70%',
    left: '5%',
    borderRadius: 15,
  },
  description: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.colors.black,
    fontFamily: 'cursive',
  },
});

export default styles;
