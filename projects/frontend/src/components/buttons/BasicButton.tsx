import React, { ReactElement } from "react"
import { Button } from "@chakra-ui/react"
import { BasicButtonProps } from "../../../types/components/buttons"

const BasicButton = ({ bgCol, textCol, text, action }: BasicButtonProps): ReactElement => {
  return (
    <Button
      onClick={action}
      borderWidth="3px"
      borderStyle="solid"
      borderColor={bgCol}
      backgroundColor="transparent"
      borderRadius="10px"
      color={textCol}
      minW={"xs"}
      w={{ base: 28 }}
      py={5}
      fontSize={{ base: "md", lg: "xl" }}
      fontWeight="400"
      _hover={{
        bg: bgCol,
        color: textCol,
        transitionDuration: "1s",
      }}
    >
      {text}
    </Button>
  )
}

export default BasicButton
