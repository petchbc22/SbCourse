import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label   } from 'native-base';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import { HomeScreen } from './HomeScreen';
import SegmentedControlTab from "react-native-segmented-control-tab";
import CircleButton from 'react-native-circle-button';
import styles from './customstyle';

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
          <ImageBackground source={require('../img/bg-course.jpg')}style={styles.backgroundImagefull}>
          <Header style={styles.header_nobg}>
            <Body style={styles.pl10}>
              <TouchableOpacity onPress={() => goBack()}>
                <Icon name='arrow-back' style={styles.textwhite} />              
              </TouchableOpacity>
            </Body>
          </Header>
          <Content style={styles.pushText70}>
              <Text style={[styles.textwhite]}>FEBRUARY 11TH,2019</Text>
              <Text style={[styles.textwhite,styles.text_25,styles.textbold]}>Frist Course</Text>
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
              <View style={styles.buttonRow}>
                  <View style={[styles.centerXY,{width: '20%'}]} >
                      <Image style={{width: 35, height: 35}}source={ require('../img/bookmark-ico.png') } />
                  </View>
                  <View style={[styles.centerXY,{width: '60%'}]} >
                    <TouchableHighlight
                      style = {styles.circleButtonStart}
                      underlayColor = '#ccc'
                      onPress={() => this.props.navigation.navigate("VideolearnScreen")} 
                      >
                      <Text style={[styles.text_22,styles.textbold]}>START !</Text>
                  </TouchableHighlight>
                  </View>
                  <View style={[styles.centerXY,{width: '20%'}]} >                      
                    <Image style={{width: 35, height: 35}}source={ require('../img/information.png') } />
                  </View>
              </View>
            </Content>
            </ImageBackground>
          </Container>
    );
  }
}

export default Subcoursefrist;

