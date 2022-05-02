import { ToastType } from './enums'

export type ToastAction = {
  label: string
  handler: (toastId: Toast['id']) => void
}

type CommonToastProperties = {
  type: ToastType
  message: string
  actions?: ToastAction[]
  progress?: number
  autoClose?: boolean
  duration?: number
}

export type Toast = CommonToastProperties & {
  id: string
  dismissed: boolean
}

export type ToastOptions = CommonToastProperties & {
  id?: string
}

export type ToastUpdateOptions = Partial<ToastOptions>

export type ToastState = {
  toasts: Toast[]
}
