import React, { useState } from "react";
import {
  Stack,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
} from "@chakra-ui/react";

const AneloYard = () => {
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

  return (
    <Stack w={"100%"} h={"100%"}>
      <HStack spacing={10} justifyContent={"center"}>
        <Card w={"md"} size={"sm"}>
          <CardHeader textAlign={"center"} border={"1px solid black"}>
            Box 1
          </CardHeader>
          {boxes[0].bombas.map((bomba) => (
            <CardBody>
              <HStack>
                <Text fontWeight={"bold"}>Bomba: </Text>
                <Text>{bomba.nombreBomba}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Tarea: </Text>
                <Text>{bomba.descripcion}</Text>
              </HStack>
            </CardBody>
          ))}
        </Card>
        <Card w={"md"} size={"sm"}>
          <CardHeader textAlign={"center"} border={"1px solid black"}>
            Box 2
          </CardHeader>
          {boxes[1].bombas.map((bomba) => (
            <CardBody>
              <HStack>
                <Text fontWeight={"bold"}>Bomba: </Text>
                <Text>{bomba.nombreBomba}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Tarea: </Text>
                <Text>{bomba.descripcion}</Text>
              </HStack>
            </CardBody>
          ))}
        </Card>
      </HStack>
      <HStack spacing={10} justifyContent={"center"}>
        <Card w={"md"} size={"sm"}>
          <CardHeader textAlign={"center"} border={"1px solid black"}>
            Box 3
          </CardHeader>
          {boxes[2].bombas.map((bomba) => (
            <CardBody>
              <HStack>
                <Text fontWeight={"bold"}>Bomba: </Text>
                <Text>{bomba.nombreBomba}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Tarea: </Text>
                <Text>{bomba.descripcion}</Text>
              </HStack>
            </CardBody>
          ))}
        </Card>
        <Card w={"md"} size={"sm"}>
          <CardHeader>Box 4</CardHeader>
          {boxes[3].bombas.map((bomba) => (
            <CardBody>
              <HStack>
                <Text fontWeight={"bold"}>Bomba: </Text>
                <Text>{bomba.nombreBomba}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Tarea: </Text>
                <Text>{bomba.descripcion}</Text>
              </HStack>
            </CardBody>
          ))}
        </Card>
      </HStack>
      <HStack spacing={10} justifyContent={"center"}>
        <Card w={"md"} size={"sm"}>
          <CardHeader textAlign={"center"} border={"1px solid black"}>
            Box 5
          </CardHeader>
          {boxes[4].bombas.map((bomba) => (
            <CardBody>
              <HStack>
                <Text fontWeight={"bold"}>Bomba: </Text>
                <Text>{bomba.nombreBomba}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Tarea: </Text>
                <Text>{bomba.descripcion}</Text>
              </HStack>
            </CardBody>
          ))}
        </Card>
        <Card w={"md"} size={"sm"}>
          <CardHeader>Box 6</CardHeader>
          {boxes[5].bombas.map((bomba) => (
            <CardBody>
              <HStack>
                <Text fontWeight={"bold"}>Bomba: </Text>
                <Text>{bomba.nombreBomba}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Tarea: </Text>
                <Text>{bomba.descripcion}</Text>
              </HStack>
            </CardBody>
          ))}
        </Card>
      </HStack>
      <HStack spacing={10} justifyContent={"center"}>
        <Card w={"md"} size={"sm"}>
          <CardHeader textAlign={"center"} border={"1px solid black"}>
            Box 7
          </CardHeader>
          {boxes[6].bombas.map((bomba) => (
            <CardBody>
              <HStack>
                <Text fontWeight={"bold"}>Bomba: </Text>
                <Text>{bomba.nombreBomba}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Tarea: </Text>
                <Text>{bomba.descripcion}</Text>
              </HStack>
            </CardBody>
          ))}
        </Card>
        <Card w={"md"} size={"sm"}>
          <CardHeader>Box 8</CardHeader>
          {boxes[7].bombas.map((bomba) => (
            <CardBody>
              <HStack>
                <Text fontWeight={"bold"}>Bomba: </Text>
                <Text>{bomba.nombreBomba}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Tarea: </Text>
                <Text>{bomba.descripcion}</Text>
              </HStack>
            </CardBody>
          ))}
        </Card>
      </HStack>
    </Stack>
  );
};

export default AneloYard;
