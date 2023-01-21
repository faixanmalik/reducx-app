import '@/styles/globals.css'
import { Provider } from 'react-redux'
import reduxStore from './state/reduxStore'

export default function App({ Component, pageProps }) {
  return <>
    <Provider store={reduxStore}>
    <Component {...pageProps} />
    </Provider>
  </>
}
