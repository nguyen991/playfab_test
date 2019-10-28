handlers.userData = function(args: any, context: IPlayFabContext) {
  const data = server.GetUserData({ PlayFabId: currentPlayerId });
  return data;
};
