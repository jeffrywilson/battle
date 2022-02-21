import { Flex, Container, Heading, Stack, Text, Box } from "@chakra-ui/react"
import Image from "next/image"
import { ReactElement, useEffect, useState } from "react"
import { EventDataType } from "../../../types/pages"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import { BasicButton } from "../buttons"

type NextHeroProps = { event: EventDataType }

const NextEventHero = ({ event }: NextHeroProps): ReactElement => {
  const { width } = useWindowDimensions()
  const [renderMobile, setRenderMobile] = useState(false)

  useEffect(() => {
    if (width && width <= 812) {
      setRenderMobile(true)
    } else {
      setRenderMobile(false)
    }
  }, [width])

  return (
    <Container maxW={"6xl"} border="1px solid" borderColor="gray.200" rounded={"3xl"} mx={6}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 6, md: 12 }}
      >
        <Heading fontWeight={600} color="steelPink">
          <Flex direction={"column"} maxW={"max-content"} mx={"auto"}>
            <Text
              fontSize={{ base: "lg", sm: "xl", md: "4xl" }}
              color={"gray.300"}
              textAlign={"left"}
            >
              next event...
            </Text>
            <Text
              fontSize={{ base: "4xl", sm: "5xl", md: "7xl", lg: "8xl" }}
              textTransform="uppercase"
            >
              {event?.title}
            </Text>
          </Flex>
          {/* <Box boxSize={"xs"}> */}
          <Image
            src="/tempGraphics/battle-temp.png"
            width={564}
            height={422}
            objectFit="contain"
            alt="Battle Graphic"
          />
          {/* </Box> */}
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          {event?.description}
        </Text>

        <Stack direction={"row"} spacing={8}>
          <Box p={6} border="1px solid" borderColor="gray.200" rounded={"3xl"} w={"50%"}>
            <Text color={"malachite"}>Countdown</Text>
            <Text color={"vividSkyBlue"}>{event?.dateTime}</Text>
          </Box>
          <Box p={6} border="1px solid" borderColor="gray.200" rounded={"3xl"} w={"50%"}>
            <Text color={"malachite"}>Spots Left</Text>
            <Text color={"vividSkyBlue"}>{event?.spotsLeft}</Text>
          </Box>
        </Stack>

        <Stack spacing={6} direction={renderMobile ? "column" : "row"}>
          <BasicButton
            bgCol="vividSkyBlue"
            textCol="cultured"
            text="Join the battle"
            action={() => console.log("join something")}
          />
          <BasicButton
            bgCol="steelPink"
            textCol="cultured"
            text="Stake a side"
            action={() => console.log("stake something")}
          />
        </Stack>
        <Flex w={"full"}></Flex>
      </Stack>
    </Container>
  )
}

export default NextEventHero
