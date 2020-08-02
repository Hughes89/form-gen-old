import React, { FC } from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IProps {
  tip?: string
}

const Loading: FC<IProps> = ({ tip }) => (
  <Backdrop>
    <Spin size="large" tip={tip} />
  </Backdrop>
)

export default Loading
