import React from 'react'
import Home from '@/pages/index'
import { render } from '../Utils'

test('サンプルスナップショットテスト', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
