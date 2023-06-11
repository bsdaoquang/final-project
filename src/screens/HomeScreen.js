// Màn hình chính
import { Layout } from 'antd'
import React from 'react'
import { SliderComponent } from '../components'

const { Content } = Layout

function HomeScreen()
{
  return (
    <Content>
      <SliderComponent />
    </Content>
  )
}

export default HomeScreen