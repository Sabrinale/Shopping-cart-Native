 import React from 'react';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Main from './Main/Main';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Shop from './Main/Shop/Shop';
import Menu from'./Main/Menu'


export const MainStack = StackNavigator({
        Screen_Main: {
            screen: Main,
            navigationOptions: {
              title: 'Main Page'
            }
        },  
        Screen_Authentication: {
            screen: Authentication,
            navigationOptions: {
              title: 'Authentication Page'
            }
        },
        Screen_ChangeInfo: {
            screen: ChangeInfo,
            navigationOptions: {
              title: 'ChangeInfo Page'
            }
          },
        Screen_OrderHistory: {
            screen: OrderHistory,
            navigationOptions: {
              title: 'OrderHistory Page'
            }
        },
  });
export const ShopStack = StackNavigator({
  Screen_Shop: {
    screen: Shop,
    navigationOptions: {
      title: 'Shop Page'
    }
  },
});
export const Tabs = TabNavigator({
  Shop: {
    screen: ShopStack,
    navigationOptions: {
        tabBarLabel: 'SHOP'
    }
  },
  Main: {
    screen: MainStack,
    navigationOptions: {
        tabBarLabel: 'main'
    }
  }
  },
    {
      tabBarPosition: 'bottom',
      //gat tap nganh de qua man hinh moi
      swipeEnabled: true,
      tabBarOptions: {
        style: {
        backgroundColor: '#dddddd'
        },
        inactiveTintColor: 'green',
        activeTinColor: 'red'
      }
});
export const SideMenu = DrawerNavigator({
  Tabbar: {
    screen: Tabs
  },
},
 {
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: props => <Menu{...props} />
 }
);
