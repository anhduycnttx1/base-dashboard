import { Flex, Loader } from '@mantine/core'
import React from 'react'

const LoaderPage = () => {
  return (
    <Flex justify="center" align="center" h="100vh">
      <Loader size="sm" />
    </Flex>
  )
}

export default LoaderPage
