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
  const div3 = document.querySelectorAll('div')[3]
  const div4 = document.querySelectorAll('div')[4]
  expect(div1?.getAttribute('class')).toEqual(
    'z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex',
  )
  expect(div2?.getAttribute('class')).toEqual(
    'fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none',
  )
  expect(div2?.textContent).toEqual('By ')
  expect(div3?.textContent).toEqual('')
  expect(div4?.getAttribute('class')).toEqual(
    'mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left',
  )
})

test('a test', () => {
  const a0 = document.querySelectorAll('a')[0]
  const a1 = document.querySelectorAll('a')[1]
  const a2 = document.querySelectorAll('a')[2]
  const a3 = document.querySelectorAll('a')[3]
  const a4 = document.querySelectorAll('a')[4]
  expect(a0?.getAttribute('class')).toEqual(
    'pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0',
  )
  expect(a0?.textContent).toEqual('By ')
  expect(a0?.getAttribute('href')).toEqual(
    'https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
  )
  expect(a0?.getAttribute('target')).toEqual('_blank')
  expect(a0?.getAttribute('rel')).toEqual('noopener noreferrer')
  expect(a1?.getAttribute('class')).toEqual(
    'group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30',
  )
  expect(a1?.textContent).toEqual(
    'Docs ->Find in-depth information about Next.js features and API.',
  )
  expect(a1?.getAttribute('href')).toEqual(
    'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
  )
  expect(a1?.getAttribute('target')).toEqual('_blank')
  expect(a1?.getAttribute('rel')).toEqual('noopener noreferrer')
  expect(a2?.getAttribute('class')).toEqual(
    'group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30',
  )
  expect(a2?.getAttribute('href')).toEqual(
    'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
  )
  expect(a2?.getAttribute('target')).toEqual('_blank')
  expect(a2?.getAttribute('rel')).toEqual('noopener noreferrer')
  expect(a3?.getAttribute('class')).toEqual(
    'group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30',
  )
  expect(a3?.textContent).toEqual(
    'Templates ->Explore the Next.js 13 playground.',
  )
  expect(a3?.getAttribute('href')).toEqual(
    'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
  )
  expect(a3?.getAttribute('target')).toEqual('_blank')
  expect(a3?.getAttribute('rel')).toEqual('noopener noreferrer')
  expect(a4?.getAttribute('class')).toEqual(
    'group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30',
  )
  expect(a4?.textContent).toEqual(
    'Deploy ->Instantly deploy your Next.js site to a shareable URL with Vercel.',
  )
  expect(a4?.getAttribute('href')).toEqual(
    'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
  )
  expect(a4?.getAttribute('target')).toEqual('_blank')
  expect(a4?.getAttribute('rel')).toEqual('noopener noreferrer')
})

test('span test', () => {
  const span0 = document.querySelectorAll('span')[0]
  const span1 = document.querySelectorAll('span')[1]
  const span2 = document.querySelectorAll('span')[2]
  const span3 = document.querySelectorAll('span')[3]
  expect(span0?.getAttribute('class')).toEqual(
    'inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none',
  )
  expect(span0?.textContent).toEqual('->')
  expect(span1?.getAttribute('class')).toEqual(
    'inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none',
  )
  expect(span1?.textContent).toEqual('->')
  expect(span2?.getAttribute('class')).toEqual(
    'inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none',
  )
  expect(span2?.textContent).toEqual('->')
  expect(span3?.getAttribute('class')).toEqual(
    'inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none',
  )
  expect(span3?.textContent).toEqual('->')
})
