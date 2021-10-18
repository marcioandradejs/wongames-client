import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Banner />)
    // verificar se o title existe
    // verificar se o subtitle existe
    // verificar se o image existe
  })
})
