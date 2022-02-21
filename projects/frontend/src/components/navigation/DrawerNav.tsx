import * as React from "react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Link,
  Flex,
} from "@chakra-ui/react"
import { SignUpButton, LoginButton } from "../buttons"

type LinksType = { name: string; path: string }[]

const links: LinksType = [
  { name: "Home", path: "/" },
  { name: "Battle Royale", path: "/how-to-play" },
  { name: "The Beasts", path: "/beasts" },
  { name: "Events", path: "/events" },
  { name: "Results", path: "/" },
  { name: "Roster", path: "/" },
]

const DrawerNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()
  return (
    <>
      <Button aria-label="" colorScheme="teal" onClick={onOpen} />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="eerieBlack" textColor="cultured">
          <DrawerCloseButton />
          <DrawerHeader>Beast Battle</DrawerHeader>

          <DrawerBody>
            <Flex direction="column">
              {links.map((item, i) => (
                <Link
                  key={`slide-nav-link-${i}`}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  href={item?.path}
                >
                  {item?.name}
                </Link>
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Flex w="full">
              <SignUpButton />
              <LoginButton />
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerNav
