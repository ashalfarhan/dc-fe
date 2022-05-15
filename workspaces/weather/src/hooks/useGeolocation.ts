import { useSafeUpdate } from '@ashalfarhan/hooks'
import { useEffect, useRef, useState } from 'react'

type GeoState =
  | { status: 'idle' }
  | {
      status: 'success'
      state: GeolocationPosition
    }
  | {
      status: 'error'
      error: GeolocationPositionError
    }

const useGeolocation = (watch = false, options: PositionOptions = {}) => {
  const [state, setState] = useState<GeoState>({ status: 'idle' })
  const safeUpdate = useSafeUpdate(setState)
  const watchId = useRef<number>()

  useEffect(() => {
    const onSuccess: PositionCallback = res => {
      safeUpdate(prev => ({ ...prev, status: 'success', state: res, error: null }))
    }
    const onError: PositionErrorCallback = err => {
      safeUpdate(prev => ({ ...prev, status: 'error', error: err, state: null }))
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options)

    if (watch) {
      watchId.current = navigator.geolocation.watchPosition(onSuccess, onError, options)
      return () => {
        if (watchId.current) {
          navigator.geolocation.clearWatch(watchId.current)
        }
      }
    }
  }, [watch])

  return state
}

export default useGeolocation
