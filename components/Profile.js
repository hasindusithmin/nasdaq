
import Script from "next/script";

export default function Profile({symbol}) {

    return (
        <div id='profile-widget'>
        <Script
          id="profile-script"
          src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js"
          onLoad={() => {
            document.getElementById('profile-widget').appendChild(document.getElementById('profile-script'));
          }}>
          {
            JSON.stringify({
                "width": "100%",
                "height": "500",
                "colorTheme": "light",
                "isTransparent": false,
                "symbol": `NASDAQ:${symbol}`,
                "locale": "en"
            })
          }
        </Script>
      </div>
    )
}