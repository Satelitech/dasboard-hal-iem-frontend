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
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineInfo } from "react-icons/md";
import EditarPwrEnd from "./components/powerend/EditarPwrEnd";
import CrearPwrEnd from "./components/powerend/CrearPwrEnd";

const PowerEnd = () => {
  const [pwrEnd, setPwrEnd] = useState([
    {
      _id: 1,
      nombrePwrEnd: "184920",
      bombaVinculada: "11317872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasPwrEnd: 19127,
      condicionPwrEnd: 3,
      habilitado: true,
    },
    {
      _id: 2,
      nombrePwrEnd: "100020",
      bombaVinculada: "10000872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasPwrEnd: 19127,
      condicionPwrEnd: 2,
      habilitado: true,
    },
    {
      _id: 3,
      nombrePwrEnd: "184000",
      bombaVinculada: "11317000 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasPwrEnd: 19127,
      condicionPwrEnd: 1,
      habilitado: true,
    },
  ]);
  const navigate = useNavigate();
  return (
    <Stack w={"100%"} h={"100%"}>
      <HStack w={"100%"} justifyContent={"end"} px={3}>
        <CrearPwrEnd />
      </HStack>
      <TableContainer>
        <Table variant="simple" size="sm" h="max-content">
          <Thead>
            <Tr>
              <Th>PowerEnd</Th>
              <Th>Bomba Vinculada</Th>
              <Th>Horas</Th>
              <Th>Condicion</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {pwrEnd.map((power) => (
              <Tr key={power._id}>
                <Td>{power.nombrePwrEnd}</Td>
                <Td>{power.bombaVinculada}</Td>
                <Td>{power.horasPwrEnd}</Td>
                <Td>{power.condicionPwrEnd}</Td>
                <Td>
                  <IconButton
                    cursor={"pointer"}
                    variant={"link"}
                    icon={<MdOutlineInfo />}
                    onClick={() => navigate(`${power.nombrePwrEnd}`)}
                  />
                  <EditarPwrEnd seleccionado={power} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default PowerEnd;
