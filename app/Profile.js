import React, { Component } from 'react';

import {ActivityIndicator,ListView,View,StyleSheet,FlatList,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,Text ,RefreshControl } from 'react-native';

import {  Header,Container,Content,Card, CardItem, Thumbnail, Footer, Tab, Tabs,FooterTab, Button,Input,Item, Icon,Left,Right,Body } from 'native-base'
import styles from './customstyle';
import { StackNavigator } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';
const DeviceWidth = Dimensions.get('window').width
class Profile extends React.Component {

    static navigationOptions =
    {
         header: null 
    };

    constructor(props) {

        super(props);

        this.state = {

          isLoading: true
        }
      }

    OpenSecondActivity(id) {
       
        this.props.navigation.navigate('Second', { ListViewClickItemHolder: id });
    
      }
     
     
      componentDidMount() {
     
        return fetch('http://192.168.1.111/sbcourse/ImagesList.php')
          .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson),
            }, function() {
              // In this block you can do something with new state.
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
     
      ListViewItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }
     
     
      render() {
        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
          );
        }
     
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
              <ListView
                  dataSource={this.state.dataSource}
                  contentContainerStyle={{flexDirection: 'row',flexWrap: 'wrap',alignItems:'center'}}
                  renderRow={(rowData) => 
                      <TouchableOpacity  onPress={this.OpenSecondActivity.bind(this,rowData.id)}>
                        <Image 
                          source = {{ uri: rowData.images }} 
                          style={{  width: DeviceWidth*0.33, height: DeviceWidth*0.33,margin:0.5}} 
                        />
                      </TouchableOpacity>
                }
              />
            </Content>
        </Container>
        );
      }
    }
class SecondActivity extends Component
{
 static navigationOptions =
 {
    header: null 
 };

 constructor(props) {
    
       super(props)

       this.state={

        id : '',
        id : '',
        images : '',
        date : ''

       }
    
     }

 componentDidMount(){

    fetch('http://192.168.1.111/sbcourse/filter.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
          // Getting the id.
          id: this.props.navigation.state.params.ListViewClickItemHolder
       
        })
       
      }).then((response) => response.json())
            .then((responseJson) => {

              this.setState({

                id : responseJson[0].id,
                name : responseJson[0].name,
                images : responseJson[0].images,
                date : responseJson[0].date

              })
              
            }).catch((error) => {
              console.error(error);
            });
       
 }

 render() {
    return(
      <Container>
        <Header style={styles.header_nobg}>
          <Left style={styles.pl10}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("ProfileScreen")}>
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
            <View style = { styles.MainContainer }>
              <View style={{flex:1, flexDirection: 'column'}} >
                <Text style={styles.textViewContainer} > {'id = ' + this.state.id} </Text>
                <Text style={styles.textViewContainer} > {'Name = ' + this.state.name} </Text>
                <Text style={styles.textViewContainer} > {'Department = ' + this.state.images} </Text>
                <Text style={styles.textViewContainer} > {'Semester = ' + this.state.date} </Text>
              </View>
            </View>
        </Content>
    </Container>
    );
 }
}

export default Myproject = StackNavigator(
{
 First: { screen: Profile },
 
 Second: { screen: SecondActivity }
},{
  initialRouteName: 'First',
  transitionConfig: () => fromRight(),
},

);

export { Profile };