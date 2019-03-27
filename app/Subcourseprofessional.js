import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import styles from './customstyle';
import PercentageCircle from 'react-native-percentage-circle';

class Subcourseprofessional extends Component {
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
                    <Text style={[styles.textbold,styles.text_22]}>Professional</Text>
                </View>
            </Body>
            <Right>
            </Right>
            </Header>
            <Content style={[styles.bggray,styles.pd10]}>
                <View style={[styles.pt10,styles.pb5]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SubcourseIntroductionScreen")}>
                        <ImageBackground source={require('../img/24109-31242-Thumb-(1)-l.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การตั้งค่าเฟรมเรตในการถ่ายยังไง ไม่ให้แสงกระพริบ</Text>
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
                        <ImageBackground source={require('../img/samsung-galaxy-s9-plus-black-camera-interface.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การใช้โหมด Manual ในการถ่ายวิดีโอ</Text>
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
                        <ImageBackground source={require('../img/slo-mo-header2-696x392.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การถ่ายทำโหมด Slow Motion ให้เจ๋ง</Text>
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
                        <ImageBackground source={require('../img/89fe494ffa0afa424accbf6d3505b9a0_original.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การจัดแสงในการถ่ายวิดีโอ</Text>
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
                        <ImageBackground source={require('../img/131351-phones-news-feature-10-tips-for-recording-better-video-with-your-smartphone-image1-yfav5fqd4j.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การเพิ่มความสวยงามให้วิดีโอด้วยการตกแต่งด้วย Prop</Text>
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
                        <ImageBackground source={require('../img/iphoneography-lenses-olloclip-heo.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
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
                        <ImageBackground source={require('../img/7-Professional-Tips-for-Smartphone-Video.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>รู้จัก Stabilizer แบบต่างๆ</Text>
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
                        <ImageBackground source={require('../img/RJI-mobile-editing-app-screengrab.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>ตัดต่อโดยแอปเสริมต่างๆ</Text>
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
                        <ImageBackground source={require('../img/viddy-video-sharing-app.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การใช้งานแอปพื้นฐานที่ 1</Text>
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
                        <ImageBackground source={require('../img/viddy-video-sharing-app.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การใช้งานแอปพื้นฐานที่ 2</Text>
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
                        <ImageBackground source={require('../img/viddy-video-sharing-app.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การใช้งานแอปพื้นฐานที่ 3</Text>
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
                        <ImageBackground source={require('../img/viddy-video-sharing-app.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การใช้งานแอปพื้นฐานที่ 4</Text>
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
                        <ImageBackground source={require('../img/viddy-video-sharing-app.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>การใช้งานแอปพื้นฐานที่ 5</Text>
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
                        <ImageBackground source={require('../img/youtube-upload-go-live-red-pixel.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[{backgroundColor: 'rgba(0,0,0,.6)',borderRadius: 5},styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_18,styles.textbold,styles.textwhite]}>สกุลไฟล์ที่ใช้ใน Platform ต่างๆ</Text>
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

export default Subcourseprofessional;