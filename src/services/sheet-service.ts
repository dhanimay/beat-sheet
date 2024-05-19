import axios from 'axios';
const { VITE_API_URL } = import.meta.env;

export async function getHealth() {
  const { data } = await axios.get(`${VITE_API_URL}/health`);
  return data;
}

export async function getSheetsRequest() {
  const { data } = await axios.get(`${VITE_API_URL}/sheet`);
  return data;
}

export async function updateSheetRequest(sheetId: string, title: string) {
  const { data } = await axios.put(`${VITE_API_URL}/sheet`, {
    sheetId,
    title,
  });
  return data;
}

export async function getSheetRequest(sheetId: string) {
  const { data } = await axios.get(`${VITE_API_URL}/sheet/${sheetId}`);
  return data;
}

export async function createSheetRequest(title: string) {
  const { data } = await axios.post(`${VITE_API_URL}/sheet`, { title });
  return data;
}

export async function deleteSheetRequest(sheetId: string) {
  const { data } = await axios.delete(`${VITE_API_URL}/sheet`, {
    data: { sheetId },
  });
  return data;
}

export async function addActRequest(sheetId: string, description: string) {
  const { data } = await axios.post(`${VITE_API_URL}/act`, {
    sheetId,
    description,
  });
  return data;
}

export async function updateActRequest(actId: string, description: string) {
  const { data } = await axios.put(`${VITE_API_URL}/act`, {
    actId,
    description,
  });
  return data;
}

export async function deleteActRequest(actId: string) {
  const { data } = await axios.delete(`${VITE_API_URL}/act`, {
    data: {
      actId,
    },
  });
  return data;
}

export async function addBeatRequest(
  actId: string,
  description: string,
  duration: number,
  cameraAngle: string
) {
  const { data } = await axios.post(`${VITE_API_URL}/beat`, {
    actId,
    description,
    duration,
    cameraAngle,
  });
  return data;
}

export async function updateBeatDescriptionRequest(
  actId: string,
  beatId: string,
  description: string
) {
  const { data } = await axios.put(`${VITE_API_URL}/beat/description`, {
    actId,
    beatId,
    description,
  });
  return data;
}

export async function updateBeatDurationRequest(
  actId: string,
  beatId: string,
  duration: number
) {
  const { data } = await axios.put(`${VITE_API_URL}/beat/duration`, {
    actId,
    beatId,
    duration,
  });
  return data;
}
export async function updateBeatCameraAngleRequest(
  actId: string,
  beatId: string,
  cameraAngle: string
) {
  const { data } = await axios.put(`${VITE_API_URL}/beat/camera`, {
    actId,
    beatId,
    cameraAngle,
  });
  return data;
}

export async function deleteBeatRequest(beatId: string) {
  const { data } = await axios.delete(`${VITE_API_URL}/beat`, {
    data: {
      beatId,
    },
  });
  return data;
}
