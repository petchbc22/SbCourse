import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import { Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label   } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator  } from  'react-navigation';
import { SocialIcon } from 'react-native-elements'

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, { backgroundColor: 'black' }];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };
    const stretch = {
      width: 50,
      height: 200
    }
    return (
      <View style={viewStyles}>
        <Image style={{width: 290, height: 80}}source={require('../img/Story-board-w.png')}/>
      </View>
    );
  }
}

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1500
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  render () {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      <ImageBackground source={require('../img/bg-main.jpg')}style={styles.backgroundImage} >
        <ScrollView contentContainerStyle={{flexGrow: 1}}> 
        <View style={styles.container} behavior="padding" enabled>
          <View style={styles.logo}>
            <Image style={styles.logosize}source={require('../img/sb-ico.png')}/>
         </View>
            <View style={styles.sectiontab}>
              <Tabs style={{backgroundColor:'transparent',justifyContent: 'center',}} tabBarUnderlineStyle= {{backgroundColor: '#f65857'}  }>
                  <Tab 
                      active
                      heading="Login" 
                      tabStyle={styles.bgblack}
                      activeTabStyle={styles.bgblack} 
                      style={styles.tabcustom}  
                      >
                      <Item rounded style={styles.viewinput}>
                          <Input placeholder='Email' placeholderTextColor="#fff" style={styles.styletextinput}/>
                      </Item>
                      <Item rounded style={styles.viewinput}>
                          <Input placeholder='Password' placeholderTextColor="#fff" style={styles.styletextinput}/>
                      </Item>
                      <View style={styles.btnview}>
                          <Button style={styles.btnstyle} onPress={() => this.props.navigation.navigate("CourseScreen")}>
                            <Text >Login</Text>
                          </Button>
                          {/* <SocialIcon
                            style={styles.btnstyle}
                            title='Sign In With Facebook'
                            button
                            type='facebook'
                          /> */}
                          <Text style={{color:'#fff',fontWeight:'bold',paddingTop:20}}>Sign in With Facebook</Text>
                      </View>
                
                        
                      
                  </Tab>
                  <Tab 
                    heading=" Register" 
                    tabStyle={styles.bgblack} 
                    activeTabStyle={styles.bgblack} 
                    // custom ��� content
                    style={styles.tabcustom} 
                  >
                    <Item rounded style={styles.viewinput}>
                      <Input placeholder='Name' placeholderTextColor="#fff" style={styles.styletextinput}/>
                    </Item>
                    <Item rounded style={styles.viewinput}>
                      <Input placeholder='Last Name' placeholderTextColor="#fff" style={styles.styletextinput}/>
                    </Item>
                    <Item rounded style={styles.viewinput}>
                      <Input placeholder='Username' placeholderTextColor="#fff" style={styles.styletextinput}/>
                    </Item>
                    <Item rounded style={styles.viewinput}>
                      <Input placeholder='Email' placeholderTextColor="#fff" style={styles.styletextinput}/>
                    </Item>
                    <Item rounded style={styles.viewinput}>
                      <Input placeholder='Password' placeholderTextColor="#fff" style={styles.styletextinput}/>
                    </Item>
                    <View style={styles.btnview}>
                      <Button style={styles.btnstyle} onPress={() => this.props.navigation.navigate("CourseScreen")}>
                        <Text >Create Account</Text>
                      </Button>
                    </View>
                  </Tab>
              </Tabs>
            </View>
            <View style={styles.pt20}>
                <Text style={styles.textwhite} >About Us Storyboard</Text>
            </View>
        </View>
        </ScrollView>
      </ImageBackground>
  );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover', 
      top: 0,
      bottom:0
     // or 'stretch'
  },
  logo:{
    alignItems:'center',justifyContent: 'center',paddingBottom:20
  },
  logosize:{
    width: 150, height: 150
  },
  sectiontab:{
    height:450, marginLeft: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bgblack:{
    backgroundColor:'#000'
  },
  bgwhite:{
    backgroundColor:'#fff'
  },
  btnview:{
    paddingTop:20,flex:1,alignItems: 'center',alignSelf:'center'
  },
  pt20:{
    paddingTop:20
  },
  viewinput:{
    marginTop:15,paddingLeft:10
  }
 
});

export default LoginScreen;