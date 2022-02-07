import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html>
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

          <script>window.global = window;</script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
