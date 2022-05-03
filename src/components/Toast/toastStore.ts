import { nanoid } from 'nanoid'
import { action, atom, WritableAtom } from 'nanostores'
import { Toast, ToastOptions, ToastUpdateOptions } from './types'

export const toastStore = atom<Toast[]>([])

export const updateToast = action(
  toastStore,
  'updateToast',
  (store: WritableAtom<Toast[]>, toastId: Toast['id'], options: ToastUpdateOptions) => {
    const existingToasts = store.get()
    store.set(
      existingToasts.map((toast) => {
        if (toast.id === toastId) {
          return {
            ...toast,
            ...options,
          }
        } else {
          return toast
        }
      }),
    )
  },
)

const removeToast = action(toastStore, 'removeToast', (store: WritableAtom<Toast[]>, toastId: Toast['id']) => {
  const existingToasts = store.get()
  store.set(existingToasts.filter((toast) => toast.id !== toastId))
})

const DelayBeforeRemovingToast = 175

export const dismissToast = action(toastStore, 'dismissToast', (store: WritableAtom<Toast[]>, toastId: Toast['id']) => {
  const existingToasts = store.get()
  store.set(
    existingToasts.map((toast) => {
      if (toast.id === toastId) {
        return {
          ...toast,
          dismissed: true,
        }
      } else {
        return toast
      }
    }),
  )
  setTimeout(() => {
    removeToast(toastId)
  }, DelayBeforeRemovingToast)
})

export const addToast = action(toastStore, 'addToast', (store: WritableAtom<Toast[]>, options: ToastOptions) => {
  const existingToasts = store.get()
  const id = options.id ?? nanoid()

  const toast = {
    ...options,
    id,
    dismissed: false,
  }

  store.set([...existingToasts, toast])

  return id
})
