import React, { useEffect, useState, useRef } from "react"
import { NextPage } from "next"
import {
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import TextLogo from "../logos/TextLogo"

const SideNav: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  const firstField = useRef(null)
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
    <>
      {renderMobile ? (
        <>
          <Button pos="fixed" bottom={4} right={10} ref={btnRef} onClick={onOpen} border="2px">
            Table of Contents
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            initialFocusRef={firstField}
            finalFocusRef={btnRef}
            // closeOnOverlayClick={closeOnOverlayClick}
            trapFocus={true}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton color="cultured" />

              <DrawerBody bgColor="BBBlack">
                <Box display="flex" flexDir="column" alignItems="center">
                  <List
                    display="flex"
                    flexDir="column"
                    fontFamily="Londrina Solid"
                    fontWeight="light"
                    alignItems="flex-start"
                    pt={4}
                  >
                    <ListItem
                      as="a"
                      href="#intro"
                      py={2}
                      color="cultured"
                      fontSize="2xl"
                      _hover={{ color: "BBOrange" }}
                    >
                      Intro
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#bbu-token"
                      py={2}
                      pl={8}
                      color="cultured"
                      fontSize="md"
                      _hover={{ color: "BBOrange" }}
                    >
                      BBU ERC-20 Token
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#digital-experience"
                      py={2}
                      pl={8}
                      color="cultured"
                      fontSize="md"
                      _hover={{ color: "BBOrange" }}
                    >
                      Digital Experiences
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#our-goals"
                      py={2}
                      pl={8}
                      color="cultured"
                      fontSize="md"
                      _hover={{ color: "BBOrange" }}
                    >
                      Our Goals
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#patronage"
                      py={2}
                      color="cultured"
                      fontSize="2xl"
                      _hover={{ color: "BBOrange" }}
                    >
                      Patronage
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#staking"
                      py={2}
                      pl={8}
                      color="cultured"
                      fontSize="md"
                      _hover={{ color: "BBOrange" }}
                    >
                      Staking
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#phase-1.5"
                      py={2}
                      pl={8}
                      color="cultured"
                      fontSize="md"
                      _hover={{ color: "BBOrange" }}
                    >
                      Patronage: Phase 1.5
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#voting"
                      py={2}
                      pl={12}
                      fontSize="sm"
                      color="cultured"
                      _hover={{ color: "BBOrange" }}
                    >
                      Voting
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#patron-gifts"
                      py={2}
                      pl={12}
                      color="cultured"
                      fontSize="sm"
                      _hover={{ color: "BBOrange" }}
                    >
                      Patron Gifts
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#battle-royale"
                      py={2}
                      color="cultured"
                      fontSize="2xl"
                      _hover={{ color: "BBOrange" }}
                    >
                      Battle Royale
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#gameplay"
                      py={2}
                      pl={8}
                      color="cultured"
                      fontSize="md"
                      _hover={{ color: "BBOrange" }}
                    >
                      Gameplay
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#signing-up"
                      py={2}
                      pl={8}
                      color="cultured"
                      fontSize="md"
                      _hover={{ color: "BBOrange" }}
                    >
                      Signing Up
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#equipment"
                      py={2}
                      pl={8}
                      color="cultured"
                      fontSize="md"
                      _hover={{ color: "BBOrange" }}
                    >
                      Equipment
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#consumables"
                      py={2}
                      pl={8}
                      color="cultured"
                      fontSize="md"
                      _hover={{ color: "BBOrange" }}
                    >
                      Consumables
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#beasts"
                      py={2}
                      color="cultured"
                      fontSize="2xl"
                      _hover={{ color: "BBOrange" }}
                    >
                      Beasts
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#beast-tokens"
                      py={2}
                      pl={8}
                      color="cultured"
                      fontSize="md"
                      _hover={{ color: "BBOrange" }}
                    >
                      Beast Tokens
                    </ListItem>
                    <ListItem
                      as="a"
                      href="#beast-roster"
                      py={2}
                      pl={8}
                      color="cultured"
                      fontSize="md"
                      _hover={{ color: "BBOrange" }}
                    >
                      Beast Roster
                    </ListItem>
                  </List>
                </Box>
                <Button
                  as="a"
                  href="#intro"
                  variant="link"
                  pos="fixed"
                  left="225px"
                  bottom={4}
                  color="cultured"
                >
                  Back to Top
                </Button>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Box
          pos="fixed"
          h="100%"
          w="20%"
          top={0}
          left={0}
          display="flex"
          flexDir="column"
          alignItems="center"
          pt={16}
          px={6}
          bgColor="BBBlack"
          overflowX="hidden"
        >
          <List
            display="flex"
            flexDir="column"
            fontFamily="Londrina Solid"
            fontWeight="light"
            alignItems="flex-start"
          >
            <ListItem
              as="a"
              href="#intro"
              py={2}
              color="cultured"
              fontSize="2xl"
              _hover={{ color: "BBOrange" }}
            >
              Intro
            </ListItem>
            <ListItem
              as="a"
              href="#bbu-token"
              py={2}
              pl={8}
              color="cultured"
              fontSize="md"
              _hover={{ color: "BBOrange" }}
            >
              BBU ERC-20 Token
            </ListItem>
            <ListItem
              as="a"
              href="#digital-experience"
              py={2}
              pl={8}
              color="cultured"
              fontSize="md"
              _hover={{ color: "BBOrange" }}
            >
              Digital Experiences
            </ListItem>
            <ListItem
              as="a"
              href="#our-goals"
              py={2}
              pl={8}
              color="cultured"
              fontSize="md"
              _hover={{ color: "BBOrange" }}
            >
              Our Goals
            </ListItem>
            <ListItem
              as="a"
              href="#patronage"
              py={2}
              color="cultured"
              fontSize="2xl"
              _hover={{ color: "BBOrange" }}
            >
              Patronage
            </ListItem>
            <ListItem
              as="a"
              href="#staking"
              py={2}
              pl={8}
              color="cultured"
              fontSize="md"
              _hover={{ color: "BBOrange" }}
            >
              Staking
            </ListItem>
            <ListItem
              as="a"
              href="#phase-1.5"
              py={2}
              pl={8}
              color="cultured"
              fontSize="md"
              _hover={{ color: "BBOrange" }}
            >
              Patronage: Phase 1.5
            </ListItem>
            <ListItem
              as="a"
              href="#voting"
              py={2}
              pl={12}
              fontSize="sm"
              color="cultured"
              _hover={{ color: "BBOrange" }}
            >
              Voting
            </ListItem>
            <ListItem
              as="a"
              href="#patron-gifts"
              py={2}
              pl={12}
              color="cultured"
              fontSize="sm"
              _hover={{ color: "BBOrange" }}
            >
              Patron Gifts
            </ListItem>
            <ListItem
              as="a"
              href="#battle-royale"
              py={2}
              color="cultured"
              fontSize="2xl"
              _hover={{ color: "BBOrange" }}
            >
              Battle Royale
            </ListItem>
            <ListItem
              as="a"
              href="#gameplay"
              py={2}
              pl={8}
              color="cultured"
              fontSize="md"
              _hover={{ color: "BBOrange" }}
            >
              Gameplay
            </ListItem>
            <ListItem
              as="a"
              href="#signing-up"
              py={2}
              pl={8}
              color="cultured"
              fontSize="md"
              _hover={{ color: "BBOrange" }}
            >
              Signing Up
            </ListItem>
            <ListItem
              as="a"
              href="#equipment"
              py={2}
              pl={8}
              color="cultured"
              fontSize="md"
              _hover={{ color: "BBOrange" }}
            >
              Equipment
            </ListItem>
            <ListItem
              as="a"
              href="#consumables"
              py={2}
              pl={8}
              color="cultured"
              fontSize="md"
              _hover={{ color: "BBOrange" }}
            >
              Consumables
            </ListItem>
            <ListItem
              as="a"
              href="#beasts"
              py={2}
              color="cultured"
              fontSize="2xl"
              _hover={{ color: "BBOrange" }}
            >
              Beasts
            </ListItem>
            <ListItem
              as="a"
              href="#beast-tokens"
              py={2}
              pl={8}
              color="cultured"
              fontSize="md"
              _hover={{ color: "BBOrange" }}
            >
              Beast Tokens
            </ListItem>
            <ListItem
              as="a"
              href="#beast-roster"
              py={2}
              pl={8}
              color="cultured"
              fontSize="md"
              _hover={{ color: "BBOrange" }}
            >
              Beast Roster
            </ListItem>
          </List>

          <Box className="side-nav-footer">
            <Box className="text-logo-header" pos="relative" pt={12} bottom={0} px={10}>
              <TextLogo />
            </Box>
            <Box
              className="circles-container"
              display={{ base: "none", lg: "flex" }}
              flexDir="column"
              alignItems="center"
            >
              <svg height="50" width="170">
                <circle cx="15" cy="25" r="10" stroke="grey" fill="grey" />
                <circle cx="50" cy="25" r="10" stroke="grey" fill="grey" />
                <circle cx="85" cy="25" r="10" stroke="grey" fill="grey" />
                <circle cx="120" cy="25" r="10" stroke="grey" fill="grey" />
                <circle cx="155" cy="25" r="10" stroke="grey" fill="grey" />
              </svg>
            </Box>
            <Text
              className="copyright"
              fontFamily="Open Sans"
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              color="BBGrey.40"
              display="flex"
              flexDir="column"
              alignItems="center"
              px={{ sm: "2", md: "0" }}
              pb={2}
            >
              @2022 Beast Battle
            </Text>
          </Box>
        </Box>
      )}
    </>
  )
}
export default SideNav
