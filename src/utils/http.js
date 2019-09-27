import jsonp from 'jsonp'

export default class Http {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      jsonp(
        options.url,
        {
          param: 'callback'
        },
        (err, response) => {
          if (response.status === 'success') {
            resolve(response)
          } else {
            reject(response.message)
          }
        }
      )
    })
  }
}
