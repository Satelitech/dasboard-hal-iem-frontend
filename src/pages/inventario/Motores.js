import React, { useState } from "react";
import {
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Motores = () => {
  const [motores, setMotores] = useState([
    {
      _id: 1,
      nombreMotor: "32456781",
      bombaVinculada: "11317872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasMotor: 19127,
      condicionMotor: 3,
    },
    {
      _id: 2,
      nombreMotor: "32000781",
      bombaVinculada: "10000872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasMotor: 19127,
      condicionMotor: 2,
    },
    {
      _id: 3,
      nombreMotor: "32456000",
      bombaVinculada: "11317000 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasMotor: 19127,
      condicionMotor: 1,
    },
  ]);
  const navigate = useNavigate();

  return (
    <Stack w={"100%"} h={"100%"}>
      <HStack w={"100%"} justifyContent={"end"} px={3}>
        <Menu>
          <MenuButton as={Button} variant={"link"}>
            Acciones
          </MenuButton>
          <MenuList>
            <MenuItem fontSize={"12px"}>CARGAR OVH</MenuItem>
            <MenuItem fontSize={"12px"}>CARGAR MIDLIFE-TOP END</MenuItem>
            <MenuItem fontSize={"12px"}>CARGAR MANTENIMIENTO</MenuItem>
            <MenuItem fontSize={"12px"}>CARGAR REGULACION DE VALV</MenuItem>
            <MenuItem fontSize={"12px"}> SOLICITAR MANTENIMIENTO</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <TableContainer>
        <Table variant="simple" size="sm" h="max-content">
          <Thead>
            <Tr>
              <Th>Motor</Th>
              <Th>Bomba Vinculada</Th>
              <Th>Horas</Th>
              <Th>Condicion</Th>
            </Tr>
          </Thead>
          <Tbody>
            {motores.map((motor) => (
              <Tr
                cursor={"pointer"}
                key={motor._id}
                onClick={() => navigate(`${motor.nombreMotor}`)}
              >
                <Td>{motor.nombreMotor}</Td>
                <Td>{motor.bombaVinculada}</Td>
                <Td>{motor.horasMotor}</Td>
                <Td>{motor.condicionMotor}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Motores;
