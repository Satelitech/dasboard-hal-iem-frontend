import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

const BoxActivo = (props) => {
  const { box } = props;
  return (
    <Card w={"sm"} size={"sm"}>
      <CardHeader>
        <Box
          textAlign={"center"}
          fontWeight={"bold"}
          bg={"green.200"}
          w={"100px"}
          borderRadius={"10px"}
        >
          <Text>{box.name}</Text>
        </Box>
      </CardHeader>
      <CardBody>
        <HStack>
          {box.bombas.map((bomba, index) => (
            <Stack
              w={"46%"}
              borderRight={box.bombas[index + 1] ? "1px" : "none"}
            >
              <HStack>
                <Text fontWeight={"bold"}>Bomba: </Text>
                <Text>{bomba.nombreBomba}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Tarea: </Text>
                <Text>{bomba.descripcion}</Text>
              </HStack>
            </Stack>
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default BoxActivo;
