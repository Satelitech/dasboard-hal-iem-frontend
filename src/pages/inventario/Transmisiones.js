import React, { useState } from "react";
import {
  Stack,
  Table,
  Thead,
  Tbody,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Transmisiones = () => {
  const [transmisiones, setTransmisiones] = useState([
    {
      _id: 1,
      nombreTransmision: "42178563",
      bombaVinculada: "11317872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasTransmision: 19127,
      condicionTransmision: 3,
    },
    {
      _id: 2,
      nombreTransmision: "42178000",
      bombaVinculada: "10000872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasTransmision: 19127,
      condicionTransmision: 2,
    },
    {
      _id: 3,
      nombreTransmision: "42000563",
      bombaVinculada: "11317000 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasTransmision: 19127,
      condicionTransmision: 1,
    },
  ]);
  return (
    <Stack w={"100%"} h={"100%"}>
      <HStack w={"100%"} justifyContent={"end"} px={3}>
        <Menu>
          <MenuButton as={Button} variant={"link"}>
            Acciones
          </MenuButton>
          <MenuList>
            <MenuItem fontSize={"12px"}>CARGAR OVH</MenuItem>
            <MenuItem fontSize={"12px"}>CARGAR REPARACION</MenuItem>
            <MenuItem fontSize={"12px"}>CARGAR REGULACION DE VALV</MenuItem>
            <MenuItem fontSize={"12px"}> SOLICITAR MANTENIMIENTO</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <TableContainer>
        <Table variant="simple" size="sm" h="max-content">
          <Thead>
            <Tr>
              <Th>Transmision</Th>
              <Th>Bomba Vinculada</Th>
              <Th>Horas</Th>
              <Th>Condicion</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transmisiones.map((transmision) => (
              <Tr>
                <Td>{transmision.nombreTransmision}</Td>
                <Td>{transmision.bombaVinculada}</Td>
                <Td>{transmision.horasTransmision}</Td>
                <Td>{transmision.condicionTransmision}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Transmisiones;
