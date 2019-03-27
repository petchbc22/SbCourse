import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import styles from './customstyle';
import PercentageCircle from 'react-native-percentage-circle';

class Subcourseprogram extends Component {

    navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    }
    constructor() {
    super();
    this.state = {
      selectedIndex: 0
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
                    <Text style={[styles.textbold,styles.text_22]}>Beginner</Text>
                </View>
            </Body>
            <Right>

            </Right>
            </Header>
            <Content style={[styles.bggray,styles.pd10]}>
                <View style={[styles.pt10,styles.pb5]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SubcourseIntroductionScreen")}>
                        <ImageBackground source={require('../img/thumnail-1.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การตั้งค่าระบบการถ่ายวิดีโอในมือถือ (ค่ากลาง) </Text>
                                </View>
                                <View style={[{width:'30%'},styles.centerYlrightX,styles.pr15]}>
                                    <View>
                                        <PercentageCircle radius={25} percent={20} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',paddingTop:5,paddingBottom:5}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/thumnail-2.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>รู้จักโหมดต่างๆ ในมือถือ (ค่ากลาง)</Text>
                                </View>
                                <View style={[{width:'30%'},styles.centerYlrightX,styles.pr15]}>
                                    <View>
                                        <PercentageCircle radius={25} percent={0} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',paddingTop:5,paddingBottom:5}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/thumnail-3.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>ตัวช่วยต่างๆ สำหรับมือใหม่ เช่น ระบบกริด, Stabilizer </Text>
                                </View>
                                <View style={[{width:'30%'},styles.centerYlrightX,styles.pr15]}>
                                    <View>
                                        <PercentageCircle radius={25} percent={0} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',paddingTop:5,paddingBottom:5}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/thumnail-4.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>หลักการถ่ายวิดีโอที่ถูกต้อง</Text>
                                </View>
                                <View style={[{width:'30%'},styles.centerYlrightX,styles.pr15]}>
                                    <View>
                                        <PercentageCircle radius={25} percent={0} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',paddingTop:5,paddingBottom:5}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/iphone-7-jet-black-macro-3.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>ขนาดภาพต่างๆ ที่มือใหม่ต้องรู้จัก</Text>
                                </View>
                                <View style={[{width:'30%'},styles.centerYlrightX,styles.pr15]}>
                                    <View>
                                        <PercentageCircle radius={25} percent={0} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',paddingTop:5,paddingBottom:5}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/99c0cdd22914a0439f10e08dbfab640d_large.jpeg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>มุมกล้องต่างๆ ที่มือใหม่ต้องรู้จัก</Text>
                                </View>
                                <View style={[{width:'30%'},styles.centerYlrightX,styles.pr15]}>
                                    <View>
                                        <PercentageCircle radius={25} percent={0} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',paddingTop:5,paddingBottom:5}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/Darkroom-Hero-4.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การเคลื่อนกล้องต่างๆ ที่มือใหม่ต้องรู้จัก</Text>
                                </View>
                                <View style={[{width:'30%'},styles.centerYlrightX,styles.pr15]}>
                                    <View>
                                        <PercentageCircle radius={25} percent={0} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',paddingTop:5,paddingBottom:5}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/iphone_6_camera_photo_hero_1.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การเลือกโลเคชั่นที่เหมาะกับการถ่ายวิดีโอ</Text>
                                </View>
                                <View style={[{width:'30%'},styles.centerYlrightX,styles.pr15]}>
                                    <View>
                                        <PercentageCircle radius={25} percent={0} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',paddingTop:5,paddingBottom:20}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/Hidden-Landscapes-on-iPhone7.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>แสงที่เหมาะสมในการถ่ายวิดีโอ</Text>
                                </View>
                                <View style={[{width:'30%'},styles.centerYlrightX,styles.pr15]}>
                                    <View>
                                        <PercentageCircle radius={25} percent={0} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
   
            </Content>
          </Container>
    );
  }
}

export default Subcourseprogram;