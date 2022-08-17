export default class TinyDOM {
  constructor() {
  }

  static createApp(app) {
    const event = new Event('app-created');
    
    document.getElementById("root").innerHTML  = app();
    document.getElementById("root").dispatchEvent(event)
    return new Promise((resolve) => {
       resolve(true);
    });
  }
  static query(selector) {
    if(selector.startsWith('#')) {
        return document.getElementById(selector.substring(1));
    }
    return document.querySelectorAll(selector);
  }
}