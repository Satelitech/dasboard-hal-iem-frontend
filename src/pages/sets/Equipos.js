import React, { useState, useEffect } from "react";
import { Stack, Button, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getMotores } from "../inventario/helpers/api.helper";

const Equipos = () => {
  const [bombas, setBombas] = useState([]);
  const navigate = useNavigate();

  const initData = () => {
    let res = getMotores();

    if (res.status === 200) {
      setBombas(res.data);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <HStack w={"100%"} spacing={7} p={3} wrap={"wrap"}>
      {bombas.map((bomba) => (
        <Button
          key={bomba._id}
          size="lg"
          height="100px"
          variant="outline"
          borderRadius="10px"
          w="sm"
          onClick={() => navigate(`${bomba.nombre}`)}
          _hover={{ bg: "gray", color: "white" }}
          colorScheme={"blackAlpha.500"}
        >
          <Stack>
            <Text>{bomba.nombre}</Text>
            <Text fontSize={"12px"}>
              {bomba.hsBomba} hs - condicion {bomba.condicion}
            </Text>
          </Stack>
        </Button>
      ))}
    </HStack>
  );
};

export default Equipos;
