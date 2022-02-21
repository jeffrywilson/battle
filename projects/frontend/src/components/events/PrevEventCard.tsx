import { Flex, Container, Heading, Stack, Text } from "@chakra-ui/react"
import { ReactElement, useEffect, useState } from "react"
import { EventDataType } from "../../../types/pages"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import { BasicButton } from "../buttons"

type NextHeroProps = { event: EventDataType }

const PrevEventCard = ({ event }: NextHeroProps): ReactElement => {
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
    <Container
      maxW={"6xl"}
      border="1px solid"
      borderColor="gray.200"
      rounded={"3xl"}
      // my={{ base: 6, md: 16 }}
      // mx={6}
    >
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 6, md: 12 }}
      >
        <Heading fontWeight={600} color="steelPink">
          <Flex direction={"column"} maxW={"max-content"} mx={"auto"}>
            <Text fontSize={{ base: "xl", sm: "2xl" }} textTransform="uppercase">
              {event?.title}
            </Text>
            <Text
              fontSize={{ base: "sm", sm: "md" }}
              textTransform="uppercase"
              textColor={"malachite"}
            >
              Completed{" "}
              {new Date(event?.dateTime * 1000).toLocaleDateString(undefined, {
                year: "numeric",
                month: "numeric",
                day: "numeric",

                hour: "2-digit",
                minute: "numeric",
                second: "numeric",
                hour12: false,
              })}
            </Text>
          </Flex>
          {/* <Image
            src="/tempGraphics/battle-temp.png"
            width={564}
            height={422}
            objectFit="contain"
            alt="Battle Graphic"
          /> */}
        </Heading>
        {/* <Text color={"gray.500"} maxW={"3xl"}>
          {event?.description}
        </Text> */}

        {/* <Stack direction={"row"} spacing={8}>
          <Box p={6} border="1px solid" borderColor="gray.200" rounded={"3xl"} w={"50%"}>
            <Text color={"malachite"}>Countdown</Text>
            <Text color={"vividSkyBlue"}>{event?.dateTime}</Text>
          </Box>
          <Box p={6} border="1px solid" borderColor="gray.200" rounded={"3xl"} w={"50%"}>
            <Text color={"malachite"}>Spots Left</Text>
            <Text color={"vividSkyBlue"}>{event?.spotsLeft}</Text>
          </Box>
        </Stack> */}

        <Stack spacing={6} direction={renderMobile ? "column" : "row"}>
          <BasicButton
            bgCol="vividSkyBlue"
            textCol="vividSkyBlue"
            text="Battle page"
            action={() => console.log("go to it's page")}
          />
        </Stack>
      </Stack>
    </Container>
  )
}

export default PrevEventCard
