import {
  Flex,
  Group,
  Header,
  Text,
  Container,
  Button,
  Avatar,
  HoverCard,
  Stack,
} from '@mantine/core'
import { IconLogout } from '@tabler/icons'
import avatarDefault from '../../assets/user.png'
import React from 'react'
import { useAuthController } from '../../controllers/auth'

const HeaderRoot = () => {
  const { state, logOut } = useAuthController()
  const avatarUser = state?.user?.photoURL || avatarDefault
  const heightHeader = 40
  return (
    <Header height={heightHeader}>
      <Container h={heightHeader}>
        <Flex justify="space-between" h={heightHeader}>
          <Group>LOGO</Group>
          <Group>
            <PopoverUser logOut={logOut} state={state}>
              <Avatar src={avatarUser} alt="avatar user" size="sm" />
            </PopoverUser>
          </Group>
        </Flex>
      </Container>
    </Header>
  )
}

export default HeaderRoot

type PopoverUserProps = {
  children: React.ReactNode
  logOut: any
  state: any
}
function PopoverUser({ children, logOut, state }: PopoverUserProps) {
  return (
    <HoverCard shadow="md">
      <HoverCard.Target>{children}</HoverCard.Target>
      <HoverCard.Dropdown>
        <Stack>
          <Flex>
            <Text fz="sm" fw={600} ml={4} color="gray">
              {state?.user?.email}
            </Text>
          </Flex>
          <Button
            onClick={() => logOut()}
            type="button"
            color="gray"
            variant="subtle"
            compact
            rightIcon={<IconLogout size={16} />}
          >
            Logout
          </Button>
        </Stack>
      </HoverCard.Dropdown>
    </HoverCard>
  )
}
