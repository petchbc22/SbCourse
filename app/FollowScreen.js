import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import { HomeScreen } from './HomeScreen';
import SegmentedControlTab from "react-native-segmented-control-tab";
import CircleButton from 'react-native-circle-button';
import PercentageCircle from 'react-native-percentage-circle';

class FollowScreen extends Component {

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
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Followers</Text>
                </View>
            </Body>
            <Right>
            </Right>
            </Header>
            <Content style={[styles.bggray,styles.pd]}>
                
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
    boxview:{
        width: '100%', 
        height: 70,
        alignSelf:'center',
        borderRadius:5,
        backgroundColor:'white',
        marginLeft:15,
        marginRight:15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        borderTopWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    circlenb:{
        borderRadius:20,
        width: 40,
        height: 40,
        backgroundColor:'#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
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
export default FollowScreen;