import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()
  })
})
