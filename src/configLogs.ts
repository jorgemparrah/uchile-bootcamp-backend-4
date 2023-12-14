import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';
const DailyRotateFile = require('winston-daily-rotate-file');

function padLevel(level, maxLength) {
  let paddedLevel = level;
  while (paddedLevel.length < maxLength) {
    paddedLevel += '-'; // Añade espacios hasta alcanzar la longitud deseada
  }
  return paddedLevel;
}

function FORMAT(pretty: boolean, colors: boolean) {
  return nestWinstonModuleUtilities.format.nestLike('ZONAPET', {
    colors: colors,
    prettyPrint: pretty,
  })
};

const TRANSPORT_CONSOLE = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.align(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS',
    }),
    winston.format.ms(),
    winston.format.colorize({ all: true, level: false }),
    winston.format.label({ label: 'ZONAPET' }),
    winston.format.printf(
      ({ level, message, timestamp , label, context}) => {
        return `${level} [${label}] (${timestamp})  ${context.padEnd(30)} ${message}`
      }
    ),
    winston.format.padLevels({ levels: {
      verbose: 0, debug: 2, info: 3, error: 2, warn: 3, fatal: 2
    } }),
    // FORMAT(true, true)
  ),
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
    // new DailyRotateFile({ ...TRANSPORT_FILE }),
    // new DailyRotateFile({ ...TRANSPORT_FILE, level: 'info', filename: 'logs/info-%DATE%.log' }),
    // new DailyRotateFile({ ...TRANSPORT_FILE, level: 'error', filename: 'logs/error-%DATE%.log' })
  ],
}