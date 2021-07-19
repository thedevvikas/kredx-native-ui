import React from 'react'
import { Box } from 'kredx-native-ui'

function Card() {
    return <Box onPress={() => console.log('Namaste')}>I AM A BOX</Box>;
};

export {
    Card
}