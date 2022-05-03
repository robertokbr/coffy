export type ILoggerData = {
  message?: string;
  context: string;
  error?: string;
  stack?: string;
} & (
  | {
      error: string;
      stack: string;
    }
  | {
      message: string;
    }
);

export type ILoggerLevel = 'error' | 'warn' | 'info' | 'debug';

export type ILogger = Record<ILoggerLevel, (data: ILoggerData) => void>;
