import { Box, Text, Badge } from "@chakra-ui/react";
import React from "react";

const BoxVacio = (props) => {
  const { vacio } = props;
  return (
    <Box
      dir="row"
      boxSize={20}
      border={"1px solid red"}
      borderRadius={"10px"}
      textAlign={"center"}
      justifyContent={"center"}
    >
      <Text fontWeight={"bold"}>{vacio.name}</Text>
      <Badge borderRadius="full" px="2" colorScheme="red">
        Vacio
      </Badge>
    </Box>
  );
};

export default BoxVacio;
