import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import styles from './customstyle';
import PercentageCircle from 'react-native-percentage-circle';

class Subcoursetechnic extends Component {
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
                    <Text style={[styles.textbold,styles.text_22]}>Basic</Text>
                </View>
            </Body>
            <Right>
            </Right>
            </Header>
            <Content style={[styles.bggray,styles.pd10]}>
                <View style={[styles.pt10,styles.pb5]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SubcourseIntroductionScreen")}>
                        <ImageBackground source={require('../img/iphone-tips-primary-100635369-large.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การถ่ายวิดีโอยังไงไม่ให้ภาพสั่น </Text>
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
                        <ImageBackground source={require('../img/10094_iPhone-Photos-Motion-25_w1120.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การเพิ่ม Movement ในขณะถ่ายวิดีโอ </Text>
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
                        <ImageBackground source={require('../img/ae6494da0104a2dde03809309c164fd0.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การเลือกโลเคชั่นที่ดี</Text>
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
                        <ImageBackground source={require('../img/iphone-photos_573cca22c35dac8042609fa3a5b5b213-xl.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การเลือกแสงในการถ่ายวิดีโอ </Text>
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
                        <ImageBackground source={require('../img/maxresdefault.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การจัดแสงแบบง่าย โดยใช้อุปกรณ์ใกล้ตัว</Text>
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
                        <ImageBackground source={require('../img/get-ahead-media.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การใช้อุปกรณ์ใกล้ตัว เป็นตัวช่วยในการถ่ายวิดีโอ</Text>
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
                        <ImageBackground source={require('../img/ios-10-lets-you-edit-crop-add-filters-live-photos-your-iphone.1280x600.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การใช้ฟิวเตอร์ที่มากับเครื่อง </Text>
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
                        <ImageBackground source={require('../img/gravie-text-on-video.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การใส่ Text ในวิดีโอแบบง่าย</Text>
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
                        <ImageBackground source={require('../img/iPhone-Photography-apps.png')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>รู้จักแอปตัดต่อที่มีในโทรศัพท์</Text>
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
                        <ImageBackground source={require('../img/samsunggalaxys4-voicenotes.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>เรียนรู้เรื่องของการอัดเสียงขั้นพื้นฐาน (อัดจากโทรศัพท์, ต่ออุปกรณ์เสริม) </Text>
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

export default Subcoursetechnic;