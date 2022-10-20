
import Script from "next/script";

export default function Fundemental({symbol}) {

    return (
        <div id='fundemental-widget'>
        <Script
          id="fundemental-script"
          src="https://s3.tradingview.com/external-embedding/embed-widget-financials.js"
          onLoad={() => {
            document.getElementById('fundemental-widget').appendChild(document.getElementById('fundemental-script'));
          }}>
          {
            JSON.stringify({
                "colorTheme": "light",
                "isTransparent": false,
                "largeChartUrl": "",
                "displayMode": "regular",
                "width": "100%",
                "height": "500",
                "symbol": `NASDAQ:${symbol}`,
                "locale": "en"
            })
          }
        </Script>
      </div>
    )
}