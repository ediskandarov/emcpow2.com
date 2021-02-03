import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { YM_ACCOUNT_ID } from "../lib/yandex";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html className="dark">
        <Head>
          {/* <!-- Yandex.Metrika counter --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(${YM_ACCOUNT_ID}, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                });
              `,
            }}
          />
          <noscript>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${YM_ACCOUNT_ID}`}
                className="absolute"
                style={{ left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
          {/* <!-- /Yandex.Metrika counter --> */}
        </Head>
        <body className="bg-white dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
