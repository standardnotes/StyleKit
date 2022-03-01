import { ToastType } from './enums';
export declare type ToastAction = {
    label: string;
    handler: (toastId: Toast['id']) => void;
};
declare type CommonToastProperties = {
    type: ToastType;
    message: string;
    actions?: ToastAction[];
};
export declare type Toast = CommonToastProperties & {
    id: string;
    dismissed: boolean;
};
export declare type ToastOptions = CommonToastProperties & {
    id?: string;
    autoClose?: boolean;
    duration?: number;
};
export declare type ToastUpdateOptions = Partial<ToastOptions>;
export declare type ToastState = {
    toasts: Toast[];
};
export {};
