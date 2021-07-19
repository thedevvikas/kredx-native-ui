import React from 'react'
import {
    Box,
    KredxNativeUIProvider,
} from 'kredx-native-ui';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { Config } from '../../../kredxnativeui.config'

function Wrapper({ children }) {
    return (
        <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            //   bg={bgColor}
            safeAreaY
        >
            {children}
        </Box>
    );
}

function Container({ children, theme }) {
    const colorModeManager = {
        get: async () => {
            try {
                let val = await AsyncStorage.getItem('@example-wrapper-mode');
                return val === 'dark' ? 'dark' : 'light';
            } catch (e) {
                console.log(e);
                return 'light';
            }
        },
        set: async (value) => {
            try {
                await AsyncStorage.setItem('@example-wrapper-mode', value);
            } catch (e) {
                console.log(e);
            }
        },
    };
    return (
        <KredxNativeUIProvider
            theme={theme}
            config={Config}
            colorModeManager={colorModeManager}
        >
            <Wrapper>{children}</Wrapper>
        </KredxNativeUIProvider>
    );
};

export { Container }
