import { useEffect, useState } from "react"
import { Box, Text, Button, Flex } from "@chakra-ui/react"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import { useAuth } from "../../context/AuthContext"
import { NextPage } from "next"
import Link from "next/link"
import SquidLogoWithStroke from "../logos/SquidLogoWithStroke"

const Header: NextPage = () => {
  const { width } = useWindowDimensions()
  const [renderMobile, setRenderMobile] = useState(false)
  const { token, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    if (width && width <= 812) {
      setRenderMobile(true)
    } else {
      setRenderMobile(false)
    }
  }, [width])

  return (
    //CONTAINER
    <Flex
      className="header-container"
      w="full"
      justifyContent="space-between"
      pos="sticky"
      zIndex={1}
      fontFamily="Londrina Solid"
      bgColor="BBBlack"
    >
      {/* Header left container */}
      <Box className="logo-container" display="flex" alignItems="center">
        {/* Logo */}

        <Link href="/" passHref>
          <Box className="beast-battle-logo" w="80px" py={2} px={4} color="blue">
            <Text
              pos="absolute"
              fontSize="md"
              pt={7}
              left="23px"
              opacity={{ base: "1", md: "0" }}
              _hover={{
                cursor: "pointer",

                opacity: "1",
                transition: "opacity 0.2s",
                easeing: "ease out",
              }}
            >
              Home
            </Text>
            <SquidLogoWithStroke aria-label="home" />
          </Box>
        </Link>
        {/* Whitepaper link  */}
        <Link href="/whitePaper" passHref>
          <Text
            className="whitepaper-link"
            aria-label="white paper link"
            pr={{ base: "2" }}
            _hover={{ transform: "scale(1.1)", transition: "transform 0.2s", cursor: "pointer" }}
          >
            Whitepaper
          </Text>
        </Link>
      </Box>

      {/* Buttons container */}
      {!token && (
        <Box className="button-container" display="flex" alignItems="center" pr={4}>
          {/* Log in button */}
          <Button
            bgColor="BBTeal"
            color="white"
            h={9}
            mx={1}
            borderRadius={4}
            fontWeight="light"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
              cursor: "pointer",
              bgColor: "#05d8d8",
              color: "BBBlack",
            }}
          >
            Log In
          </Button>
          {/* Sign up button */}
          <Button
            bgColor="BBPink"
            color="white"
            h={9}
            mx={1}
            borderRadius={4}
            fontWeight="light"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s",
              bgColor: "#f46f93",
              color: "BBBlack",
            }}
          >
            Sign Up
          </Button>
        </Box>
      )}
      {token && (
        <Button
          onClick={handleLogout}
          h={9}
          mx={1}
          bgColor="BBPink"
          color="white"
          borderRadius={4}
          fontWeight="light"
          _hover={{
            transform: "scale(1.05)",
            transition: "transform 0.2s",
            bgColor: "#f46f93",
            color: "BBBlack",
          }}
        >
          Log Out
        </Button>
      )}
    </Flex>
  )
}

export default Header
