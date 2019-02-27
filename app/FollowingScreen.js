import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import styles from './customstyle'
class FollowingScreen extends Component {

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
                    <Icon name="arrow-back" />
                </TouchableOpacity>
            </Left>
            <Body>
                <View>
                    <Text style={[styles.customfont,styles.textbold,styles.text_20]}>ผู้ติดตาม</Text>
                </View>
            </Body>
            <Right>
            </Right>
            </Header>
            <Content style={styles.bggray}>
                <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#dcdcdc',borderTopWidth:0.5,borderTopColor:'#dcdcdc'}}>
                    <View style={[{width: '20%'},styles.pd10,styles.jtfContent]}>
                        <Image style={styles.imgProfile_fl}source={require('../img/profile.jpg')}/>
                    </View>
                    <View style={[{width:'50%'},styles.pd10,styles.jtfContent]}>       
                        <Text style={{fontSize:16,color:'#000',fontWeight:'bold'}}>Chirs Evan</Text>
                    </View>
                    <View style={[{width: '30%'},styles.pr10,styles.centerYlrightX]}>
                        <View style={styles.btnFollowview}>
                            <Button style={styles.btnFollowstyle} onPress={() => this.props.navigation.navigate("#")}>
                            <Text style={[styles.text_12,styles.textbold]}>Unfollows</Text>
                            </Button>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#dcdcdc',borderTopWidth:0.5,borderTopColor:'#dcdcdc'}}>
                    <View style={[{width: '20%'},styles.pd10,styles.jtfContent]}>
                        <Image style={styles.imgProfile_fl}source={require('../img/10866101.jpg')}/>
                    </View>
                    <View style={[{width:'50%'},styles.pd10,styles.jtfContent]}>       
                        <Text style={{fontSize:16,color:'#000',fontWeight:'bold'}}>Tony Stark</Text>
                    </View>
                    <View style={[{width: '30%'},styles.pr10,styles.centerYlrightX]}>
                        <View style={styles.btnFollowview}>
                            <Button style={styles.btnFollowstyle} onPress={() => this.props.navigation.navigate("#")}>
                            <Text style={[styles.text_12,styles.textbold]}>Unfollows</Text>
                            </Button>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#dcdcdc',borderTopWidth:0.5,borderTopColor:'#dcdcdc'}}>
                    <View style={[{width: '20%'},styles.pd10,styles.jtfContent]}>
                        <Image style={styles.imgProfile_fl}source={require('../img/ddd.jpg')}/>
                    </View>
                    <View style={[{width:'50%'},styles.pd10,styles.jtfContent]}>       
                        <Text style={{fontSize:16,color:'#000',fontWeight:'bold'}}>Thor son of odin </Text>
                    </View>
                    <View style={[{width: '30%'},styles.pr10,styles.centerYlrightX]}>
                        <View style={styles.btnFollowview}>
                            <Button style={styles.btnFollowstyle} onPress={() => this.props.navigation.navigate("#")}>
                            <Text style={[styles.text_12,styles.textbold]}>Unfollows</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Content>
          </Container>
    );
  }
}

export default FollowingScreen;