import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'

// Utilizar o padrão GET_HOME | QUERY_HOME
export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }
  }

  ${BannerFragment}
`
