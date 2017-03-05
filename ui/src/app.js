import React from 'react'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Actions, Scene, Router } from 'react-native-router-flux'

import {Test} from './components/test'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: ''}),
})

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='test' component={Test} title='Test' initial={true} type='replace' />
  </Scene>
)

export const routes = () => 
  <ApolloProvider client={client}>
    <Router scenes={scenes}/>
  </ApolloProvider>