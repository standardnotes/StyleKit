import { WritableAtom } from 'nanostores';
import { Toast, ToastOptions } from './types';
export declare const toastStore: WritableAtom<Toast[]>;
export declare const updateToast: (toastId: string, options: ToastOptions) => void;
export declare const dismissToast: (toastId: string) => void;
export declare const addToast: (options: ToastOptions) => string;
