import {
  ComponentWithAs,
  FormControl,
  FormLabel,
  IconProps,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  icon?: ComponentWithAs<"svg", IconProps>;
  placeholder?: string;
  isRequired?: boolean;
};

const FormTextSelect = (props: Props) => {
  const {
    type,
    label,
    icon: Icon,
    placeholder,
    isRequired,
    children,
    ...rest
  } = props;
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
        <Select type={type} placeholder={placeholder} {...field}>
          {children}
        </Select>
      </InputGroup>
    </FormControl>
  );
};

export default FormTextSelect;
