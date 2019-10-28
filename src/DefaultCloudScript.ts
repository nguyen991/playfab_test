handlers.hellWord = function(args: any, context: IPlayFabContext) {
  let msg = `Hello ${currentPlayerId} !`;
  log.info(msg);
  log.debug("input:", args);
  return { msg };
};

handlers.hellWord2 = function(args: any, context: IPlayFabContext) {
  let msg = `Hello ${currentPlayerId} !~~~`;
  log.info(msg);
  log.debug("input:", args);
  return { msg };
};
