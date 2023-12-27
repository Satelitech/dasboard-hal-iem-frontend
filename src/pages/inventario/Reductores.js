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
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineInfo } from "react-icons/md";
import EditarReductor from "./components/reductores/EditarReductor";
import CrearReductor from "./components/reductores/CrearReductor";

const Reductores = () => {
  const [reductores, setReductores] = useState([
    {
      _id: 1,
      nombreReductor: "32456781",
      bombaVinculada: "11317872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasReductor: 19127,
      condicionReductor: 3,
      habilitado: true,
    },
    {
      _id: 2,
      nombreReductor: "32000781",
      bombaVinculada: "10000872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasReductor: 19127,
      condicionReductor: 2,
      habilitado: true,
    },
    {
      _id: 3,
      nombreReductor: "32456000",
      bombaVinculada: "11317000 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasReductor: 19127,
      condicionReductor: 1,
      habilitado: true,
    },
  ]);
  const navigate = useNavigate();
  return (
    <Stack w={"100%"} h={"100%"}>
      <HStack w={"100%"} justifyContent={"end"} px={3}>
        <CrearReductor type={"crear"} />
      </HStack>
      <TableContainer>
        <Table variant="simple" size="sm" h="max-content">
          <Thead>
            <Tr>
              <Th>Reductor</Th>
              <Th>Bomba Vinculada</Th>
              <Th>Horas</Th>
              <Th>Condicion</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {reductores.map((reductor) => (
              <Tr key={reductor._id}>
                <Td>{reductor.nombreReductor}</Td>
                <Td>{reductor.bombaVinculada}</Td>
                <Td>{reductor.horasReductor}</Td>
                <Td>{reductor.condicionReductor}</Td>
                <Td>
                  <IconButton
                    cursor={"pointer"}
                    variant={"link"}
                    icon={<MdOutlineInfo />}
                    onClick={() => navigate(`${reductor.nombreReductor}`)}
                  />
                  <EditarReductor seleccionado={reductor} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Reductores;
