import { Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import FormTextInput from "./FormTextInput";
import { ChevronRightIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";
import { signInUser } from "../redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import Alert from "./Alert";

type Fields = {
  email: string;
  password: string;
  errorMessage: string;
};

const initialValues = {
  email: "",
  password: "",
  errorMessage: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (
    credentials: Fields,
    helpers: FormikHelpers<Fields>
  ) => {
    const { setSubmitting, setErrors } = helpers;
    try {
      setSubmitting(true);
      await dispatch(signInUser(credentials));
    } catch (error) {
      setErrors({ errorMessage: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container padding="4" borderColor="cyan.400" borderWidth="1px">
      <Heading as="h1" color="cyan.400">
        Admin Access
      </Heading>
      <Text>Login and manage your gallery</Text>
      <br />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, isSubmitting, errors }) => (
          <Form>
            <FormTextInput
              label="Email"
              name="email"
              placeholder="admin@email.com"
              type="email"
              isRequired={true}
              icon={EmailIcon}
            />
            <br />
            <FormTextInput
              label="Password"
              name="password"
              placeholder="4dM1nP4ssW0rD!"
              type="password"
              isRequired={true}
              icon={LockIcon}
            />
            <br />
            {errors.errorMessage && (
              <>
                <Alert status="error" content={errors.errorMessage} />
                <br />
              </>
            )}

            <Flex>
              <Spacer />
              <Button
                w="2xs"
                bgColor="cyan.400"
                color="white"
                isDisabled={!isValid || !dirty || isSubmitting}
                isLoading={isSubmitting}
                content="Login"
                type="submit"
                rightIcon={<ChevronRightIcon />}
              />
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
