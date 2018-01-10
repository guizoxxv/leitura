const url = "http://localhost:5005"

export const getCategorias = () => fetch(
  `${url}/categories`,
  {
    headers: { 'Authorization': 'whatever-you-want' }
  }
).then(res => res.json()).then(data => data.categories)