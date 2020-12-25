import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { HookTest } from './index'

it('should render the editor', () => {
  render(<HookTest />)

  const container = screen.getByTestId('container')

  expect(container).not.toBeEmptyDOMElement()
  expect(container.firstChild).toHaveClass('pikaso')
})
