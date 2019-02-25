import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right,Accordion    } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import VideoPlayer from '../node_modules/react-native-video-player';
import styles from './customstyle';

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
    
        <View style={styles.flexVdoMainView}>
          <View style={styles.ViewIconPlaySwipe}>
          {expanded
            ? <Image style={styles.iconSwipe}source={ require('../img/stop-vdo-swipe-ico.png') } />
            : <Image style={styles.iconSwipe}source={ require('../img/play-vdo-swipe-ico.png') } />
          } 
          </View>
          <View style={styles.ViewtextHeading}>
          <Text>
            {" "}{item.title}
          </Text>
          </View>
          <View style={styles.Viewdl}>
            <Icon name='download' style={styles.icodl}/>                         
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
            <ImageBackground source={require('../img/mobile-2561746_640.jpg')} style={styles.H_bgimg} >
                <Header style={styles.header_nobg}>
                    <Left style={[styles.flex_1,styles.pl10]}>
                        <TouchableOpacity onPress={() => goBack()}>
                          <Icon name='arrow-back' style={styles.textwhite} />                         
                        </TouchableOpacity>
                    </Left>
                    <Body style={[styles.flex_1,styles.centerXY]}>
                        <Title style={[styles.textbold,styles.text_22,styles.textwhite]}>Video Course</Title>
                    </Body>
                    <Right style={{flex: 1}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("CourseScreen")} >
                          <Icon name='home' style={[styles.textwhite,styles.text_22]} />        
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <View style={[styles.flex_1,styles.flex_row,styles.centerXY,styles.pt5]}>
                        <View style={[{width: 40},styles.centerXY]} >
                            <Image style={{width: 35, height: 35}}source={ require('../img/play-ico-w.png') } />
                        </View>
                        <View style={[{width: 150},styles.centerXY]} >
                            <View style = {styles.btnTime} underlayColor = '#ccc'>
                                <Text style={[styles.text_22,styles.textbold]}>00:00</Text>
                            </View>
                        </View>
                        <View style={[{width: 40},styles.centerXY]} >                            
                            <Image style={{width: 35, height: 35}}source={ require('../img/information.png') } />
                        </View>
                    </View>
                </Content>
                  </ImageBackground>
                  <Content style={[styles.bggray]}>
                      <Text style={[styles.textbold,styles.pd10]}>WARM-UP</Text>
                      <Accordion 
                        dataArray={warmup}
                        headerStyle={styles.bgacc}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                      />
                      <Text style={[styles.textbold,styles.pd10]}>Round 1</Text>
                          <Accordion 
                            dataArray={Round1}
                            headerStyle={styles.bgacc}
                            expanded={true}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                      />
                      <Text style={[styles.textbold,styles.pd10]}>Round 2</Text>
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
export default VideolearnScreen;