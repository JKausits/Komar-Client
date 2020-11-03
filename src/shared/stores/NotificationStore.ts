import { observable, action } from "mobx";
import NotificationDto from "../dtos/Notification.dto";
import NotificationTypeEnum from "../enums/NotificationType.enum";

export default class NotificationStore {
    @observable notifications: NotificationDto[] = [];

    @action sendNotification = (message: string, type: NotificationTypeEnum) => {
        this.notifications.push(new NotificationDto(message, type));
    }

    @action sendSuccessNotification = (message: string) => {
        this.sendNotification(message, NotificationTypeEnum.Success)
    }

    @action sendWarningNotification = (message: string) => {
        this.sendNotification(message, NotificationTypeEnum.Warning)
    }

    @action sendErrorNotification = (message: string) => {
        this.sendNotification(message, NotificationTypeEnum.Error)
    }

    @action removeNotification = (notification: NotificationDto) => {
        this.notifications = this.notifications.filter(x => x !== notification);
    }
}