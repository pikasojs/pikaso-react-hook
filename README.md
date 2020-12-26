<div align="center">
  <img src="assets/logo.png" width="150" />
</div>

# pikaso-react-hook
React hook for [Pikaso](https://github.com/pikasojs/pikaso)

![Language](https://badgen.net/badge/icon/typescript?icon=typescript&label=Language)
![Test, Build and Publish](https://github.com/pikasojs/pikaso-react-hook/workflows/Test,%20Build%20and%20Publish/badge.svg)
![npm](https://badgen.net/npm/v/pikaso-react-hook)
![coverage](https://img.shields.io/coveralls/github/pikasojs/pikaso-react-hook)

## Install   

#### NPM
`npm install pikaso-react-hook --save` 

#### Yarn
`yard add pikaso-react-hook`

## Getting Started

```ts
import React, { useEffect } from 'react'
import usePikaso from 'pikaso-react-hook'

export function Component() {
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
      style={{
        background: '#ccc',
        width: '400px',
        height: '400px'
      }}
    />
  )
}
```

## Demo
https://codesandbox.io/s/pikaso-react-hook-example-i0uwg


## Documentation
https://github.com/pikasojs/pikaso
