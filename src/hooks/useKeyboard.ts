import { useIsFocused } from '@react-navigation/native'
import { useEffect, useRef, useState } from 'react'
import { EmitterSubscription, Keyboard } from 'react-native'

export default function () {
  const keyboardWillShowListener = useRef<EmitterSubscription>()
  const keyboardWillHideListener = useRef<EmitterSubscription>()

  const [keyboard, setKeyboard] = useState({ height: 0, duration: 0 })

  const isFocused = useIsFocused()

  useEffect(() => {
    keyboardWillShowListener.current = Keyboard.addListener(
      'keyboardWillShow',
      e => isFocused && setKeyboard({ height: e.endCoordinates.height, duration: e.duration })
    )

    keyboardWillHideListener.current = Keyboard.addListener('keyboardWillHide', e =>
      setKeyboard({ height: 0, duration: e.duration })
    )

    return () => {
      keyboardWillShowListener.current?.remove()
      keyboardWillHideListener.current?.remove()
    }
  }, [isFocused])

  return keyboard
}
