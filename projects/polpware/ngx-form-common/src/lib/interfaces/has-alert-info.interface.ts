export enum AlertTypeEnum {
    none = 0,
    info = 1,
    warning = 2,
    running = 3,
    success = 4,
    error = 5
}

export interface IHasAlertInfo {
    alertMessage: string;
    alertSubMessage: string;
    alertType: AlertTypeEnum;
    alertDismissible: boolean;
}    
