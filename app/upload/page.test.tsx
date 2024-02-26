import { expect, test } from 'bun:test'
import { render } from '@testing-library/react'
import Upload from './page'

document.body.innerHTML = ''
render(<Upload />)

test('main test', () => {
  const main = document.querySelector('main')
  expect(main?.getAttribute('class')).toEqual('flex min-h-screen flex-col p-24')
  expect(main?.textContent).toEqual(
    'アップロードフォームお名前所属会社社員番号連絡可能な個人電話番号メールアドレス個人情報提供に同意いただけますか?同意する画像をアップロードする確認画面へ',
  )
})
