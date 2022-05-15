import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { QuizProvider } from './contexts'

const client = new ApolloClient({
  uri: 'https://gql-countries.herokuapp.com',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QuizProvider>
        <App />
      </QuizProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
