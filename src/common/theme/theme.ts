// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

export const customTheme = extendTheme({
  colors: {
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        backgroundColor: `#bab6af`,
        backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")`,
        fontFamily: "'Lato', sans-serif",
      },
      h1: {
          fontFamily: "'Permanent Marker', sans-serif"
      },
      button: {
        fontFamily: "'Permanent Marker', sans-serif"
      },
      form: {
          color: "black"
      },
      input: {
      }
      // styles for the `a`
    //   a: {
    //     color: "teal.500",
    //     _hover: {
    //       textDecoration: "underline",
    //     },
    //   },
    },
  },
})