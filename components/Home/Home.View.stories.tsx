import React, { ReactElement } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { View, ViewProps } from './Home.View'

export default {
  title: 'Home/View',
  component: View,
  argTypes: {
    message: {
      control: {
        type: 'text'
      },
      defaultValue: 'This is a message',
      name: 'Message'
    }
  }
} as Meta

interface TemplateProps extends ViewProps {
  message: string
}
export const DefaultView = ({ message }: TemplateProps): ReactElement => (
  <View {...{ message }} />
)
