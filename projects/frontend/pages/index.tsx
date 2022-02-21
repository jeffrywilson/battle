import React from "react"
import Link from "next/link"
import type { GetStaticProps, NextPage } from "next"
import { Box, Button, Text, Image } from "@chakra-ui/react"
import SquidLogo from "../src/components/logos/SquidLogo"

interface WhitePaperProps {
  text: string
}

const HomePage: NextPage<WhitePaperProps> = ({ text }) => {
  return (
    <>
      {/* CONTAINER  */}
      <Box
        className="main-container"
        bgColor="BBGrey.10"
        fontFamily="Londrina Solid"
        minH="100vh"
        overflowX="hidden"
        bgImage="/tempGraphics/gladiatorial-floor-sample.png"
        bgPosition="bottom"
        bgRepeat="no-repeat"
        bgSize="contain"
      >
        {/* Welcome container */}
        <Box
          className="welcome-container"
          w={{ base: "80%", sm: "100%" }}
          h={500}
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          m="auto"
          pt={8}
        >
          {/* Large logo image */}
          <SquidLogo aria-hidden="true" />
          {/* Title */}
          <Text
            display="flex"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", xl: "7xl" }}
            color="white"
            pt={2}
          >
            Welcome to Beast Battle!
          </Text>
          {/* Subtitle */}
          <Text color="yellow.300" py={2} fontSize={{ base: "lg", sm: "lg", md: "xl", xl: "2xl" }}>
            An NFT Game Universe
          </Text>
          {/* Buttons */}
          <Link href="/whitePaper" passHref>
            <Button
              className="whitepaper-button"
              border="solid"
              bgColor="BBGrey.10"
              borderColor="BBGrey.60"
              color="BBWhite"
              fontWeight="light"
              borderRadius={4}
              letterSpacing={0.9}
              mt={4}
              p={4}
              _hover={{ bgColor: "BBWhite", color: "BBBlack", cursor: "pointer" }}
            >
              White Paper
            </Button>
          </Link>
        </Box>
        {/* Lower containers */}
        <Box
          className="images-container"
          display="flex"
          flexDir={{ base: "column", md: "row" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          alignContent="center"
          alignItems="flex-end"
          justifyContent="center"
          mx={4}
        >
          {/* Beasts box */}
          <Box
            className="beasts-container"
            w={{ base: "250px", md: "400px" }}
            borderRadius={4}
            mx={4}
            display="flex"
            flexDir="column"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
          >
            <Text className="beast-title" pos="relative" fontSize="2xl" top="12px">
              Beasts
            </Text>
            <Image
              src="/tempGraphics/homepage_teaser_beasts_01.png"
              w="400px"
              h="auto"
              borderRadius={4}
              align="center"
              shadow="lg"
              alt="battle bear portrait"
            />
          </Box>
          {/* Battle Royale box */}
          <Box
            className="battle-royale-container"
            w={{ base: "250px", md: "400px" }}
            borderRadius={4}
            mx={4}
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text className="battle-royale-title" pos="relative" top="12px" display="flex">
              Battle Royale
            </Text>
            <Image
              src="/tempGraphics/homepage_teaser_battle_01.png"
              w="400px"
              h="auto"
              borderRadius={4}
              align="center"
              shadow="lg"
              alt="battle bear portrait"
            />
          </Box>
          {/* Patronage container */}
          <Box
            className="patronage-container"
            w={{ base: "250px", md: "400px" }}
            borderRadius={4}
            mx={4}
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text className="patronage-title" pos="relative" fontSize="2xl" top="12px">
              Patronage
            </Text>
            <Image
              src="/tempGraphics/homepage_teaser_patronage.png"
              w="400px"
              h="auto"
              borderRadius={4}
              align="center"
              shadow="lg"
              alt="battle bear portrait"
            />
          </Box>
        </Box>
        {/* Game Description */}
        <Box
          className="description-container"
          display="flex"
          flexDir="column"
          textAlign="left"
          alignContent="center"
          margin="auto"
          mt={10}
          w={{ base: "40ch", sm: "50ch", md: "70ch", lg: "78ch", xl: "78ch" }}
          fontFamily="EB Garamond"
        >
          <Text
            m={4}
            lineHeight={1.25}
            fontSize={{ base: "2xl", sm: "2xl", md: "2xl", lg: "2xl", xl: "2xl" }}
          >
            The Valley of Tahlurin is populated with anthropomorphic Beasts, a collection of species
            spawned from an explosion of magical energy. Over time, these Beasts have divided into
            two main factions: Esher in the West and Valorin in the East. Choose a faction and
            participate in the Battle Royale. It is imperative that your chosen faction win, and
            thus turning all opponents to dust scattered throughout the valley, resting as grey ash
            on the boughs of the pines, you would do anything to make sure they are victorious.
          </Text>
          <Text
            m={4}
            lineHeight={1.25}
            fontSize={{ base: "2xl", sm: "2xl", md: "2xl", lg: "2xl", xl: "2xl" }}
          >
            The Battle Royale will consist of a series of challenges—competitions between Beasts
            that will test aspects of your character. These events will be listed before the Battle
            Royale begins. Each event will cater to a specific attribute and will be listed in the
            event lineup. Beasts will have a better opportunity to win if their attribute is high
            for the event listed.
          </Text>
        </Box>
      </Box>
    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  // Call an external API to fetch Props such as Markdown
  // const res = await fetch("/whitepaper")
  const text = "dummy text"

  return {
    notFound: false,
    props: {
      text,
    },
  }
}
export default HomePage
