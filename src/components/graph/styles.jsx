import { Platform, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingBottom: 15,
    zIndex: 400,
    elevation: 400,
  },
  appName: {
    color: COLORS.white,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    fontWeight: 'bold',
    fontSize: SIZES.h2,
  },
  noData: {
    marginTop: 100,
    alignItems: 'center',
  },
  noDataTxt: {
    color: COLORS.accent,
    fontSize: SIZES.h2,
    fontWeight: 'bold',
  },
  marginTop:{
    marginTop:"30px;"
  },
  container: {

    backgroundColor: COLORS.lightGrey,
  
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  date: {
    fontWeight: 'bold',
    fontSize: SIZES.h3,
    color: COLORS.primary,
  },
  index: {
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: SIZES.h4,
    color: COLORS.accent,
  },
  city: {
    paddingTop: 20,
    paddingLeft: 5,
    paddingBottom:80,
    fontWeight: 'bold',
    fontSize: SIZES.h1,
    color: "#00a86b",
  },
  txtRow: {
    flexDirection: 'row',
  },
  title: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  titleSub: {
    color: COLORS.primary,
    fontWeight: '600',
    lineHeight: 25,
  },
  subtitle: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  subtitleSub: {
    color: COLORS.primary,
    fontWeight: '600',
    lineHeight: 15,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.darkGrey,
  },
});

export default styles;