import { render, screen } from 'utils/test-utils'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    render(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    // verifique se tem 2 logos
    expect(screen.getAllByRole('img', { name: 'Won Games' })).toHaveLength(2)

    // verifica se tem heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    // verifica se tem subtitulo
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()

    // verifica se tem o title do content
    expect(
      screen.getByRole('heading', {
        name: /Auth title/i
      })
    ).toBeInTheDocument()

    // verifica se o children tá sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
