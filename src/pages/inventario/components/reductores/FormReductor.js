import React from "react";
import { Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Form, Formik } from "formik";

const FormReductor = (props) => {
  const { setLoading, toast, type, onClose, seleccionado } = props;
  const initialValues =
    type === "editar"
      ? {
          nombreReductor: seleccionado.nombreReductor,
          horasReductor: seleccionado.horasReductor,
        }
      : {
          nombreReductor: "",
          horasReductor: 0,
        };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={async (values) => {
        setLoading(true);

        if (!values.nombreReductor) {
          setLoading(false);
          return toast({
            title: "Error",
            description: "Nombre de la empresa requerido",
            status: "error",
            isClosable: true,
            duration: 3000,
          });
        }
        if (!values.horasReductor) {
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
            title: `Reductor ${
              type === "crear" ? "creado" : "editado"
            } correctamente`,
            duration: 3000,
          });
          onClose();
        } else {
          return toast({
            status: "error",
            isClosable: true,
            title: `Error al ${type === "crear" ? "crear" : "editar"} reductor`,
            description: res.data.error.message || "Error al editar reductor",
          });
        }

        setLoading(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <Form id="formReductor">
          <Stack px={3} spacing={3} w="100%">
            <FormControl w={"xs"} isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                w={"xs"}
                placeholder="Nombre del reductor"
                type="text"
                name="nombreReductor"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombreReductor}
              />
            </FormControl>
            <FormControl w={"xs"} isRequired>
              <FormLabel>Horas</FormLabel>
              <Input
                w={"xs"}
                placeholder="Cantidad"
                type="number"
                name="horasReductor"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.horasReductor}
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

export default FormReductor;
