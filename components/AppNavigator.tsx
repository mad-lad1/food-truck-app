import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack';
import GetStartedScreen from '../Screens/GetStartedScreen';
import AuthScreen from '../Screens/AuthenticationScreen';
const StackNavigator = createStackNavigator();


/**
 * @description: AppNavigator of the app. This will be used to 
 * define the navigation of the app, and the screens that will be
 * used in the app.
 * @param: {object} props
 * @return: {JSX.Element}
 * @example: <AppNavigator />
 */
const AppNavigator: React.FC = () => {

    return (
    <NavigationContainer>
        <StackNavigator.Navigator initialRouteName="GetStarted">
            <StackNavigator.Screen
                name="GetStarted"
                component={GetStartedScreen}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                        open: {
                            animation: 'timing',
                            config: { duration: 1000 },
                        },
                        close: {
                            animation: 'timing',
                            config: { duration: 1000 },
                        },
                    },
                }}
            />

            <StackNavigator.Screen
                name="Auth"
                component={AuthScreen}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                        open: {
                            animation: 'timing',
                            config: { duration: 1000 },
                        },
                        close: {
                            animation: 'timing',
                            config: { duration: 1000 },
                        },
                    },
                }}
            />
        </StackNavigator.Navigator>

    </NavigationContainer>)
}


export default AppNavigator;