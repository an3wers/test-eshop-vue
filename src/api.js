export const catalogURL = 'http://10.10.10.208:8000/catalog/all/'
export const baseHost = 'http://10.10.10.208:8000'
export const newCollection = 'http://10.10.10.208:8000/product/new_collection/'
export const cartApi = 'http://10.10.10.208:8000/cart/get_or_create/'
export const addCart = 'http://10.10.10.208:8000/cart/add/'
export const deleteFromCart = 'http://10.10.10.208:8000/cart/delete/'
export const updateProductCart = 'http://10.10.10.208:8000/cart/update/'
export const regURL = 'http://10.10.10.208:8000/profile/registration/'

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


/*

[14:41, 07.04.2022] Александр Безденежных: [POST]
http://10.10.10.208:8000/profile/auth/
{
    "username":"admin",
    "password":"admin"
}
[14:42, 07.04.2022] Александр Безденежных: RESPONSE
{
    "message": "Вход осуществлен",
    "id": 1,
    "username": "admin",
    "token": "gAAAAABiTqqSmXak7GRKnw_gX-C7PPoNmCEr12pEScj6eAtCK3C5WSSE61Czg0Rjjg2KHeh5ELQmnrdVp0XGpMDSR4KOpX7DHx7CDg99kYXpzoB7tQiYusoHenzT0Yhlbs0gTF8lDzrckN6ipnCXHtZXKh137Pk6aQ=="
}

*/

/*
Авторизация/ регистрация


profile/auth
 """
    Headers:
        CartToken
    Data:
        username
        password
    """



profile/registration
    """
    Headers:
        CartToken
    Data:
        name
        email
        password
    """
    response: {message: 'User test created', user_id: 4, name: 'test', email: 'test@test.ru'} pass 123456


profile/logout
   """
    Headers:
        Authorization
    Data:
        user_id

    """


profile/change_password
   """
    Headers:
        Authorization
    Data:
        user_id
        new_password

    """    

profile/get_info
    """
    Headers:
        Authorization
    Data:
        user_id
    """


*/