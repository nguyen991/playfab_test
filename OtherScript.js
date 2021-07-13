"use strict";
handlers.userData = function (args, context) {
    const data = server.GetUserData({ PlayFabId: currentPlayerId });
    return data;
};
