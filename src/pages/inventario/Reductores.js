import React, { useState } from "react";
import {
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  TableContainer,
} from "@chakra-ui/react";

const Reductores = () => {
  const [reductores, setReductores] = useState([
    {
      _id: 1,
      nombreReductor: "32456781",
      bombaVinculada: "11317872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasReductor: 19127,
      condicionReductor: 3,
    },
    {
      _id: 2,
      nombreReductor: "32000781",
      bombaVinculada: "10000872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasReductor: 19127,
      condicionReductor: 2,
    },
    {
      _id: 3,
      nombreReductor: "32456000",
      bombaVinculada: "11317000 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasReductor: 19127,
      condicionReductor: 1,
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
            <MenuItem fontSize={"12px"}>
              CARGAR MEDICION DE JUEGO AXIAL
            </MenuItem>
            <MenuItem fontSize={"12px"}> SOLICITAR MANTENIMIENTO</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <TableContainer>
        <Table variant="simple" size="sm" h="max-content">
          <Thead>
            <Tr>
              <Th>Reductor</Th>
              <Th>Bomba Vinculada</Th>
              <Th>Horas</Th>
              <Th>Condicion</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reductores.map((reductor) => (
              <Tr>
                <Td>{reductor.nombreReductor}</Td>
                <Td>{reductor.bombaVinculada}</Td>
                <Td>{reductor.horasReductor}</Td>
                <Td>{reductor.condicionReductor}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Reductores;
