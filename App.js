import React from 'react';

import { StackNavigator } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';
import LoginScreen from './app/LoginScreen';
import  HomeScreen from './app/HomeScreen';
import  ProfileScreen  from './app/HomeScreen';
import Subcoursefrist from './app/Subcoursefrist';
import Course_beginner from './app/Course_beginner';
import Course_basic from './app/Course_basic';
// ChildScreen
import VideolearnScreen from './app/VideolearnScreen';
import SubcourseIntroductionScreen from './app/SubcourseIntroductionScreen';
import PullupScreen from './app/PullupScreen';
import SettingProfile from './app/SettingProfile';
import FollowScreen from './app/FollowScreen';
import FollowingScreen from './app/FollowingScreen';
import AboutScreen from './app/AboutScreen';
import Profile from './app/Profile';
import PullupSubScreen from './app/PullupSubScreen';
import Course_pro from './app/Course_pro';
const App = StackNavigator({
  LoginScreen: { 
      screen: LoginScreen,
      navigationOptions : { header: null },
    },
    HomeScreen: { 
      screen: HomeScreen,
      navigationOptions : { header: null },
    },
    ProfileScreen: { 
      screen: ProfileScreen,
      navigationOptions : { header: null },
    },
    Subcoursefrist: { 
      screen: Subcoursefrist,
      navigationOptions : { header: null },
    },
    Course_beginner: { 
      screen: Course_beginner,
      navigationOptions : { header: null },
    },
    Course_basic: { 
      screen: Course_basic,
      navigationOptions : { header: null },
    },
    VideolearnScreen: { 
      screen: VideolearnScreen,
      navigationOptions : { header: null },
    },
    SubcourseIntroductionScreen: {
      screen: SubcourseIntroductionScreen,
      navigationOptions : { header: null },
    },
    PullupScreen: {
      screen: PullupScreen,
      navigationOptions : { header: null },
    },
    SettingProfile: {
      screen: SettingProfile,
      navigationOptions : { header: null },
    },
    FollowScreen: {
      screen: FollowScreen,
      navigationOptions : { header: null },
    },
    FollowingScreen: {
      screen: FollowingScreen,
      navigationOptions : { header: null },
    },

    Profile: {
      screen: Profile,
      navigationOptions : { header: null },
    } ,
    
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions : { header: null },
    } ,
    PullupSubScreen: {
      screen: PullupSubScreen,
      navigationOptions : { header: null },
    } ,
    Course_pro: {
      screen: Course_pro,
      navigationOptions : { header: null },
    }
},
{
  initialRouteName: 'LoginScreen',
  transitionConfig: () => fromRight(),
  headerMode: 'none'
},
)

export default App;