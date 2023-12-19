import React from "react";
import {
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Backlog = () => {
  return (
    <Stack w={"100%"} h={"100%"}>
      <TableContainer overflowY={"auto"} w={"6xl"}>
        <Table variant="simple" size={"sm"}>
          <Thead>
            <Tr bg={"#4472c4"}>
              <Th color={"#000000"}>Equipamiento</Th>
              <Th color={"#000000"}>Descripcion</Th>
              <Th color={"#000000"}>Orden</Th>
              <Th color={"#000000"}>Descripcion 2</Th>
              <Th color={"#000000"}>Bas. Start Date</Th>
              <Th color={"#000000"}>Bas. Fin Date</Th>
              <Th color={"#000000"}>System Status</Th>
              <Th color={"#000000"}>User Status</Th>
              <Th color={"#000000"}>Total Act. Status</Th>
              <Th color={"#000000"}>Order Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
            </Tr>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
            </Tr>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Backlog;
