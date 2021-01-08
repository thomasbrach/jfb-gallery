import {
  ComponentWithAs,
  FormControl,
  FormLabel,
  IconProps,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  icon?: ComponentWithAs<"svg", IconProps>;
  placeholder: string;
  isRequired?: boolean;
};

const FormTextArea = (props: Props) => {
  const { label, icon: Icon, placeholder, isRequired, ...rest } = props;
  const [field, meta] = useField(rest);

  return (
    <FormControl
      isInvalid={meta.touched && !!meta.error}
      isRequired={isRequired}
    >
      <FormLabel marginTop={2} marginBottom={1}>
        {label}
      </FormLabel>
      <InputGroup>
        {Icon && (
          <InputLeftElement>
            <Icon />
          </InputLeftElement>
        )}
        <Textarea placeholder={placeholder} {...field} />
      </InputGroup>
    </FormControl>
  );
};

export default FormTextArea;
