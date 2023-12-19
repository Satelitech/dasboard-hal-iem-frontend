import React from "react";
import {
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Divider,
} from "@chakra-ui/react";

const EstadoFlota = () => {
  return (
    <Stack w={"100%"} h={"100%"}>
      <TableContainer overflowY={"auto"} w={"6xl"}>
        <Table variant="simple" size={"sm"}>
          <Thead>
            <Tr bg={"red.500"}>
              <Th color={"black"}>SAP</Th>
              <Divider orientation="vertical" h={"25px"} borderColor="black" />
              <Th color={"black"}>Hs Motor</Th>
              <Th color={"black"}>Estado Motor</Th>
              <Divider orientation="vertical" h={"25px"} borderColor="black" />
              <Th color={"black"}>Hs Transmision</Th>
              <Th color={"black"}>Estado Transmision</Th>
              <Divider orientation="vertical" h={"25px"} borderColor="black" />
              <Th color={"black"}>Hs Reductor</Th>
              <Th color={"black"}>Estado Reductor</Th>
              <Divider orientation="vertical" h={"25px"} borderColor="black" />
              <Th color={"black"}>Hs Power End</Th>
              <Th color={"black"}>Estado Power End</Th>
              <Divider orientation="vertical" h={"25px"} borderColor="black" />
              <Th color={"black"}>Ubicacion</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>millimetres (mm)</Td>
              <Td>35.4</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>35.4</Td>
              <Td>inches</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>millimetres (mm)</Td>
              <Td>35.4</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>inches</Td>
            </Tr>
            <Tr>
              <Td>inches</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>millimetres (mm)</Td>
              <Td>35.4</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>35.4</Td>
              <Td>inches</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>millimetres (mm)</Td>
              <Td>35.4</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>inches</Td>
            </Tr>
            <Tr>
              <Td>inches</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>millimetres (mm)</Td>
              <Td>35.4</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>35.4</Td>
              <Td>inches</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>millimetres (mm)</Td>
              <Td>35.4</Td>
              <Divider orientation="vertical" h={"35px"} borderColor="black" />
              <Td>inches</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default EstadoFlota;
