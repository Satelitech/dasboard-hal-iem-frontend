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
  Select,
  Button,
  Divider,
} from "@chakra-ui/react";
import moment from "moment";

const DetalleTransmisiones = () => {
  const [proxService, setProxService] = useState(600);
  const today = moment().format("DD-MM-YYYY");
  const transmision = {
    _id: 1,
    nombreTransmision: "42178563",
    bombaVinculada: {
      _id: 1,
      nombre: "Bomba 1",
      hsBomba: 19234,
      condicion: 3,
      set: "Set 1",
      servicio: "En funcionamiento",
      info: "TRLR PUMP Q10-X 2000 HHP CVRSN",
    },
    horasTransmision: 19127,
    condicionTransmision: 3,
    estado: "montado",
    observaciones: "Observacion",
  };

  return (
    <Stack w={"100%"} h={"100%"} pr={2}>
      <HStack w={"100%"} justifyContent={"space-around"}>
        <Button variant={"link"} fontSize={"12px"}>
          CARGAR OVH
        </Button>
        <Button variant={"link"} fontSize={"12px"}>
          CARGAR REPARACION
        </Button>
        <Button variant={"link"} fontSize={"12px"}>
          SOLICITAR MANTENIMIENTO
        </Button>
      </HStack>
      <Divider w={"100%"} />
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr bg={"gray.300"}>
              <Th>Transmision</Th>
              <Th>Info</Th>
              <Th>Hs Transmision</Th>
              <Th>Condicion</Th>
              <Th>Avance %</Th>
              <Th>Estado</Th>
              <Th>Ubicacion</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{transmision.nombreTransmision}</Td>
              <Td>{transmision.bombaVinculada.info}</Td>
              <Td>{transmision.horasTransmision}</Td>
              <Td>{transmision.condicionTransmision}</Td>
              <Td>Ubicacion</Td>
              <Td>
                <Select
                  placeholder="- Estado -"
                  size="xs"
                  variant="filled"
                  value={transmision.estado}
                >
                  <option value={"montado"}>Montado</option>
                  <option value={"enMantenimiento"}>En mantenimiento</option>
                  <option value={"esperandRepuestos"}>
                    Esperando repuestos
                  </option>
                  <option value={"esperandoDecision"}>
                    Esperando decision
                  </option>
                  <option value={"desmontado"}>Desmontado</option>
                </Select>
              </Td>
              <Td>
                {transmision.estado === "montado" &&
                  transmision.bombaVinculada.set}
                {transmision.estado !== "montado" && (
                  <Select
                    placeholder="- Ubicacion -"
                    size="xs"
                    variant="filled"
                  >
                    <option>Base Añelo</option>
                    <option>MTU</option>
                    <option>Hidromec</option>
                    <option>- Otro -</option>
                  </Select>
                )}
              </Td>
            </Tr>
            <Tr>
              <Td>TRANSMISION CONDITION </Td>
              <Td>{transmision.observaciones || "-"}</Td>
              <Td>LAST OVH</Td>
              <Td>10400</Td>
              <Td>8727</Td>
              <Td>1</Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
        <Table size="sm">
          <Thead>
            <Tr bg={"red.500"}>
              <Th></Th>
              <Th color={"black"}>Ultimo</Th>
              <Th color={"black"}>HS Restante</Th>
              <Th color={"black"}>Prox Service Hs</Th>
              <Th color={"black"}>Fecha estimada</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight={"bold"}>SERVICE T</Td>
              <Td>{transmision.horasTransmision}</Td>
              <Td>{proxService}</Td>
              <Td>{transmision.horasTransmision + proxService}</Td>
              <Td>{moment().add(1, "d").format("DD-MM-YYYY")}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"bold"}>LAST OVH</Td>
              <Td>{transmision.horasTransmision}</Td>
              <Td>{proxService}</Td>
              <Td>{transmision.horasTransmision + proxService}</Td>
              <Td>{moment().add(1, "d").format("DD-MM-YYYY")}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <HStack w={"100%"} pt={5}>
        <TableContainer w={"100%"}>
          <Table size="sm">
            <Thead>
              <Tr bg={"red.500"}>
                <Th colSpan={5} textAlign={"center"} color={"black"}>
                  Historial de mantenimiento
                </Th>
              </Tr>
              <Tr>
                <Th>Fecha</Th>
                <Th>Horas</Th>
                <Th>Ejecutante</Th>
                <Th>Tarea</Th>
                <Th>...</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>SAP</Td>
                <Td>Info</Td>
                <Td>Hs ENGINE</Td>
                <Td>Estado</Td>
                <Td>Ubicacion</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer w={"100%"}>
          <Table size="sm">
            <Thead>
              <Tr bg={"red.500"}>
                <Th colSpan={5} textAlign={"center"} color={"black"}>
                  Mantenimientos pendientes
                </Th>
              </Tr>
              <Tr>
                <Th>.</Th>
                <Th>.</Th>
                <Th>.</Th>
                <Th>.</Th>
                <Th>.</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>.</Td>
                <Td>.</Td>
                <Td>.</Td>
                <Td>.</Td>
                <Td>.</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </HStack>
    </Stack>
  );
};

export default DetalleTransmisiones;
