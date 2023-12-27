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
import FormPwrEnd from "./FormPwrEnd";

const CrearPwrEnd = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  return (
    <>
      <Button variant={"outline"} onClick={onOpen}>
        Crear power end
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nuevo Power end</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormPwrEnd
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
              form="formPowerEnd"
            >
              Crear
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CrearPwrEnd;
