import { observer } from 'mobx-react'
import React, { Fragment } from 'react'
import { Toast } from 'react-bootstrap';
import NotificationDto from '../../dtos/Notification.dto';
import NotificationTypeEnum from '../../enums/NotificationType.enum';
import useNotificationStore from '../../hooks/useNotificationStore'

const NotificationContainer = () => {
    //#region State
    const notificationStore = useNotificationStore();
    //#endregion

    //#region UI Helpers
    const notification = (notification: NotificationDto) => {
        return (
            <Toast
                key={notification.id}
                className={getNotificationColor(notification.notificationType)}
                onClose={() => notificationStore.removeNotification(notification)}
                delay={5000}
                autohide
            >
                <Toast.Body className="d-flex">
                    {notification.message}
                    <button
                        type="button"
                        className="close ml-auto align-self-start"
                        aria-label="Close"
                        onClick={() => notificationStore.removeNotification(notification)}
                    >
                        <span aria-hidden="true" className="text-white">
                            &times;
            </span>
                    </button>
                </Toast.Body>
            </Toast>
        );
    };

    const getNotificationColor = (type: NotificationTypeEnum) => {
        switch (type) {
            case NotificationTypeEnum.Success:
                return "bg-success text-white font-weight-bold";
            case NotificationTypeEnum.Warning:
                return "bg-warning text-white font-weight-bold";
            case NotificationTypeEnum.Error:
                return "bg-danger text-white font-weight-bold";
            default:
                return "";
        }
    };
    //#endregion

    if (notificationStore.notifications.length === 0)
        return <Fragment></Fragment>;

    return (
        <div
            style={{
                position: "absolute",
                top: 16,
                right: 12,
                zIndex: 1100,
                width: "300px",
            }}
        >
            {notificationStore.notifications.map(notification)}
        </div>
    )
}

export default observer(NotificationContainer)
