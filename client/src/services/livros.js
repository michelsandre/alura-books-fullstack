import axios from 'axios';

const livrosAPI = axios.create({
  baseURL: 'http://localhost:8080/livros',
});

async function buscarLivros() {
  try {
    const response = await livrosAPI.get('/');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { buscarLivros };
