const createRouteWithQueryParams = (route, query) => {
  if (!query) {
    return route
  }

  const qs = new URLSearchParams(query).toString()

  return `${route}?${qs}`
}

const routes = {
  home: () => "/",
  inscription: "./inscription",
  mentionLegal: "./mentionLegal",
  editprofil: "./editprofil",
  connect: "./connect",
  contact: "./contact",
  orderConfirm: "./orderConfirm",
  paympent: "./payment",
  reset: "./Reset",
  api: {
    cart: (userId, query) =>
      createRouteWithQueryParams(`/users/${userId}/cartUser`, query),
      create: (userId) => `/users/${userId}/cart`,
    product: (productId, query) =>
      createRouteWithQueryParams(`/products/${productId}/product`, query),
  },

  /* EXEMPLE 

  create: {
    list: "/CreateList",
    todo: (listId) => `/lists/${listId}/CreateTodo`,
  },
  view: {
    list: (listId) => `/lists/${listId}/ViewList`,
  },
  modify: {
    list: (listId) => `/lists/${listId}/ModifyList`,
    todo: (listId, todoId) => `/lists/${listId}/${todoId}/ModifyTodo`,
  }
    */
}

export default routes
