import React from 'react';
import {View,StyleSheet,FlatList,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,Text ,RefreshControl } from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation';
import {  Header,Container,Content,Card, CardItem, Thumbnail, Footer, Tab, Tabs,FooterTab, Button,Input,Item, Icon } from 'native-base'
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
                                        <Text style={[styles.textwhite,styles.fontbold,styles.f16]}>February 08, 2019</Text>
                                        <Text style={[styles.textwhite,styles.fontbold,styles.f25]}>Photography With My Phone</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <Text style={[styles.pd10 , styles.f16, styles.textblack]}>Explore</Text>

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
                            <Text style={[styles.fontbold,styles.f20,styles.textblack]}>
                                Bookmarked
                            </Text>
                        </View>
                        <View style={styles.listsaved}>
                            <Text style={[styles.textblack,styles.f18]}>
                                Programs (0)
                            </Text>
                        </View>
                        <View style={styles.listsaved}>
                            <Text style={[styles.textblack,styles.f18]}>
                                Techniques (0)
                            </Text>
                        </View>
                        <View style={styles.listsaved}>
                            <Text style={[styles.textblack,styles.f18]}>
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
                <Header transparent style={{height:210}}>
                <Content>
                    <View style={{flex:1}}>
                        <View style={{flexDirection: "row", flex: 1,padding:0,borderBottomColor:'#dcdcdc',borderBottomWidth:0.5,paddingTop:20,paddingLeft:10,paddingRight:10,paddingBottom:10}}>
                            <View style={{width: '30%',height:90,justifyContent:'center'}}>
                                <Image style={{width: 85,height:85,borderRadius: 150/2}}source={require('../img/profile.jpg')}/>
                            </View>
                            <View style={{width: '50%',height:90, justifyContent: 'center'}}>
                                <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>Petch-BC22</Text>
                            </View>
                            <View style={{width: '20%', alignItems: 'center',height:90, justifyContent: 'center',alignItems:'flex-end'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("SettingProfile")}>
                                    <Icon name='settings'style={{color:'#cdcdcd',fontSize:24}} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection: "row", flex: 1,paddingTop:10}}>
                            <View style={{width: '33%',alignSelf:'center'}}>
                                <Text style={{textAlign:'center',fontSize:18,color:'black',fontWeight:'bold'}}>5</Text>
                                <Text style={{textAlign:'center',fontWeight:'bold'}}>Posts</Text>
                            </View>
                            <View style={{width: '33%'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("FollowScreen")}>
                                    <Text style={{textAlign:'center',fontSize:18,color:'black',fontWeight:'bold'}}>0</Text>
                                    <Text style={{textAlign:'center',fontWeight:'bold'}}>Followers</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: '33%'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("FollowingScreen")}>
                                    <Text style={{textAlign:'center',fontSize:18,color:'black',fontWeight:'bold'}}>18</Text>
                                    <Text style={{textAlign:'center',fontWeight:'bold'}}>Following</Text>
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
                    <FooterTab style={{backgroundColor:'black'}}>
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
    const {height, width} = Dimensions.get('window');
    const itemWidth = (width - 5) / 3;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover', 
            top: 0,
            bottom:0
           // or 'stretch'
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
        bggray:{
            backgroundColor:'#f7f7f7'
        },
        Form:{
          backgroundColor:'transparent',
          marginTop:10,
          color:'white',
        },
        tabcustom : {
          backgroundColor:'transparent',

          justifyContent: 'center',
          alignSelf:'center',
        },
        styletextinput:{
          textAlign: 'center',
          color:'#fff',
          fontSize:14
        },
        textwhite:{
          color:'white'
        },
        fontbold:{
            fontWeight:'bold'
        },
        btnstyle:{
          borderRadius:30,width:200,justifyContent:'center'
        },
        pd10:{
            padding:10
        },
        pd15:{
            padding:15
        },
        f20:{
            fontSize:20,
            fontWeight:'bold'
        },
        f15:{
            fontSize:15
        },
        f16:{
            fontSize:16,
            fontWeight:'bold'
        },
        f18:{
            fontSize:18
        },
        f19:{
            fontSize:19
        },
        f25:{
          fontSize:25  
        },
        textblack:{
            color:'black'
        },
        bgwhite:{
            backgroundColor:'#fff'
        },
        bgblack:{
            backgroundColor:'#000'
        },
        tabheader:{
            backgroundColor:'transparent',justifyContent: 'center',paddingTop:24,height:70
        },
        subtabheader:{
            backgroundColor:'#fff',width:100
        },
        textintab:{
            color:'#bdb9b9',fontSize:20,fontWeight:'bold'
        },
        textintabActive:{
            color:'#000',fontSize:20,fontWeight:'bold'
        },
        bgimgContentfrist:{
            width: '100%', height: 250,marginLeft: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0,marginTop:0
        },
        headingcontent:{
            flex:1,justifyContent: 'center',alignItems: 'flex-start',paddingLeft:20
        },
        imagebutton:{
            justifyContent:'center',marginLeft:10,marginRight:10
        },
        pt15:{
            paddingTop:15
        },
        pb15:{
            paddingBottom:15
        },
        viewtextinsub:{
            flex:1,justifyContent: 'center',alignItems: 'flex-start',paddingLeft:15
        },
        textinsubmenu:{
            color:'white',fontSize:25,fontWeight:'bold',paddingTop:40
        },
        styleimgBtn:{
            width: '100%', height: 120,alignSelf:'center'
        },
        listsaved:{
            padding:15,backgroundColor:'white',borderBottomColor:'#efefef',borderBottomWidth:1
        },
        gridView: {
            flex: 1,
        },
        itemContainer: {
            justifyContent: 'center',
            alignItems:'center',
            borderRadius: 5,
            padding:2,
            height:110
        },
        imageThumbnail: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 120,
            maxWidth:itemWidth,
          },
    });