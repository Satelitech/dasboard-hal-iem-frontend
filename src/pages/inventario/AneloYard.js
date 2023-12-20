import React, { useEffect, useState } from "react";
import {
  Stack,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import BoxVacio from "./components/aneloyard/BoxVacio";
import BoxActivo from "./components/aneloyard/BoxActivo";

const AneloYard = () => {
  const [activos, setActivos] = useState([]);
  const [vacios, setVacios] = useState([]);

  const [boxes, setBoxes] = useState([
    {
      name: "Box 1",
      _id: 1,
      bombas: [
        {
          _id: 1,
          nombreBomba: "ejemplo1",
          descripcion: "mantenimiento",
        },
        {
          _id: 5,
          nombreBomba: "ejemplo 5",
          descripcion: "Revision",
        },
      ],
    },
    {
      name: "Box 2",
      _id: 2,
      bombas: [
        {
          _id: 2,
          nombreBomba: "ejempl2",
          descripcion: "Reparacion",
        },
      ],
    },
    { name: "Box 3", _id: 3, bombas: [] },
    {
      name: "Box 4",
      _id: 4,
      bombas: [
        {
          _id: 3,
          nombreBomba: "ejemplo3",
          descripcion: "mantenimiento",
        },
      ],
    },
    { name: "Box 5", _id: 5, bombas: [] },
    { name: "Box 6", _id: 6, bombas: [] },
    { name: "Box 7", _id: 7, bombas: [] },
    { name: "Box 8", _id: 8, bombas: [] },
  ]);

  const handleSplitBoxes = () => {
    setActivos(boxes.filter((box) => box.bombas.length > 0));
    setVacios(boxes.filter((box) => box.bombas.length < 1));
  };

  useEffect(() => {
    handleSplitBoxes();
  }, []);

  return (
    <Stack w={"100%"} h={"100%"} overflowY={"auto"}>
      <HStack w={"100%"} spacing={7}>
        <Stack justifyContent={"start"} h={"xl"}>
          <Heading size={"sm"}>Vacios</Heading>
          <Stack spacing={4}>
            {vacios.map((vacio) => (
              <BoxVacio vacio={vacio} />
            ))}
          </Stack>
        </Stack>
        <Divider orientation="vertical" h={"100%"} />
        <VStack justifyContent={"start"} h={"xl"}>
          <Heading size={"sm"}>Activos</Heading>
          <Stack spacing={4}>
            {activos.map((box) => (
              <BoxActivo box={box} />
            ))}
          </Stack>
        </VStack>
      </HStack>
    </Stack>
  );
};

export default AneloYard;
