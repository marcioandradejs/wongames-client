import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)
    // verifique o TextField email
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    //verifique password
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    //verifique button
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Forgot your password\?/i })
    ).toBeInTheDocument()
  })

  it('should render text to sign up if already have an account', () => {
    renderWithTheme(<FormSignIn />)
    // verificar o texto
    expect(screen.getByText(/Don’t have an account\?/i)).toBeInTheDocument()
    // verificar o link
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
  })
})
