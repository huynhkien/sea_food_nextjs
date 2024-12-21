import axios from './axios';

export const apiGetProducts = async (params) => axios({
    url: '/product/',
    method: 'get',
    params
})
export const apiGetProduct = async (pid) => axios({
    url: '/product/' + pid,
    method: 'get',
})
export const apiCreateProduct = async (data) => axios({
    url: '/product/' ,
    method: 'post',
    data
})
export const apiCreateVariant = async (data, pid) => axios({
    url: '/product/add-variant/' + pid ,
    method: 'put',
    data
})
export const apiUpdateProduct = async (data, pid) => axios({
    url: '/product/' + pid ,
    method: 'put',
    data
})
export const apiDeleteProduct = async (pid) => axios({
    url: '/product/' + pid ,
    method: 'delete',
})
export const apiDeleteVariant = async (pid, vid) => axios({
    url: `/product/add-variant/${pid}/${vid}`,
    method: 'delete',
});
export const apiGetCountRatings = async () => axios({
    url: '/product/count/'  ,
    method: 'get',
});
export const apiRatings = async (data) => axios({
    url: '/product/ratings/'   ,
    method: 'put',
    data
});
export const apiUpdateCoupon = async (pid, data) => axios({
    url: '/product/add-coupon/' + pid  ,
    method: 'put',
    data
});
