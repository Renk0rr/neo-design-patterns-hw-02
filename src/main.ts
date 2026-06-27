import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";
import { INotificationChannel } from "./core/interfaces";

const user = new User("user@example.com", "+1234567890", "device-token-123");
const logger = new Logger();

const channels: INotificationChannel[] = [
  new EmailNotification(user.email, logger),
  new SMSNotification(user.phone, logger),
  new PushNotification(user.deviceToken, logger),
];

const notifier = new NotificationService(channels);
notifier.notify("Ваш платіж оброблено успішно!");
