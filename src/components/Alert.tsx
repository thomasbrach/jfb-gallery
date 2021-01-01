import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIcon,
  AlertProps,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  content: string;
} & AlertProps;

const Alert = (props: Props) => {
  const { content, ...rest } = props;
  return (
    <ChakraAlert {...rest}>
      <AlertIcon />
      <AlertDescription>{content}</AlertDescription>
    </ChakraAlert>
  );
};

export default Alert;
