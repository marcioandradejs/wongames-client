import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'

// Utilizar o padrão GET_HOME | QUERY_HOME
export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: "2021-11-23" }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }
  }

  ${BannerFragment}
  ${GameFragment}
`
