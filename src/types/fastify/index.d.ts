import {
    FastifyLoggerInstance,
    RawReplyDefaultExpression,
    RawRequestDefaultExpression,
    RawServerBase,
    RawServerDefault,
  } from 'fastify';
  
  declare module 'fastify' {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    export interface FastifyInstance<
      RawServer extends RawServerBase = RawServerDefault,
      RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
      RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
      Logger = FastifyLoggerInstance,
    > {
      authenticate(): void;
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
  }
  