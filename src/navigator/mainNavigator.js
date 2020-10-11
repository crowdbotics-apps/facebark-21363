import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn2138082Navigator from '../features/SignIn2138082/navigator';
import Settings138078Navigator from '../features/Settings138078/navigator';
import UserProfile138071Navigator from '../features/UserProfile138071/navigator';
import Settings138070Navigator from '../features/Settings138070/navigator';
import Settings138068Navigator from '../features/Settings138068/navigator';
import SignIn2138066Navigator from '../features/SignIn2138066/navigator';
import Settings138064Navigator from '../features/Settings138064/navigator';
import UserProfile138057Navigator from '../features/UserProfile138057/navigator';
import Settings138056Navigator from '../features/Settings138056/navigator';
import Settings138054Navigator from '../features/Settings138054/navigator';
import SignIn2138052Navigator from '../features/SignIn2138052/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn2138082: { screen: SignIn2138082Navigator },
Settings138078: { screen: Settings138078Navigator },
UserProfile138071: { screen: UserProfile138071Navigator },
Settings138070: { screen: Settings138070Navigator },
Settings138068: { screen: Settings138068Navigator },
SignIn2138066: { screen: SignIn2138066Navigator },
Settings138064: { screen: Settings138064Navigator },
UserProfile138057: { screen: UserProfile138057Navigator },
Settings138056: { screen: Settings138056Navigator },
Settings138054: { screen: Settings138054Navigator },
SignIn2138052: { screen: SignIn2138052Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
