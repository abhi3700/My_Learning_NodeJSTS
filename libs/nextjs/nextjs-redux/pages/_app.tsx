import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// Set up with Redux architecture.
// We can wrap the individual pages as well, but that is not recommended;
// when we navigate from one page to another, if that particular page is not wrapped, it will crash.
// So, it's better to wrap with entire app.
export default wrapper.withRedux(MyApp);
