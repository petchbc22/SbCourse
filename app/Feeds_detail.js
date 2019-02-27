import React, { Component } from 'react';

import {ActivityIndicator,ListView,View,StyleSheet,FlatList,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,Text ,RefreshControl } from 'react-native';

import {  Header,Container,Content,Card, CardItem, Thumbnail, Footer, Tab, Tabs,FooterTab, Button,Input,Item, Icon,Left,Right,Body } from 'native-base'
import styles from './customstyle';
import { StackNavigator } from 'react-navigation';
class Feeds_detail extends Component
{
 static navigationOptions =
 {
    header: null 
 };

 constructor(props) {
    
       super(props)

       this.state={

        IdHolder : '',
        NameHolder : '',
        SemesterHolder : '',
        DepartmentHolder : '',
        PhoneNumberHolder : ''

       }
    
     }

 componentDidMount(){

    fetch('https://reactnativecode.000webhostapp.com/Filter.php', {
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

                IdHolder : responseJson[0].id,
                NameHolder : responseJson[0].name,
                SemesterHolder : responseJson[0].semester,
                DepartmentHolder : responseJson[0].department,
                PhoneNumberHolder : responseJson[0].phone_number

              })
              
            }).catch((error) => {
              console.error(error);
            });
       
 }

 render()
 {
  const {goBack} = this.props.navigation;
    return(
      <Container>

      <Header style={styles.header_nobg}>
      <Left style={styles.pl10}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeScreen")}>
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

          <Text style={styles.textViewContainer} > {'id = ' + this.state.IdHolder} </Text>

          <Text style={styles.textViewContainer} > {'Name = ' + this.state.NameHolder} </Text>

          <Text style={styles.textViewContainer} > {'Department = ' + this.state.DepartmentHolder} </Text>

          <Text style={styles.textViewContainer} > {'Semester = ' + this.state.SemesterHolder} </Text>

          <Text style={styles.textViewContainer} > {'Phone Number = ' + this.state.PhoneNumberHolder} </Text>

          </View>

        </View>
      </Content>
    </Container>
      
    );
 }
}
export { Feeds_detail };