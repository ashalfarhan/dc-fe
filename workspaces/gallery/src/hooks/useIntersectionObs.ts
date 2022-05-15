import { useEffect, useRef, useState } from 'react'

const useIntersectionObs = <T extends HTMLElement>(options: IntersectionObserverInit = {}) => {
  const ref = useRef<T>(null)
  const [state, setState] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setState(entry.isIntersecting)
    }, options)
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [options])

  return [ref, state] as const
}

export default useIntersectionObs
