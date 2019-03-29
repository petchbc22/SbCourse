import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight,FlatList} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import styles from './customstyle';
import PercentageCircle from 'react-native-percentage-circle';

class Course_beginner extends Component {

    navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    }
    constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      data:[
            {
                name: 'ขนาดภาพต่างๆ ที่มือใหม่ต้องรู้จัก',
                imageBG: require('../img/thumnail-1.jpg'),
                percentage_value: '20',
                navigate_screen: 'VideolearnScreen'
            },
            {
                name: 'มุมกล้องต่างๆ ที่มือใหม่ต้องรู้จัก',
                imageBG: require('../img/iphone_6_camera_photo_hero_1.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'การเคลื่อนกล้องต่างๆ ที่มือใหม่ต้องรู้จัก',
                imageBG: require('../img/thumnail-4.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'Resolution ของวิดีโอที่มือใหม่ต้องรู้',
                imageBG: require('../img/thumnail-1.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'การตั้งค่าระบบ และการเตรียมพร้อมก่อนการถ่ายวิดีโอ ในมือถือ',
                imageBG: require('../img/thumnail-2.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'โหมดต่างๆ ของกล้องในโทรศัพท์มือถือ',
                imageBG: require('../img/24109-31242-Thumb-(1)-l.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'ตัวช่วยต่างๆ สําหรับมือใหม่',
                imageBG: require('../img/7-Professional-Tips-for-Smartphone-Video.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'หลักการถ่ายวิดีโอที่ถูกต้อง สําหรับมือใหม่',
                imageBG: require('../img/89fe494ffa0afa424accbf6d3505b9a0_original.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'การเลือกโลเคชั่นในการถ่ายวิดีโอ',
                imageBG: require('../img/Hidden-Landscapes-on-iPhone7.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'แสงที่เหมาะสมสําหรับการถ่ายวิดีโอ',
                imageBG: require('../img/maxresdefault.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'การถ่ายวิดีโอสินค้าง่ายๆ ด้วยมือถือ สําหรับมือใหม่',
                imageBG: require('../img/thumnail-2.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'การถ่ายวิดีโอ Portrait ง่ายๆ ด้วยมือถือ สําหรับมือใหม่',
                imageBG: require('../img/131351-phones-news-feature-10-tips-for-recording-better-video-with-your-smartphone-image1-yfav5fqd4j.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
      ]
    }
    }

    handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
    };

  render() {
      const {goBack} = this.props.navigation;
    return (
        <Container>
            <Header style={styles.header_nobg}>
            <Left style={styles.pl10}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Icon name='arrow-back'/>                 
                </TouchableOpacity>
            </Left>
            <Body>
                <View>
                    <Text style={[styles.textbold,styles.text_22]}>Beginner</Text>
                </View>
            </Body>
            <Right>

            </Right>
            </Header>
            <Content style={[styles.bggray,styles.pd10]}>
                {/* loop data from json array */}
                <FlatList
                 data={this.state.data}
                 renderItem={({item})=>
                    <View style={[styles.pt5,styles.pb5]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(item.navigate_screen)}>
                            <ImageBackground source={item.imageBG} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                                <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                    <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                        <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>{item.name} </Text>
                                    </View>
                                    <View style={[{width:'30%'},styles.centerYlrightX,styles.pr15]}>
                                        <View>
                                            <PercentageCircle radius={25} percent={item.percentage_value} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View> 
                 } style={styles.pb20}
               />
            </Content>
          </Container>
    );
  }
}

export default Course_beginner;