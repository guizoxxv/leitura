const url = "http://localhost:5005"

const headers = {
  'Authorization': 'whatever-you-want'
}

export const listCategories = () => fetch(
  `${url}/categories`,
  {
    headers: headers,
  }
).then(res => res.json()).then(data => data.categories)

export const listPosts = () => fetch(
  `${url}/posts`,
  {
    headers: headers,
  }
).then(res => res.json()).then(data => data)

export const createPost = (data) => fetch(
  `${url}/posts`,
  {
    method: 'post',
    headers: headers,
    body: JSON.stringify(data)
  }
).then(res => res.json()).then(data => data)