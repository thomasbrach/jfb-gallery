import { Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import FormTextInput from "./FormTextInput";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { signInUser } from "../redux/auth/auth.actions";
import { useDispatch } from "react-redux";

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
      dispatch(signInUser(credentials));
    } catch (error) {
      setErrors({ errorMessage: "Invalid credentials." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Heading>Admin Access</Heading>
      <Text>Login and manage your gallery</Text>

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
            <FormTextInput
              label="Password"
              name="password"
              placeholder="4dM1nP4ssW0rD!"
              type="password"
              isRequired={true}
              icon={LockIcon}
            />
            <Spacer />
            {errors.errorMessage && <div>{errors.errorMessage}</div>}
            <Button
              isDisabled={!isValid || !dirty || isSubmitting}
              isLoading={isSubmitting}
              content="Login"
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
