import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right,Accordion    } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import VideoPlayer from '../node_modules/react-native-video-player';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import PercentageCircle from 'react-native-percentage-circle';

class SubcourseIntroductionScreen extends Component {

    navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.reset({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    }

    constructor() {
      super();
    }
    state = {
        progress: 0,
        progressWithOnComplete: 0,
        progressCustomized: 0,
      }
 
 
   
  render() {
    const { goBack } = this.props.navigation;
    return (
     
        <Container>
            <ImageBackground source={require('../img/58119dff5124c92019a02c18-750-540.jpg')}style={{height:270}} >
                <Header style={{backgroundColor:'transparent',elevation:0,height:80,paddingTop:30}}>
                    <Left style={{flex: 1,paddingLeft:10}}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Image style={{width: 20, height: 20}}source={ require('../img/left-icon.png') } />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{flex: 1,justifyContent: 'center',alignItems: 'center', alignSelf: 'center',}}>
                    
                    </Body>
                    <Right style={{flex: 1,paddingRight:10}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("CourseScreen")} >
                            <Image style={{width: 20, height: 20}}source={ require('../img/home-ico.png') } />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <View style={{flex: 1, flexDirection: 'row',paddingTop:50,paddingLeft:20}}>
                       <Text style={{color:'#dcdcdc',fontWeight:'bold'}}>BEGINNER</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',paddingLeft:20}}>
                       <Text style={{color:'#fff',fontWeight:'bold',fontSize:26}}>Introduction Program</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',paddingLeft:20,paddingBottom:5}}>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>20 %</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',paddingLeft:20}}>
                        <ProgressBarAnimated
                            width={200}
                            height={8}
                            value={20}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',paddingLeft:20,paddingTop:10}}>
                        <View>
                            <Text style={{color:'#dcdcdc',paddingRight:10}}>6689 likes</Text>
                        </View>
                        <View>
                            <Text style={{color:'#dcdcdc'}}>712 comments</Text>
                        </View>
                    </View>
                </Content>
                  </ImageBackground>
                  <Content style={[styles.bggray]}>
                    <View style={{justifyContent:'center',paddingTop:10}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("PullupScreen")}>
                            <View style={{height: 85,alignSelf:'center',backgroundColor:'white',marginLeft:10,marginRight:10,borderRadius: 5}}>
                                <View style={{flex:1,flexDirection: 'row'}}>
                                    <View style={{width:'80%',justifyContent:'center',alignItems:'flex-start',paddingLeft:25}}>
                                        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Pull-Ups</Text>
                                        <View>
                                        <Text style={{color:'gray',fontSize:14,fontWeight:'bold'}}>10 sessions</Text>
                                        </View>
                                    </View>
                                    <View style={{width:'20%',justifyContent:'center',alignItems:'flex-end',paddingRight:20}}>
                                        <View>
                                            <PercentageCircle radius={25} percent={0} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center',paddingTop:10}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                            <View style={{height: 85,alignSelf:'center',backgroundColor:'white',marginLeft:10,marginRight:10,borderRadius: 5}}>
                                <View style={{flex:1,flexDirection: 'row'}}>
                                    <View style={{width:'80%',justifyContent:'center',alignItems:'flex-start',paddingLeft:25}}>
                                        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Push-Ups</Text>
                                        <View>
                                        <Text style={{color:'gray',fontSize:14,fontWeight:'bold'}}>8 sessions</Text>
                                        </View>
                                    </View>
                                    <View style={{width:'20%',justifyContent:'center',alignItems:'flex-end',paddingRight:35}}>
                                        <View>
                                        <Icon name="lock" style={{ color: 'gray' }} />  
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>

        </Container>
    );
  }
}
const BASE_SIZE = 150
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    bgacc:{
        backgroundColor:'#fff',
        paddingTop:10,
        paddingBottom:10,
        height:60
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
        top: 0,
        bottom:0
       // or 'stretch'
    },
    overlay:{
      backgroundColor:'rgba(0,0,0,.3)',
      position: 'absolute', 
      top: 0, 
      bottom: 0, 
      left: 0, 
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Form:{
      // borderRadius:10,
      // borderWidth: 1,
      // borderColor:'white',
      backgroundColor:'transparent',
      marginTop:10,
      color:'white',
    },
    tabcustom : {
      backgroundColor:'transparent',
      width:'80%',
      justifyContent: 'center',
      alignSelf:'center'
    },
    styletextinput:{
      textAlign: 'center',
      color:'#fff',
      fontSize:14
    },
    textwhite:{
      color:'white'
    },
    btnstyle:{
      borderRadius:30,width:200,justifyContent:'center'
    },
    // controlTab
    tabsContainerStyle: {
      //custom styles
    },
    tabStyle: {
      backgroundColor : 'transparent',
      borderColor: '#fff',
      height:40
    },
    tabTextStyle: {
      color:'#fff',
      fontWeight:'bold',
      fontSize:16
    },
    activeTabStyle: {
      backgroundColor : 'white'
    },
    activeTabTextStyle: {
      color:'#000',
      fontWeight:'bold',
      fontSize:16
    },
    tabBadgeContainerStyle: {
      //custom styles
    },
    activeTabBadgeContainerStyle: {
      //custom styles
    },
    tabBadgeStyle: {
      //custom styles
    },
    activeTabBadgeStyle: {
      //custom styles
    },
    circle: {

      width:BASE_SIZE*0.6,
      height:BASE_SIZE*0.6, // 60% of the base size
      borderRadius: BASE_SIZE*0.6/2,
      backgroundColor: 'transparent',
      borderColor:'white',
      borderWidth:1
  },
  Text18B :{
    fontSize:22,
    fontWeight:'bold'
  },
  textbold:{
    fontWeight:'bold'
  },
    bggray:{
        backgroundColor:'#f7f7f7'
    },
    pd:{
        padding:10
    },
    py10:{
      paddingTop:10,
      paddingBottom:10
    },
  });
export default SubcourseIntroductionScreen;