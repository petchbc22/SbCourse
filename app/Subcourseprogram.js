import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import { HomeScreen } from './HomeScreen';
import SegmentedControlTab from "react-native-segmented-control-tab";
import CircleButton from 'react-native-circle-button';
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
            {/* <ImageBackground source={require('../img/bg-course.jpg')}style={styles.backgroundImage} > */}
            {/* <Header style={{backgroundColor:'transparent',elevation:0,height:80}}>
                <Image style={{width: 20, height: 20,alignSelf: 'center'}}source={ require('../img/left-icon.png') } />
            </Header> */}
            <Header style={{backgroundColor:'transparent',elevation:0,height:80,paddingTop:30}}>
            <Left style={{paddingLeft:10}}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Image style={{width: 20, height: 20}}source={ require('../img/left-ico-b.png') } />
                </TouchableOpacity>
            </Left>
            <Body>
                <View>
                    <Text style={{fontSize:22,fontWeight:'bold'}}>Programs</Text>
                </View>
            </Body>
            <Right>
                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeScreen")} >
                    <Image style={{width: 20, height: 20}}source={ require('../img/home-ico.png') } />
                </TouchableOpacity> */}
            </Right>
            </Header>
            <Content style={[styles.bggray,styles.pd]}>
                <Text style={styles.textbold}>Introduction</Text>
                <View style={{justifyContent:'center',paddingTop:10,paddingBottom:20}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SubcourseIntroductionScreen")}>
                        <ImageBackground source={require('../img/iStock-621134108-min.jpg')} style={{width: '100%', height: 120,alignSelf:'center',borderRadius: 25}} imageStyle={{ borderRadius: 5 }}>
                            <View style={{flex:1,flexDirection: 'row'}}>
                                <View style={{width:'70%',justifyContent:'center',alignItems:'flex-start',paddingLeft:15}}>
                                    <Text style={{color:'white',fontSize:22,fontWeight:'bold'}}>Introduction Programs</Text>
                                </View>
                                <View style={{width:'30%',justifyContent:'center',alignItems:'flex-end',paddingRight:15}}>
                                    <View>
                                        <PercentageCircle radius={25} percent={20} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textbold}>Calisthenics</Text>
                <View style={{justifyContent:'center',paddingTop:10,paddingBottom:20}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/bg-fc.jpg')} style={{width: '100%', height: 120,alignSelf:'center',borderRadius: 25}} imageStyle={{ borderRadius: 5 }}>
                            <View style={{flex:1,flexDirection: 'row'}}>
                                <View style={{width:'70%',justifyContent:'center',alignItems:'flex-start',paddingLeft:15}}>
                                    <Text style={{color:'white',fontSize:22,fontWeight:'bold'}}>Beginner Programs</Text>
                                </View>
                                <View style={{width:'30%',justifyContent:'center',alignItems:'flex-end',paddingRight:15}}>
                                    <View>
                                        <PercentageCircle radius={25} percent={0} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:18,fontWeight:'bold'}}></PercentageCircle>  
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textbold}>Weighted</Text>
                <View style={{justifyContent:'center',paddingTop:10,paddingBottom:20}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/bg-fc.jpg')} style={{width: '100%', height: 120,alignSelf:'center',borderRadius: 25}} imageStyle={{ borderRadius: 5 }}>
                            <View style={{flex:1,flexDirection: 'row'}}>
                                <View style={{width:'70%',justifyContent:'center',alignItems:'flex-start',paddingLeft:15}}>
                                    <Text style={{color:'white',fontSize:22,fontWeight:'bold'}}>Calisthenics Programs</Text>
                                </View>
                                <View style={{width:'30%',justifyContent:'center',alignItems:'flex-end',paddingRight:15}}>
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
const BASE_SIZE = 300
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
        height:100
       // or 'stretch'
    },
    bggray:{
        backgroundColor:'#f7f7f7'
    },
    pd:{
        padding:10
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
  }
  });
export default Subcourseprogram;