import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile138057Navigator from '../features/UserProfile138057/navigator';
import Settings138056Navigator from '../features/Settings138056/navigator';
import Settings138054Navigator from '../features/Settings138054/navigator';
import SignIn2138052Navigator from '../features/SignIn2138052/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
