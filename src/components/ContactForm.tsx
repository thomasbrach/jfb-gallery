import {
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import FormTextInput from "./FormTextInput";
import { useMountedRef } from "../hooks/useMountedRef";
import emailjs from "emailjs-com";
import FormTextArea from "./FormTextArea";

type Fields = {
  user_name: string;
  user_email: string;
  message: string;
  errorMessage: string;
};

const initialValues = {
  user_name: "",
  user_email: "",
  message: "",
  errorMessage: "",
};

const validationSchema = Yup.object().shape({
  user_name: Yup.string().required(),
  user_email: Yup.string().required().email(),
  message: Yup.string().required(),
});

const LoginForm = () => {
  const toast = useToast();
  const isMounted = useMountedRef();

  const handleSubmit = async (event: any, helpers: FormikHelpers<Fields>) => {
    const { setSubmitting, setErrors } = helpers;
    try {
      setSubmitting(true);
      await emailjs.send(
        "gmail_service",
        "contact_form",
        {
          user_name: event.user_name,
          user_email: event.user_email,
          message: event.message,
        },
        process.env.REACT_APP_EMAIL_JS_USER_ID
      );
      toast({
        title: "Success!",
        description: "Your message has been sent.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      setErrors({ errorMessage: error.message });
      toast({
        title: "Whoops!",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      if (isMounted.current) setSubmitting(false);
    }
  };

  return (
    <Container padding="4" borderColor="cyan.400" borderWidth="1px">
      <Heading as="h1" color="cyan.400">
        Contact Jean-François Brach
      </Heading>
      <Text>Write and send a message</Text>
      <br />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, isSubmitting, errors }) => (
          <Form>
            <FormTextInput
              label="Your Name"
              name="user_name"
              placeholder="Your Name"
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="Your Email"
              name="user_email"
              placeholder="your@email.com"
              type="email"
              isRequired={true}
            />
            <FormTextArea
              name="message"
              label="Your Message"
              placeholder="Your Message Here..."
              isRequired={true}
            />
            <br />
            <Flex>
              <Spacer />
              <Button
                w="100%"
                bgColor="cyan.400"
                color="white"
                isDisabled={!isValid || !dirty || isSubmitting}
                isLoading={isSubmitting}
                content="Send Message"
                type="submit"
              />
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
