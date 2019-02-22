import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label   } from 'native-base';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import { HomeScreen } from './HomeScreen';
import SegmentedControlTab from "react-native-segmented-control-tab";
import CircleButton from 'react-native-circle-button';
class Subcoursefrist extends Component {

    navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.reset({
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
    const { goBack } = this.props.navigation;
    return (
        <Container>
          <ImageBackground source={require('../img/bg-course.jpg')}style={styles.backgroundImage} >
          <Header style={{backgroundColor:'transparent',elevation:0,height:100,paddingTop:20}}>
            <Body style={{paddingLeft:10}}>
              <TouchableOpacity onPress={() => goBack()}>
                <Image style={{width: 20, height: 20}}source={ require('../img/left-icon.png') } />
              </TouchableOpacity>
            </Body>
          </Header>
          <Content style={{paddingTop:20,paddingLeft:20,paddingRight:20,paddingTop:'70%'}}>
              <Text style={{color:'white'}}>FEBRUARY 11TH,2019</Text>
              <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>Frist Course</Text>
              <View style={{paddingTop:30}}>
                <SegmentedControlTab
                  tabsContainerStyle={styles.tabsContainerStyle}
                  tabStyle={styles.tabStyle}
                  tabTextStyle={styles.tabTextStyle}
                  activeTabStyle={styles.activeTabStyle}
                  activeTabTextStyle={styles.activeTabTextStyle}
                  values={["Beginner", "Intermediate", "Advanced"]}
                  selectedIndex={this.state.selectedIndex}
                  onTabPress={this.handleIndexChange}
                />
              </View>
              <View style={{flex: 1, flexDirection: 'row',paddingTop:40,alignItems:'center',justifyContent:'center'}}>
                  <View style={{width: '20%',justifyContent:'center',alignItems:'center'}} >
                      <Image style={{width: 35, height: 35}}source={ require('../img/bookmark-ico.png') } />
                  </View>
                  <View style={{width: '60%',justifyContent:'center',alignItems:'center'}} >
                  <TouchableHighlight
                      style = {{
                          borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                          width: Dimensions.get('window').width * 0.4,
                          height: Dimensions.get('window').width * 0.4,
                          backgroundColor:'white',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 10,
                          shadowColor: '#fff',
                          shadowOffset: {
                            width: 0,
                            height: 3
                          },
                          shadowRadius: 5,
                          shadowOpacity: 1.0

                      }}
                      underlayColor = '#ccc'
                      onPress={() => this.props.navigation.navigate("VideolearnScreen")} 
                      >
                      <Text style={styles.Text18B}>START !</Text>
                  </TouchableHighlight>
                  </View>
                  <View style={{width: '20%',justifyContent:'center',alignItems:'center'}} >
                      <Image style={{width: 35, height: 35}}source={ require('../img/information.png') } />
                  </View>
              </View>
            </Content>
            </ImageBackground>
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
  }
  });
export default Subcoursefrist;

