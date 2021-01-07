import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  GridItem,
  Image,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DBPainting } from "../common/types/types";
import { DeletePaintingFromDB } from "../firebase/db";
import {
  deletePaintingFailure,
  deletePaintingStart,
  deletePaintingSuccess,
  enterEditMode,
} from "../redux/paintings/paintings.actions";

type Prop = {
  painting: DBPainting;
};

const AdminPreview = ({ painting }: Prop) => {
  const {
    id,
    name,
    imageUrl,
    paintedYear,
    category,
    techniques,
    size,
    availability,
    price,
  } = painting;
  const dispatch = useDispatch();
  const toast = useToast();

  const deletePainting = (paintingId: DBPainting["id"]) => {
    return async () => {
      dispatch(deletePaintingStart());
      try {
        await DeletePaintingFromDB(paintingId);
        dispatch(deletePaintingSuccess(paintingId));
        toast({
          title: "Painting deleted.",
          description: "We've deleted the painting from your collection.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        dispatch(deletePaintingFailure(error));
        toast({
          title: "Whoops!",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
  };

  const enterEditModeWithPainting = (painting: DBPainting) => {
    return async () => {
      dispatch(enterEditMode(painting));
    };
  };

  return (
    <GridItem borderColor="cyan.400" borderWidth="1px">
      <Flex padding={2}>
        <Link to={`/painting/${id}`}>
          <Image
            src={imageUrl}
            alt={name}
            fit="cover"
            boxSize="3xs"
            _hover={{ opacity: 0.8 }}
          />
        </Link>
        <Center>
          <Flex>
            <Box paddingLeft="64px">
              <Text>Name:</Text>
              <Text>Year Painted:</Text>
              <Text>Category:</Text>
              <Text>Techniques: </Text>
              <Text>Size: </Text>
              <Text>Availability: </Text>
              <Text>Price: </Text>
            </Box>
            <Box paddingLeft="128px">
              <Text>{name}</Text>
              <Text>{paintedYear}</Text>
              <Text>{category ? category : "N/A"}</Text>
              <Text>{techniques ? techniques : "N/A"}</Text>
              <Text>{size ? size : "N/A"}</Text>
              <Text>{availability ? availability : "N/A"}</Text>
              <Text>{price ? price : "N/A"}</Text>
            </Box>
          </Flex>
        </Center>
        <Spacer />
        <Center>
          <EditIcon
            w={8}
            h={8}
            color="cyan.400"
            onClick={enterEditModeWithPainting(painting)}
            cursor="pointer"
            _hover={{ color: "cyan.600" }}
          />
        </Center>

        <Spacer />
        <Center>
          <DeleteIcon
            w={8}
            h={8}
            color="red.400"
            onClick={deletePainting(id)}
            cursor="pointer"
            _hover={{ color: "red.600" }}
          />
        </Center>
        <Spacer />
      </Flex>
    </GridItem>
  );
};

export default AdminPreview;
