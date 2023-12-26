import ajax from "../../../utils/axios";

export const getSets = (params) => {
  let response;
  try {
    response = {
      status: 200,
      data: [
        {
          _id: 1,
          nombre: "Set 1",
          mototes: "",
          estado: "activo",
        },
        {
          _id: 2,
          nombre: "Set 2",
          mototes: "",
          estado: "activo",
        },
        {
          _id: 3,
          nombre: "Set 3",
          mototes: "",
          estado: "activo",
        },
        {
          _id: 4,
          nombre: "Set 4",
          mototes: "",
          estado: "activo",
        },
        {
          _id: 5,
          nombre: "Set 5",
          mototes: "",
          estado: "inactivo",
        },
      ],
    };
    return response;
  } catch (error) {
    console.error("Error en: api-helper.js - getSets() - Error", {
      error,
    });
    return error.response;
  }
};

export const getMotores = (params) => {
  let response;
  try {
    response = {
      status: 200,
      data: [
        {
          _id: 1,
          nombre: "Bomba 1",
          hsBomba: 19234,
          condicion: 3,
          set: "Set 1",
          servicio: "En funcionamiento",
          info: "TRLR PUMP Q10-X 2000 HHP CVRSN",
        },
        {
          _id: 2,
          nombre: "Bomba 2",
          hsBomba: 19234,
          condicion: 3,
          set: "Set 2",
          info: "TRLR PUMP Q10-X 2000 HHP CVRSN",
          servicio: "En mantenimiento",
        },
        {
          _id: 3,
          nombre: "Bomba 3",
          hsBomba: 19234,
          condicion: 3,
          set: "Set 3",
          info: "TRLR PUMP Q10-X 2000 HHP CVRSN",
          servicio: "En reparacion",
        },
        {
          _id: 4,
          nombre: "Bomba 4",
          hsBomba: 19234,
          condicion: 3,
          set: "Set 2",
          info: "TRLR PUMP Q10-X 2000 HHP CVRSN",
          servicio: "En funcionamiento",
        },
        {
          _id: 5,
          nombre: "Bomba 5",
          hsBomba: 19234,
          condicion: 3,
          set: "Set 1",
          info: "TRLR PUMP Q10-X 2000 HHP CVRSN",
          servicio: "En reparacion",
        },
        {
          _id: 6,
          nombre: "Bomba 6",
          hsBomba: 19234,
          condicion: 3,
          set: "Set 3",
          info: "TRLR PUMP Q10-X 2000 HHP CVRSN",
          servicio: "En mantenimiento",
        },
        {
          _id: 7,
          nombre: "Bomba 7",
          hsBomba: 19234,
          condicion: 3,
          set: "Set 1",
          info: "TRLR PUMP Q10-X 2000 HHP CVRSN",
          servicio: "En funcionamiento",
        },
      ],
    };
    return response;
  } catch (error) {
    console.error("Error en: api-helper.js - getMotores() - Error", {
      error,
    });
    return error.response;
  }
};
