import axios, {
    // AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    RawAxiosRequestHeaders
} from "axios"
import {config} from "./config";

class Network {

    private adminApi		: AxiosInstance = axios.create({
        baseURL : config.adminHttpUrl(),
        timeout : 30000,
        headers : <RawAxiosRequestHeaders> {
            'Content-Type'	: 'application/json; charset=UTF-8',
            'x-access-token': config.adminToken(),
        },
    })

    UserPost<T>(path : string, payload : Record<string, any>, timeout? : number) {
        const parts : string[] = path.split('/')
        return this.adminPost<T>('user', parts[0], parts.length > 1 ? parts[1] : '', payload, timeout)
    }

    private setPostSpecFields(payload : Record<string, any>) : Record<string, any> {
        payload['_type']		= "request"
        return payload
    }

    private adminPost<T>(module : string, subject : string, action : string, payload : Record<string, any>, timeout? : number) : Promise<T> {
        const self : this = this
        const r_conf : AxiosRequestConfig = {timeout : timeout || 30000, withCredentials: true}
        return new Promise<T>((resolve, reject) => {
            payload = self.setPostSpecFields(payload)
            self.adminApi.post([module, subject, action].join("/"), payload, r_conf)
                .then((res : AxiosResponse<T>) => {resolve(res.data)})
                .catch((err) => {
                    console.error(err.message || 'неизвестная ошибка')
                    reject(err)
                })
        })
    }
}

const network : Network = new Network()
export default network