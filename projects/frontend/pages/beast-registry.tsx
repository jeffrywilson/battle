import React from "react"
import Image from "next/image"
import type { GetStaticProps, NextPage } from "next"
import trophyImage from "../public/tempGraphics/trophy.png"

import { Box, Text, UnorderedList, ListItem, Grid, GridItem } from "@chakra-ui/react"

const dummyData = {
  patronage: 2,
  claims: 4,
  beastCount: 3,
  beastCount2: 8,
}

// Trophy Image Dummy Data
const images: JSX.Element[] = []
for (let i = 1; i < 6; i++) {
  images.push(
    <ul style={{ listStyle: "none" }}>
      <li key={i}>
        <Box className="trophy-image" p={1}>
          <Image src={trophyImage} height={50} width={30} alt="trophy" />
        </Box>
      </li>
    </ul>,
  )
}

// Beast Roster Dummy Data
const beastList: JSX.Element[] = []
for (let i = 0; i < 4; i++) {
  beastList.push(
    <Box
      className="roster-item-active-border"
      _hover={{
        borderLeft: "2px",
        borderColor: "BBOrange",
        boxShadow: "lg",
        cursor: "pointer",
      }}
      _before={{ content: '""', position: "absolute", height: "100%", width: "100%" }}
    >
      <Box
        className="roster-item"
        display="flex"
        alignContent="center"
        w="100%"
        px={4}
        borderTop="2px"
        color="BBBlack"
      >
        <Box
          className="beast-class-title-container"
          h={100}
          w="100%"
          display="flex"
          flexDir="column"
          justifyContent="center"
        >
          <Text className="beast-class" pb={2}>
            Ursus Majorus
          </Text>
          <Text className="beast-type" color="BBPinkText" fontSize="md">
            Bear
          </Text>
        </Box>
        <Image src="/tempGraphics/battlebear.png" alt="beast image" height={100} width="100%" />
      </Box>
    </Box>,
  )
}

const BeastRegistry: NextPage = () => (
  // CONTAINER
  <Grid
    className="container"
    templateRows="repeat(3, 0.25fr)"
    templateColumns="repeat(3, 0.1fr)"
    gridTemplateColumns="15% 25% 60%"
    gridTemplateRows="10% 20% 70%"
    bgColor="grey.600"
    h="100%"
  >
    {/* Side Nav  */}
    <Box
      className="side-nav-container"
      pos="absolute"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      h="100%"
      bgColor="BBBlack"
    >
      <Grid
        className="side-nav-grid"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gridTemplateRows="25% 25% 25% 25%"
        gridTemplateColumns="10% 65% 10%"
        bgColor="BBBlack"
        fontFamily="Londrina Solid"
        h={200}
        w={180}
        mt={2}
        ml={4}
        alignItems="center"
      >
        <GridItem className="registry-icon" rowStart={1}>
          <Text className="icon" visibility="visible" color="BBOrange">
            &#9679;
          </Text>
        </GridItem>
        <GridItem className="registry-label" colStart={2}>
          <Text
            className="label"
            color="BBGrey.60"
            _hover={{ color: "cultured", cursor: "pointer" }}
          >
            Registry
          </Text>
        </GridItem>
        <GridItem className="registry-count" rowStart={1} colStart={3}>
          <svg className="count" height="100" width="100">
            <circle cx="10" cy="50" r="10" fill="#F23A29" />
            <text fontFamily="Courier Prime" x="5" y="54" fill="white">
              {Math.round(Math.random())}
            </text>
          </svg>
        </GridItem>
        <GridItem className="patronage-icon" rowStart={2}>
          <Text className="icon" visibility="hidden" color="BBOrange">
            &#9679;
          </Text>
        </GridItem>
        <GridItem className="patronage-label" colStart={2}>
          <Text
            className="label"
            color="BBGrey.60"
            _hover={{ color: "cultured", cursor: "pointer" }}
          >
            Patronage
          </Text>
        </GridItem>
        <GridItem className="patronage-count" rowStart={2} colStart={3}>
          <svg className="count" height="100" width="100">
            <circle cx="10" cy="50" r="10" fill="#F23A29" />
            <text fontFamily="Courier Prime" x="5" y="54" fill="white">
              {Math.round(Math.random())}
            </text>
          </svg>
        </GridItem>
        <GridItem className="games-icon" rowStart={3}>
          <Text className="icon" visibility="hidden" color="BBOrange">
            &#9679;
          </Text>
        </GridItem>
        <GridItem className="games-label" colStart={2}>
          <Text
            className="label"
            color="BBGrey.60"
            _hover={{ color: "cultured", cursor: "pointer" }}
          >
            Games
          </Text>
        </GridItem>
        <GridItem className="claims-icon" rowStart={4}>
          <Text className="icon" visibility="hidden" color="BBOrange">
            &#9679;
          </Text>
        </GridItem>
        <GridItem className="games-count" rowStart={3} colStart={3}>
          <svg className="count" height="100" width="100">
            <circle cx="10" cy="50" r="10" fill="#F23A29" />
            <text fontFamily="Courier Prime" x="5" y="54" fill="white">
              {Math.round(Math.random())}
            </text>
          </svg>
        </GridItem>
        <GridItem className="claims-label" colStart={2}>
          <Text
            className="label"
            color="BBGrey.60"
            _hover={{ color: "cultured", cursor: "pointer" }}
          >
            Claims
          </Text>
        </GridItem>
        <GridItem className="claims-count" rowStart={4} colStart={3}>
          <svg className="count" height="100" width="100">
            <circle cx="10" cy="50" r="10" fill="#F23A29" />
            <text fontFamily="Courier Prime" x="5" y="54" fill="white">
              {Math.round(Math.random())}
            </text>
          </svg>
        </GridItem>
      </Grid>
    </Box>

    {/* Tabs */}
    <GridItem
      className="tabs"
      display="flex"
      alignItems="center"
      colStart={2}
      colEnd={4}
      mx={10}
      borderBottom="2px"
      borderColor="BBGrey.30"
    >
      <UnorderedList
        className="tabs-list"
        m={0}
        display="flex"
        listStyleType="none"
        fontFamily="Londrina Solid"
      >
        <ListItem
          className="item"
          color="BBGrey.50"
          p={3}
          borderRadius={50}
          _hover={{ color: "cultured", bgColor: "BBOrange", transition: "0.3s", cursor: "pointer" }}
        >
          Beasts
        </ListItem>
        <ListItem
          className="item"
          color="BBGrey.50"
          p={3}
          borderRadius={50}
          _hover={{ color: "cultured", bgColor: "BBOrange", transition: "0.3s", cursor: "pointer" }}
        >
          Equipment
        </ListItem>
        <ListItem
          className="item"
          color="BBGrey.50"
          p={3}
          borderRadius={50}
          _hover={{ color: "cultured", bgColor: "BBOrange", transition: "0.3s", cursor: "pointer" }}
        >
          Consumables
        </ListItem>
        <ListItem
          className="item"
          color="BBGrey.50"
          p={3}
          borderRadius={50}
          _hover={{ color: "cultured", bgColor: "BBOrange", transition: "0.3s", cursor: "pointer" }}
        >
          Trophies
        </ListItem>
        <ListItem
          className="item"
          color="BBGrey.50"
          p={3}
          borderRadius={50}
          _hover={{ color: "cultured", bgColor: "BBOrange", cursor: "pointer" }}
        >
          Crafting
        </ListItem>
      </UnorderedList>
    </GridItem>
    {/* Left Side */}
    <GridItem
      className="left-side"
      rowStart={2}
      rowEnd={4}
      colStart={2}
      colEnd={2}
      mx={8}
      my={6}
      fontFamily="Londrina Solid"
    >
      {/* Faction One */}
      <Box
        className="faction-box1"
        display="flex"
        alignContent="center"
        justifyContent="flex-start"
        alignItems="center"
        bgColor="BBTeal"
        p={2}
        borderRadius={4}
      >
        <Image src="/tempGraphics/emblem.png" height={107} width={60} alt="faction-emblem1" />
        <Box className="faction-text-box" px={4}>
          <Text className="faction-name" fontSize="4xl" py={1}>
            Esher
          </Text>
          <Text className="faction-count" pb={5} opacity={0.75}>
            {dummyData.beastCount} Beasts
          </Text>
        </Box>
      </Box>
      {/* Beast Roster */}
      <Box className="beast-roster" h="100%" overflowX="hidden">
        <Box
          className="roster-header"
          display="flex"
          alignItems="center"
          justifyContent="left"
          py={4}
        >
          <Image src="/tempGraphics/emblem.png" alt="faction emblem" height={30} width={30} />
          <Text className="active-faction-name" color="BBPink" p={2}>
            Valorian Beasts
          </Text>
        </Box>
        <Box className="roster-list">{beastList}</Box>
      </Box>
    </GridItem>

    {/* Right Side */}
    <GridItem
      className="right-side"
      rowStart={2}
      rowEnd={4}
      colStart={3}
      colEnd={3}
      mx={8}
      my={6}
      fontFamily="Londrina Solid"
    >
      {/* Faction Two */}
      <Box
        className="faction-box2"
        display="flex"
        alignContent="center"
        justifyContent="space-between"
        alignItems="center"
        bgColor="BBPink"
        p={2}
        borderRadius={4}
      >
        <Box className="faction-text-box" px={4} display="flex" flexDirection="column">
          <Text className="faction-name" fontSize="4xl" py={1}>
            Valorian
          </Text>
          <Text className="faction-count" pb={5} opacity={0.75}>
            {dummyData.beastCount2} Beasts
          </Text>
        </Box>
        <Image src="/tempGraphics/emblem2.png" height={110} width={110} alt="faction-emblem1" />
      </Box>
      <GridItem
        className="beast-profile"
        display="flex"
        rowStart={3}
        rowEnd={4}
        colStart={3}
        colEnd={3}
        mr={8}
        my={6}
        fontFamily="Londrina Solid"
      >
        <Box className="selected-beast-box" display="flex" flexDir="column">
          <Text className="beast-class-title" fontSize="5xl" pr={4}>
            Ursus Majorus
          </Text>
          <Text className="faction-type-subtitle" color="BBPinkText" pr={4}>
            Valorian &#8226; Bear
          </Text>
          <Box className="stats-lives-container" display="flex" flexDir="row">
            <Box
              className="stats-container"
              bgColor="BBBlack"
              h="fit-content"
              minW={200}
              mr={4}
              my={4}
              py={4}
              px={6}
              borderRadius={4}
            >
              <Text className="stats" fontSize="4xl">
                Stats
              </Text>
              <Box className="might" display="flex" justifyContent="space-between" py={2}>
                <Text color="BBGrey.50">Might:</Text>
                <span>3</span>
              </Box>
              <Box className="brawn" display="flex" justifyContent="space-between" py={2}>
                <Text color="BBGrey.50">Brawn:</Text>
                <span>0</span>
              </Box>
              <Box className="grace" display="flex" justifyContent="space-between" py={2}>
                <Text color="BBGrey.50">Grace:</Text>
                <span>5</span>
              </Box>
              <Box className="wit" display="flex" justifyContent="space-between" py={2}>
                <Text color="BBGrey.50">Wit:</Text>
                <span>8</span>
              </Box>
              <Box className="will" display="flex" justifyContent="space-between" py={2}>
                <Text color="BBGrey.50">Will:</Text>
                <span>1</span>
              </Box>
            </Box>
            <Box
              className="lives-container"
              bgColor="BBBlack"
              h="fit-content"
              minW={300}
              m={4}
              py={4}
              px={6}
              borderRadius={4}
            >
              <Text className="lives" fontSize="4xl">
                Lives
              </Text>
              <Box className="battle-royale" display="flex" justifyContent="space-between" py={2}>
                <Text color="BBGrey.50">Battle Royale:</Text>
                <span>1</span>
              </Box>
              <Box className="espionage" display="flex" justifyContent="space-between" py={2}>
                <Text color="BBGrey.50">Espionage:</Text>
                <span>0</span>
              </Box>
              <Box className="long-name-event" display="flex" justifyContent="space-between" py={2}>
                <Text color="BBGrey.50">Long Name Event:</Text>
                <span>0</span>
              </Box>
              <Box className="short" display="flex" justifyContent="space-between" py={2}>
                <Text color="BBGrey.50">Short:</Text>
                <span>0</span>
              </Box>
            </Box>
          </Box>
          <Box
            className="trophies-case"
            bgColor="BBBlack"
            h="fit-content"
            borderRadius={4}
            mr={4}
            my={4}
            py={4}
            px={6}
          >
            <Text className="trophies" fontSize="4xl">
              Trophies
            </Text>
            <Box className="trophy-list" display="flex">
              {images}
            </Box>
          </Box>
        </Box>
        <Image src="/tempGraphics/battlebear.png" height="100%" width={500} alt="beast" />
      </GridItem>
    </GridItem>
  </Grid>
)

export const getStaticProps: GetStaticProps = async () => {
  return {
    notFound: true,
  }
}

export default BeastRegistry
