import React from "react"
import { Button } from "@chakra-ui/react"
import { useRouter } from "next/router"

const LoginButton = () => {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push("/login")}
      borderWidth="3px"
      borderStyle="solid"
      borderColor="vividSkyBlue"
      backgroundColor="transparent"
      borderRadius="10px"
      color="vividSkyBlue"
      py={5}
      w={{ base: 28 }}
      fontSize={{ base: "2xl", lg: "3xl" }}
      fontWeight="800"
      _hover={{
        bg: "vividSkyBlue",
        color: "cultured",
        transitionDuration: "1s",
      }}
    >
      Log In
    </Button>
  )
}

export default LoginButton
