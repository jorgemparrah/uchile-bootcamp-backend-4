import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';
const DailyRotateFile = require('winston-daily-rotate-file');

function FORMAT(pretty: boolean, colors: boolean) {
  return nestWinstonModuleUtilities.format.nestLike('NestJS', {
    colors: colors,
    prettyPrint: pretty,
  })
};

const TRANSPORT_CONSOLE = new winston.transports.Console({
  format: FORMAT(true, true),
  level: 'debug',
});

const TRANSPORT_FILE = {
  filename: 'logs/debug-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH-mm',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  json: false,
  level: 'debug',
  format: FORMAT(true, false)
};

export const CONFIG_LOGS = {
  transports: [
    TRANSPORT_CONSOLE,
    new DailyRotateFile({ ...TRANSPORT_FILE }),
    new DailyRotateFile({ ...TRANSPORT_FILE, level: 'info', filename: 'logs/info-%DATE%.log' }),
    new DailyRotateFile({ ...TRANSPORT_FILE, level: 'error', filename: 'logs/error-%DATE%.log' })
  ],
}