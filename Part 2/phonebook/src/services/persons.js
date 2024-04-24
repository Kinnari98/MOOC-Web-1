import axios from "axios";
const localhost = "http://localhost:3001";
const baseUrl = `${localhost}/api/persons`;

const getAll = async () => {
  const request = axios.get(baseUrl);
  const Response = await request;
  return Response.data;
};

const getOne = async (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  const Response = await request;
  return Response.data;
};

const getInfo = async () => {
  const request = axios.get(`${localhost}/info`);
  const Response = await request;
  return Response.data;
};

const create = async (newObject) => {
  const request = axios.post(baseUrl, newObject);
  const Response = await request;
  return Response.data;
};

const update = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  const Response = await request;
  return Response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

// Määritetty objekti virheilmoitusten pois saamiseksi
const personService = { getAll, create, update, remove, getOne, getInfo };
export default personService;
