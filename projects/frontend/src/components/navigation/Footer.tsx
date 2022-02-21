import React from "react"
import { NextPage } from "next"
import { Flex, Box, Text, Spacer, Link } from "@chakra-ui/react"
import TextLogo from "../logos/TextLogo"

const Footer: NextPage = () => {
  return (
    <Flex
      className="footer-container"
      w="full"
      bg="BBBlack"
      fontFamily="EB Garamond"
      zIndex={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box className="text-logo-container" aria-label="beast battle logo" w="100px" py={1} px={4}>
        <TextLogo />
      </Box>
      <Text color="BBWhite" fontSize={{ base: "xs", md: "md" }} pl={{ base: "0", md: "24" }}>
        &copy; Copyright Beast Battles
      </Text>
      <Box
        className="nav-link-container"
        display="flex"
        alignItems="left"
        justifyContent="space-evenly"
      >
        <Link href="/whitePaper">
          <Text
            className="FAQ-text"
            px={{ base: "1", md: "4" }}
            fontSize={{ base: "xs", md: "md" }}
            color="BBWhite"
            _hover={{
              color: "BBOrange",
            }}
          >
            FAQs
          </Text>
        </Link>
        <Link href="/privacy">
          <Text
            className="privacy-text"
            aria-labelledby="privacy link"
            pr={{ base: "1", md: "4" }}
            textDecoration="none"
            fontSize={{ base: "xs", md: "md" }}
            color="BBWhite"
            _hover={{
              color: "BBOrange",
            }}
          >
            Privacy Policy
          </Text>
        </Link>
        <Link href="/about">
          <Text
            className="about-text"
            aria-labelledby="about us link"
            pr={{ base: "2", md: "4" }}
            fontSize={{ base: "xs", md: "md" }}
            textDecoration="none"
            color="BBWhite"
            _hover={{
              color: "BBOrange",
            }}
          >
            About Us
          </Text>
        </Link>
      </Box>
    </Flex>
  )
}

export default Footer
