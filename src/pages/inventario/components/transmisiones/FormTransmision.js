import React from "react";
import { Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Form, Formik } from "formik";

const FormTransmision = (props) => {
  const { setLoading, toast, type, onClose, seleccionado } = props;
  const initialValues =
    type === "editar"
      ? {
          nombreTransmision: seleccionado.nombreTransmision,
          horasTransmision: seleccionado.horasTransmision,
        }
      : {
          nombreTransmision: "",
          horasTransmision: 0,
        };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={async (values) => {
        setLoading(true);

        if (!values.nombreTransmision) {
          setLoading(false);
          return toast({
            title: "Error",
            description: "Nombre de la empresa requerido",
            status: "error",
            isClosable: true,
            duration: 3000,
          });
        }
        if (!values.horasTransmision) {
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
            title: `Transmision ${
              type === "crear" ? "creado" : "editado"
            } correctamente`,
            duration: 3000,
          });
          onClose();
        } else {
          return toast({
            status: "error",
            isClosable: true,
            title: `Error al ${
              type === "crear" ? "crear" : "editar"
            } transmision`,
            description:
              res.data.error.message || "Error al editar transmision",
          });
        }

        setLoading(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <Form id="formTransmision">
          <Stack px={3} spacing={3} w="100%">
            <FormControl w={"xs"} isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                w={"xs"}
                placeholder="Nombre del transmision"
                type="text"
                name="nombreTransmision"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombreTransmision}
              />
            </FormControl>
            <FormControl w={"xs"} isRequired>
              <FormLabel>Horas</FormLabel>
              <Input
                w={"xs"}
                placeholder="Cantidad"
                type="number"
                name="horasTransmision"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.horasTransmision}
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

export default FormTransmision;
