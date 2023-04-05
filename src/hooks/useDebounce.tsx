import { useEffect } from 'react'

interface UseDebounceProps {
  fn: () => void
  listener?: unknown[]
  delay?: number
}

export const useDebounce = ({ fn, listener, delay = 500 }: UseDebounceProps) => {
  const currentListeners = Array.isArray(listener) ? listener : [listener]

  useEffect(() => {
    const handler = setTimeout(() => fn(), delay)

    return () => {
      clearTimeout(handler)
    }
  }, [...currentListeners, delay])
}
