import { nanoid } from 'nanoid';
import { action, atom, WritableAtom } from 'nanostores';
import type { Toast, ToastOptions } from './types';

export const toastStore = atom<Toast[]>([]);

export const addToast = action(
  toastStore,
  'addToast',
  (store: WritableAtom<Toast[]>, options: ToastOptions) => {
    const existingToasts = store.get();
    const id = options?.id ?? nanoid();
    const toast = {
      ...options,
      id,
    };
    store.set([toast, ...existingToasts]);
    return id;
  }
);

export const updateToast = action(
  toastStore,
  'updateToast',
  (
    store: WritableAtom<Toast[]>,
    toastId: Toast['id'],
    options: ToastOptions
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

export const removeToast = action(
  toastStore,
  'removeToast',
  (store: WritableAtom<Toast[]>, toastId: Toast['id']) => {
    const existingToasts = store.get();
    store.set(existingToasts.filter((toast) => toast.id !== toastId));
  }
);
