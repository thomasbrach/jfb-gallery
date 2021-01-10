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

const ContactForm = () => {
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
        title: "Succès",
        description: "Votre message a bien été envoyé !",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      setErrors({ errorMessage: error.message });
      toast({
        title: "Erreur",
        description:
          "Il y a un problème avec votre message. Merci de réessayer plus tard.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      if (isMounted.current) setSubmitting(false);
    }
  };

  return (
    <Container
      padding="4"
      borderColor="gray.600"
      borderWidth="1px"
      bgColor="white"
      boxShadow="dark-lg"
      rounded="lg"
    >
      <Heading as="h1" color="gray.600" fontFamily="Permanent Marker, serif">
        Contactez-moi
      </Heading>
      <Text color="gray.600">Rédigez puis envoyer votre message !</Text>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, isSubmitting, errors }) => (
          <Form>
            <FormTextInput
              label="Votre Nom"
              name="user_name"
              placeholder="Votre Nom"
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="Votre Email"
              name="user_email"
              placeholder="votre@email.com"
              type="email"
              isRequired={true}
            />
            <FormTextArea
              name="message"
              label="Votre Message"
              placeholder="Rédigez votre message..."
              isRequired={true}
              rows={6}
            />
            <Flex marginTop={4}>
              <Spacer />
              <Button
                w="100%"
                isDisabled={!isValid || !dirty || isSubmitting}
                isLoading={isSubmitting}
                content="Envoyer"
                type="submit"
                bgColor="gray.600"
                _hover={{ bgColor: "gray.800" }}
                color="white"
              />
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ContactForm;
