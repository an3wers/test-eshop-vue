export const catalogURL = 'http://10.10.10.208:8000/catalog/all/'
export const baseHost = 'http://10.10.10.208:8000'
export const newCollection = 'http://10.10.10.208:8000/product/new_collection/'
export const cartApi = 'http://10.10.10.208:8000/cart/get_or_create/'
export const addCart = 'http://10.10.10.208:8000/cart/add/'
export const deleteFromCart = 'http://10.10.10.208:8000/cart/delete/'
export const updateProductCart = 'http://10.10.10.208:8000/cart/update/'

// для работы с корзиной http://10.10.10.208:8000/cart/get_or_create/


/*
const url = "http://10.10.10.208:8000/cart/get_or_create/"
axios.post(url, {  'sessionId':localStorage.getItem('sessionId')})
  .then(function (response) {
    console.log(response);
    if(response.status==200){
        localStorage.setItem('sessionId',response.data.session)
    }

  })
  .catch(function (error) {
    console.log(error);
  });
*/


/*

[14:13, 04.04.2022] Александр Безденежных: добавил запросы add,delete,update
[14:14, 04.04.2022] Александр Безденежных: add обязательные аргументы sessionId,productId(stock)
[14:14, 04.04.2022] Александр Безденежных: delete обязательные аргументы sessionId,productId(stock)
[14:15, 04.04.2022] Александр Безденежных: update обязательные аргументы sessionId,productId(stock),count
[14:15, 04.04.2022] Александр Безденежных: в ответ структура корзины и поле message

*/