import type { NextPage } from "next"
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import { FaGoogle } from "react-icons/fa"
import { DividerWithText } from "../src/components/Auth/DividerWithText"
import { SignupForm } from "../src/components/Auth/SignupForm"
import Link from "next/link"
import { theme } from "../styles/theme"
import Logo from "../src/components/logos/SquidLogo"
import * as React from "react"
import { useEffect } from "react"
import { redirectUser } from "../src/utils/auth"
import { parseCookies } from "nookies"
import { useRouter } from "next/router"

const Signup: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    document.title = "Beast Battles | Sign up"
  })

  return (
    <Box minH="100vh" bg={{ md: mode("gray.800", "inherit") }}>
      <Box maxW="6xl" mx="auto" py={{ base: "10", md: "0" }} px={{ base: "4", md: "10" }}>
        <SimpleGrid columns={{ base: 1, lg: 1 }} spacing="14">
          <Box w="full" maxW="xl" mx="auto">
            <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
              <Box
                py={{ base: "0", sm: "8" }}
                px={{ base: "4", sm: "10" }}
                bg={mode("gray.700", "")}
                boxShadow={{ base: "none", sm: "md" }}
                borderRadius={{ base: "none", sm: "xl" }}
              >
                <HStack height={70} width={70} m="auto" justify="center">
                  <Logo />
                </HStack>
                <Box mb="8" textAlign={{ base: "center", md: "center" }}>
                  <Heading size="lg" mb="2" fontWeight="extrabold">
                    Welcome to Beast Battles
                  </Heading>
                  <HStack spacing="1" justify="center">
                    <Text color={"white"}>Already have an account? </Text>
                    <Link href={"/login"}>
                      <Button
                        color={mode(theme.colors.BBTeal, "blue.200")}
                        colorScheme={theme.colors.BBTeal}
                        variant="link"
                      >
                        Login
                      </Button>
                    </Link>
                  </HStack>
                </Box>

                <SignupForm />
                <DividerWithText>or</DividerWithText>

                <Stack spacing="4">
                  <Button
                    bg={"white"}
                    variant="outline"
                    leftIcon={<Box as={FaGoogle} color="red.500" />}
                  >
                    Sign up with Google
                  </Button>
                  <HStack>
                    <FormControl>
                      <FormLabel color={"gray.100"} htmlFor="password">
                        <Button
                          onClick={() => router.push("/")}
                          color={mode(theme.colors.BBTeal, "blue.200")}
                          colorScheme={theme.colors.BBTeal}
                          variant="link"
                        >
                          Go Back
                        </Button>
                      </FormLabel>
                    </FormControl>
                  </HStack>
                </Stack>
              </Box>
            </Container>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
Signup.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx)
  if (token) redirectUser(ctx, "/")
  return { token }
}
export default Signup
