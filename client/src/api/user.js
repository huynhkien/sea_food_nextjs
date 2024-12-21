import axios from './axios';

export const apiRegister = async (data) => axios({
    url: '/user/register/',
    method: 'post',
    data,
    withCredentials: true
}
)
export const apiLogin = async (data) => axios({
    url: '/user/login/',
    method: 'post',
    data
})
export const apiForgotPassword = (data) => axios({
    url: '/user/forgotpassword/',
    method: 'post',
    data
})
export const apiResetPassword = (data) => axios({
    url: '/user/resetpassword/',
    method: 'put',
    data
})
export const apiGetCurrent = () => axios({
    url: '/user/current/',
    method: 'get',
    
})
export const apiGetUsers = (params) => axios({
    url: '/user/',
    method: 'get',
    params
    
})
export const apiUpdateCart = (data) => axios({
    url: '/user/add-cart',
    method: 'put',
    data
    
})
export const apiUpdateOneCart = (data) => axios({
    url: '/user/update-cart',
    method: 'put',
    data
    
})
export const apiRemoveCart = (pid) => axios({
    url: '/user/remove-cart/' + pid,
    method: 'delete',
    
})

export const apiUpdateCurrent = (data) => axios({
    url: '/user/current/',
    method: 'put',
    data,
});
export const apiGetUser = (uid) => axios({
    url: '/user/' + uid,
    method: 'get',
    
})
export const apiGetAllOrder =() => axios({
    url: '/user/get-all-order/',
    method: 'get',
})
export const apiUpdateUserId =(uid, data) => axios({
    url: '/user/update-user/' + uid,
    method: 'put',
    data
})
export const apiGetUserId =(uid) => axios({
    url: '/user/get-user/' + uid,
    method: 'get',
})
export const apiUpdateWishList =(pid) => axios({
    url: '/user/wishlist/' + pid,
    method: 'put',
})
export const apiRemoveAllCart =() => axios({
    url: '/user/remove-all-cart',
    method: 'delete',
})