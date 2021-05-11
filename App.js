// Buổi 1 + 2:
// đầu tiên gọi rnc - react native component
// những giá trị trong {} nó là key - không thay đổi được
// React (class): thay đổi tên được
// import React, { Component } from 'react'
// import { Text, View, Dimensions, SafeAreaView, Platform } from 'react-native'
// Core react: react viết sẵn - Focus học phần này
// Core native: native viết, sử dụng lại của nó

// export default class App extends Component {
    // render(){
    // alert(Dimensions.get('window').width);
    // phần alert này đang viết trong phương thức render
    // 'window' - width của component, dù quay ngang hay dọc nó vẫn tính từ lúc mở giả lập.
    // 'screen' - width của component tùy thuộc là quay ngang hay dọc.
    // thẻ jsx là tương đương thẻ html (research để xem cách transfer from html to jsx)
    // return (
        /* Research View Props để lấy attribute của View */
        /* chữ trong <Text> đối với iphone sẽ bị notch nhảy lên khỏi thanh status bar */
        /* Platform : Kiểm tra thiết bị đang chạy là Android/Window hay ios*/
        /* Search Flexbox để hiểu rõ hơn về việc chia bố cục, tương tự html & css*/
        /* flexDirection : phương hướng */
        /* justifyContent : cùng hướng flexDirection */
        /* alignItems : hướng còn lại */
        
        // Buổi 1:
        // <View style={{flex : 1,
        //               marginTop : Platform.OS == 'ios' ? 35 : 0,
        //               // có thể thay thế đoạn trên bằng thẻ SafeAreaView cho ios, cũng giống thẻ View
        //               flexDirection : 'column',
        //               // 'row' hoặc 'column'
        //               // justifyContent : 'space-evenly',//giãn cách đều các <Text>
        //               // 'flex-start','flex-end','space-around','space-between'
        //               // alignItems : 'center', //Canh giữa
        // }}>
        //   <Text style={{flex : 0.3,
        //                 backgroundColor : 'red',
        //                 textAlign : 'center',
        //                 textAlignVertical : 'center',
        //                 // textAlign & textAlignVertical chỉ hỗ trợ bên phía Android.
        //                 }}>View 1</Text>
        //   <View style={{flex : 0.2,
        //                 backgroundColor : 'orange',
        //                 justifyContent : 'center',
        //                 alignItems : 'center'
        //                 // Cách làm về phía Ios để chữ nhảy vào giữa
        //   }}>
        //     <Text>View 2</Text>
        //   </View>
        //   <Text style={{flex : 0.3, backgroundColor : 'yellow'}}>View 3</Text>
        //   <Text style={{flex : 0.2, backgroundColor : 'green'}}>View 4</Text>
        // </View>

        //Bài tập - Hình 2: Chưa làm xong, để làm sau tiếp
        // <View style={{
        //   flex: 1,
        //   flexDirection: 'column',
        //   padding: 5,
        //   borderColor: 'black',
        // }}>
        //   <View style={{
        //     flex: 0.3,
        //     backgroundColor: 'red',
        //     borderWidth: 5,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //   }}>
        //     <Text style={{color: 'white',fontSize: 40,fontWeight: 'bold'}}>1</Text>
        //   </View>
        //   <View style={{
        //     flex: 0.7,
        //     flexDirection: 'row'
        //   }}>
        //     <View style={{
        //       flex: 1/3,
        //       backgroundColor: 'yellow',
        //       justifyContent: 'center',
        //       alignItems: 'center',
        //       borderLeftWidth: 5,
        //       borderRightWidth: 5,
        //       borderBottomWidth: 5,
        //     }}>
        //       <Text style={{color: 'white',fontSize: 40,fontWeight: 'bold'}}>1</Text>
        //     </View>
        //     <View style={{
        //       flex: 2/3,
        //       backgroundColor: 'turquoise',
        //       justifyContent: 'center',
        //       alignItems: 'center'
        //     }}>
        //     </View>
        //     </View>
        //   </View>

        // Buổi 2:
        // flexWrap: 'wrap' & alignContent: 'center'
        // 2 thuộc tính trên phải đi cùng nhau để giải quyết việc tràn nội dung khỏi màn hình.
        // <View style={{
        //   flex: 1,
        //   flexDirection: 'column',
        // }}>
        //   <View style={{flex: 1/2,flexDirection : 'row', alignItems: 'flex-end'}}>
        //     <Text style={{backgroundColor: 'red',
        //                   alignSelf: 'center',
        //                   // AlignSelf: tự định hướng so với cha và ngược hướng lại flexDirection
        //                   }}>1</Text>
        //     <Text style={{backgroundColor: 'red'}}>2</Text>
        //   </View>
        // </View>
        
        // Absolute và Zindex để sắp xếp vị trí các layer giống CSS.
        // <View style={{
        //   flex: 1,
        // }}>
        //     <Text style={{backgroundColor: 'green',
        //                   height: 500,
        //                   width: '100%',
        //                   top: 10,
        //                   position: 'absolute',
        //                   zIndex: 0,//chỉ dùng cho android
        //                 }}>View A</Text>
        //     <Text style={{backgroundColor: 'yellow',
        //                   height: 200,
        //                   width: '50%',
        //                   top: 20,
        //                   left: 10,
        //                   position: 'absolute',
        //                   zIndex: 1,//chỉ dùng cho android
        //                 }}>View B</Text>
        // </View>
//     )
//   }
// }


// Buổi 2 continue...
import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform, TouchableOpacity } from 'react-native'
// Thêm Class StyleSheet để code được ngắn gọn
export default class App extends Component {
  // Giải nghĩa shouldRenderVn: có nên truyền thuộc tính isMemorized hay không
  // shouldRenderVn = (isMemorized) => {
  //   if (word.isMemorized) {
  //     return '----'
  //   } else {
  //     return word.vn
  //   }
  // };
  render() {
    const word = {en: 'One', vn: 'Một', isMemorized: true}
    return (
      // chỗ isMemorized: thuộc thì hiện dấu '----', còn không sẽ ra tiếng việt 'Một'
      // Trường hợp logic phức tạp hơn thì sử dụng arrow function, trên chỗ shouldRender
      // Có 2 cách:
      // cách 1: là toán tử ba ngôi
      // cách 2: là shouldRenderVn ở trên + this.shouldRenderVn(word) ở dưới.
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.textStyleEn}>{word.en}</Text>
          <Text style={styles.textStyleVn}>{word.isMemorized ? '----' : word.vn}</Text>
          {/* <Text style={styles.textStyleVn}>{this.shouldRenderVn(word)}</Text> */}
        </View>
        <View style={styles.containerTouchable}>
          <TouchableOpacity style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
            <Text style={{fontSize: 14, color: 'white'}}>Forgot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10, backgroundColor: 'yellow', borderRadius: 5}}>
            <Text style={{fontSize: 14, color: 'navy'}}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{flex: 1,
    flexDirection: 'column',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  containerTouchable:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  textStyleEn: {fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },

  textStyleVn: {fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },

})
