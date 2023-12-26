import React, { useState, useEffect } from "react";
import {
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Select,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { getMotores } from "./helpers/api.helper";
import { MdRefresh } from "react-icons/md";

const FleetStatus = () => {
  const [bombas, setBombas] = useState([]);

  const [filtro, setFiltro] = useState({
    set: "",
    servicio: "",
    condicion: "",
  });

  const initData = async () => {
    let res = getMotores();

    if (res.status === 200) {
      setBombas(res.data);
    }
  };

  const handeColor = (bomba) => {
    switch (bomba) {
      case 1:
        return "green";
      case 2:
        return "yellow";
      case 3:
        return "orange";
      case 4:
        return "red";
      default:
        return "";
    }
  };

  const showBombas = () => {
    if (Object.values(filtro).every((value) => !value)) {
      return bombas;
    }
    return bombas.filter((bomba) => {
      const { set, servicio, condicion } = filtro;

      return (
        (!set || bomba.set === set) &&
        (!servicio || bomba.servicio === servicio) &&
        (!condicion || bomba.condicion === condicion)
      );
    });
  };

  const arrayDeSet = bombas.reduce((acumulador, objeto) => {
    if (!acumulador.includes(objeto.set)) {
      acumulador.push(objeto.set);
    }

    return acumulador;
  }, []);

  const arrayDeServicio = bombas.reduce((acumulador, objeto) => {
    if (!acumulador.includes(objeto.servicio)) {
      acumulador.push(objeto.servicio);
    }

    return acumulador;
  }, []);

  const arrayDeCondicion = bombas.reduce((acumulador, objeto) => {
    if (!acumulador.includes(objeto.condicion)) {
      acumulador.push(objeto.condicion);
    }

    return acumulador;
  }, []);

  const cleanFilter = () => {
    setFiltro({
      set: "",
      servicio: "",
      condicion: "",
    });
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <Stack w={"100%"} h={"100%"}>
      <HStack px={3} alignContent={"flex-end"}>
        <Select
          placeholder="- Set -"
          size="sm"
          onChange={(e) => {
            setFiltro((prevstate) => ({
              ...prevstate,
              set: e.target.value,
            }));
            showBombas();
          }}
          value={filtro.set}
        >
          {arrayDeSet.map((element) => (
            <option key={element}>{element}</option>
          ))}
        </Select>
        <Select
          placeholder="- Servicio -"
          size="sm"
          onChange={(e) => {
            setFiltro((prevstate) => ({
              ...prevstate,
              servicio: e.target.value,
            }));
            showBombas();
          }}
          value={filtro.servicio}
        >
          {arrayDeServicio.map((element) => (
            <option key={element}>{element}</option>
          ))}
        </Select>
        <Select
          placeholder="- Condicion -"
          size="sm"
          onChange={(e) => {
            setFiltro((prevstate) => ({
              ...prevstate,
              condicion: parseInt(e.target.value),
            }));
            showBombas();
          }}
          value={filtro.condicion}
        >
          {arrayDeCondicion.map((element) => (
            <option key={element}>{element}</option>
          ))}
        </Select>
        <IconButton icon={<MdRefresh />} onClick={cleanFilter} variant="link" />
      </HStack>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>SAP</Th>
              <Th textAlign={"center"}>INFO</Th>
              <Th textAlign={"center"}>PUMP</Th>
              <Th textAlign={"center"}>TRANSMISION</Th>
              <Th textAlign={"center"}>MOTOR</Th>
              <Th textAlign={"center"}>REDUCER</Th>
              <Th>ENGINE HS</Th>
              <Th>ESTADO</Th>
              <Th>UBICACIÓN</Th>
            </Tr>
          </Thead>
          <Tbody>
            {showBombas().map((bomba) => (
              <Tr>
                <Td>
                  <Text>{bomba.nombre}</Text>
                </Td>
                <Td>
                  <Text textAlign={"center"}>{bomba.info}</Text>
                  <Text textAlign={"center"}>CONDICION</Text>
                </Td>
                <Td>
                  {" "}
                  <Text textAlign={"center"}>{"PUMP"}</Text>
                  <Text textAlign={"center"} bg={() => handeColor(1)}>
                    1
                  </Text>
                </Td>
                <Td>
                  {" "}
                  <Text textAlign={"center"}>{"TRANSMISION"}</Text>
                  <Text textAlign={"center"} bgColor={() => handeColor(4)}>
                    4
                  </Text>
                </Td>
                <Td>
                  {" "}
                  <Text textAlign={"center"}>{"MOTOR"}</Text>
                  <Text textAlign={"center"} bg={() => handeColor(3)}>
                    3
                  </Text>
                </Td>
                <Td>
                  {" "}
                  <Text textAlign={"center"}>{"REDUCER"}</Text>
                  <Text textAlign={"center"} bg={() => handeColor(2)}>
                    2
                  </Text>
                </Td>
                <Td>19127</Td>
                <Td>
                  <Select />
                </Td>
                <Td>SET 2</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default FleetStatus;
