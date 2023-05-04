import { render, screen } from '@testing-library/react';
import { CusCard } from './components/CusCard/CusCard';
import { counterWord } from './utils/couterWords';

const CusCardMockupData = {
  _id: '6452100a6233be8b2dee6849',
  name: 'My first NFT',
  image: 'https://converted-media.jpgstoreapis.com/QmVa8jXg3AqDFzTnYsKdGkNVW4wqJBq1YodejJP33npCfR.sz_206932.dims_800x800.anim_0.webp',
  value: 2000,
  info: "My First NFT"
}

test("Custom NFT Card custom value check", () => {
  render(<CusCard data={CusCardMockupData} />)
  const expectedValue = 15; // "My First NFT" value is 5*3
  expect(screen.getByText(expectedValue)).toBeInTheDocument();
})

test('Check function calculates amound of words', () => {
  render(<p>{counterWord('Hello every programmers!')}</p>);
  expect(screen.getByText('3')).toBeInTheDocument();
})