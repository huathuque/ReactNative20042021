import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default class Box extends Component {
    // Tất cả những thuộc tính muốn tạo cho Box thì định nghĩa trong constructor
    // chỗ constructor là default: khi muốn kế thừa từ Conponent phía trên thì phải contructor(props), super(props)
    constructor(props){
        super(props);
        // this.state cách để định nghĩa 1 thuộc tính cho 1 cái class
        // this tượng trưng cho việc định nghĩa ra thuộc tính
        // state là những cái mà component box muốn render lại
        // state là dữ liệu của component
        // ví dụ update UI, input người dùng, show ra...thì sẽ lưu trữ trong state
        // khi định nghĩa state thì sẽ đinh nghĩa trong constructor
        this.state = {
            count : 0,
            text: 'abc',
        };
    }
    render() {
        return (
            <View style={{flex : 1, flexDirection: 'column', justifyContent: 'center'}}>
                {/* thay vì count : 0 thì sẽ viết thành ... below */}
                <Text style={{alignSelf: 'center'}}> Count : {this.state.count} </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: 20,
                    }}>
                    {/* Khi viết thế này thì bên phía UI sẽ không được render hay updating mà chỉ có bên Metro mới nhảy số
                        onPress={()=>{
                            this.state.count++;
                            console.log(this.state.count);
                        }}
                        nên phải thông qua hàm setState(): cập nhật lại thuộc tính có sự thay đổi trong state
                        onPress={()=>{
                            this.setState({count : this.state.count + 1});
                            console.log(this.state.count);
                        }}
                        nhưng bên Metro sẽ lấy giá trị không tương đồng
                        Do hàm setState là hàm bất đồng bộ (Async) nên chúng ta ko thể gọi state khi vừa mới set state
                        => phải có function tham số thứ 2 để callback
                     */}
                    <TouchableOpacity
                        onPress={()=>{
                            this.setState({count : this.state.count + 1}, () => {
                                console.log(this.state.count);
                            });
                        }}
                        style={{padding: 10, backgroundColor: 'green', borderRadius: 8, }}>
                        <Text style={{fontSize: 20, color: 'white'}}>Increment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({count : this.state.count - 1},
                            () => {
                                console.log(this.state.count);
                            })
                        }}
                        style={{padding: 10, backgroundColor: 'red', borderRadius: 8}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Decrement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({count : 0},
                            () => {
                                console.log(this.state.count);
                            });
                        }}
                        style={{padding: 10, backgroundColor: 'navy', borderRadius: 8}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
