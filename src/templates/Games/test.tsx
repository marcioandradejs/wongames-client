import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock } from './mocks'

import Games from '.'
import userEvent from '@testing-library/user-event'
import apolloCache from 'utils/apolloCache'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render sections', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render loading when starting the template', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    // ut starts wutgiyt data
    // shows loading
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    // we wait until we have data to get the alements
    // get => Tem certeza do elemento
    // query => Não tem o elemento
    // find => Processos assincronos
    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    screen.logTestingPlaygroundURL()

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })
})
