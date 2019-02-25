import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import PercentageCircle from 'react-native-percentage-circle';
import styles from './customstyle' 
class PullupScreen extends Component {

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
                    <Text style={[styles.text_20,styles.textbold]}>Pull-Ups</Text>
                </View>
            </Body>
            <Right>
                <PercentageCircle radius={15} percent={20} color={"#3498db"} borderWidth={"4"} textStyle={{color:'#000',fontSize:10,fontWeight:'bold'}}></PercentageCircle>  
            </Right>
            </Header>
            <Content style={[styles.bggray,styles.pd10]}>
                <View style={[styles.pt10,styles.jtfContent]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <View style={styles.boxview}>
                            <View style={[styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'20%'},styles.centerYleftX,styles.pl15]}>
                                    <View style={styles.circlenb}>
                                        <Text style={[styles.textwhite,styles.text_22,styles.textbold]}>1</Text>
                                    </View>
                                </View>
                                <View style={[{width:'60%'},styles.pr15,styles.centerYleftX]}>
                                    <View>
                                        <Text style={[styles.text_16,styles.textbold]}>Pull Up Intro</Text>
                                    </View>
                                </View>
                                <View style={[{width:'20%'},styles.pr20,styles.centerYlrightX]}>
                                    {/* <View>
                                        <Icon name="lock" style={{ color: 'gray' }} />  
                                    </View> */}
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.pt10,styles.jtfContent]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <View style={styles.boxview}>
                            <View style={[styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'20%'},styles.centerYleftX,styles.pl15]}>
                                    <View style={styles.circlenb}>
                                        <Text style={[styles.textwhite,styles.text_22,styles.textbold]}>2</Text>
                                    </View>
                                </View>
                                <View style={[{width:'60%'},styles.pr15,styles.centerYleftX]}>
                                    <View>
                                        <Text style={[styles.text_16,styles.textbold]}>Pull Up Intro</Text>
                                    </View>
                                </View>
                                <View style={[{width:'20%'},styles.pr20,styles.centerYlrightX]}>
                                    {/* <View>
                                        <Icon name="lock" style={{ color: 'gray' }} />  
                                    </View> */}
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.pt10,styles.jtfContent]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <View style={styles.boxview}>
                            <View style={[styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'20%'},styles.centerYleftX,styles.pl15]}>
                                    <View style={styles.circlenb}>
                                        <Text style={[styles.textwhite,styles.text_22,styles.textbold]}>3</Text>
                                    </View>
                                </View>
                                <View style={[{width:'60%'},styles.pr15,styles.centerYleftX]}>
                                    <View>
                                        <Text style={[styles.text_16,styles.textbold]}>Pull Up Intro</Text>
                                    </View>
                                </View>
                                <View style={[{width:'20%'},styles.pr20,styles.centerYlrightX]}>
                                    {/* <View>
                                        <Icon name="lock" style={{ color: 'gray' }} />  
                                    </View> */}
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.pt10,styles.jtfContent]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                        <View style={styles.boxview}>
                            <View style={[styles.flex_1,styles.flex_row]}>
                                <View style={[{width:'20%'},styles.centerYleftX,styles.pl15]}>
                                    <View style={styles.circlenb}>
                                        <Text style={[styles.textwhite,styles.text_22,styles.textbold]}>4</Text>
                                    </View>
                                </View>
                                <View style={[{width:'60%'},styles.pr15,styles.centerYleftX]}>
                                    <View>
                                        <Text style={[styles.text_16,styles.textbold]}>Pull Up Intro</Text>
                                    </View>
                                </View>
                                <View style={[{width:'20%'},styles.pr20,styles.centerYlrightX]}>
                                    <View>
                                        <Icon name="lock" style={{ color: 'gray' }} />  
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

export default PullupScreen;