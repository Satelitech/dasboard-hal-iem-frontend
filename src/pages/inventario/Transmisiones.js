import React, { useState } from "react";
import {
  Stack,
  Table,
  Thead,
  Tbody,
  HStack,
  IconButton,
  Tr,
  Th,
  Td,
  TableContainer,
  Tooltip,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineInfo, MdBlock } from "react-icons/md";
import CrearTransmision from "./components/transmisiones/CrearTransmision";
import EditarTransmision from "./components/transmisiones/EditarTransmision";
import InhabilitarComponente from "./components/InhabilitarComponente";

const Transmisiones = () => {
  const [transmisiones, setTransmisiones] = useState([
    {
      _id: 1,
      nombreTransmision: "42178563",
      bombaVinculada: "11317872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasTransmision: 19127,
      condicionTransmision: 3,
      habilitado: true,
    },
    {
      _id: 2,
      nombreTransmision: "42178000",
      bombaVinculada: "10000872 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasTransmision: 19127,
      condicionTransmision: 2,
      habilitado: true,
    },
    {
      _id: 3,
      nombreTransmision: "42000563",
      bombaVinculada: "11317000 TRLR PUMP Q10-X 2000 HHP CVRSN",
      horasTransmision: 19127,
      condicionTransmision: 1,
      habilitado: true,
    },
  ]);
  const navigate = useNavigate();
  return (
    <Stack w={"100%"} h={"100%"}>
      <HStack w={"100%"} justifyContent={"end"} px={3}>
        <CrearTransmision />
      </HStack>
      <TableContainer>
        <Table variant="simple" size="sm" h="max-content">
          <Thead>
            <Tr>
              <Th>Transmision</Th>
              <Th>Bomba Vinculada</Th>
              <Th>Horas</Th>
              <Th>Condicion</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {transmisiones.map((transmision) => (
              <Tr key={transmision._id}>
                <Td>{transmision.nombreTransmision}</Td>
                <Td>{transmision.bombaVinculada}</Td>
                <Td>{transmision.horasTransmision}</Td>
                <Td>{transmision.condicionTransmision}</Td>
                <Td>
                  <Tooltip label="Detalles">
                    <IconButton
                      cursor={"pointer"}
                      variant={"link"}
                      icon={<MdOutlineInfo />}
                      onClick={() =>
                        navigate(`${transmision.nombreTransmision}`)
                      }
                    />
                  </Tooltip>
                  <EditarTransmision seleccionado={transmision} />
                  <InhabilitarComponente seleccionado={transmision} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Transmisiones;
