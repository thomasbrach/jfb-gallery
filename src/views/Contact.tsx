import { Center, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { RootState } from "../redux/root.reducer";

const ContactView = () => {
  const { paintings } = useSelector((state: RootState) => state.paintings);
  const paintingLeft = paintings[0];
  const paintingRight = paintings[paintings.length - 1];

  return (
    <>
      <Center height="3xl">
        <Link to={`/painting/${paintingLeft.id}`}>
          <Image
            src={paintingLeft.imageUrl}
            alt={paintingLeft.name}
            fit="cover"
            boxSize="3xs"
            _hover={{ opacity: 0.8 }}
          />
        </Link>
        <ContactForm />
        <Link to={`/painting/${paintingRight.id}`}>
          <Image
            src={paintingRight.imageUrl}
            alt={paintingRight.name}
            fit="cover"
            boxSize="3xs"
            _hover={{ opacity: 0.8 }}
          />
        </Link>
      </Center>
    </>
  );
};

export default ContactView;
