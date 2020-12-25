import React, { useEffect } from 'react'

import usePikaso from '../src'

export function HookTest() {
  const [ref, editor] = usePikaso()

  useEffect(() => {
    if (!editor) {
      return
    }

    editor.shapes.circle.insert({
      x: 200,
      y: 200,
      radius: 50,
      fill: 'red'
    })
  }, [editor])

  return (
    <div
      ref={ref}
      data-testid="container"
      style={{
        background: '#ccc',
        width: '400px',
        height: '400px'
      }}
    />
  )
}
