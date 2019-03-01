import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import styles from './customstyle'
import openMap from 'react-native-open-maps';
const DeviceWidth = Dimensions.get('window').width
class AboutScreen extends Component {

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
  render() {
      const {goBack} = this.props.navigation;
    return (
        <Container>
            <Header style={styles.header_nobg}>
            <Left style={styles.pl10}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Icon name="arrow-back" />
                </TouchableOpacity>
            </Left>
            <Body>
                <View>
                    <Text style={[styles.customfont,styles.textbold,styles.text_20]}>About US</Text>
                </View>
            </Body>
            <Right>
            </Right>
            </Header>
            <Content style={[styles.bggray,styles.pd10]}>
                <View style={[styles.jtfContent,styles.pt10,styles.itemCenter]}>
                    <Image style={{width: DeviceWidth*0.8, height: DeviceWidth*0.225,margin:0.5}}source={require('../img/Story-board-b.png')}/>
                </View>
                <View>
                    <Text style={[styles.textbold,styles.text_22,styles.pt20]}>About</Text>
                    <Text style={[styles.pt10,styles.text_12,styles.text_darkgray]}>
                        We are a professional video production and video marketing company in Bangkok,
                        specialising in creating and distributing video that capture the interest
                        of your target audience through various channels.

                    </Text>
                    <View style={[styles.jtfContent,styles.pt10,styles.itemCenter]}>
                        <Image style={{width: DeviceWidth, height: DeviceWidth*0.55,margin:0.5}}source={require('../img/about-1.jpg')}/>
                    </View>
                    <Text style={[styles.textbold,styles.text_22,styles.pt20]}>Our Services</Text>
                    <Text style={[styles.pt10,styles.text_12,styles.text_darkgray]}>
                        Your customers are moving fast and so should your video productions.
                        By using the latest technologies combining with our unique production platform,
                        we are able to create highest quality marketing videos at a fraction of the usual time.
                    </Text>
                    <View style={[styles.jtfContent,styles.pt10,styles.itemCenter]}>
                        <Image style={{width: DeviceWidth, height: DeviceWidth*0.55,margin:0.5}}source={require('../img/about-2.jpg')}/>
                    </View>
                   
                    <Text style={[styles.pt20,styles.text_12,styles.text_darkgray]}>
                    Be a part of the new content revolution and generate quicker and higher sale for your business.
                    Contact us today to find out what we can give.
                    </Text>
                    <View style={[styles.jtfContent,styles.pt10,styles.itemCenter]}>
                        <Image style={{width: DeviceWidth, height: DeviceWidth*0.55,margin:0.5}}source={require('../img/about-3.jpg')}/>
                    </View>
                </View>
            </Content>
          </Container>
    );
  }
}

export default AboutScreen;