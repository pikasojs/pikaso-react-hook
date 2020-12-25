import { useRef, useState, useEffect, RefObject } from 'react'

import Pikaso, { Settings } from 'pikaso'

export function usePikaso(
  options: Partial<Settings> = {}
): [RefObject<HTMLDivElement>, Pikaso | null] {
  const [instance, setInstance] = useState<Pikaso | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const editor = new Pikaso({
      container: ref.current as HTMLDivElement,
      ...options
    })

    setInstance(editor)
  }, [])

  return [ref, instance]
}

export default usePikaso
