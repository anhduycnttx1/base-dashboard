import { Flex, Group, Header, Container, Avatar, Menu, Image, Text, Title } from '@mantine/core'
import {
  IconArrowsLeftRight,
  IconLogout,
  IconMessageCircle,
  IconPhoto,
  IconSettings,
} from '@tabler/icons'
import avatarDefault from '../../assets/user.png'
import React from 'react'
import { useAuthController } from '../../controllers/auth'

const HeaderRoot = () => {
  const { state, logOut } = useAuthController()
  const avatarUser = state?.user?.photoURL || avatarDefault
  const heightHeader = 40
  return (
    <Header height={heightHeader}>
      <Container h={heightHeader} fluid>
        <Flex justify="space-between" h={heightHeader}>
          <Group spacing="xs">
            {/* Add logo application */}
            <Avatar
              size="sm"
              src="https://cdn-icons-png.flaticon.com/512/9030/9030959.png"
              alt="logo"
            />
            <Title size={20} color="gray">
              Myapp
            </Title>
          </Group>
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
    <Menu trigger="hover" position="bottom" shadow="md" width={200}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
        <Menu.Item
          onClick={() => logOut()}
          type="button"
          color="cyan"
          icon={<IconLogout size={14} />}
        >
          Logout account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
