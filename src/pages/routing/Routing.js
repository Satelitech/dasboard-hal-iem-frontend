import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";
import Motores from "../inventario/Motores";
import Transmisiones from "../inventario/Transmisiones";
import AneloYard from "../inventario/AneloYard";
import PowerEnd from "../inventario/PowerEnd";
import Reductores from "../inventario/Reductores";
import FleetStatus from "../inventario/FleetStatus";
import FieldMantenience from "../inventario/FieldMantenience";
import EstadoFlota from "../inventario/EstadoFlota";
import Backlog from "../inventario/Backlog";
import Layout from "../layout/Layout";
import Detalle from "../sets/components/Detalle";
import DetalleMotor from "../inventario/components/motores/DetalleMotor";
import DetalleTransmisiones from "../inventario/components/transmisiones/DetalleTransmisiones";
import DetallePowerEnd from "../inventario/components/powerend/DetallePowerEnd";
import DetalleReductores from "../inventario/components/reductores/DetalleReductores";
/* import FormCrearEditarMotor from "../inventario/components/motores/FormCrearEditarMotor";
import FormCrearEditarTransmision from "../inventario/components/transmisiones/FormCrearEditarTransmision";
import FormCrearEditarPwrEnd from "../inventario/components/powerend/FormCrearEditarPwrEnd";
import FormCrearEditarReductor from "../inventario/components/reductores/FormCrearEditarReductor"; */

const Routing = () => {
  const { user } = useSelector((state) => state.user);
  const [expanded, setExpanded] = useState(true);
  const [mobile] = useMediaQuery("(min-width: 1025px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <Routes>
      {!user ? (
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="" element={<Navigate to="/login" replace={true} />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Route>
      ) : (
        <Route
          path="/"
          element={
            <Layout
              expanded={expanded}
              setExpanded={setExpanded}
              mobile={mobile}
            />
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/:nombre" element={<Detalle />} />

          <Route path="motores" element={<Motores />} />
          <Route path="motores/:nombreMotor" element={<DetalleMotor />} />

          <Route path="transmisiones" element={<Transmisiones />} />
          <Route
            path="transmisiones/:nombreTransmision"
            element={<DetalleTransmisiones />}
          />

          <Route path="powerend" element={<PowerEnd />} />
          <Route path="powerend/:nombrePwrEnd" element={<DetallePowerEnd />} />

          <Route path="reductores" element={<Reductores />} />
          <Route
            path="reductores/:nombreReductor"
            element={<DetalleReductores />}
          />

          <Route path="fleetstatus" element={<FleetStatus />} />
          <Route path="fieldmantenience" element={<FieldMantenience />} />
          <Route path="aneloyard" element={<AneloYard />} />
          <Route path="estadoflota" element={<EstadoFlota />} />
          <Route path="backlog" element={<Backlog />} />

          <Route path="" element={<Navigate to="/dasboard" replace={true} />} />
          <Route
            path="*"
            element={<Navigate to="/dashboard" replace={true} />}
          />
        </Route>
      )}
    </Routes>
  );
};

export default Routing;
