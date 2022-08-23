import * as Clipboard from 'expo-clipboard'
import toast from './toast'

export default {
  copyToClipboard: (text: any, title: string) => {
    Clipboard.setString(typeof text === 'string' ? text : JSON.stringify(text))
    toast.success(`Sao chép ${title} thành công!`)
  },
}
