<div align="center">
  <img src="assets/logo.svg" width="150" />
</div>

# use-pikaso
React hook for [Pikaso](https://github.com/pikasojs/pikaso)

![Language](https://badgen.net/badge/icon/typescript?icon=typescript&label=Language)
![Test, Build and Publish](https://github.com/pikasojs/use-pikaso/workflows/Test,%20Build%20and%20Publish/badge.svg)
![npm](https://badgen.net/npm/v/use-pikaso)
![coverage](https://img.shields.io/coveralls/github/pikasojs/use-pikaso)

## Install   

#### NPM
`npm install use-pikaso --save` 

#### Yarn
`yard add use-pikaso`

## Getting Started

```ts
import React, { useEffect } from 'react'
import usePikaso from 'use-pikaso'

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
https://codesandbox.io/s/pikaso-react-hook-vrx3d


## Documentation
https://github.com/pikasojs/pikaso
