const baseURL = 'http://owu.linkpc.net/carsAPI/v2'


const cars = '/cars'               //  endpoints
const auth = '/auth'               //  ...
const users = '/users'            //  ...
const urls = {    //  urls-endpoints
    cars: {                                //  baseURL.cars
        base: cars                         //  baseURL.cars.cars
    },
    auth: {                                //  baseURL.auth
        login: auth,                       //  baseURL.auth.login
        refresh: `${auth}/refresh`,        //  baseURL.auth.refresh
        register: users,                   //  baseURL.auth.register
        me: `${auth}/me`                   //  baseURL.auth.me
    }
}

//   ==========================================================================

export {
    baseURL,
    urls
}