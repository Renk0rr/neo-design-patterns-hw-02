export interface ILogger {
  log(message: string): void;
}

export interface INotificationChannel {
  send(message: string): void; // одержувач вже відомий каналу
}

export interface INotificationService {
  notify(message: string): void;
}
