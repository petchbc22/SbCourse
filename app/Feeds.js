import React from 'react';
import {View,StyleSheet,FlatList,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,Text ,RefreshControl } from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation';
import {  Header,Container,Content,Card, CardItem, Thumbnail, Footer, Tab, Tabs,FooterTab, Button,Input,Item, Icon } from 'native-base'
import styles from './customstyle';
class Feeds extends React.Component {
  render() {
    return (

      <View>
        <Image style={{width: 290, height: 80}}source={require('../img/Story-board-b.png')}/>
      </View>

    );
  }
}

export { Feeds };