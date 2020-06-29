import JsonP  from 'jsonp'
import axios from 'axios'
export default class Axios {
    static jsonp (options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                timeout: 6000
            }, function (err, response) {
                if (response.status === 0) {
                    resolve(response.result)
                } else {
                    reject(response.message)
                }
            })
        })
    }
    static axios (options) {
        return new Promise((resolve, reject) => {
            axios.get(options.url).then(res => {
                if (res.data.status === 0) {
                    resolve(res.data.result)
                } else {
                    reject(res.data.message)
                }
            })
        })
    }
}