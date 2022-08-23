import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react'

const regular = require('../assets/fonts/SVN-Gilroy-Regular.otf')
const medium = require('../assets/fonts/SVN-Gilroy-Medium.otf')
const semiBold = require('../assets/fonts/SVN-Gilroy-SemiBold.otf')
const bold = require('../assets/fonts/SVN-Gilroy-Bold.otf')

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          regular, // 400
          medium, // 500
          semiBold, // 600
          bold, // 700
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        // SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
