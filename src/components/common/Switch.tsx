import { Colors } from '../../constant'
import React from 'react'
import { StyleSheet, Switch } from 'react-native'

export default function (props: Switch['props']) {
  return <Switch trackColor={{ true: Colors.dark.mainColor, false: Colors.gray4 }} {...props} />
}

const styles = StyleSheet.create({})
