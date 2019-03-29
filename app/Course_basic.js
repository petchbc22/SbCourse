import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight,FlatList} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import styles from './customstyle';
import PercentageCircle from 'react-native-percentage-circle';

class Course_basic extends Component {
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
                name: 'การแก้ปัญหาการสั่นเมื่อถ่ายวิดีโอด้วยมือถือ',
                imageBG: require('../img/iphone-tips-primary-100635369-large.jpg'),
                percentage_value: '20',
                navigate_screen: '#'
            },
            {
                name: 'การเพิ่ม Movement ในขณะถ่ายวิดีโอ',
                imageBG: require('../img/10094_iPhone-Photos-Motion-25_w1120.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'Composition ที่ดี และสวยที่จะทําให้วิดีโอออกมาสวย',
                imageBG: require('../img/ae6494da0104a2dde03809309c164fd0.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'การใช้อุปกรณ์ใกล้ตัว เป็นตัวช่วยในการถ่ายวิดีโอ',
                imageBG: require('../img/iphone-photos_573cca22c35dac8042609fa3a5b5b213-xl.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'การจัดแสงถ่ายวิดีโอสินค้าด้วยอุปกรณ์ใกล้ตัว',
                imageBG: require('../img/maxresdefault.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'การเพิ่มความโดดเด่นให้สินค้าที่ถ่ายด้วยการใช้ Prop ',
                imageBG: require('../img/get-ahead-media.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'การถ่ายวิดีโอรีวิวสินค้าด้วยมือถือให้วิดีโอออกมาน่าสนใจ',
                imageBG: require('../img/ios-10-lets-you-edit-crop-add-filters-live-photos-your-iphone.1280x600.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'การควบคุมคุณภาพเสียงที่อัดโดยมือถือ ',
                imageBG: require('../img/gravie-text-on-video.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
            {
                name: 'ความแตกต่างของการบันทึกเสียงจากมือถือ และการใช้อุปกรณ์สําหรับบันทึกเสียง',
                imageBG: require('../img/samsunggalaxys4-voicenotes.jpg'),
                percentage_value: '12',
                navigate_screen: '#'
            },
        ] 
    };
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
                    <Text style={[styles.textbold,styles.text_22]}>Basic</Text>
                </View>
            </Body>
            <Right>
            </Right>
            </Header>
            <Content style={[styles.bggray,styles.pd10]}>
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
                 }style={styles.pb20}
                />
            </Content>
          </Container>
    );
  }
}

export default Course_basic;