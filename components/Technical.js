import Script from "next/script";

export default function Technical({symbol}) {

    return (
        <div id='ta-widget'>
        <Script
          id="taanalysis"
          src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
          onLoad={() => {
            document.getElementById('ta-widget').appendChild(document.getElementById('taanalysis'));
          }}>
          {
            JSON.stringify({
                "interval": "1m",
                "width": "100%",
                "isTransparent": false,
                "height": "460",
                "symbol": `NASDAQ:${symbol}`,
                "showIntervalTabs": true,
                "locale": "en",
                "colorTheme": "light"
            })
          }
        </Script>
      </div>
    )

}