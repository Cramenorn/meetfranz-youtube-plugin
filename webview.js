"use strict";

module.exports = Franz => {
    const getMessages = function getMessages() {
      const notifications = document.querySelector('#notification-count').textContent;
  
      Franz.setBadge(notifications);
    };

    Franz.loop(getMessages);
  };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaXRodWIvd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbXX0=