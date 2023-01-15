import { useForm } from '@mantine/form'
import { Box, Button, Container, Flex, Group, PasswordInput, Text, TextInput } from '@mantine/core'
import { useAuthController } from '../../controllers/auth'
import LoaderPage from '../../components/loader/Loader'
import { Link, Navigate } from 'react-router-dom'

type FormValue = {
  email: string
  password: string
}
const shadow_md = {
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
}
const LoginPage = () => {
  const { signIn, state } = useAuthController()
  const { loading, user } = state
  const form = useForm({
    initialValues: {
      email: 'admin@test.com',
      password: 'abcd1234',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length >= 6 ? null : 'Password must have at least 6 letters'),
    },
  })
  const handlerSubmit = (values: FormValue) => signIn(values.email, values.password)
  return (
    <>
      {loading && <LoaderPage />}
      {!loading && user && <Navigate to="/" replace={true} />}
      {!loading && !user && (
        <Container>
          <Flex h="100vh" align="center" justify="center">
            <form onSubmit={form.onSubmit(handlerSubmit)} style={{ width: 'auto' }}>
              <Box sx={{ ...shadow_md }} mx="auto" px={40} py={24}>
                <TextInput
                  withAsterisk
                  label="Email"
                  placeholder="your@email.com"
                  {...form.getInputProps('email')}
                />

                <PasswordInput
                  placeholder="Password"
                  label="Password"
                  withAsterisk
                  {...form.getInputProps('password')}
                />

                <Group position="right" mt="md">
                  <Button type="submit" color="cyan">
                    Login
                  </Button>
                </Group>
                <Group position="center" mt="md">
                  <Text fz="xs">
                    Don't have an account? <Link to="/register">Register</Link>
                  </Text>
                </Group>
              </Box>
            </form>
          </Flex>
        </Container>
      )}
    </>
  )
}

export default LoginPage
