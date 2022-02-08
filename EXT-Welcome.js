/**
 ** Module : EXT-Welcome
 ** @bugsounet
 ** ©02-2022
 ** support: https://forum.bugsounet.fr
 **/

Module.register("EXT-Welcome", {
  defaults: {
    welcome: "brief Today"
  },

  getDom: function() {
    var dom = document.createElement("div")
    dom.style.display = 'none'
    return dom
  },

  notificationReceived: function(noti, payload) {
    switch(noti) {
      case "DOM_OBJECTS_CREATED":
        this.sendSocketNotification("INIT")
        this.sendNotification("EXT_HELLO", this.name)
        break
      case "GA_READY":
        this.sendNotification("GA_ACTIVATE",{type: "TEXT", key: this.config.welcome, chime: false})
        break
    }
  }
})
