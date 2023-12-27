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
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import FormCrearEditarMotor from "./components/motores/CrearMotor";
import EditarMotor from "./components/motores/EditarMotor";
import { MdOutlineInfo } from "react-icons/md";

const Motores = () => {
  const [motores, setMotores] = useState([
    {
      _id: 1,
      nombreMotor: "32456781",
      bombaVinculada: "11317872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasMotor: 19127,
      condicionMotor: 3,
      habilitado: true,
    },
    {
      _id: 2,
      nombreMotor: "32000781",
      bombaVinculada: "10000872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasMotor: 19127,
      condicionMotor: 2,
      habilitado: true,
    },
    {
      _id: 3,
      nombreMotor: "32456000",
      bombaVinculada: "11317000 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasMotor: 19127,
      condicionMotor: 1,
      habilitado: true,
    },
  ]);
  const navigate = useNavigate();

  return (
    <Stack w={"100%"} h={"100%"}>
      <HStack w={"100%"} justifyContent={"end"} px={3}>
        <FormCrearEditarMotor />
      </HStack>
      <TableContainer>
        <Table variant="simple" size="sm" h="max-content">
          <Thead>
            <Tr>
              <Th>Motor</Th>
              <Th>Bomba Vinculada</Th>
              <Th>Horas</Th>
              <Th>Condicion</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {motores.map((motor) => (
              <Tr key={motor._id}>
                <Td>{motor.nombreMotor}</Td>
                <Td>{motor.bombaVinculada}</Td>
                <Td>{motor.horasMotor}</Td>
                <Td>{motor.condicionMotor}</Td>
                <Td>
                  <IconButton
                    cursor={"pointer"}
                    variant={"link"}
                    icon={<MdOutlineInfo />}
                    onClick={() => navigate(`${motor.nombreMotor}`)}
                  />
                  <EditarMotor seleccionado={motor} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Motores;
