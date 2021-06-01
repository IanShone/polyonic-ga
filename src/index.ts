// @ts-nocheck


export class PolyonicGoogleAnalytics {

  gtag: any
  logging: boolean

  packageName: string

  constructor() {
    this.packageName = '👓[Polyonic Google Analytics]:'
    this.logging = true
  }

  Greeter(name: string) {
    console.log(`Analytics says: Hello ${name}`)
    return `Hello ${name}`
  }

  InitialiseGA(GA_Measurement_ID: string) {
    return new Promise((res, rej) => {

      let head = document.getElementsByTagName('head')[0]

      let script1 = document.createElement('script')
      script1.type = 'text/javascript'
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_Measurement_ID}`
      head.appendChild(script1)

      let script2 = document.createElement('script')
      script2.type = 'text/javascript'
      script2.async = true
      script2.onload = this.gaInit(GA_Measurement_ID)
      head.appendChild(script2)

      Promise.resolve()
        .then(() => res(null))
        .catch(err => rej(err))

    })
  }

  // sendEvent(name: any, params: any) {
  //   // const gclidPromise = new Promise(resolve => {
  //   //   gtag('get', 'DC-XXXXXXXX', 'gclid', resolve)
  //   console.log('Attempt')
  //   this.gtag('event', name, params)
  //   // })
  //   //   .then()
  // }

  enableLogging(val) {
    if (val) {
      this.logging = true
      console.log(`${this.packageName} Logging Enabled`)
    } else {
      this.logging = false
      console.log(`${this.packageName} Logging Disabled`)
    }
  }

  sendEvent(name: any, params: any) {
    const ctx = this

    this.gtag('event', name, {
      'event_callback': function () { ctx.handleLogs(`Event "${name}" recorded.`) }
    })
  }

  handleLogs(log) {
    if (log) { console.log(`${this.packageName} ${log}`) }
  }

  gaInit(ID) {
    window.dataLayer = window.dataLayer || []
    this.gtag = function () { dataLayer.push(arguments) }
    // function gtag() { dataLayer.push(arguments) }
    this.gtag('js', new Date());
    this.gtag('config', ID)
    this.gtag('event', 'page_view', { 'send_to': ID })
  }

}


module.exports = { PolyonicGoogleAnalytics }