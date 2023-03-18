/**
 ** Module : EXT-Welcome
 ** @bugsounet
 ** ©02-2022
 ** support: https://forum.bugsounet.fr
 **/

Module.register("MMM-Test", {
  defaults: {
    debug: true
  },

  getDom: function() {
    var dom = document.createElement("div")
    dom.style.display = 'none'
    return dom
  },

  notificationReceived: function(noti, payload,sender) {
    switch(noti) {
      case "DOM_OBJECTS_CREATED":
        this.sendSocketNotification("INIT")
        break
    }
  }
})
