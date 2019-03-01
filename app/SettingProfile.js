import React, {Component} from 'react';
import {View,StyleSheet,Image,WebView,ImageBackground,ScrollView,Dimensions,KeyboardAvoidingView,TouchableOpacity,TextInput,TouchableHighlight} from 'react-native';
import { Title,Body,Header,Container, Content, Footer, FooterTab, Button,Tab, Tabs, TabHeading, Icon, Text ,ScrollableTab,Form, Item, Input, Label,Left,Right   } from 'native-base';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackNavigator, TabNavigator, DrawerNavigator,NavigationActions  } from  'react-navigation';
import styles from './customstyle';
import SegmentedControlTab from "react-native-segmented-control-tab";
import CircleButton from 'react-native-circle-button';
import PercentageCircle from 'react-native-percentage-circle';
import PhotoUpload from 'react-native-photo-upload'
class SettingProfile extends Component {

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
                    <Text style={styles.headingCt}>Settings</Text>
                </View>
            </Body>
            <Right>
            </Right>
            </Header>
            <Content style={styles.bggray}>
              <View style={[styles.pd10,styles.pt30]}>
                <PhotoUpload
                  onPhotoSelect={avatar => {
                    if (avatar) {
                      console.log('Image base64 string: ', avatar)
                    }
                  }}
                >
                  <Image
                    style={styles.imgUpload}
                    resizeMode='cover'
                    source={{uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'}}
                  />
                </PhotoUpload>
                <View style={styles.pt20}>
                  <Text style={styles.Text14B}>Your Profile</Text>
                </View>
              </View>
              {/* textbox */}
              <View style={styles.listProfile}>
                <View style={styles.col1_listpf}>
                    <Text style={[styles.text_14,styles.text_gray]}>Frist Name</Text>
                </View>
                <View style={styles.col2_listpf}>
                  <TextInput
                    style={styles.inputpf}
                    placeholder="Name"
                    onChangeText={(text) => this.setState({text})}
                  />
                </View>
              </View>
              <View style={styles.listProfile}>
                <View style={styles.col1_listpf}>
                    <Text style={[styles.text_14,styles.text_gray]}>Last Name</Text>
                </View>
                <View style={styles.col2_listpf}>
                  <TextInput
                    style={styles.inputpf}
                    placeholder="SurName"
                    onChangeText={(text) => this.setState({text})}
                  />
                </View>
              </View>
              <View style={styles.listProfile}>
                <View style={styles.col1_listpf}>
                    <Text style={[styles.text_14,styles.text_gray]}>User Name</Text>
                </View>
                <View style={styles.col2_listpf}>
                  <TextInput
                    style={styles.inputpf}
                    placeholder="UserName"
                    onChangeText={(text) => this.setState({text})}
                  />
                </View>
              </View>
              <View style={styles.listProfile}>
                <View style={styles.col1_listpf}>
                    <Text style={[styles.text_14,styles.text_gray]}>Email</Text>
                </View>
                <View style={styles.col2_listpf}>
                  <TextInput
                    style={styles.inputpf}
                    placeholder="Email"
                    onChangeText={(text) => this.setState({text})}
                  />
                </View>
              </View>
              <View style={styles.listProfile}>
                <View style={styles.col1_listpf}>
                    <Text style={[styles.text_14,styles.text_black]}>Logout</Text>
                </View>
                <View style={styles.col2_listpf}>
                  <Icon name='arrow-forward' style={styles.iconinput} /> 
                </View>
              </View>
              <View style={styles.listProfile}>
                <View style={styles.col1_listpf}>
                    <Text style={[styles.text_14,styles.text_black]}>Change Password</Text>
                </View>
                <View style={styles.col2_listpf}>
                  <Icon name='arrow-forward' style={styles.iconinput} /> 
                </View>
              </View>
              <View style={[styles.pt20,styles.pd10]}>
                <Text style={styles.Text14B}>Settings</Text>
              </View>
              <View style={styles.listProfile}>
                <TouchableOpacity style={styles.fullcol}onPress={() => this.props.navigation.navigate("AboutScreen")}>
                    <Text style={[styles.text_14,styles.text_black]}>About us</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.listProfile}>
                <View style={styles.fullcol}>
                    <Text style={[styles.text_14,styles.text_black]}>Version 1.0</Text>
                </View>
              </View>
              <View style={[styles.btnview,styles.pb15]}>
                <Button style={styles.btnstyle} onPress={() => this.props.navigation.navigate("CourseScreen")}>
                  <Text style={styles.textbold}>Save Changes</Text>
                </Button>
              </View>
          
            </Content >
          </Container>
    );
  }
}

export default SettingProfile;