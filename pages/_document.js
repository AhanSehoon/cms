import Document, { Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* Global Head 에 적용시킬 녀석! */}
        </Head>
        <body>
          <Main /> {/* 각각 라우트에 해당하는 페이지가 렌더링 되는 부분 */}
          <NextScript /> {/* Next.js 관련한 자바스크립트 파일 */}
        </body>
      </html>
    )
  }
}