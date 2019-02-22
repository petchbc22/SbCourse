import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right,Accordion    } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import VideoPlayer from '../node_modules/react-native-video-player';


const 
  warmup = [
    { title: "First Element", content: "http://192.168.1.111/dev/cafe.mp4", thumbnail: "http://192.168.1.111/dev/2000000001_480px.jpg"},
    { title: "Second Element", content: "http://192.168.1.111/dev/cafe2.mp4", thumbnail: "http://192.168.1.111/dev/Triumph-Street-Tracker-600x400.jpg" },
    { title: "Third Element", content: "http://192.168.1.111/dev/cafe3.mp4", thumbnail: "http://192.168.1.111/dev/what-makes-a-scrambler-5.jpg" }
  ];
  Round1 = [
    { title: "aaa", content: "http://192.168.1.111/dev/cafe.mp4", thumbnail: "http://192.168.1.111/dev/2000000001_480px.jpg"},
    { title: "bbb", content: "http://192.168.1.111/dev/cafe2.mp4", thumbnail: "http://192.168.1.111/dev/Triumph-Street-Tracker-600x400.jpg" },
    { title: "ccc", content: "http://192.168.1.111/dev/cafe3.mp4", thumbnail: "http://192.168.1.111/dev/what-makes-a-scrambler-5.jpg" }
  ];
  Round2 = [
    { title: "111", content: "http://192.168.1.111/dev/cafe.mp4", thumbnail: "http://192.168.1.111/dev/2000000001_480px.jpg"},
    { title: "222", content: "http://192.168.1.111/dev/cafe2.mp4", thumbnail: "http://192.168.1.111/dev/Triumph-Street-Tracker-600x400.jpg" },
    { title: "333", content: "http://192.168.1.111/dev/cafe3.mp4", thumbnail: "http://192.168.1.111/dev/what-makes-a-scrambler-5.jpg" }
  ];
class VideolearnScreen extends Component {

    navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.reset({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    }

    constructor() {
      super();
    }

    _renderHeader(item, expanded) {
      return (
    
        <View style={{flex: 1, flexDirection: 'row',backgroundColor:'#fff',borderBottomWidth:1,borderBottomColor:'#f9f9f9'}}>
    
          <View style={{width:'12%',padding:10}}>
          {expanded
            ? <Image style={{width: 40, height: 40}}source={ require('../img/stop-vdo-swipe-ico.png') } />
            : <Image style={{width: 40, height: 40}}source={ require('../img/play-vdo-swipe-ico.png') } />
          } 
          </View>
          <View style={{padding:10,width:'58%',justifyContent:'center',alignItems:'flex-start'}}>
          <Text>
            {" "}{item.title}
          </Text>
          </View>
          <View style={{width: '30%', padding:10,alignItems:'flex-end',justifyContent:'center'}}>
            <Image style={{width: 15, height: 15}}source={ require('../img/download-ico.png') } />
          </View>
        </View>
      );
    }
    _renderContent(item) {
      return (
          <VideoPlayer
          endWithThumbnail

          thumbnail={{ uri: item.thumbnail}}
          video={{ uri: item.content}}
          ref={r => this.player = r}
          />
      );
    }

 
   
  render() {
    const { goBack } = this.props.navigation;
    return (
     
        <Container>
            <ImageBackground source={require('../img/mobile-2561746_640.jpg')}style={{height:220}} >
                <Header style={{backgroundColor:'transparent',elevation:0,height:80,paddingTop:30}}>
                    <Left style={{flex: 1,paddingLeft:10}}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Image style={{width: 20, height: 20}}source={ require('../img/left-icon.png') } />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{flex: 1,justifyContent: 'center',alignItems: 'center', alignSelf: 'center',}}>
                        <Title style={{color:'#fff',fontSize:22,fontWeight:'bold'}}>Video Course</Title>
                    </Body>
                    <Right style={{flex: 1}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("CourseScreen")} >
                            <Image style={{width: 20, height: 20}}source={ require('../img/home-ico.png') } />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <View style={{flex: 1, flexDirection: 'row',paddingTop:5,alignItems:'center',justifyContent:'center'}}>
                        <View style={{width: 40,justifyContent:'center',alignItems:'center'}} >
                            <Image style={{width: 35, height: 35}}source={ require('../img/play-ico-w.png') } />
                        </View>
                        <View style={{width: 150,justifyContent:'center',alignItems:'center'}} >
                            <TouchableHighlight
                                style = {{
                                    borderRadius:50,
                                    width: 100,
                                    height: 100,
                                    backgroundColor:'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    shadowColor: '#000000',
                                    shadowOffset: {
                                      width: 0,
                                      height: 3
                                    },
                                    shadowColor: '#fff',
                                    shadowOpacity: 1.0,

                                }}
                                underlayColor = '#ccc'
                                onPress={() => this.props.navigation.navigate("VideolearnScreen")} 
                                >
                                <Text style={styles.Text18B}>00:00</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{width: 40,justifyContent:'center',alignItems:'center'}} >
                            <Image style={{width: 35, height: 35}}source={ require('../img/information.png') } />
                        </View>
                    </View>
                </Content>
                  </ImageBackground>
                  <Content style={[styles.bggray]}>
                      <Text style={[styles.textbold,styles.pd]}>WARM-UP</Text>
                      <Accordion 
                        dataArray={warmup}
                        headerStyle={styles.bgacc}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                      />
                      <Text style={[styles.textbold,styles.pd]}>Round 1</Text>
                          <Accordion 
                            dataArray={Round1}
                            headerStyle={styles.bgacc}
                            expanded={true}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                      />
                      <Text style={[styles.textbold,styles.pd]}>Round 2</Text>
                      <Accordion 
                        dataArray={Round2}
                        headerStyle={styles.bgacc}
                        expanded={true}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                      />
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
export default VideolearnScreen;