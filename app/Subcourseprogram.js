import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import styles from './customstyle';
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
            <Header style={styles.header_nobg}>
            <Left style={styles.pl10}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Icon name='arrow-back'/>                 
                </TouchableOpacity>
            </Left>
            <Body>
                <View>
                    <Text style={[styles.textbold,styles.text_22]}>Programs</Text>
                </View>
            </Body>
            <Right>

            </Right>
            </Header>
            <Content style={[styles.bggray,styles.pd10]}>
                <Text style={styles.textbold}>Introduction</Text>
                <View style={[styles.pt10,styles.pb20]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SubcourseIntroductionScreen")}>
                        <ImageBackground source={require('../img/iStock-621134108-min.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_22,styles.textbold,styles.textwhite]}>Introduction Programs</Text>
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
                <Text style={styles.textbold}>Calisthenics</Text>
                <View style={{justifyContent:'center',paddingTop:10,paddingBottom:20}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/bg-fc.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_22,styles.textbold,styles.textwhite]}>Beginner Programs</Text>
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
                <Text style={styles.textbold}>Weighted</Text>
                <View style={{justifyContent:'center',paddingTop:10,paddingBottom:20}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <ImageBackground source={require('../img/bg-fc.jpg')} style={[styles.ViewbgPG]} imageStyle={{ borderRadius: 5 }}>
                            <View style={[styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'70%'},styles.centerYleftX,styles.pl15]}>
                                    <Text style={[styles.text_22,styles.textbold,styles.textwhite]}>Calisthenics Programs</Text>
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

export default Subcourseprogram;