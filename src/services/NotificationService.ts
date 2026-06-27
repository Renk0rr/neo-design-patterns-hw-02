import { INotificationChannel, INotificationService } from "../core/interfaces";

export class NotificationService implements INotificationService {
  constructor(private readonly channels: INotificationChannel[]) {}

  notify(message: string): void {
    for (const channel of this.channels) {
      channel.send(message);
    }
  }
}
