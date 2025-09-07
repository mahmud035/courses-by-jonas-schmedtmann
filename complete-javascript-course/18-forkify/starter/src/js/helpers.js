import { TIMEOUT_SEC } from './config';

const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} seconds`));
    }, s * 1000);
  });
};

export const getJSON = async (url) => {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const sendJSON = async (url, uploadData) => {
  try {
    const fetchPromise = fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return data;
  } catch (error) {
    throw error;
  }
};
