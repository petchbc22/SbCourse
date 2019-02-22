import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TextInput,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import { HomeScreen } from './HomeScreen';
import SegmentedControlTab from "react-native-segmented-control-tab";
import CircleButton from 'react-native-circle-button';
import PercentageCircle from 'react-native-percentage-circle';
import PhotoUpload from 'react-native-photo-upload'
class SettingProfile extends Component {

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
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Settings</Text>
                </View>
            </Body>
            <Right>
            </Right>
            </Header>
            <Content style={styles.bggray}>
              <View style={[styles.pd,styles.pt30]}>
                <PhotoUpload
                  onPhotoSelect={avatar => {
                    if (avatar) {
                      console.log('Image base64 string: ', avatar)
                    }
                  }}
                >
                  <Image
                    style={{
                      paddingVertical: 30,
                      width: 100,
                      height: 100,
                      borderRadius: 75
                    }}
                    resizeMode='cover'
                    source={{
                      uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                    }}
                  />
                </PhotoUpload>
                <View style={styles.pt20}>
                  <Text style={styles.Text14B}>Your Profile</Text>
                </View>
              </View>
              {/* textbox */}
              <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#ececec'}}>
                <View style={{width: '50%',padding:10,justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#cdcdcd'}}>Frist Name</Text>
                </View>
                <View style={{width: '50%',paddingRight:10}}>
                  <TextInput
                    style={{fontWeight:'bold',height:40,textAlign: 'right'}}
                    placeholder="Name"
                    onChangeText={(text) => this.setState({text})}
                  />
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#ececec'}}>
                <View style={{width: '50%',padding:10,justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#cdcdcd'}}>Last Name</Text>
                </View>
                <View style={{width: '50%',paddingRight:10}}>
                  <TextInput
                    style={{fontWeight:'bold',height:40,textAlign: 'right'}}
                    placeholder="SurName"
                    onChangeText={(text) => this.setState({text})}
                  />
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#ececec'}}>
                <View style={{width: '50%',padding:10,justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#cdcdcd'}}>User Name</Text>
                </View>
                <View style={{width: '50%',paddingRight:10}}>
                  <TextInput
                    style={{fontWeight:'bold',height:40,textAlign: 'right'}}
                    placeholder="UserName"
                    onChangeText={(text) => this.setState({text})}
                  />
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#ececec'}}>
                <View style={{width: '50%',padding:10,justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#cdcdcd'}}>Email</Text>
                </View>
                <View style={{width: '50%',paddingRight:10}}>
                  <TextInput
                    style={{fontWeight:'bold',height:40,textAlign: 'right'}}
                    placeholder="Email"
                    onChangeText={(text) => this.setState({text})}
                  />
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#ececec'}}>
                <View style={{width: '50%',padding:10,justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#000'}}>Logout</Text>
                </View>
                <View style={{width: '50%',paddingRight:10,justifyContent:'center'}}>
                  <Icon name='arrow-forward' style={{color:'#cdcdcd',fontSize:18,textAlign:'right'}} /> 
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#ececec'}}>
                <View style={{width: '50%',padding:10,justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#000'}}>Change Password</Text>
                </View>
                <View style={{width: '50%',paddingRight:10,justifyContent:'center'}}>
                  <Icon name='arrow-forward' style={{color:'#cdcdcd',fontSize:18,textAlign:'right'}} /> 
                </View>
              </View>
              <View style={[styles.pt20,styles.pd]}>
                <Text style={styles.Text14B}>Settings</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#ececec'}}>
                <View style={{width: '50%',padding:10,justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#000'}}>Terms and conditions</Text>
                </View>
                <View style={{width: '50%',paddingRight:10,justifyContent:'center'}}>
                  <Icon name='arrow-forward' style={{color:'#cdcdcd',fontSize:18,textAlign:'right'}} /> 
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#ececec'}}>
                <View style={{width: '50%',padding:10,justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#000'}}>About us</Text>
                </View>
                <View style={{width: '50%',paddingRight:10,justifyContent:'center'}}>
                  <Icon name='arrow-forward' style={{color:'#cdcdcd',fontSize:18,textAlign:'right'}} /> 
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#ececec'}}>
                <View style={{width: '100%',padding:10,justifyContent:'center'}}>
                    <Text style={{fontSize:14,color:'#000'}}>Version 1.0</Text>
                </View>
              </View>
              <View style={styles.btnview}>
                <Button style={styles.btnstyle} onPress={() => this.props.navigation.navigate("CourseScreen")}>
                  <Text style={styles.textbold}>Save Changes</Text>
                </Button>
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
    pt20:{
      paddingTop:20
    },
    pt30:{
      paddingTop:30
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
  Text14B :{
    fontSize:14,
    fontWeight:'bold'
  },
  textbold:{
      fontWeight:'bold'
  },
  bgwhite:{
    backgroundColor:'#fff'
  },
  btnstyle:{
    borderRadius:30,width:200,justifyContent:'center'
  }, 
  btnview:{
    paddingTop:20,flex:1,alignItems: 'center',alignSelf:'center'
  },
  });
export default SettingProfile;