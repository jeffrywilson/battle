import { NextPage } from "next"
import { Flex, Box } from "@chakra-ui/react"

import useData from "../../src/hooks/api"
import NextEventHero from "../../src/components/events/NextEventHero"
import { EventDataType } from "../../types/pages"
import PrevEventCard from "../../src/components/events/PrevEventCard"

const Events: NextPage = () => {
  useData()

  return (
    <Flex
      height="full"
      w="full"
      bg="eerieBlack"
      justifyContent="center"
      alignItems={"center"}
      zIndex={0}
      bgColor={"black"}
      direction={"column"}
      px={{ base: 2, sm: 6, lg: 6 }}
      pt={{ base: 2, sm: 6, lg: 24 }}
      pb={{ base: 8, sm: 12, lg: 24 }}
    >
      <NextEventHero event={currentEvent} />

      <Flex
        w="99%"
        direction={{ base: "column", lg: "row" }}
        justifyContent={"space-between"}
        maxW={"6xl"}
        pt={8}
        experimental_spaceY={{ base: 8, lg: 0 }}
      >
        {prevEvents.map((item, i) => (
          <Box w={{ base: "full", lg: "48%" }} key={i}>
            <PrevEventCard event={item} />
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export default Events

export const currentEvent: EventDataType = {
  title: "A Brutal Battle",
  dateTime: 1641613399,
  spotsLeft: 413,
  pageLink: "#",
  description:
    "Here's some dumby text about the upcoming event.  It's going to be an event that will be happening at a specefied time.  Somethings will happen and you can be a part of that.  ",
}

const prevEvents: EventDataType[] = [
  {
    title: "The Previous Battle",
    dateTime: 1641613399,
    spotsLeft: 413,
    pageLink: "#",
    description:
      "Here's some dumby text about a past event.  It was an event that  happened at a specefied time.  Somethings  happened and you might have been a part of that.",
  },
  {
    title: "A More Previous Battle",
    dateTime: 1641613399,
    spotsLeft: 413,
    pageLink: "#",
    description:
      "Here's some dumby text about a past event.  It was an event that  happened at a specefied time.  Somethings  happened and you might have been a part of that.",
  },
]
