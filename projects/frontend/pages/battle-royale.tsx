import React from "react"
import type { GetStaticProps, NextPage } from "next"
import { Box, Text } from "@chakra-ui/react"

const BattleRoyale: NextPage = () => {
  return (
    <Box h="100vh" w="full" mt={4} zIndex={0} pl={5} pr={5} top={0}>
      <Text color="white" fontSize="4xl">
        This is the Battle Royale Page.
      </Text>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    notFound: true,
  }
}

export default BattleRoyale
