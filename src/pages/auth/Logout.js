import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/action.user";
import { postLogout } from "./helpers/api.helper";
import { MdOutlineLogin } from "react-icons/md";
/**
 *  Componente de des-logeo
 * @component
 * @returns {component} componente de des-logeo
 */

const LogOut = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const cancelRef = React.useRef();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  /**
   * @handleButton
   * @async
   * @function
   * @param {string} res-state solicita los datos, vacia el objeto
   * @returns {object} devuelve el objeto vacio
   */

  const handleLogout = async () => {
    setLoading(true);
    /*  const res = await postLogout(); */
    dispatch(logout());
    /*     if (res.success) {
      dispatch(logout());
       sessionStorage.removeItem("token");
      sessionStorage.removeItem("user"); 
    } else {
      toast({
        title: "Error",
        description: "Hubo un error al cerrar sesión",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } */
    setLoading(false);
  };

  return (
    <>
      <Button
        color="red"
        onClick={onOpen}
        size={"sm"}
        w={"100%"}
        border={"1px solid red"}
        variant="outline"
        leftIcon={<MdOutlineLogin fontSize={"20px"} />}
        _hover={{ bg: "red", color: "white" }}
      >
        Cerrar Sesión
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Cerrar sesión
            </AlertDialogHeader>

            <AlertDialogBody>¿Seguro que desea cerrar sesión?</AlertDialogBody>

            <AlertDialogFooter>
              <Button variant="link" ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                disabled={loading}
                colorScheme="red"
                onClick={handleLogout}
                ml={3}
              >
                Cerrar sesión
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default LogOut;
