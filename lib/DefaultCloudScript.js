"use strict";
handlers.hellWord = function (args, context) {
    let msg = `Hello ${currentPlayerId} !`;
    log.info(msg);
    log.debug('input:', args);
    return { msg };
};
handlers.hellWord2 = function (args, context) {
    let msg = `Hello ${currentPlayerId} !~~~`;
    log.info(msg);
    log.debug('input:', args);
    return { msg };
};
