import Document, { Html, Head, Main, NextScript } from "next/document";
import React, {useState} from "react";


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }



  render() {
    
    return (
      <Html>
        <Head>
          
        <link rel="shortcut icon"  href="/ICON/favicon.ico"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link
            href="https://fonts.googleapis.com/css2?family=Allerta&family=Bayon&display=swap"
            rel="stylesheet"
          />


          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet"/>

        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
