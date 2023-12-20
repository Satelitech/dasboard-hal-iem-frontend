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
import { useNavigate } from "react-router-dom";

const PowerEnd = () => {
  const [pwrEnd, setPwrEnd] = useState([
    {
      _id: 1,
      nombrePwrEnd: "184920",
      bombaVinculada: "11317872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasPwrEnd: 19127,
      condicionPwrEnd: 3,
    },
    {
      _id: 2,
      nombrePwrEnd: "100020",
      bombaVinculada: "10000872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasPwrEnd: 19127,
      condicionPwrEnd: 2,
    },
    {
      _id: 3,
      nombrePwrEnd: "184000",
      bombaVinculada: "11317000 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasPwrEnd: 19127,
      condicionPwrEnd: 1,
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
              <Th>PowerEnd</Th>
              <Th>Bomba Vinculada</Th>
              <Th>Horas</Th>
              <Th>Condicion</Th>
            </Tr>
          </Thead>
          <Tbody>
            {pwrEnd.map((power) => (
              <Tr
                cursor={"pointer"}
                key={power._id}
                onClick={() => navigate(`${power.nombrePwrEnd}`)}
              >
                <Td>{power.nombrePwrEnd}</Td>
                <Td>{power.bombaVinculada}</Td>
                <Td>{power.horasPwrEnd}</Td>
                <Td>{power.condicionPwrEnd}</Td>
              </Tr>
            ))}{" "}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default PowerEnd;
