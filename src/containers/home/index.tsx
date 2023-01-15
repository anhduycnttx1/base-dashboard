import { Center, Title, Text, Stack } from '@mantine/core'
import React from 'react'

type HomeContainerProps = {}

const HomeContainer = (props: HomeContainerProps) => {
  return (
    <Center style={{ width: '100%', height: 500 }}>
      <Stack align="center">
        <Title color="gray">Welcome to the app </Title>
        <Text c="gray">
          Current application does not have any layouts. Contact System Administrator to complete
          your setup!
        </Text>
      </Stack>
    </Center>
  )
}

export default HomeContainer
