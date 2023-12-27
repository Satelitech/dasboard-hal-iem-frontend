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

const DetalleMotor = () => {
  const [proxService, setProxService] = useState(600);
  const today = moment().format("DD-MM-YYYY");
  const motor = {
    _id: 1,
    nombreMotor: "32456781",
    bombaVinculada: {
      _id: 1,
      nombre: "Bomba 1",
      hsBomba: 19234,
      condicion: 3,
      set: "Set 1",
      servicio: "En funcionamiento",
      info: "TRLR PUMP Q10-X 2000 HHP CVRSN",
    },
    horasMotor: 19127,
    condicionMotor: 3,
    estado: "montado",
    observaciones: "Observacion",
  };
  console.log(today);
  return (
    <Stack w={"100%"} h={"100%"} pr={2}>
      <HStack w={"100%"} justifyContent={"space-around"}>
        <Button variant={"link"} fontSize={"12px"}>
          CARGAR OVH
        </Button>
        <Button variant={"link"} fontSize={"12px"}>
          CARGAR MIDLIFE-TOP END
        </Button>
        <Button variant={"link"} fontSize={"12px"}>
          CARGAR MANTENIMIENTO
        </Button>
        <Button variant={"link"} fontSize={"12px"}>
          CARGAR REGULACION DE VALV
        </Button>
        <Button variant={"link"} fontSize={"12px"}>
          {" "}
          SOLICITAR MANTENIMIENTO
        </Button>
      </HStack>
      <Divider w={"100%"} />
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr bg={"gray.300"}>
              <Th>ENGINE</Th>
              <Th>Info</Th>
              <Th>Hs ENGINE</Th>
              <Th>Condicion</Th>
              <Th>Avance %</Th>
              <Th>Estado</Th>
              <Th>Ubicacion</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{motor.nombreMotor}</Td>
              <Td>{motor.bombaVinculada.info}</Td>
              <Td>{motor.horasMotor}</Td>
              <Td>{motor.condicionMotor}</Td>
              <Td>Ubicacion</Td>
              <Td>
                <Select
                  placeholder="- Estado -"
                  size="xs"
                  variant="filled"
                  value={motor.estado}
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
                {motor.estado === "montado" && motor.bombaVinculada.set}
                {motor.estado !== "montado" && (
                  <Select
                    placeholder="- Ubicacion -"
                    size="xs"
                    variant="filled"
                  >
                    <option>Base Añelo</option>
                    <option>Finning ARG</option>
                    <option>Cummins ARG</option>
                    <option>Turbo disel ARG</option>
                    <option>Hidromec</option>
                    <option>Tecnicat</option>
                    <option>Secco</option>
                    <option>Power train</option>
                    <option>Enerflex</option>
                    <option>- Otro -</option>
                  </Select>
                )}
              </Td>
            </Tr>
            <Tr>
              <Td>ENGINE CONDITION </Td>
              <Td>{motor.observaciones || "-"}</Td>
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
              <Td fontWeight={"bold"}>SERVICE M&T</Td>
              <Td>{motor.horasMotor}</Td>
              <Td>{proxService}</Td>
              <Td>{motor.horasMotor + proxService}</Td>
              <Td>{moment().add(1, "d").format("DD-MM-YYYY")}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"bold"}>LAST OVH</Td>
              <Td>{motor.horasMotor}</Td>
              <Td>{proxService}</Td>
              <Td>{motor.horasMotor + proxService}</Td>
              <Td>{moment().add(1, "d").format("DD-MM-YYYY")}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"bold"}>LAST TOP END/MID LIFE</Td>
              <Td>{motor.horasMotor}</Td>
              <Td>{proxService}</Td>
              <Td>{motor.horasMotor + proxService}</Td>
              <Td>{moment().add(1, "d").format("DD-MM-YYYY")}</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"bold"}>REG DE VALVULAS/ INYECTORES</Td>
              <Td>{motor.horasMotor}</Td>
              <Td>{proxService}</Td>
              <Td>{motor.horasMotor + proxService}</Td>
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

export default DetalleMotor;
