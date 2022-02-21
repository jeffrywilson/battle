import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react"
import * as React from "react"
import { HiEye, HiEyeOff } from "react-icons/hi"

export const PasswordField = React.forwardRef<HTMLInputElement, InputProps>((props) => {
  const { isOpen, onToggle } = useDisclosure()
  const passRef = React.useRef<HTMLInputElement>(null)

  const onClickReveal = () => {
    onToggle()
    if (passRef.current) {
      passRef.current.focus({ preventScroll: true })
    }
  }

  return (
    <FormControl>
      <FormLabel color={"gray.100"} htmlFor="password">
        Password
      </FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="link"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          color={"white"}
          id="password"
          ref={passRef}
          name="password"
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          {...props}
        />
      </InputGroup>
    </FormControl>
  )
})

PasswordField.displayName = "PasswordField"
