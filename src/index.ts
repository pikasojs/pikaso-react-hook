import { useRef, useState, useEffect, RefObject } from 'react'

import { Pikaso, BaseShapes, RegisterShapesFn, Settings } from 'pikaso'

export default function usePikaso<T extends BaseShapes = BaseShapes>(
  options: Partial<Settings> = {},
  registerShapes?: RegisterShapesFn<T>
): [RefObject<HTMLDivElement>, Pikaso<T> | null] {
  const [instance, setInstance] = useState<Pikaso<T> | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const editor = new Pikaso<T>(
      {
        container: ref.current as HTMLDivElement,
        ...options
      },
      registerShapes
    )

    setInstance(editor)
  }, [])

  return [ref, instance]
}
