import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useToast,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import FormMotor from "./FormMotor";
import { MdEdit } from "react-icons/md";

const EditarMotor = (props) => {
  const { seleccionado } = props;
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  return (
    <>
      <Tooltip label="Editar">
        <IconButton icon={<MdEdit />} variant={"link"} onClick={onOpen} />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Motor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormMotor
              type={"editar"}
              setLoading={setLoading}
              loading={loading}
              onClose={onClose}
              toast={toast}
              seleccionado={seleccionado}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button
              variant="outline"
              disabled={loading}
              colorScheme="teal"
              type="submit"
              form="formMotor"
            >
              Editar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditarMotor;
