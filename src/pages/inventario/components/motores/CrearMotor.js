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
} from "@chakra-ui/react";
import FormMotor from "./FormMotor";

const FormCrearEditarMotor = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  return (
    <>
      <Button variant={"outline"} onClick={onOpen}>
        Crear motor
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nuevo Motor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormMotor
              type={"crear"}
              setLoading={setLoading}
              loading={loading}
              onClose={onClose}
              toast={toast}
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
              Crear
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormCrearEditarMotor;
