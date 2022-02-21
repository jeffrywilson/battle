import React from "react"
import type { NextPage } from "next"
import { Box, Text } from "@chakra-ui/react"
import { redirectUser } from "../src/utils/auth"
import { parseCookies } from "nookies"

const Account: NextPage = () => {
  return (
    <Box h="100vh" w="full" mt={4} zIndex={0} pl={5} pr={5} top={0}>
      <Text color="white" fontSize="4xl">
        Account.
      </Text>
    </Box>
  )
}

Account.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx)
  if (!token) redirectUser(ctx, "/")
  return { token }
}
export default Account
