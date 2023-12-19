import { HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

const Detalle = () => {
  const { _id } = useParams();
  return (
    <Stack w={"100%"}>
      <HStack></HStack>
    </Stack>
  );
};

export default Detalle;
