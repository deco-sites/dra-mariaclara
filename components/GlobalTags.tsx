import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
      <script src="p5.min.js"></script>
      <script src="vanta.trunk.min.js"></script>
      <script>
        VANTA.TRUNK({
          el: "#quem-sou-eu",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          spacing: 7.50,
          chaos: 6.00
        })
      </script>
    </Head>
  );
}

export default GlobalTags;
