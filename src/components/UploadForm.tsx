import { Box, Flex, Heading, Spacer, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import FormTextInput from "./FormTextInput";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addPainting,
  editPainting,
  exitEditMode,
} from "../redux/paintings/paintings.actions";
import { RootState } from "../redux/root.reducer";
import { DBPainting } from "../common/types/types";
import { useMountedRef } from "../hooks/useMountedRef";

type Fields = DBPainting & { errorMessage: string };

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
  const { editMode, editablePainting } = useSelector(
    (state: RootState) => state.paintings
  );
  const dispatch = useDispatch();
  const toast = useToast();
  const isMounted = useMountedRef();

  //---------- INITIAL VALUES ---------- //

  const initialValues = editablePainting ?? {
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

  //---------- HANDLE ADD PAINTING ---------- //

  const handleAdd = (painting: Fields, helpers: FormikHelpers<Fields>) => {
    const { setSubmitting, setErrors } = helpers;
    try {
      setSubmitting(true);
      dispatch(addPainting(painting));
      toast({
        title: "Painting added.",
        description: "We've added the painting to your collection.",
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

  //---------- HANDLE EDIT PAINTING ---------- //

  const handleEdit = (painting: Fields, helpers: FormikHelpers<Fields>) => {
    const { setSubmitting, setErrors } = helpers;
    try {
      setSubmitting(true);
      dispatch(editPainting(painting));
      toast({
        title: "Painting edited.",
        description: "We've edited the painting in your collection.",
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

  //---------- RETURN ---------- //

  return (
    <Box padding="4" borderColor="cyan.400" borderWidth="1px">
      <Heading as="h1" color="cyan.400">
        {editMode ? "Editer un tableau" : "Ajouter un tableau"}
      </Heading>
      <Text>
        Remplir les champs pour{" "}
        {editMode ? "éditer dans la galerie" : "ajouter à la galerie"}
      </Text>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={editMode ? handleEdit : handleAdd}
      >
        {({ dirty, isValid, isSubmitting, errors }) => (
          <Form>
            <FormTextInput
              label="Nom"
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
              label="Année"
              name="paintedYear"
              placeholder={new Date().getFullYear().toString()}
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="Catégorie"
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
              label="Dimensions"
              name="size"
              placeholder="Hauteur x Largeur"
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="Disponibilité"
              name="availability"
              placeholder="Oui ou Non"
              type="text"
              isRequired={true}
            />
            <FormTextInput
              label="Prix en €"
              name="price"
              placeholder="sera N/A si indisponible "
              type="text"
              isRequired={true}
            />
            <Flex marginTop={4}>
              {editMode && (
                <>
                  <Button
                    w="45%"
                    bgColor="red.400"
                    _hover={{ bgColor: "red.600" }}
                    color="white"
                    content="Annuler"
                    onClick={() => dispatch(exitEditMode())}
                    rightIcon={<CloseIcon />}
                  />
                  <Spacer />
                </>
              )}
              <Button
                w={editMode ? "45%" : "100%"}
                bgColor="cyan.400"
                color="white"
                isDisabled={!isValid || !dirty || isSubmitting}
                isLoading={isSubmitting}
                content="Confirmer"
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
