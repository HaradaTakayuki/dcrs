import { expect, test } from 'bun:test'
import { render } from '@testing-library/react'
import Upload from './page'

document.body.innerHTML = ''
render(<Upload />)

test('main test', () => {
  const main = document.querySelector('main')
  expect(main?.getAttribute('class')).toEqual(
    'min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8',
  )
  expect(main?.textContent).toEqual(
    'アップロードフォームは必須項目ですお名前所属会社以下から選択して下さい。株式会社オープンアップグループ株式会社ビーネックステクノロジーズ社員番号連絡可能な個人電話番号メールアドレス個人情報提供への同意同意する画像をアップロードする確認画面へ',
  )
})
