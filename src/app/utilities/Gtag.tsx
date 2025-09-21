// Declare dataLayer on the Window interface
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function Gtag() {
return(
    <>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1Y957KW3PF"></script>
        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag(&#39;js&#39;, new Date());
              gtag(&#39;config&#39;, &#39;G-1Y957KW3PF&#39;);
            `,
          }}
        />
    </>
);
}