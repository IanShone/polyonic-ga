export class Analytics {

  Greeter(name: string) {
    console.log(`Analytics says: Hello ${name}`)
    return `Hello ${name}`
  }

  InitialiseGA(GA_Measurement_ID: string) {

    GA_Measurement_ID = 'G-8YDB3KTM4S'

    let head = document.getElementsByTagName('head')[0]

    let script1 = document.createElement('script')
    script1.type = 'text/javascript'
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_Measurement_ID}`
    head.appendChild(script1)

    let script2 = document.createElement('script')
    script2.type = 'text/javascript'
    script2.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); }gtag('js', new Date()); gtag('config', 'G - 8YDB3KTM4S'); "
    head.appendChild(script2)

    ga('send', 'event', 'Startup')

    console.log('Report sent')

  }

}



module.exports = { Analytics }