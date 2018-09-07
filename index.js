exports.handler = skillBuilder
  .addRequestHandlers(
    HelpHandler,
    RepeatHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .lambda();
