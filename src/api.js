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
      /**
       * Hacemos una petición http al enpoint de lists
       * Por default el metodo que usa fetch es GET
       */
      const response = await fetch(`${baseUrl}/lists`);

      // almacenamos la respuesta JSON en la constante data
      const data = await response.json();

      // retornamos la data
      return data;
    },
    async createList(nameList) {
      /**
       * Hacemos una petición a lists con el metodo POST
       * Las cabeceras con el tipo de contenido aplicación JSON
       * Le mandamos un body con el nombre de la lista
       */
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
      /**
       * Hacemos una petición a lists/listId con el metodo PATCH para actualizar
       * Las cabeceras con el tipo de contenido aplicación JSON
       * Le mandamos un body con el ID y Nombre de la lista
       */
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
      // Hacemos una petición con el metodo DELETE para eliminar la lista por ID
      const response = await fetch(
        `${baseUrl}/lists/${listId}`,
        {
          method: 'DELETE'
        });
      const status = await response.status;
    }
  },
  items: {
    /**
       * Hacemos una petición a items con el metodo POST
       * Las cabeceras con el tipo de contenido aplicación JSON
       * Le mandamos un body con el Nombre del item y ID de la lista
       */
    async createItem(listId, nameItem) {
      const response = await fetch(
        `${baseUrl}/items`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: nameItem,
            listId,
          })
        });
      const status = await response.status;
    },
    async updateItem(itemId, nameItem) {
      /**
       * Hacemos una petición a items/itemId con el metodo PATCH para actualizar
       * Las cabeceras con el tipo de contenido aplicación JSON
       * Le mandamos un body con el ID y Nuevo Nombre del item
       */
      const response = await fetch(
        `${baseUrl}/items/${itemId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            _id: itemId,
            newName: nameItem
          })
        });
    },
    async deleteItem(itemId) {
      // Hacemos una petición con el metodo DELETE para eliminar el item por ID
      const response = await fetch(
        `${baseUrl}/items/${itemId}`,
        {
          method: 'DELETE'
        }
      );
    }
  }
}

export default api;
