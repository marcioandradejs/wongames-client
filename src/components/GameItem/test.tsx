import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    // verificar o title se foi renderizado
    expect(
      screen.getByRole('heading', { name: /Red Dead Redemption 2/i })
    ).toBeInTheDocument()

    // verificar a imagem
    // expect(screen.getByAltText(/Red Dead Redemption 2/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // verificar o preco
    expect(screen.getByText(/R\$ 215,00/i)).toBeInTheDocument()
  })
})
