import "@fontsource/staatliches/400.css"
import "@fontsource/dongle/300.css"
import "@fontsource/eb-garamond"
import "@fontsource/julius-sans-one"
import "@fontsource/black-han-sans"
import "@fontsource/bowlby-one"
import "@fontsource/londrina-solid"
import "@fontsource/courier-prime"

import { NextPage } from "next"
import type { AppProps } from "next/app"

import { Box, ChakraProvider } from "@chakra-ui/react"
import { useRouter } from "next/router"

import Header from "../src/components/navigation/Header"
import Footer from "../src/components/navigation/Footer"
import { theme } from "../styles/theme"
import "../styles/globals.css"
import AuthProvider from "../src/context/AuthContext"
import { parseCookies } from "nookies"
import { redirectUser } from "../src/utils/auth"

const standAloneRoutes = ["/login", "/signup"]
const isStandAloneRoutes = (path: string) => standAloneRoutes.includes(path)

const authRoutes = ["/account", "/dashboard", "/dashboard/registry"]
const isAuthRoute = (path: string) => authRoutes.includes(path)
const isLoginSignupPage = (path: string) => standAloneRoutes.includes(path)

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (isStandAloneRoutes(router.asPath)) {
    return (
      <AuthProvider>
        <ChakraProvider resetCSS={true} theme={theme}>
          <Box bg="eerieBlack" w="full" h="full">
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </AuthProvider>
    )
  } else {
    return (
      <AuthProvider>
        <ChakraProvider resetCSS={true} theme={theme}>
          <Box bg="eerieBlack" w="full" h="full">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </ChakraProvider>
      </AuthProvider>
    )
  }
}

MyApp.getInitialProps = async ({ ctx }: { ctx: any }) => {
  const { token } = parseCookies(ctx)
  if (!token) {
    if (isAuthRoute(ctx.pathname)) redirectUser(ctx, "/login")
  } else {
    if (isLoginSignupPage(ctx.pathname)) redirectUser(ctx, "/account")
  }
  return { token }
}
export default MyApp
