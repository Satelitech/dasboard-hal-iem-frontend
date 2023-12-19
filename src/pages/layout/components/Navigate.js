import React, { useState } from "react";
import { Stack, List, ListItem, Box } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import LogOut from "../../auth/Logout";
import { useSelector } from "react-redux";

const Navigate = (props) => {
  const { mobile, expanded, setExpanded } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  return (
    <Stack
      w={"3xs"}
      h={"xl"}
      borderRight={"1px solid #DFDFDF"}
      justifyContent={"space-between"}
    >
      <List cursor={"pointer"} spacing={5} px={2}>
        <ListItem
          _hover={{ textDecoration: "underline", zoom: "110%", bg: "gray.100" }}
          onClick={() => navigate("/motores")}
          textDecoration={location.pathname === "/motores" && "underline"}
        >
          Motores
        </ListItem>
        <ListItem
          _hover={{ textDecoration: "underline", zoom: "110%" }}
          textDecoration={location.pathname === "/transmisiones" && "underline"}
          onClick={() => navigate("/transmisiones")}
        >
          Transmisiones
        </ListItem>
        <ListItem
          _hover={{ textDecoration: "underline", zoom: "110%" }}
          textDecoration={location.pathname === "/powerend" && "underline"}
          onClick={() => navigate("/powerend")}
        >
          Power end
        </ListItem>
        <ListItem
          _hover={{ textDecoration: "underline", zoom: "110%" }}
          textDecoration={location.pathname === "/reductores" && "underline"}
          onClick={() => navigate("/reductores")}
        >
          Reductores
        </ListItem>
        <ListItem
          _hover={{ textDecoration: "underline", zoom: "110%" }}
          textDecoration={location.pathname === "fleetstatus" && "underline"}
          onClick={() => navigate("/fleetstatus")}
        >
          Fleet status
        </ListItem>
        <ListItem
          _hover={{ textDecoration: "underline", zoom: "110%" }}
          textDecoration={
            location.pathname === "/fieldmantenience" && "underline"
          }
          onClick={() => navigate("/fieldmantenience")}
        >
          Field maintenance
        </ListItem>
        <ListItem
          _hover={{ textDecoration: "underline", zoom: "110%" }}
          textDecoration={location.pathname === "/aneloyard" && "underline"}
          onClick={() => navigate("/aneloyard")}
        >
          Añelo yard
        </ListItem>
        <ListItem
          _hover={{ textDecoration: "underline", zoom: "110%" }}
          textDecoration={location.pathname === "/estadoflota" && "underline"}
          onClick={() => navigate("/estadoflota")}
        >
          Estado de flota
        </ListItem>
        <ListItem
          _hover={{ textDecoration: "underline", zoom: "110%" }}
          textDecoration={location.pathname === "/backlog" && "underline"}
          onClick={() => navigate("/backlog")}
        >
          Backlog
        </ListItem>
      </List>
      <Box px={1}>
        <LogOut />
      </Box>
    </Stack>
  );
};

export default Navigate;
