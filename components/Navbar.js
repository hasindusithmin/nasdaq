import Script from 'next/script'


export default function Navbar() {
   
    return <>
        <div id="navbar">
            <Script
                id="ticker-widget"
                src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
                onLoad={() => {
                    document.getElementById('navbar').appendChild(document.getElementById('ticker-widget'));
                }}>
                {JSON.stringify({
                    "symbols": [
                        {
                            "description": "",
                            "proName": "NASDAQ:AAPL"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ABNB"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ADBE"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ADI"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ADP"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ADSK"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:AEP"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ALGN"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:AMAT"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:AMD"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:AMGN"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:AMZN"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ANSS"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ASML"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ATVI"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:AVGO"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:AZN"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:BIDU"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:BIIB"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:BKNG"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:CDNS"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:CEG"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:CHTR"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:CMCSA"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:COST"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:CPRT"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:CRWD"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:CSCO"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:CSX"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:CTAS"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:CTSH"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:DDOG"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:DLTR"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:DOCU"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:DXCM"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:EA"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:EBAY"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:EXC"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:FAST"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:FISV"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:FTNT"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:GILD"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:GOOG"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:GOOGL"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:HON"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:IDXX"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ILMN"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:INTC"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:INTU"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ISRG"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:JD"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:KDP"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:KHC"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:KLAC"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:LCID"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:LRCX"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:LULU"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:MAR"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:MCHP"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:MDLZ"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:MELI"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:META"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:MNST"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:MRNA"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:MRVL"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:MSFT"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:MTCH"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:MU"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:NFLX"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:NTES"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:NVDA"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:NXPI"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ODFL"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:OKTA"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ORLY"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:PANW"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:PAYX"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:PCAR"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:PDD"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:PEP"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:PYPL"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:QCOM"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:REGN"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:ROST"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:SBUX"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:SGEN"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:SIRI"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:SNPS"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:SPLK"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:SWKS"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:TEAM "
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:TMUS"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:TSLA"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:TXN"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:VRSK"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:VRSN"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:VRTX"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:WBA"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:WDAY"
                        },
                        {
                            "description": "",
                            "proName": "NASDAQ:XEL"
                        }
                    ],
                    "showSymbolLogo": true,
                    "colorTheme": "light",
                    "isTransparent": false,
                    "displayMode": "adaptive",
                    "locale": "en"
                }
                )}
            </Script>
        </div>
    </>
}

