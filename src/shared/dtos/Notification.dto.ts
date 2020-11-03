import NotificationTypeEnum from "../enums/NotificationType.enum";
import { v4 } from 'uuid';

export default class NotificationDto {
    public id: string = v4();;
    constructor(public message: string, public notificationType: NotificationTypeEnum) { }
}