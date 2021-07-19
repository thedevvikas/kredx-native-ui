import React from 'react'
import { NativeBaseProvider } from 'native-base'

function KredxNativeUIProvider(props) {
    const { children, ...restProps } = props;
    return (
        <NativeBaseProvider {...restProps}>
            {children}
        </NativeBaseProvider>
    )
}

export { KredxNativeUIProvider }