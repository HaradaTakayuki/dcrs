// import React from 'react';
import { expect, test } from 'bun:test'
import { render } from '@testing-library/react'
import { UploadFormHook } from './UploadFormHook' // UploadFormHookコンポーネントのインポート

document.body.innerHTML = ''
render(<UploadFormHook />)

test('div test', () => {
  const div1 = document.querySelectorAll('div')[1]
  expect(div1?.getAttribute('class')).toEqual(
    'grid grid-cols-1 gap-6 [&>labe:input]:w-80',
  )
  expect(div1?.textContent).toEqual(
    'お名前所属会社以下から選択して下さい。株式会社オープンアップグループ株式会社ビーネックステクノロジーズ社員番号連絡可能な個人電話番号メールアドレス個人情報提供への同意同意する画像をアップロードする確認画面へ',
  )
})

test('input test', () => {
  const input0 = document.querySelectorAll('input')[0]
  const input1 = document.querySelectorAll('input')[1]
  const input2 = document.querySelectorAll('input')[2]
  const input3 = document.querySelectorAll('input')[3]
  const input4 = document.querySelectorAll('input')[4]
  expect(input0?.getAttribute('class')).toEqual('block w-80')
  expect(input0?.textContent).toEqual('')
  expect(input0?.getAttribute('placeholder')).toEqual('オープン太郎')
  expect(input0?.getAttribute('required')).toEqual('')
  expect(input1?.getAttribute('class')).toEqual('block w-80')
  expect(input1?.textContent).toEqual('')
  expect(input1?.getAttribute('placeholder')).toEqual('123456')
  expect(input1?.getAttribute('required')).toEqual('')
  expect(input2?.getAttribute('required')).toEqual('')
  expect(input2?.textContent).toEqual('')
  expect(input2?.getAttribute('placeholder')).toEqual('090-1234-5678')
  expect(input2?.getAttribute('required')).toEqual('')
  expect(input3?.getAttribute('class')).toEqual('block w-80')
  expect(input3?.textContent).toEqual('')
  expect(input3?.getAttribute('type')).toEqual(null)
  expect(input3?.getAttribute('placeholder')).toEqual('example@mail.com')
  expect(input3?.getAttribute('required')).toEqual('')
  expect(input4?.textContent).toEqual('')
  expect(input4?.getAttribute('type')).toEqual('checkbox')
  expect(input4?.getAttribute('required')).toEqual('')
})

test('input button test', () => {
  const button = document.querySelector('button')
  expect(button?.getAttribute('class')).toEqual(
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
  )
  expect(button?.textContent).toEqual('確認画面へ')
  expect(button?.getAttribute('type')).toEqual('submit')
})

test('label test', () => {
  const label0 = document.querySelectorAll('label')[0]
  const label1 = document.querySelectorAll('label')[1]
  const label2 = document.querySelectorAll('label')[2]
  expect(label0?.getAttribute('class')).toEqual('group block')
  expect(label0?.textContent).toEqual('お名前')
  expect(label1?.getAttribute('class')).toEqual('block')
  expect(label1?.textContent).toEqual(
    '所属会社以下から選択して下さい。株式会社オープンアップグループ株式会社ビーネックステクノロジーズ',
  )
  expect(label2?.getAttribute('class')).toEqual('block')
  expect(label2?.textContent).toEqual('社員番号')
})
