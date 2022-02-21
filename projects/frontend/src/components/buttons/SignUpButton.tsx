import React from "react"
import { Button } from "@chakra-ui/react"
import { useRouter } from "next/router"

const SignUpButton = () => {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push("/signup")}
      borderWidth="3px"
      borderStyle="solid"
      borderColor="steelPink"
      backgroundColor="transparent"
      borderRadius="10px"
      color="steelPink"
      py={5}
      mr={5}
      ml={5}
      w={{ base: 28 }}
      fontSize={{ base: "2xl", lg: "3xl" }}
      fontWeight="800"
      _hover={{
        bg: "steelPink",
        color: "cultured",
        transitionDuration: "1s",
      }}
    >
      Sign Up
    </Button>
  )
}

export default SignUpButton
