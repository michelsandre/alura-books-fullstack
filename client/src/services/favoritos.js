import axios from 'axios';

const favoritosAPI = axios.create({
  baseURL: 'http://localhost:8080/favoritos',
});

async function buscarFavoritos() {
  try {
    const response = await favoritosAPI.get('/');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function editarFavorito(id, valor) {
  try {
    const response = await favoritosAPI.put(`/${id}`, {
      favorito: valor,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { buscarFavoritos, editarFavorito };
