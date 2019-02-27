import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import styles from './customstyle'

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

            <Header style={styles.header_nobg}>
            <Left style={styles.pl10}>
                <TouchableOpacity onPress={() => goBack()}>
                    <Icon name="arrow-back" />
                </TouchableOpacity>
            </Left>
            <Body>
                <View>
                    <Text style={[styles.textbold,styles.text_20]}>Follow</Text>
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

export default FollowScreen;