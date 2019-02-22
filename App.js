import React from 'react';

import { StackNavigator } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';
import LoginScreen from './app/LoginScreen';
import HomeScreen from './app/HomeScreen';
import Subcoursefrist from './app/Subcoursefrist';
import Subcourseprogram from './app/Subcourseprogram';
import Subcoursetechnic from './app/Subcoursetechnic';
// ChildScreen
import VideolearnScreen from './app/VideolearnScreen';
import SubcourseIntroductionScreen from './app/SubcourseIntroductionScreen';
import PullupScreen from './app/PullupScreen';
import SettingProfile from './app/SettingProfile';
import FollowScreen from './app/FollowScreen';
import FollowingScreen from './app/FollowingScreen';

const App = StackNavigator({
  LoginScreen: { 
      screen: LoginScreen,
      navigationOptions : { header: null },
    },
    HomeScreen: { 
      screen: HomeScreen,
      navigationOptions : { header: null },

    },
    Subcoursefrist: { 
      screen: Subcoursefrist,
      navigationOptions : { header: null },
    },
    Subcourseprogram: { 
      screen: Subcourseprogram,
      navigationOptions : { header: null },
    },
    Subcoursetechnic: { 
      screen: Subcoursetechnic,
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
},
{
  initialRouteName: 'LoginScreen',
  transitionConfig: () => fromRight(),
},
)

export default App;