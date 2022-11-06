import Head from 'next/head'
import Script from 'next/script';
import { useEffect } from 'react';
import Search from '../components/Search';
import Tag from '../components/Tag';
export default function Home() {

  useEffect(()=>{
    
     setTimeout(()=>{        
       let coll = document.getElementsByTagName('div')
       for (let i = 0;i < coll.length;i++){
        if (coll[i].style.width === '100%') coll[i].style.display = 'none';
        }
     },2500)
  },[])

  return (
    <>
      <Head>
        <title>nasdaq | home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2718245060461029'
          crossOrigin="anonymous"
        />
      </Head>
      <header className="w3-container w3-center w3-padding-48 w3-white">
        <h1 className="w3-xxxlarge"><b>NASDAQ 100 INDEX</b></h1>
        <h6>Welcome to the <span className="w3-tag">nasdaq100.vercel.app</span></h6>
      </header>
      <header id='home-header'>
        <Script
          id="stockmarketwidget"
          src="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"
          onLoad={() => {
            document.getElementById('home-header').appendChild(document.getElementById('stockmarketwidget'));
          }}>
          {JSON.stringify({
            "colorTheme": "light",
            "dateRange": "12M",
            "exchange": "US",
            "showChart": true,
            "locale": "en",
            "width": "100%",
            "height": "500",
            "largeChartUrl": "",
            "isTransparent": false,
            "showSymbolLogo": false,
            "showFloatingTooltip": false,
            "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
            "plotLineColorFalling": "rgba(255, 0, 0, 1)",
            "gridLineColor": "rgba(42, 46, 57, 0)",
            "scaleFontColor": "rgba(106, 109, 120, 1)",
            "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
            "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
            "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
          })}
        </Script>
      </header>
      <div className="w3-row w3-padding w3-border">
        <div className="w3-col l8 s12">

          <div className='w3-container w3-white'>
            <div className="w3-center">
              <h3>NASDAQ 100</h3>
              <h5>What is <span className="w3-opacity">nasdaq - 100 ?</span></h5>
            </div>
            <div className='w3-justify'>
              <img src="/nasdaq.jpg" alt="nasdaq" width={'100%'}   className="w3-padding-16" />
              <p>
                <strong>The Nasdaq-100 </strong>is a stock market index made up of 102 equity securities issued by 101 of the largest non-financial companies listed on the Nasdaq stock exchange. It is a modified capitalization-weighted index. The stocks' weights in the index are based on their market capitalizations, with certain rules capping the influence of the largest components. It is limited to companies from a single exchange, and it does not have any financial companies. The financial companies are in a separate index, the <b>NASDAQ Financial-100</b>.
              </p>
            </div>
          </div>

          <div className='w3-container'>
            <div className="w3-center">
              <h3>ECONOMIC CALENDER</h3>
            </div>
            <div className='w3-justify' id='economic'>
            <Script
              id="economiccalenderwidget"
              src="https://s3.tradingview.com/external-embedding/embed-widget-events.js"
              onLoad={() => {
              document.getElementById('economic').appendChild(document.getElementById('economiccalenderwidget'));
              }}>
              {JSON.stringify({
                "width": "100%",
                "height": "500",
                "colorTheme": "light",
                "isTransparent": false,
                "locale": "en",
                "importanceFilter": "-1,0,1"
              })}
            </Script>
            </div>
          </div>
        </div>
        <div className='w3-col l4'>

          <div className="w3-white w3-margin">
            <img src="/aboutus.jpg" alt="about us" style={{width:'100%'}} className="w3-grayscale" />
            <div className="w3-container w3-black">
              <h4>ABOUT</h4>
              <p>This resource provides you with technical analysis details, as well as the top five gaining, losing, and most active stocks for the day, key economic events, announcements, news, and fundamentals of a company..</p>
            </div>
          </div>

          <hr/>

          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding w3-black">
              <h4>Search</h4>
            </div>
            <div className="w3-container w3-white">
              <p>Enter components of the nasdaq 100.</p>
              <Search />
            </div>
          </div>

          <hr/>
          
          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding w3-black">
              <h4>Tags</h4>
            </div>
            <div className="w3-container">
               <Tag/>
            </div>
          </div>

          <hr/>

          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding w3-black">
              <h4>Advertise</h4>
            </div>
            <div className="w3-container w3-white">
              <div className="w3-container w3-display-container w3-light-grey w3-section" style={{height:'200px'}}>
                <span className="w3-display-middle">Your AD Here</span>
              </div>
            </div>
          </div>

          <hr/>

          

        </div>
      </div>   
      <div className='w3-padding'></div>
    </>
  )
}
