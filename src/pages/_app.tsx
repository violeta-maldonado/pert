import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from 'src/redux/store';
import { Provider as ReduxProvider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReduxProvider store={store}>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </ReduxProvider>
    </>
  )
}

export default MyApp
