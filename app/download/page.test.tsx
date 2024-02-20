import { expect, test } from 'bun:test'
import { render } from '@testing-library/react'
import Home from './page'

document.body.innerHTML = ''
render(<Home />)

test('main test', () => {
  const main = document.querySelector('main')
  expect(main?.getAttribute('class')).toEqual(
    'flex min-h-screen flex-col items-center justify-between p-24',
  )
})

test('h2 test', () => {
  const h2_0 = document.querySelectorAll('h2')[0]
  const h2_1 = document.querySelectorAll('h2')[1]
  const h2_2 = document.querySelectorAll('h2')[2]
  const h2_3 = document.querySelectorAll('h2')[3]
  expect(h2_0?.getAttribute('class')).toEqual('mb-3 text-2xl font-semibold')
  expect(h2_0?.textContent).toEqual('Docs ->')
  expect(h2_1?.getAttribute('class')).toEqual('mb-3 text-2xl font-semibold')
  expect(h2_1?.textContent).toEqual('Learn ->')
  expect(h2_2?.getAttribute('class')).toEqual('mb-3 text-2xl font-semibold')
  expect(h2_2?.textContent).toEqual('Templates ->')
  expect(h2_3?.getAttribute('class')).toEqual('mb-3 text-2xl font-semibold')
  expect(h2_3?.textContent).toEqual('Deploy ->')
})

test('p test', () => {
  const p0 = document.querySelectorAll('p')[0]
  const p1 = document.querySelectorAll('p')[1]
  const p2 = document.querySelectorAll('p')[2]
  const p3 = document.querySelectorAll('p')[3]
  const p4 = document.querySelectorAll('p')[4]
  expect(p0?.getAttribute('class')).toEqual(
    'fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30',
  )
  expect(p1?.getAttribute('class')).toEqual(
    'm-0 max-w-[30ch] text-sm opacity-50',
  )
  expect(p1?.textContent).toEqual(
    'Find in-depth information about Next.js features and API.',
  )
  expect(p2?.getAttribute('class')).toEqual(
    'm-0 max-w-[30ch] text-sm opacity-50',
  )
  expect(p3?.getAttribute('class')).toEqual(
    'm-0 max-w-[30ch] text-sm opacity-50',
  )
  expect(p3?.textContent).toEqual('Explore the Next.js 13 playground.')

  expect(p4?.getAttribute('class')).toEqual(
    'm-0 max-w-[30ch] text-sm opacity-50',
  )
  expect(p4?.textContent).toEqual(
    'Instantly deploy your Next.js site to a shareable URL with Vercel.',
  )
})

test('div test', () => {
  const div1 = document.querySelectorAll('div')[1]
  const div2 = document.querySelectorAll('div')[2]
  const div4 = document.querySelectorAll('div')[4]
  expect(div1?.getAttribute('class')).toEqual(
    'z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex',
  )
  expect(div2?.getAttribute('class')).toEqual(
    'fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none',
  )
  expect(div4?.getAttribute('class')).toEqual(
    'mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left',
  )
})
