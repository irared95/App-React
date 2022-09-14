import React, {useState} from 'react'
import './footer.scss'

const Footer = () => {
    const [like, setLike] = useState(true)

    const handleSetLike = () => {
        setLike(!like)
    }

    console.log('rendered')

    return (
        <footer className="nav">
            <p>The end {like ? 'Liked' : 'unLiked'}</p>
            <button onClick={handleSetLike}>ste like</button>
        </footer>
    )
}

export default Footer