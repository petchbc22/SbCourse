import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right,Accordion    } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import VideoPlayer from '../node_modules/react-native-video-player';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import PercentageCircle from 'react-native-percentage-circle';
import styles from './customstyle'
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
                <Header style={styles.header_nobg}>
                    <Left style={[styles.flex_1,styles.pl10]}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Icon name='arrow-back' style={styles.textwhite}/> 
                        </TouchableOpacity>
                    </Left>
                    <Body>
                    
                    </Body>
                    <Right style={[styles.flex_1,styles.pl10]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("CourseScreen")} >
                            <Icon name='home' style={[styles.textwhite,styles.text_22]}/> 
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <View style={[styles.pt50,styles.pl20,styles.flex_1,styles.flex_row]}>
                       <Text style={[styles.text_graywhite,styles.textbold]}>BEGINNER</Text>
                    </View>
                    <View style={[styles.flex_1,styles.flex_row,styles.pl20]}>
                       <Text style={[styles.textwhite,styles.textbold,styles.text_26]}>Introduction Program</Text>
                    </View>
                    <View style={[styles.flex_1,styles.flex_row,styles.pl20,styles.pb5]}>
                        <Text style={[styles.textbold,styles.textwhite]}>20 %</Text>
                    </View>
                    <View style={[styles.flex_1,styles.flex_row,styles.pl20]}>
                        <ProgressBarAnimated
                            width={200}
                            height={8}
                            value={20}
                            backgroundColorOnComplete="#6CC644"
                        />
                    </View>
                    <View style={[styles.flex_1,styles.flex_row,styles.pl20,styles.pt10]}>
                        <View>
                            <Text style={[styles.text_graywhite,styles.pr10]}>6689 likes</Text>
                        </View>
                        <View>
                            <Text style={styles.text_graywhite}>712 comments</Text>
                        </View>
                    </View>
                </Content>
                  </ImageBackground>
                  <Content style={[styles.bggray]}>
                    <View style={[styles.pt10,styles.centerYleftX]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("PullupScreen")}>
                            <View style={[styles.boxIntroduction]}>
                                <View style={{flex:1,flexDirection: 'row'}}>
                                    <View style={[{width:'80%'},styles.centerYleftX,styles.pl25]}>
                                        <Text style={[styles.text_black,styles.text_20,styles.textbold]}>Pull-Ups</Text>
                                        <View>
                                        <Text style={[styles.text_14,styles.textbold,styles.text_darkgray]}>10 sessions</Text>
                                        </View>
                                    </View>
                                    <View style={[{width:'20%'},styles.pr20,styles.centerYlrightX]}>
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
                            <View style={[styles.boxIntroduction]}>
                                <View style={{flex:1,flexDirection: 'row'}}>
                                    <View style={[{width:'80%'},styles.centerYleftX,styles.pl25]}>
                                        <Text style={[styles.text_black,styles.text_20,styles.textbold]}>Push-Ups</Text>
                                        <View>
                                        <Text style={[styles.text_14,styles.textbold,styles.text_darkgray]}>8 sessions</Text>
                                        </View>
                                    </View>
                                    <View style={[{width:'20%'},styles.pr35,styles.centerYlrightX]}>
                                        <View>
                                        <Icon name="lock" style={styles.text_darkgray} />  
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

export default SubcourseIntroductionScreen;