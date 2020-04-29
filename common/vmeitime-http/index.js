import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const test = (data) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器 */
	// http.interceptor.request = (config) => {
	// 	config.header = {
	// 		'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25'
	// 		// "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
	// 	}
	// }
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		console.log('个性化response....')
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
		baseUrl: 'https://unidemo.dcloud.net.cn/',
        url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
        data,
    })
}

// 轮播图
export const banner = (data) => {
    return http.request({
        url: '/banner/36kr',
        method: 'GET', 
        data,
		// handle:true
    })
}

// 获取hotel 列表信息
export const search = (data) => {
    return http.request({
        url: 'hotellist/'+data.check_in_date+'/'+data.check_out_date,
		method: 'GET', 
		dataType: 'json'
    })
}

// 获取hotel 酒店信息
export const getHotelInfo = (data) => {
    return http.request({
        url: 'hotelbaseinfo/'+data.hotel_id+'/'+data.check_in_date+'/'+data.check_out_date,
		method: 'GET', 
		dataType: 'json'
    })
}

// call model
export const callAbsModel = (data) => {
    return http.request({
        url: 'model/'+data.hotel_id+'/'+data.check_in_date+'/'+data.check_out_date,
		method: 'GET', 
		dataType: 'json'
    })
}

// call Walker 
export const callExtractModel = (data) => {
    return http.request({
        url: 'extract',
		method: 'POST', 
		dataType: 'json',
        data,
    })
}

// call Lennon
export const callExtractModelLennon = (data) => {
    return http.request({
        url: 'extract_fan',
		method: 'POST', 
		dataType: 'json',
        data,
    })
}

// call Bason
export const attributeCall = (data) => {
    return http.request({
        url: 'attributecal',
 		method: 'POST', 
 		dataType: 'json',
        data,
    })
 }

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	test,
    banner,
	search,
	getHotelInfo,
	callAbsModel,
	callExtractModel,
	callExtractModelLennon,
	attributeCall
}