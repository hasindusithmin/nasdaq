import { useRouter } from 'next/router'
import { useState } from 'react';
import ndx from "../public/ndx.json";
import Info from '../components/Info';
import Technical from '../components/Technical';
import Profile from '../components/Profile';
import Fundemental from '../components/Fundemental';
import Search from '../components/Search';
import Tag from '../components/Tag';

export default function Symbol() {

    const [name,setName] = useState(false);
    const [render,setRender] = useState(false);
    const router = useRouter();
    const {symbol} = router.query;
    
    if (symbol !== undefined && render !== true) {
        const name = Object.keys(ndx).filter(key => ndx[key] === symbol.toUpperCase())[0];
        setRender(true)
        setName(name)
    }

    const home = () => {
        router.replace('/')
    }

    return (
        <>
            <div className='w3-padding'>
                <button className='w3-button w3-light-grey w3-text-blue' onClick={home}><b>HOME</b></button>
            </div>
            <header className="w3-container w3-center w3-padding-48 w3-white">
                {name && <h1 className="w3-xxxlarge"><b>{name}</b></h1>}
                <h6>
                    <Search />
                </h6>
            </header>
            <header>{render && <Info symbol={symbol}/>}</header>
            <div className="w3-row w3-padding w3-border">
                <div className="w3-col l8 s12">
                    {render && <Technical symbol={symbol}/>}
                </div>
                <div className="w3-col l4">
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
                    

                </div>
            </div>
            <div className='w3-hide-mobile w3-padding'></div>
            <div className="w3-row w3-padding w3-border">
                <div className="w3-col l6 s12">
                    {render && <Profile symbol={symbol}/>}
                </div>
                <div className="w3-col l6">
                    {render && <Fundemental symbol={symbol}/>}
                </div>
            </div>
        </>
    )
}