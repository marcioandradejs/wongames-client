import { useQuery, gql } from '@apollo/client'

import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'

const GET_GAMES = gql`
  query getGames {
    games {
      name
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (Nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (Vai para o client, faz gydrate do lado do client depois do primeiro request)
export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_GAMES })

  // retorno dos dados
  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}
