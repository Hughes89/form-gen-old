import React, { FC, useCallback, useState } from 'react'
import { Button } from 'antd'

import AuthorizationModal from '../components/AuthorizationModal'

const Home: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen])

  return (
    <>
      <AuthorizationModal open={isModalOpen} cancel={closeModal} />
      <Button onClick={() => setIsModalOpen(true)}>Admin</Button>
    </>
  )
}

export default Home
