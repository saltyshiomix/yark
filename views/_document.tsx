import React from 'react';
import {
  Document,
  Head,
  Main,
} from '@react-ssr/nestjs-express';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>YARK</title>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
        </body>
      </html>
    );
  }
};
