import React from "react";
import { Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Form, Formik } from "formik";

const FormMotor = (props) => {
  const { setLoading, toast, type, onClose, seleccionado } = props;
  const initialValues =
    type === "editar"
      ? {
          nombreMotor: seleccionado.nombreMotor,
          horasMotor: seleccionado.horasMotor,
        }
      : {
          nombreMotor: "",
          horasMotor: "",
        };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={async (values) => {
        setLoading(true);

        if (!values.nombreEmpresaT) {
          setLoading(false);
          return toast({
            title: "Error",
            description: "Nombre de la empresa requerido",
            status: "error",
            isClosable: true,
            duration: 3000,
          });
        }
        if (!values.cuitCuilEmpresaT) {
          setLoading(false);
          return toast({
            title: "Error",
            description: "CUIT/CUIL requerido",
            status: "error",
            isClosable: true,
            duration: 3000,
          });
        }

        let res;

        // if (type === "editar") {
        //   res = await "editarTransportista"({
        //     nombreEmpresaT: values.nombreEmpresaT,
        //     cuitCuilEmpresaT: values.cuitCuilEmpresaT,
        //     id: transportista.idEmpresaT,
        //   });
        // }
        // if (type === "crear") {
        //   res = await "crearTransportista"({
        //     nombreEmpresaT: values.nombreEmpresaT,
        //     cuitCuilEmpresaT: values.cuitCuilEmpresaT,
        //   });
        // }

        if (res.status === 200) {
          toast({
            status: "success",
            isClosable: true,
            title: `Motor ${
              type === "crear" ? "creado" : "editado"
            } correctamente`,
            duration: 3000,
          });
          onClose();
        } else {
          return toast({
            status: "error",
            isClosable: true,
            title: `Error al ${type === "crear" ? "crear" : "editar"} motor`,
            description: res.data.error.message || "Error al editar motor",
          });
        }

        setLoading(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <Form id="formMotor">
          <Stack px={3} spacing={3} w="100%">
            <FormControl w={"xs"} isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                w={"xs"}
                placeholder="Nombre del motor"
                type="text"
                name="nombreMotor"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombreMotor}
              />
            </FormControl>
            <FormControl w={"xs"} isRequired>
              <FormLabel>Horas</FormLabel>
              <Input
                w={"xs"}
                placeholder="Cantidad"
                type="number"
                name="horasMotor"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.horasMotor}
              />
            </FormControl>
            <FormControl w={"xs"}>
              <FormLabel>Datos extra</FormLabel>
              <Input
                w={"xs"}
                placeholder="Otro dato"
                type="text"
                name="datos"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.datos}
              />
            </FormControl>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default FormMotor;
