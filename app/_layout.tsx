import { useEffect, useState } from 'react'
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { Navigation } from '@/components/Compass';
import { useFonts } from 'expo-font';

import Index from "./index"
import Signin from './signin';
import Signup from './signup';
import Main from './main';
import { StoreContext, useStateType } from '@/constants/Context';

preventAutoHideAsync();

function createStoreItem<T>(defaultValue: T): useStateType<T> {
    const [get, set] = useState(defaultValue);
    return { get, set }
}

export default function RootLayout() {
    const [loaded, error] = useFonts({
        BalooBhai2: require('../assets/fonts/BalooBhai2.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            hideAsync();
        }
    }, [loaded, error])

    if (!loaded && !error) {
        return null;
    }

    return (
        <StoreContext.Provider value={{
            email: createStoreItem(''),
            password: createStoreItem(''),
            username: createStoreItem('')
        }}>
            <Navigation screens={[
                { name: "Index", component: <Index /> },
                { name: "SignUp", component: <Signup /> },
                { name: "SignIn", component: <Signin /> },
                { name: "Main", component: <Main /> }
            ]} />
        </StoreContext.Provider>
    );
}