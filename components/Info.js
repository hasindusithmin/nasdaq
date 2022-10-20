
import Script from "next/script";

export default function Info({symbol}) {

    return (
        <div id='info-widget'>
        <Script
          id="symbol-info-widget"
          src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
          onLoad={() => {
            document.getElementById('info-widget').appendChild(document.getElementById('symbol-info-widget'));
          }}>
          {
            JSON.stringify({
                "symbol": `NASDAQ:${symbol}`,
                "width": "100%",
                "height":"250",
                "locale": "en",
                "colorTheme": "light",
                "isTransparent": false
            })
          }
        </Script>
      </div>
    )
}