import { expect, test } from 'bun:test'
import { render } from '@testing-library/react'
import Upload from './page'

document.body.innerHTML = ''
render(<Upload />)

test('main test', () => {
  const main = document.querySelector('main')
  expect(main?.getAttribute('class')).toEqual('flex min-h-screen flex-col p-24')
})
