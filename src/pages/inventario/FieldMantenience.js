import React, { useEffect, useState } from "react";
import {
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { MdRefresh } from "react-icons/md";
import { getMotores } from "./helpers/api.helper";
import ModalBombaDetalle from "./components/mantenience/ModalBombaDetalle";

const FieldMantenience = () => {
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
  const cleanFilter = () => {
    setFiltro({
      set: "",
      servicio: "",
      condicion: "",
    });
  };
  console.log(filtro.servicio);

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
        <Table variant="simple" size="sm" h="max-content">
          <Thead>
            <Tr>
              <Th>Bomba</Th>
              <Th>Horas</Th>
              <Th>Condicion</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {showBombas().map((bomba) => (
              <Tr key={bomba._id}>
                <Td>{bomba.nombre}</Td>
                <Td>{bomba.hsBomba}</Td>
                <Td>{bomba.condicion}</Td>
                <Td>
                  <ModalBombaDetalle bomba={bomba} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default FieldMantenience;
