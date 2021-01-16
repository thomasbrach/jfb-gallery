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
import FormTextSelect from "./FormTextSelect";

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
    <Box
      padding="4"
      borderColor="gray.700"
      borderWidth="1px"
      bgColor="white"
      boxShadow="dark-lg"
      rounded="lg"
    >
      <Heading as="h1" color="gray.600" fontFamily="Permanent Marker, serif">
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
              placeholder="Catégorie"
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
            <FormTextSelect
              label="Disponibilité"
              name="availability"
              placeholder="Sélectionner"
              type="text"
              isRequired={true}
            >
              <option>Oui</option>
              <option>Non</option>
            </FormTextSelect>
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
                color="white"
                isDisabled={!isValid || !dirty || isSubmitting}
                isLoading={isSubmitting}
                content="Confirmer"
                type="submit"
                rightIcon={<CheckIcon />}
                bgColor="gray.600"
                _hover={{ bgColor: "gray.800" }}
              />
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UploadForm;
