import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { store, wrapper } from '@/redux';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link
        href="/favicon.ico"
        rel="icon"
      />

      <meta
        content="webkit"
        name="renderer"
      />
      <meta
        content="IE=edge"
        httpEquiv="X-UA-Compatible"
      />
      <meta
        content="#000000"
        name="theme-color"
      />

      <meta
        content=""
        name="description"
      />
      <meta
        content=""
        name="keywords"
      />
      <meta
        content="width=device-width, initial-scale=1, user-scalable=no"
        name="viewport"
      />

      <title>自用模板</title>
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

export default wrapper.withRedux(MyApp);
