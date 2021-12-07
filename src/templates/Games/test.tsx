import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'

import Games from '.'
import { QUERY_GAMES } from 'graphql/queries/games'

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
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: {
                limit: 15 // Precisa ter exatamente o mesmo valor da index
              }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'Project Hospital',
                    slug: 'project-hospital',
                    cover: {
                      url: '/uploads/project_hospital_9c8d00a655.jpg'
                    },
                    developers: [{ name: 'Oxymoron Games' }],
                    price: 23.79,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
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

    expect(await screen.findByText(/Project Hospital/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
