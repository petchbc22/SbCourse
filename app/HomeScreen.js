import React from 'react';
import {View,StyleSheet,FlatList,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,Text ,RefreshControl } from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation';
import {  Header,Container,Content,Card, CardItem, Thumbnail, Footer, Tab, Tabs,FooterTab, Button,Input,Item, Icon } from 'native-base'
import styles from './customstyle';
// import { FlatGrid } from 'react-native-super-grid';
import { Feeds } from './Feeds';


navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

class FeedScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Feeds />
            </View>
        );
    }
}

class CourseScreen extends React.Component {
    render() {
        return (
            <Container style={styles.bgwhite}>
                <Tabs style={styles.tabheader} tabBarUnderlineStyle= {styles.bgblack } tabContainerStyle={{ height: 60 }} >
                    <Tab 
                        heading=" Workouts" 
                        tabStyle={styles.subtabheader} 
                        activeTabStyle={styles.subtabheader} 
                        // custom ��� content
                        textStyle={styles.textintab}
                        activeTextStyle={styles.textintabActive}
                    >
                        <ScrollView>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Subcoursefrist")}>
                                <ImageBackground source={require('../img/phone-802125_1280.jpg')} style={styles.bgimgContentfrist}>
                                    <View style={styles.headingcontent}>
                                        <Text style={[styles.textwhite,styles.textbold,styles.text_16]}>February 08, 2019</Text>
                                        <Text style={[styles.textwhite,styles.textbold,styles.text_25]}>Photography With My Phone</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <Text style={[styles.pd10 , styles.text_16, styles.text_black,styles.textbold]}>Explore</Text>

                            <View style={styles.imagebutton}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Subcourseprogram")}>
                                    <ImageBackground source={require('../img/iStock-621134108-min.jpg')} style={styles.styleimgBtn} imageStyle={{ borderRadius: 5 }}>
                                        <View style={styles.viewtextinsub}>
                                            <Text style={styles.textinsubmenu}>Programs</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.imagebutton,styles.pt15,styles.pb15]}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Subcoursetechnic")}>
                                    <ImageBackground source={require('../img/TS_76.jpg')} style={styles.styleimgBtn} imageStyle={{ borderRadius: 5 }}>
                                        <View style={styles.viewtextinsub}>
                                            <Text style={styles.textinsubmenu}>Techniques</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.imagebutton,styles.pb15]}>
                                <ImageBackground source={require('../img/mobile-pic-1.jpg')} style={styles.styleimgBtn} imageStyle={{ borderRadius: 5 }}>
                                    <View style={styles.viewtextinsub}>
                                        <Text style={styles.textinsubmenu}>Daily Workouts</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </Tab>
                    <Tab 
                        heading="Saved" 
                        tabStyle={styles.subtabheader} 
                        activeTabStyle={styles.subtabheader} 
                        // custom ��� content
                        textStyle={styles.textintab}
                        activeTextStyle={styles.textintabActive}
                    >
                    <ScrollView style={styles.bggray}>
                        <View style={styles.pd15}>
                            <Text style={[styles.textbold,styles.text_20,styles.text_black]}>
                                Bookmarked
                            </Text>
                        </View>
                        <View style={styles.listsaved}>
                            <Text style={[styles.text_black,styles.text_18]}>
                                Programs (0)
                            </Text>
                        </View>
                        <View style={styles.listsaved}>
                            <Text style={[styles.text_black,styles.text_18]}>
                                Techniques (0)
                            </Text>
                        </View>
                        <View style={styles.listsaved}>
                            <Text style={[styles.text_black,styles.text_18]}>
                                Daily Workouts (0)
                            </Text>
                        </View>
                    </ScrollView>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

class ProfileScreen extends React.Component {
    
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }
      constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
        };
      }
      _onRefresh = () => {
        this.setState({refreshing: true});
        fetchData().then(() => {
          this.setState({refreshing: false});
        });
      }
      componentDidMount() {
        
        return fetch('http://192.168.1.111/sbcourse/ImagesList.php')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson
            }, function() {
              // In this block you can do something with new state.
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    render() {
        return (
            <Container>
                <Header transparent style={styles.header_pf}>
                <Content>
                    <View style={styles.flex_1}>
                        <View style={styles.flex3_header}>
                            <View style={styles.subflex3_img}>
                                <Image style={styles.imgprofile} source={require('../img/profile.jpg')}/>
                            </View>
                            <View style={styles.subflex3_username}>
                                <Text style={[styles.text_20,styles.textbold,styles.text_black]}>Petch-BC22</Text>
                            </View>
                            <View style={styles.subflex3_settingico}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("SettingProfile")}>
                                    <Icon name='settings'style={[styles.text_gray,styles.text_24]} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.flex_row,styles.flex_1,styles.pt10]}>
                            <View style={{width: '33%'}}>
                                <Text style={[styles.text_center,styles.text_18,styles.textbold,styles.text_black]}>5</Text>
                                <Text style={[styles.text_center,styles.textbold]}>Posts</Text>
                            </View>
                            <View style={{width: '33%'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("FollowScreen")}>
                                    <Text style={[styles.text_center,styles.text_18,styles.textbold,styles.text_black]}>0</Text>
                                    <Text style={[styles.text_center,styles.textbold]}>Followers</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: '33%'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("FollowingScreen")}>
                                    <Text style={[styles.text_center,styles.text_18,styles.textbold,styles.text_black]}>18</Text>
                                    <Text style={[styles.text_center,styles.textbold]}>Following</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
                </Header>
                <Content>
                    <FlatList
                        data={ this.state.dataSource }
                        renderItem={({item}) => 
                        <View style={{flex:1, flexDirection: 'column', margin:1 }}> 
                            <Image style={styles.imageThumbnail} source = {{ uri: item.images }} />
                        </View>                         
                        }
                        numColumns = { 3 }
                       
                        />
                </Content>
            </Container>
        );
    }
}

export default TabNavigator({
    FeedScreen : { screen: FeedScreen },
    CourseScreen : { screen: CourseScreen },
    ProfileScreen : { screen: ProfileScreen }
},
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab style={styles.bgblack}>
                        <Button
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("FeedScreen")}>
                            <Icon name='apps'/>
                        </Button>
                        <Button
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("CourseScreen")}>
                            <Icon name='camera'/>
                      
                        </Button>
                        <Button
                            active={props.navigationState.index === 2}
                            onPress={() => props.navigation.navigate("ProfileScreen")}>
                            <Icon name='contact' />
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    });
    