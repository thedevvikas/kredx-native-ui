import React from 'react'
import { withKnobs } from '@storybook/addon-ondevice-knobs'
import { storiesOf } from '@storybook/react-native'
import { Card } from './Default'
import { Container } from '../../Container'

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .addDecorator(getStory => <Container>{getStory()}</Container>)
    .add('Basic', () => <Card />)
