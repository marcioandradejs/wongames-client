import { render, screen } from '@testing-library/react'

import GameCard from '.'

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCard />)

    expect(
      screen.getByRole('heading', { name: /GameCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  // renderizar o GameCard

  // verificar se o title foi renderizado
  // verificar se o developer foi renderizado
  // verificar se o img foi renderizado
  // verificar se o price foi renderizado
})
