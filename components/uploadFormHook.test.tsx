// import React from 'react';
import { expect, test } from 'bun:test'
import { render } from '@testing-library/react'
import { UploadFormHook } from './UploadFormHook' // UploadFormHookコンポーネントのインポート

document.body.innerHTML = ''
render(<UploadFormHook />)

test('p test', () => {
  const p0 = document.querySelectorAll('p')[0]
  const p1 = document.querySelectorAll('p')[1]
  const p2 = document.querySelectorAll('p')[2]
  const p3 = document.querySelectorAll('p')[3]
  const p4 = document.querySelectorAll('p')[4]
  const p5 = document.querySelectorAll('p')[5]
  const p6 = document.querySelectorAll('p')[6]
  const p7 = document.querySelectorAll('p')[7]
  expect(p0?.getAttribute('class')).toEqual('mb-3 text-2xl font-semibold')
  expect(p0?.textContent).toEqual('アップロードフォーム')
  expect(p1?.getAttribute('class')).toEqual(null)
  expect(p1?.textContent).toEqual('お名前')
  expect(p2?.getAttribute('class')).toEqual(null)
  expect(p2?.textContent).toEqual('所属会社')
  expect(p3?.getAttribute('class')).toEqual(null)
  expect(p3?.textContent).toEqual('社員番号')
  expect(p4?.getAttribute('class')).toEqual(null)
  expect(p4?.textContent).toEqual('連絡可能な個人電話番号')
  expect(p5?.getAttribute('class')).toEqual(null)
  expect(p5?.textContent).toEqual('メールアドレス')
  expect(p6?.getAttribute('class')).toEqual(null)
  expect(p6?.textContent).toEqual('個人情報提供に同意いただけますか?')
  expect(p7?.getAttribute('class')).toEqual(null)
  expect(p7?.textContent).toEqual('同意する')
})

test('div test', () => {
  const div1 = document.querySelectorAll('div')[1]
  const div2 = document.querySelectorAll('div')[2]
  const div3 = document.querySelectorAll('div')[3]
  const div4 = document.querySelectorAll('div')[4]
  const div5 = document.querySelectorAll('div')[5]
  const div6 = document.querySelectorAll('div')[6]
  const div7 = document.querySelectorAll('div')[7]
  const div8 = document.querySelectorAll('div')[8]

  expect(div1?.getAttribute('class')).toEqual(null)
  expect(div1?.textContent).toEqual(
    'お名前所属会社社員番号連絡可能な個人電話番号メールアドレス個人情報提供に同意いただけますか?同意する画像をアップロードする',
  )
  expect(div2?.getAttribute('class')).toEqual('mb-5')
  expect(div2?.textContent).toEqual('お名前')
  expect(div3?.getAttribute('class')).toEqual('mb-5')
  expect(div3?.textContent).toEqual('所属会社')
  expect(div4?.getAttribute('class')).toEqual('mb-5')
  expect(div4?.textContent).toEqual('社員番号')
  expect(div5?.getAttribute('class')).toEqual('mb-5')
  expect(div5?.textContent).toEqual('連絡可能な個人電話番号')
  expect(div6?.getAttribute('class')).toEqual('mb-5')
  expect(div6?.textContent).toEqual('メールアドレス')
  expect(div7?.getAttribute('class')).toEqual('mb-5')
  expect(div7?.textContent).toEqual('個人情報提供に同意いただけますか?同意する')
  expect(div8?.getAttribute('class')).toEqual(null)
  expect(div8?.textContent).toEqual('画像をアップロードする')
})

test('input test', () => {
  const input0 = document.querySelectorAll('input')[0]
  const input1 = document.querySelectorAll('input')[1]
  const input2 = document.querySelectorAll('input')[2]
  const input3 = document.querySelectorAll('input')[3]
  const input4 = document.querySelectorAll('input')[4]
  const input5 = document.querySelectorAll('input')[5]
  expect(input0?.getAttribute('class')).toEqual('w-80')
  expect(input0?.textContent).toEqual('')
  expect(input0?.getAttribute('placeholder')).toEqual('オープン太郎')
  expect(input0?.getAttribute('required')).toEqual('')
  expect(input1?.getAttribute('class')).toEqual('w-80')
  expect(input1?.textContent).toEqual('')
  expect(input1?.getAttribute('placeholder')).toEqual('オープンアップグループ')
  expect(input1?.getAttribute('required')).toEqual('')
  expect(input2?.getAttribute('class')).toEqual('w-80')
  expect(input2?.textContent).toEqual('')
  expect(input2?.getAttribute('placeholder')).toEqual('123456')
  expect(input2?.getAttribute('required')).toEqual('')
  expect(input3?.getAttribute('required')).toEqual('')
  expect(input3?.textContent).toEqual('')
  expect(input3?.getAttribute('placeholder')).toEqual('090-1234-5678')
  expect(input3?.getAttribute('required')).toEqual('')

  expect(input4?.getAttribute('class')).toEqual('w-80')
  expect(input4?.textContent).toEqual('')
  expect(input4?.getAttribute('type')).toEqual(null)
  expect(input4?.getAttribute('placeholder')).toEqual('example@mail.com')
  expect(input4?.getAttribute('required')).toEqual('')

  expect(input5?.textContent).toEqual('')
  expect(input5?.getAttribute('type')).toEqual('radio')
  expect(input5?.getAttribute('required')).toEqual('')
})

test('input button', () => {
  const button = document.querySelector('button')
  expect(button?.getAttribute('class')).toEqual(
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
  )
  expect(button?.textContent).toEqual('確認画面へ')
  expect(button?.getAttribute('type')).toEqual('submit')
})
