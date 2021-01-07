/**
 * Models different kinds of messages.
 *
 * Note that we on purpose use lowercase letters to 
 * be consistent with the bootstrap alert types (Particularly 
 * from ngx-bootstrap library). By doing so, we may directly 
 * transform this alert type into the bootstrap one.
 */
export enum AlertTypeEnum {
    none = 0,
    info = 1,
    warning = 2,
    success = 3,
    danger = 4,
    other = 5
}

export interface IHasAlertInfo {
    alertMessage: string;
    alertSubMessage: string;
    alertType: AlertTypeEnum;
    alertDismissible: boolean;
}    
