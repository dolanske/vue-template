import { defineStore } from 'pinia'

/**
 * This is a simple store to push a toast notification from anywhere in the application.
 * Allowing you to add a button to it and execute a function on click.
 *
 */

export interface Toast {
  type?: 'error' | 'info' | 'success' | 'neutral'
  message: string
  action?: {
    label: string
    fn: (self: SerializedToast) => void
  }
  persist?: boolean
}

type ToastId = number

export interface SerializedToast extends Toast {
  _id: number
  _expire: number
  _created: number
  _persist: boolean // If set to true, won't auto clear
}

interface State {
  items: Map<number, SerializedToast>
  id: number
}

export const useToast = defineStore('toast', {
  state: () => ({
    items: new Map(),
    id: 0,
  } as State),
  actions: {
    error(options: Omit<Toast, 'type'>): ToastId {
      return this.add({ ...options, type: 'error' })
    },
    info(options: Omit<Toast, 'type'>): ToastId {
      return this.add({ ...options, type: 'info' })
    },
    success(options: Omit<Toast, 'type'>): ToastId {
      return this.add({ ...options, type: 'success' })
    },
    neutral(options: Omit<Toast, 'type'>): ToastId {
      return this.add({ ...options, type: 'neutral' })
    },
    add({ type, message, action, persist }: Toast): ToastId {
      const id = this.id
      // Toast message LEN * 50, minimum is 2s, max is 7s
      const expiresIn = Math.min(Math.max(message.length * 50, 2500), 7000)

      this.items.set(id, {
        type: type ?? 'neutral',
        message,
        action,
        _id: id,
        _created: Date.now(),
        _expire: expiresIn,
        _persist: !!persist,
      })

      // Remove when toast expires
      if (!persist)
        setTimeout(() => this.remove(id), expiresIn)

      this.id++
      return id
    },
    remove(id: ToastId) {
      this.items.delete(id)
    },
    removeAll() {
      this.items.clear()
    },
  },
})
