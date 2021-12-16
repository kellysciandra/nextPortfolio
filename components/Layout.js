import React from "react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import styles from "./layout.module.css";

Router.events.on("routeChangeStart", (url) => {
  // console.log(`Loading: ${url}`);
  NProgress.start();
  NProgress.inc();
});
Router.events.on("routeChangeComplete", () => NProgress.done(true));
Router.events.on("routeChangeError", () => NProgress.done(true));

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>kellysciandradev</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;900&display=swap"
        rel="stylesheet"
      />
     
      <link rel="stylesheet" rel="preconnect" href={"nprogress.css"} />
      {/* <script type="text/javascript">
                {media}
            </script> */}
            <script src="https://kit.fontawesome.com/376f802ef0.js" crossOrigin="anonymous"></script>
    </Head>

    {children}
  </div>
);

export default Layout;
