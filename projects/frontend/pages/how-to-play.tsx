import React from "react"
import type { GetStaticProps, NextPage } from "next"
import Image from "next/image"
import Link from "next/link"

import { Box, Button, Heading, Text } from "@chakra-ui/react"

const HowToPlay: NextPage = () => (
  <>
    {/* CONTAINER */}
    <Box
      h="100vh"
      w="100vw"
      bgImage="url('/tempGraphics/colosseum.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      zIndex={-2}
    >
      <Box
        pos="absolute"
        className="inky-moon-box"
        display="flex"
        flexDir="column"
        alignItems="flex-end"
        right={150}
      >
        <Image src="/tempGraphics/coin.png" height={150} width={150} alt="inky coin moon" />
      </Box>
      <Box className="title-container" display="flex" flexDir="column" alignItems="center">
        <Heading fontSize="8xl" color="cultured" zIndex={1} mt={20}>
          Beast Battle
        </Heading>
        <Box className="play-now-button">
          <Link href="/" passHref>
            <Button
              fontFamily="Londrina Solid"
              fontSize="2xl"
              letterSpacing={2}
              colorScheme="teal"
              size="lg"
            >
              Play Now
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        className="rolling-text-box"
        display="flex"
        flexDir="column"
        alignItems="flex-end"
        pr={20}
      >
        <Text lineHeight={2}>Victory brings with it glory!</Text>
        <Text lineHeight={2}>And Honor! ....and tokens</Text>
        <Text lineHeight={2}>It&#39;s mostly the tokens</Text>
        <Text lineHeight={2}>Victory brings with it tokens!</Text>
      </Box>
      <Box className="tutorial-map-box" display="flex" fontFamily="Londrina Solid" mx={60}>
        <Box className="tutorial1">
          <Image src="/tempGraphics/emblem2.png" height={150} width={150} alt="emblem" />
          <Text pos="relative" left={12} bottom={32} width="33%">
            Recruit your own Beast
          </Text>
        </Box>
        <Box className="tutorial2">
          <Image src="/tempGraphics/emblem2.png" height={150} width={150} alt="emblem" />
          <Text pos="relative" left={12} bottom={32} width="33%">
            Equip your weapons
          </Text>
        </Box>
        <Box className="tutorial3">
          <Image src="/tempGraphics/emblem2.png" height={150} width={150} alt="emblem" />
          <Text pos="relative" left={12} bottom={32} width="33%">
            Join the Battle Royale
          </Text>
        </Box>
        <Box className="tutorial4">
          <Image src="/tempGraphics/both.png" height={150} width={150} alt="emblem" />
          <Text pos="relative" left={12} bottom={32} width="33%">
            Emerge victorious and stake your claim!
          </Text>
        </Box>
      </Box>
    </Box>
    {/* PAGE 2 CONTAINER */}
    <Box
      className="page2-container"
      h="200vh"
      w="100vw"
      bgImage="url('/tempGraphics/aurora.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      overflowX="hidden"
      fontFamily="Londrina Solid"
    >
      <Box className="content-box" display="flex" w="100vw" mx={20} py={100} overflowX="hidden">
        <Box className="hero-image-box">
          <Image
            src="/tempGraphics/entrancescene.jpg"
            height={400}
            width={500}
            alt="enter the colosseum"
          />
        </Box>
        <Box className="text-box" display="flex" flexDir="column" w="35%" px={50}>
          <Text fontSize="6xl">
            Become a <br></br>Patron and Earn Rewards
          </Text>
          <Text py={6} lineHeight={1.5}>
            All patrons are rewarded for staking their $INKY coins regardless of the outcome.
            Rewards will be distributed weekly for all patrons beginning with the base disbursement.
          </Text>
        </Box>
      </Box>
      {/* PAGE 2 PART 2 */}
      <Box className="factions-container">
        <Box className="title-box">
          <svg width="500" height="110">
            <rect width="500" height="100" fill="grey" stroke="black" />
            <text
              x="60%"
              y="35%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontFamily="Londrina Solid"
              fontSize="30px"
              stroke="black"
            >
              Choose a Beast from either
            </text>
            <text
              x="60%"
              y="65%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontFamily="Londrina Solid"
              fontSize="30px"
              stroke="black"
            >
              Esher or Valorin
            </text>
          </svg>
        </Box>
        <Box className="emblem-image-contanier" display="flex" justifyContent="center">
          <Box className="emblem-box1" display="flex" flexDir="column" p={10}>
            <Image src="/tempGraphics/emblem.png" height={400} width={200} alt="Esher emblem" />
            <Button colorScheme="teal">Esher</Button>
          </Box>
          <Box className="emblem-box2" display="flex" flexDir="column" p={10}>
            <Image src="/tempGraphics/emblem2.png" height={400} width={400} alt="Esher emblem" />
            <Button colorScheme="pink">Valorian</Button>
          </Box>
        </Box>
      </Box>
    </Box>
    {/* PAGE 3 */}
    <Box
      className="page-3-container"
      h="100vh"
      w="100vw"
      bgImage="url('/tempGraphics/cartooncolosseum.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      fontFamily="Londrina Solid"
      display="flex"
      flexDir="column"
    >
      {/* <Box className="video-box">
        <video ref={videoRef} controls width="500" loop muted></video>
      </Box> */}
      <Box display="flex" flexDir="column" alignItems="center">
        <Box className="video-placeholder" w={500} h={250} mt={10} bgColor="grey"></Box>
        <Box
          className="details-box"
          bg="BBBlack"
          display="flex"
          justifyContent="center"
          opacity={0.75}
          mx={100}
          mt={10}
        >
          <Box
            className="item1"
            display="flex"
            flexDir="column"
            alignItems="center"
            bgColor="BBTeal"
            w="25%"
            px={8}
          >
            <Image src="/tempGraphics/battlebear.png" height={100} width={80} alt="battle bear" />
            <Text className="title" fontSize="2xl">
              Patronage
            </Text>
            <Text className="details" fontSize="lg">
              Create and mint an ERC-721 NFT and stake your Inky coins at Calad’s Central Hub
            </Text>
          </Box>
          <Box
            className="item2"
            display="flex"
            flexDir="column"
            alignItems="center"
            w="25%"
            px={8}
            bgColor="BBTeal"
          >
            <Image src="/tempGraphics/battlebear.png" height={100} width={80} alt="battle bear" />
            <Text className="title" fontSize="2xl">
              Battle
            </Text>
            <Text className="details" fontSize="lg">
              View the roster of 456 beasts and choose the faction who you think will bring home the
              trophy
            </Text>
          </Box>
          <Box
            className="item3"
            display="flex"
            flexDir="column"
            alignItems="center"
            w="25%"
            px={8}
            bgColor="BBTeal"
          >
            <Image src="/tempGraphics/battlebear.png" height={100} width={80} alt="battle bear" />
            <Text className="title" fontSize="2xl">
              Reward
            </Text>
            <Text className="details" fontSize="lg">
              All patrons are rewarded regardless of the outcome. Rewards will be distributed weekly
              for all patrons
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  return {
    notFound: true,
  }
}

export default HowToPlay
