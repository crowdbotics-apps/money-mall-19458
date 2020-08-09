import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial89153Navigator from '../features/Tutorial89153/navigator';
import NotificationList89125Navigator from '../features/NotificationList89125/navigator';
import Settings89124Navigator from '../features/Settings89124/navigator';
import Settings89116Navigator from '../features/Settings89116/navigator';
import UserProfile89114Navigator from '../features/UserProfile89114/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial89153: { screen: Tutorial89153Navigator },
NotificationList89125: { screen: NotificationList89125Navigator },
Settings89124: { screen: Settings89124Navigator },
Settings89116: { screen: Settings89116Navigator },
UserProfile89114: { screen: UserProfile89114Navigator },

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
