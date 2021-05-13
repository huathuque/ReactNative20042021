import React, { Component } from 'react'
import {
  Text,
  View,
  SafeAreaView
} from 'react-native'
import Box from './src/components/Box'
import Main from './src/screens/Main'

// export default cái class chỉ được export 1 lần duy nhất trong 1 file
// export có nghĩa là share ra cho thằng khác dùng chung cái class đó
export default class App extends Component {
  render() {
    return (
      // Tự động import nhờ extention + gõ thẻ <Main/> thì trên chỗ import Main sẽ tự động import lại file bên screens qua
      <View style={{flex : 1}}>
        {/* <Main /> */}
        {/* <Box/> */}
      </View>
    )
  }
}
