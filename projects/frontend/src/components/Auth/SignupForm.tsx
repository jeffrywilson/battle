import { Button, Flex, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react"
import * as React from "react"
import { useState } from "react"
import { theme } from "../../../styles/theme"
import { apiPost } from "../../hooks/api"
import { ErrorMsg } from "./AuthComponents"
import { useRouter } from "next/router"
import { AuthType, useAuth } from "../../context/AuthContext"

export const SignupForm = () => {
  const { isLoggedIn } = useAuth()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmmitting] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter()

  const handleSignup = () => {
    console.log(username, email, password)
    setIsSubmmitting(true)
    apiPost<AuthType>(`/user`, {
      username,
      email,
      password,
    })
      .then((res) => {
        if (res.user === undefined) {
          setError(res.message)
        } else {
          router.push("/login?signup=true")
        }
      })
      .catch((ex) => setError(ex.message))
      .finally(() => setIsSubmmitting(false))
  }

  if (isLoggedIn) {
    router.push("/account")
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSignup()
      }}
    >
      <Stack spacing="6">
        <FormControl id="username">
          <FormLabel color={"white"} mb={1}>
            User Name
          </FormLabel>
          <Input
            color={"white"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel color={"white"} mb={1}>
            Email
          </FormLabel>
          <Input
            color={"white"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            required
          />
        </FormControl>
        <FormControl>
          <Flex align="baseline" justify="space-between">
            <FormLabel color={"white"} mb={1}>
              Password
            </FormLabel>
          </Flex>
          <Input
            color={"white"}
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="password"
            required
          />
        </FormControl>
        {error !== "" && <ErrorMsg>{error}</ErrorMsg>}
        <Button
          isLoading={isSubmitting}
          fontFamily={"Londrina Solid"}
          bg={theme.colors.BBTeal}
          type="submit"
          colorScheme={theme.colors.BBTeal}
          size="lg"
          fontSize="md"
        >
          Get Started
        </Button>
      </Stack>
    </form>
  )
}
