import React, { useState, useEffect, useRef } from "react";
import {
  VStack,
  useToast,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Button,
  Radio,
  Stack,
  Card,
  CardBody,
  Center,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  MdOutlineLock,
  MdPersonOutline,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from "react-icons/md";
import { postLogin } from "./helpers/api.helper";
import { loginSuccess } from "../../redux/actions/action.user";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [recordar, setRecordar] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const initialRef = useRef();

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!username || !password) {
      setLoading(false);
      return toast({
        description: "Parametros insuficientes",
        status: "error",
        duration: 3000,
      });
    }

    let iniciandoSesion = toast({
      title: "Iniciando Sesión",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    let res = await postLogin(username, password);

    try {
      if (res.data.success) {
        dispatch(loginSuccess(res.data.data.user));
        sessionStorage.setItem("user", JSON.stringify(res.data.data.user));
        sessionStorage.setItem("token", res.data.data.token);
        if (recordar) {
          sessionStorage.setItem("password", res.data.data.user.password);
        } else {
          sessionStorage.removeItem("password");
        }
      } else {
        setLoading(false);
        toast({
          status: "error",
          description: res.data.error.message,
          isClosable: true,
          title: "Error",
          duration: 3000,
        });
      }
    } catch (error) {
      setLoading(false);
      return toast({
        title: "Error al iniciar sesión",
        status: "error",
        description: "Error de conexión al servidor",
        duration: 3000,
        isClosable: true,
      });
    }

    toast.close(iniciandoSesion);
    setLoading(false);
  };

  const handleTempLogin = async () => {
    // Aquí podrías realizar validaciones adicionales si es necesario
    dispatch(loginSuccess({ username, password }));
  };

  if (username === sessionStorage.getItem("username")) {
    username.valueOf = sessionStorage.getItem("username");
    password.valueOf = sessionStorage.getItem("password");
    recordar.checked = true;
  }
  useEffect(() => {
    const storedPassword = sessionStorage.getItem("password");
    if (recordar && storedPassword) {
      setPassword(storedPassword);
    }
  }, [recordar]);

  return (
    <Stack w={"100%"} h={"100vh"} placeContent={"center"} bg={"#D00404"}>
      <Center>
        <Stack bg={"white"} p={10} borderRadius={"10px"}>
          <form id="formLogin">
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdPersonOutline />}
                />
                <Input
                  name="username"
                  value={username}
                  type="text"
                  placeholder="Usuario"
                  onChange={(e) => setUsername(e.target.value)}
                  _placeholder={{ color: "black.300" }}
                  border="1px solid black"
                  disabled={loading}
                  ref={initialRef}
                  autoFocus
                />
              </InputGroup>
            </FormControl>
            <br />
            <FormControl>
              <InputGroup size="md">
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdOutlineLock />}
                />
                <Input
                  border="1px solid black"
                  value={password}
                  name="password"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  type={show ? "text" : "password"}
                  _placeholder={{ color: "black.300" }}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    pl={2}
                    size="sm"
                    variant="unstyled"
                    onClick={() => setShow(!show)}
                  >
                    {show ? (
                      <MdOutlineVisibility />
                    ) : (
                      <MdOutlineVisibilityOff />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <br />
            <VStack w="100%">
              <Radio
                size="sm"
                value={recordar}
                onChange={() => setRecordar(!recordar)}
                border="1px solid black"
              >
                Recordar mi usuario y contraseña
              </Radio>
            </VStack>
          </form>
          <br />
          <Button
            type="submit"
            form="formLogin"
            onClick={handleTempLogin}
            isLoading={loading}
            bg="red.300"
            color="brand.fondos_primarios"
            w="100%"
            fontWeight="medium"
            letterSpacing="2px"
          >
            Iniciar sesión
          </Button>
        </Stack>
      </Center>
    </Stack>
  );
};

export default Login;
