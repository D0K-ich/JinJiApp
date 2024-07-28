import axios, {
    // AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    RawAxiosRequestHeaders
} from "axios"

class Network {

    private adminApi		: AxiosInstance = axios.create({
        baseURL : `http://192.168.2.105:8084/`,
        timeout : 30000,
        headers : <RawAxiosRequestHeaders> {
            'Content-Type'	: 'application/json; charset=UTF-8',
            'x-access-token': "", //TODO
        }
    })

    BillingPost<T>(path : string, payload : Record<string, any>, timeout? : number) {
        const parts : string[] = path.split('/')
        return this.adminPost<T>('user/profile', parts[0], parts.length > 1 ? parts[1] : '', payload, timeout)
    }

    private setPostSpecFields(payload : Record<string, any>) : Record<string, any> {
        payload['_type']		= "request"
        // payload['_uuid']		= uuidv4()
        // payload['_client_uuid']	= self.clientUuid
        // payload['_link_uuid'] 	= self.linkUuid
        // payload['_subject']		= subject
        // payload['_action']		= action
        return payload
    }

    private adminPost<T>(module : string, subject : string, action : string, payload : Record<string, any>, timeout? : number) : Promise<T> {
        const self : this = this
        const r_conf : AxiosRequestConfig = {timeout : timeout || 30000, withCredentials: true}
        return new Promise<T>((resolve, reject) => {
            payload = self.setPostSpecFields(payload)
            payload['_module']		= "profile"
            payload['_subject']		= "profile"
            payload['_action']		= "get"
            payload['_access_token']= "" //TODO
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