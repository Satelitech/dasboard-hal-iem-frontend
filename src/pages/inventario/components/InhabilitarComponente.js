import React, { useState } from "react";
import {
  IconButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  useToast,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { MdBlock } from "react-icons/md";

const InhabilitarComponente = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [loading, setLoading] = useState(false);
  const { seleccionado, initData } = props;

  const toast = useToast();

  const handleEliminarRegistro = async () => {
    setLoading(true);
    let res = await "eliminarCamiones"({
      id: seleccionado.idCamion,
    });
    if (res.status === 200) {
      toast({
        status: "success",
        isClosable: true,
        title: "Camion eliminado correctamente",
        duration: 3000,
      });
      initData();
      onClose();
    } else {
      toast({
        title: "Error al eliminar el camion",
        description: res.data,
        status: "error",
        isClosable: true,
        duration: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Tooltip label="Inhabilitar">
        <IconButton
          variant="link"
          icon={<MdBlock />}
          onClick={onOpen}
          color={"red.500"}
        />
      </Tooltip>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="lg"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              color="brand.gris_primario"
              fontSize="lg"
              fontWeight="bold"
            >
              Eliminar Camión
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Estás seguro que desea eliminar el{" "}
              <strong>
                {seleccionado.nombreCamion} - {seleccionado.dominio}
              </strong>
              ?
              <br />
              Esta acción no se puede revertir.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} variant="link" onClick={onClose}>
                Cancelar
              </Button>
              <Button
                bg="brand.naranja"
                onClick={handleEliminarRegistro}
                ml={3}
                isDisabled={loading}
                color="white"
              >
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default InhabilitarComponente;
