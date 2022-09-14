import React, {useEffect, useState} from 'react'
import Navigation from "../Navigation";

const Header = () => {

    const [countlist, setCountList] = useState([1])
    const handleCount = () => setCountList([...countlist, Math.random()])

    useEffect(() => {
        console.log('useEffect')
        return () => {
            console.log('deleted useEffect')
        }
    }, [countlist])

    return (
        <>
            <header>
                <button onClick={handleCount}>count</button>
                <Navigation list={['Home', 'Products', 'Contacts', 'About']}/>
            </header>
            {countlist.map(count => <div key={count.toString()}>{count.toString()}</div>)}
        </>
    )
}

export default Header