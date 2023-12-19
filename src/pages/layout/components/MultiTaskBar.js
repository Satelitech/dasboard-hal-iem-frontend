import React, { useEffect } from "react";
import {
  HStack,
  WrapItem,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  Box,
  VStack,
  Icon,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ListItem,
  List,
  AvatarBadge,
  Img,
  Avatar,
} from "@chakra-ui/react";
import {
  MdDehaze,
  MdOutlineSettings,
  MdOutlineViewAgenda,
  MdPersonOutline,
  MdOutlinePersonAddAlt,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import FilterData from "../../../utils/FilterData";
import Notificationes from "./Notificationes";
import Usuario from "./Usuario";
import { useSelector } from "react-redux";
import LogoExpandido from "../../../assets/Brent-Marca-con-bajada-CMYK.png";
import { ReactComponent as Cargas } from "../../../assets/iconos/Sand.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { getPlanificaciones } from "../../operaciones/helpers/api.helper";

const MultiTaskBar = (props) => {
  const { mobile, filter, setFilter, notificaciones, setNotificaciones } =
    props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();
  const btnRef = React.useRef();
  const { user } = useSelector((state) => state.user);
  const biblioteca = [
    {
      tag: "planificacion",
      nombre: "Planificación",
      link: "/operaciones/planificacion",
    },
    {
      tag: "plantas",
      nombre: "Plantas",
      link: "/inventario/planta",
    },
    {
      tag: "autoelevadores",
      nombre: "Autoelevadores",
      link: "/inventario/autoelevadores",
    },
    {
      tag: "historial",
      nombre: "Historial",
      link: "/operaciones/historial",
    },
    {
      tag: "sandvan",
      nombre: "SandVan",
      link: "/inventario/sandvan",
    },
    {
      tag: "sandcubes",
      nombre: "Sandcubes",
      link: "/inventario/sandcubes",
    },
    {
      tag: "sander",
      nombre: "Sander",
      link: "/inventario/sander",
    },
    {
      tag: "empresatransportista",
      nombre: "Empresa transportista",
      link: "/inventario/transportista",
    },
    {
      tag: "camiones",
      nombre: "Camiones",
      link: "/inventario/camiones",
    },
    {
      tag: "padlocacion",
      nombre: "Pad / Locacion",
      link: "/inventario/locacion",
    },
    {
      tag: "usuarios",
      nombre: "Usuarios",
      link: "/usuarios",
    },
    {
      tag: "certificacioncamiones",
      nombre: "Certificacion Camiones (reportes)",
      link: "/reportes/certificacion",
    },
    {
      tag: "revisionentreturno",
      nombre: "Revision entre turno (reportes)",
      link: "/reportes/revision",
    },
    {
      tag: "registrodeeventos",
      nombre: "Registro eventos (reportes)",
      link: "/reportes/registro",
    },
    {
      tag: "resportesdeviajes",
      nombre: "Reporte de viajes (reportes)",
      link: "/reportes/reporte",
    },
    {
      tag: "notificaciones",
      nombre: "Configuracion de notificaciones",
      link: "/administrarNotificaciones",
    },
    {
      tag: "encurso",
      nombre: "Operaciones en Curso",
      link: "/operaciones/curso",
    },
    {
      tag: "descarga",
      nombre: "Planificaciones",
      link: "/operaciones/planificacion",
    },
    {
      tag: "descarga",
      nombre: "Historial",
      link: "/operaciones/historial",
    },
    {
      tag: "descarga",
      nombre: "Reporte de viajes (reportes)",
      link: "/reportes/reporte",
    },
    {
      tag: "descarga",
      nombre: "Revision entre turno (reportes) ",
      link: "/reportes/revision",
    },
    {
      tag: "descarga",
      nombre: "Registro de eventos (reportes)",
      link: "/reportes/registro",
    },
    {
      tag: "crearplanificacion",
      nombre: "Crear Planificación",
      link: "/operaciones/planificacion/nuevo",
    },
    {
      tag: "crearautoelevador",
      nombre: "Crear Autoelevador",
      link: "/inventario/autoelevadores/nuevo",
    },
    {
      tag: "crearempresatrasnportista",
      nombre: "Crear Empresa transportista",
      link: "/inventario/transportista/nuevo",
    },
    {
      tag: "crearcamiones",
      nombre: "Crear Camiones",
      link: "/inventario/camiones/nueva",
    },
    {
      tag: "crearsandcubes",
      nombre: "Crear Sandcube",
      link: "/inventario/sandcubes/nuevo",
    },
    {
      tag: "crearsander",
      nombre: "Crear Sander",
      link: "/inventario/sander/nuevo",
    },
    {
      tag: "crearsandvan",
      nombre: "Crear SandVan",
      link: "/inventario/sandvan/nuevo",
    },
  ];

  const initData = async () => {
    let res;

    res = await getPlanificaciones();

    if (res.status === 200) {
      res.data.forEach((elemento) => {
        biblioteca.push({
          tag: elemento.idPadlocacion.trim().toLowerCase(),
          nombre: elemento.idPadlocacion,
          link: "/operaciones/planificacion",
        });
      });
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <HStack
      bg="brand.fondos_secundarios"
      w="100%"
      justifyContent={!mobile ? "space-between" : "end"}
      pr={10}
      py={2}
    >
      {!mobile && (
        <Box pl={3}>
          <IconButton
            ref={btnRef}
            icon={<MdDehaze />}
            onClick={onOpen}
            variant="ghost"
          />
          <Drawer
            isOpen={isOpen}
            onClose={onClose}
            finalFocusRef={btnRef}
            placement="left"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                <VStack
                  h="100%"
                  justifyContent="space-between"
                  transition="width 1s"
                  overflow="hidden"
                >
                  <Box w="100%" pt={5}>
                    <Box h="100px" p={3}>
                      <Box w="186px" h="70px">
                        <Img src={LogoExpandido} alt="" />
                      </Box>
                    </Box>

                    <VStack spacing={2} cursor="pointer">
                      <Accordion w="100%">
                        <AccordionItem>
                          <AccordionButton
                            onClick={() => {
                              navigate("/dashboard");
                            }}
                            color={
                              location.pathname === "/dashboard" &&
                              "brand.naranja"
                            }
                            _expanded={{
                              borderLeftWidth: "5px",
                              borderLeftColor: "brand.naranja",
                            }}
                            // borderLeftWidth={location.pathname === "/dashboard" && "5px"}
                            // borderLeftColor={
                            //   location.pathname === "/dashboard" && "brand.naranja"
                            // }
                          >
                            <HStack>
                              <Icon
                                as={MdOutlineViewAgenda}
                                color="gray.400"
                                boxSize={6}
                              />
                              <Text>Dashboard</Text>
                            </HStack>
                          </AccordionButton>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionButton
                            _expanded={{
                              borderLeftWidth: "5px",
                              borderLeftColor: "brand.naranja",
                            }}
                          >
                            <HStack>
                              <Box w={8} h={8}>
                                <Cargas />
                              </Box>
                              <Text>Operaciones</Text>
                            </HStack>
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            <List spacing={2}>
                              <ListItem
                                _hover={{ color: "brand.naranja" }}
                                color={
                                  location.pathname ===
                                    "/operaciones/planificacion" &&
                                  "brand.naranja"
                                }
                                onClick={() => {
                                  navigate("/operaciones/planificacion");
                                }}
                              >
                                Planificacion
                              </ListItem>
                              <ListItem
                                color={
                                  location.pathname === "/operaciones/curso" &&
                                  "brand.naranja"
                                }
                                _hover={{ color: "brand.naranja" }}
                                onClick={() => {
                                  navigate("/operaciones/curso");
                                }}
                              >
                                En curso
                              </ListItem>
                              <ListItem
                                color={
                                  location.pathname ===
                                    "/operaciones/historial" && "brand.naranja"
                                }
                                _hover={{ color: "brand.naranja" }}
                                onClick={() => {
                                  navigate("/operaciones/historial");
                                }}
                              >
                                Historial
                              </ListItem>
                            </List>
                          </AccordionPanel>
                        </AccordionItem>
                        {(user.idRol === "admin" ||
                          user.idRol === "operaciones" ||
                          user.idRol === "mantenimiento") && (
                          <AccordionItem>
                            <AccordionButton
                              _expanded={{
                                borderLeftWidth: "5px",
                                borderLeftColor: "brand.naranja",
                              }}
                            >
                              <HStack>
                                <Icon
                                  as={MdOutlineSettings}
                                  color="gray.400"
                                  boxSize={6}
                                />
                                <Text>Inventario</Text>
                              </HStack>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              <List spacing={2}>
                                <ListItem
                                  color={
                                    location.pathname ===
                                      "/inventario/clientes" && "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/inventario/clientes");
                                  }}
                                >
                                  Clientes
                                </ListItem>
                                <ListItem
                                  color={
                                    location.pathname ===
                                      "/inventario/locacion" && "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/inventario/locacion");
                                  }}
                                >
                                  Pad/Locación
                                </ListItem>
                                <ListItem
                                  color={
                                    location.pathname ===
                                      "/inventario/planta" && "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/inventario/planta");
                                  }}
                                >
                                  Planta
                                </ListItem>
                                <ListItem
                                  color={
                                    location.pathname ===
                                      "/inventario/transportista" &&
                                    "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/inventario/transportista");
                                  }}
                                >
                                  Empresas Transportistas
                                </ListItem>
                                <ListItem
                                  color={
                                    location.pathname ===
                                      "/inventario/autoelevadores" &&
                                    "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/inventario/autoelevadores");
                                  }}
                                >
                                  Autoelevadores
                                </ListItem>
                                <ListItem
                                  color={
                                    location.pathname ===
                                      "/inventario/sander" && "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/inventario/sander");
                                  }}
                                >
                                  Sander
                                </ListItem>
                                <ListItem
                                  color={
                                    location.pathname ===
                                      "/inventario/sandcubes" && "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/inventario/sandcubes");
                                  }}
                                >
                                  Sandcubes
                                </ListItem>
                                <ListItem
                                  color={
                                    location.pathname ===
                                      "/inventario/sandvan" && "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/inventario/sandvan");
                                  }}
                                >
                                  SandVan
                                </ListItem>
                              </List>
                            </AccordionPanel>
                          </AccordionItem>
                        )}
                        {(user.idRol === "admin" ||
                          user.idRol === "usuarioIT") && (
                          <AccordionItem>
                            <AccordionButton
                              onClick={() => {
                                navigate("/usuarios");
                              }}
                              color={
                                location.pathname === "/usuarios" &&
                                "brand.naranja"
                              }
                              _expanded={{
                                borderLeftWidth: "5px",
                                borderLeftColor: "brand.naranja",
                              }}
                            >
                              <HStack>
                                <Icon
                                  as={MdOutlinePersonAddAlt}
                                  color="gray.400"
                                  boxSize={6}
                                />
                                <Text>Usuarios</Text>
                              </HStack>
                            </AccordionButton>
                          </AccordionItem>
                        )}
                        {(user.idRol === "admin" ||
                          user.idRol === "operaciones" ||
                          user.idRol === "mantenimiento" ||
                          user.idRol === "usuarioBG" ||
                          user.idRol === "facturacion" ||
                          user.idRol === "hys" ||
                          user.idRol === "gerencia") && (
                          <AccordionItem>
                            <AccordionButton
                              _expanded={{
                                borderLeftWidth: "5px",
                                borderLeftColor: "brand.naranja",
                              }}
                            >
                              <HStack>
                                <Icon
                                  as={MdOutlineLibraryBooks}
                                  color="gray.400"
                                  boxSize={6}
                                />
                                <Text>Reportes</Text>
                              </HStack>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              <List spacing={2}>
                                <ListItem
                                  color={
                                    location.pathname === "/reportes/reporte" &&
                                    "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/reportes/reporte");
                                  }}
                                >
                                  Reporte de viajes
                                </ListItem>
                                <ListItem
                                  color={
                                    location.pathname ===
                                      "/reportes/revision" && "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/reportes/revision");
                                  }}
                                >
                                  Revisión entre turnos
                                </ListItem>
                                <ListItem
                                  color={
                                    location.pathname ===
                                      "/reportes/registro" && "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/reportes/registro");
                                  }}
                                >
                                  Registro de eventos
                                </ListItem>
                                <ListItem
                                  color={
                                    location.pathname ===
                                      "/reportes/certificacion" &&
                                    "brand.naranja"
                                  }
                                  _hover={{ color: "brand.naranja" }}
                                  onClick={() => {
                                    navigate("/reportes/certificacion");
                                  }}
                                >
                                  Certificación camiones
                                </ListItem>
                              </List>
                            </AccordionPanel>
                          </AccordionItem>
                        )}
                      </Accordion>
                    </VStack>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      )}
      <HStack w="100%" justifyContent={"end"} spacing={5} position={"relative"}>
        <FilterData
          filter={filter}
          setFilter={setFilter}
          biblioteca={biblioteca}
        />

        <Notificationes
          notificaciones={notificaciones}
          setNotificaciones={setNotificaciones}
        />

        {mobile && (
          <Text textTransform="uppercase">
            <Avatar
              size="md"
              borderRadius="50%"
              color="brand.fondos_primarios"
              bg="gray.700"
              icon={<MdPersonOutline color="white" size="30px" />}
            />
          </Text>
        )}
        {mobile && <Text textTransform="uppercase">{user.nombre}</Text>}

        <Usuario />
      </HStack>
    </HStack>
  );
};

export default MultiTaskBar;
