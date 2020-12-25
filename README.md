<img src="https://github.com/pikasojs/pikaso/raw/master/assets/logo.svg" width="150" />

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
      x: 100,
      y: 100,
      radius: 20,
      fill: 'red'
    })
  }, [editor])

  return (
    <div
      ref={ref}
      style={{
        width: '400px',
        height: '400px'
      }}
    />
  )
}
```

## Documentation
https://github.com/pikasojs/pikaso