// Definimos la URL donde vamos a hacer las peticiones HTTP
const baseUrl = 'http://localhost:3000/api';

/**
 * Creamos un objeto con los metodos a las peticiones HTTP
 * Estos metodos van a usar Promesas con Async/Await
 * Las peticiones las hacemos con fetch
 * Dependiendo de la petición le pasamos a fetch Metodo, Headers y el Body
 */
const api = {
  lists: {
    async getList() {
      const response = await fetch(`${baseUrl}/lists`);
      const data = await response.json();
      return data;
    },
    async createList(nameList) {
      const response = await fetch(
        `${baseUrl}/lists`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: nameList})
        });
    },
    async updateList(listId, nameList) {
      const response = await fetch(
        `${baseUrl}/lists/${listId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            listId,
            newName: nameList
          })
        });
      const status = await response.status;
    },
    async deleteList(listId) {
      const response = await fetch(
        `${baseUrl}/lists/${listId}`,
        {
          method: 'DELETE'
        });
      const status = await response.status;
    }
  }
}

export default api;
