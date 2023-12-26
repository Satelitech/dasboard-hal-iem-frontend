import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  TableContainer,
} from "@chakra-ui/react";
import { MdInfoOutline } from "react-icons/md";

const ModalBombaDetalle = (props) => {
  const { bomba } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton onClick={onOpen} icon={<MdInfoOutline />} variant={"link"} />

      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{bomba.nombre}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <TableContainer>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>SAP</Th>
                      <Th>Info</Th>
                      <Th>Hs Motor</Th>
                      <Th>Estado</Th>
                      <Th>Ubicacion</Th>
                      <Th>Prioridad</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>SAP</Td>
                      <Td>Info</Td>
                      <Td>Hs Motor</Td>
                      <Td>Estado</Td>
                      <Td>Ubicacion</Td>
                      <Td>Prioridad</Td>
                    </Tr>
                  </Tbody>
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th></Th>
                      <Th>Ultimo</Th>
                      <Th>HS Restante</Th>
                      <Th>Prox Service Hs</Th>
                      <Th>Fecha estimada</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td></Td>
                      <Td></Td>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>25.4</Td>
                      <Td>25.4</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBombaDetalle;
