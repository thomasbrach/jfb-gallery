import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import FormTextInput from "./FormTextInput";
import { CheckIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import Alert from "./Alert";
import { NewPainting } from "../common/types/types";
import { addPainting } from "../redux/paintings/paintings.actions";

type Fields = NewPainting & { errorMessage: string };

const initialValues = {
  name: "",
  imageUrl: "",
  paintedYear: "",
  category: "",
  techniques: "",
  size: "",
  availability: "",
  price: "",
  errorMessage: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  imageUrl: Yup.string().required(),
  paintedYear: Yup.string().required(),
  category: Yup.string().required(),
  techniques: Yup.string().required(),
  size: Yup.string().required(),
  availability: Yup.string().required(),
  price: Yup.string().required(),
});

const UploadForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (painting: Fields, helpers: FormikHelpers<Fields>) => {
    const { setSubmitting, setErrors } = helpers;
    try {
      setSubmitting(true);
      dispatch(addPainting(painting));
    } catch (error) {
      setErrors({ errorMessage: error.message });
      console.log(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box padding="4" borderColor="cyan.400" borderWidth="1px">
      <Heading as="h1" color="cyan.400">
        Add New Painting
      </Heading>
      <Text>Fill in required fields to add to gallery</Text>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, isSubmitting, errors }) => (
          <Form>
            <FormTextInput
              label="Name"
              name="name"
              placeholder="Name"
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="URL"
              name="imageUrl"
              placeholder="https://..."
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="Year Painted"
              name="paintedYear"
              placeholder={new Date().getFullYear().toString()}
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="Category"
              name="category"
              placeholder="Category"
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="Techniques"
              name="techniques"
              placeholder="Techniques"
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="Size"
              name="size"
              placeholder="Height x Width"
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="Availability"
              name="availability"
              placeholder="Yes or No"
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="Price"
              name="price"
              placeholder="€XX"
              type="text"
              isRequired={true}
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
                w="100%"
                bgColor="cyan.400"
                color="white"
                isDisabled={!isValid || !dirty || isSubmitting}
                isLoading={isSubmitting}
                content="Submit"
                type="submit"
                rightIcon={<CheckIcon />}
              />
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UploadForm;
