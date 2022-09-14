import React from 'react';
import './navigation.scss'

const Navigation = ({list}) => {
    return (
        <nav>
            <ul>{list.map((item) => (
                    <li key={item}>
                        <a href={`/${item.toLowerCase()}`}>{item}</a>
                    </li>
                )
            )}
            </ul>
        </nav>
    )
}

export default Navigation