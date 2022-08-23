import Colors from '../constant/Colors'
import Layout from '../constant/Layout'
import { StyleSheet } from 'react-native'

const cal = (num = 0) => Layout.spacing * num

const spacing = StyleSheet.create({
  p: {
    padding: cal(1),
  },
  pt: {
    paddingTop: cal(1),
  },
  pb: {
    paddingBottom: cal(1),
  },
  ps: {
    paddingLeft: cal(1),
  },
  pe: {
    paddingRight: cal(1),
  },
  px: {
    paddingHorizontal: cal(1),
  },
  py: {
    paddingVertical: cal(1),
  },

  p1: {
    padding: cal(2),
  },
  pt1: {
    paddingTop: cal(2),
  },
  pb1: {
    paddingBottom: cal(2),
  },
  ps1: {
    paddingLeft: cal(2),
  },
  pe1: {
    paddingRight: cal(2),
  },
  px1: {
    paddingHorizontal: cal(2),
  },
  py1: {
    paddingVertical: cal(2),
  },

  p2: {
    padding: cal(4),
  },
  pt2: {
    paddingTop: cal(4),
  },
  pb2: {
    paddingBottom: cal(4),
  },
  ps2: {
    paddingLeft: cal(4),
  },
  pe2: {
    paddingRight: cal(4),
  },
  px2: {
    paddingHorizontal: cal(4),
  },
  py2: {
    paddingVertical: cal(4),
  },

  m: {
    margin: cal(1),
  },
  mt: {
    marginTop: cal(1),
  },
  mb: {
    marginBottom: cal(1),
  },
  ms: {
    marginLeft: cal(1),
  },
  me: {
    marginRight: cal(1),
  },
  mpx: {
    marginHorizontal: cal(1),
  },
  my: {
    marginVertical: cal(1),
  },

  m1: {
    margin: cal(2),
  },
  mt1: {
    marginTop: cal(2),
  },
  mb1: {
    marginBottom: cal(2),
  },
  ms1: {
    marginLeft: cal(2),
  },
  me1: {
    marginRight: cal(2),
  },
  mx1: {
    marginHorizontal: cal(2),
  },
  my1: {
    marginVertical: cal(2),
  },

  m2: {
    margin: cal(4),
  },
  mt2: {
    marginTop: cal(4),
  },
  mb2: {
    marginBottom: cal(4),
  },
  ms2: {
    marginLeft: cal(4),
  },
  me2: {
    marginRight: cal(4),
  },
  mx2: {
    marginHorizontal: cal(4),
  },
  my2: {
    marginVertical: cal(4),
  },

  borderRadius: {
    borderRadius: 5,
  },
  borderRadius1: {
    borderRadius: 10,
  },

  border: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
  },

  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
})

const styles = StyleSheet.create({
  h1: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  textDefault: {
    color: Colors.text,
  },
  title: {
    fontSize: 18,
  },
  link: {
    fontSize: 15,
    color: Colors.primary,
    padding: 5,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
})

export default { ...styles, ...spacing }
