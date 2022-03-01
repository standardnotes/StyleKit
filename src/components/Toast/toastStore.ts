import { nanoid } from 'nanoid';
import { action, atom, WritableAtom } from 'nanostores';
import { ToastType } from './enums';
import { Toast, ToastOptions, ToastUpdateOptions } from './types';

export const toastStore = atom<Toast[]>([]);

export const updateToast = action(
  toastStore,
  'updateToast',
  (
    store: WritableAtom<Toast[]>,
    toastId: Toast['id'],
    options: ToastUpdateOptions
  ) => {
    const existingToasts = store.get();
    store.set(
      existingToasts.map((toast) => {
        if (toast.id === toastId) {
          return {
            ...toast,
            ...options,
          };
        } else {
          return toast;
        }
      })
    );
  }
);

const removeToast = action(
  toastStore,
  'removeToast',
  (store: WritableAtom<Toast[]>, toastId: Toast['id']) => {
    const existingToasts = store.get();
    store.set(existingToasts.filter((toast) => toast.id !== toastId));
  }
);

export const dismissToast = action(
  toastStore,
  'dismissToast',
  (store: WritableAtom<Toast[]>, toastId: Toast['id']) => {
    const existingToasts = store.get();
    store.set(
      existingToasts.map((toast) => {
        if (toast.id === toastId) {
          return {
            ...toast,
            dismissed: true,
          };
        } else {
          return toast;
        }
      })
    );
    setTimeout(() => {
      removeToast(toastId);
    }, 175);
  }
);

export const addToast = action(
  toastStore,
  'addToast',
  (store: WritableAtom<Toast[]>, options: ToastOptions) => {
    const existingToasts = store.get();
    const id = options.id ?? nanoid();

    const toast = {
      ...options,
      id,
      dismissed: false,
    };

    store.set([toast, ...existingToasts]);

    const autoClose =
      options.autoClose ??
      (!options.actions && options.type !== ToastType.Loading);
    const duration = options.duration ?? 4000;

    if (autoClose) {
      setTimeout(() => {
        dismissToast(id);
      }, duration);
    }

    return id;
  }
);
