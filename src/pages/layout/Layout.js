import React, { useEffect, useState } from "react";
import {
  HStack,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { MdMenu, MdPerson, MdHome } from "react-icons/md";
import LogOut from "../auth/Logout";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { getSets } from "../inventario/helpers/api.helper";
import Navigate from "./components/Navigate";

const Layout = (props) => {
  const { expanded, setExpanded, mobile } = props;
  const [seleccionado, setSeleccionado] = useState("Set 1");
  const [active, setActive] = useState("Set 1");
  const [setsTotales, setSetsTotales] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const initData = () => {
    let res = getSets();

    if (res.status === 200) {
      setSetsTotales(res.data);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <Stack w="100%" h={"100vh"}>
      <HStack
        px={5}
        py={1}
        w={"100%"}
        justifyContent={"space-between"}
        borderBottom={"1px solid #DFDFDF"}
      >
        {!mobile && (
          <Menu>
            <MenuButton as={IconButton} icon={<MdMenu />} variant={"outline"} />

            <MenuList>
              <MenuItem onClick={() => navigate("/motores")}>Motores</MenuItem>
              <MenuItem onClick={() => navigate("/transmisiones")}>
                Transmisiones
              </MenuItem>
              <MenuItem onClick={() => navigate("/powerend")}>
                Power end
              </MenuItem>
              <MenuItem onClick={() => navigate("/reductores")}>
                Reductores
              </MenuItem>
              <MenuItem onClick={() => navigate("/fleetstatus")}>
                Fleet status
              </MenuItem>
              <MenuItem onClick={() => navigate("/fieldmaintenance")}>
                Field maintenance
              </MenuItem>
              <MenuItem onClick={() => navigate("/aneloyard")}>
                Añelo yard
              </MenuItem>
              <MenuItem onClick={() => navigate("/estadoflota")}>
                Estado de flota
              </MenuItem>
              <MenuItem onClick={() => navigate("/backlog")}>Backlog</MenuItem>
              <MenuItem>
                <LogOut />
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        {mobile && <Box> </Box>}

        {location.pathname === "/dashboard" ? (
          <HStack spacing={10}>
            {setsTotales.map((set) => (
              <Button
                key={set._id}
                variant={"outline"}
                onClick={() => {
                  setSeleccionado(set.nombre);
                  setActive(set.nombre);
                }}
                color={active === set.nombre ? "black" : "white"}
                bg={active === set.nombre ? "white" : "black"}
                _hover={{ bg: "gray", color: "white" }}
              >
                {set.nombre}
              </Button>
            ))}
          </HStack>
        ) : (
          <IconButton
            onClick={() => navigate("/dashboard")}
            icon={<MdHome />}
            variant={"outline"}
            border={"1px solid black"}
          />
        )}
        <Avatar bg="red.500" icon={<MdPerson fontSize="1.5rem" />} />
      </HStack>
      <HStack w="100%" h={"100%"}>
        {mobile && <Navigate />}
        <Outlet />
      </HStack>
    </Stack>
  );
};
export default Layout;
