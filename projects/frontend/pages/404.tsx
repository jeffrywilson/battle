import { Box, Text } from "@chakra-ui/react"
import React from "react"

export default function Custom404() {
  return (
    <Box h="100vh" w="full" mt={4} zIndex={0} pl={5} pr={5} top={0}>
      <Text color="white" fontSize="4xl">
        404 - Page Not Found
      </Text>
    </Box>
  )
}
