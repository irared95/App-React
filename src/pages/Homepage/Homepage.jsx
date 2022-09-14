import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button"
import Greetings from "../../components/Greetings/ Greetings";
import Users from "../../components/User/Users";
import Modal from "../../components/Modal/Modal";


const Homepage = () => {
    const [showHeader, setShowHeader] = useState(true)
    const handleSetHeader = () => setShowHeader(false)

    return (
        <>
            <button onClick={handleSetHeader}>Hide header</button>
            {showHeader && <Header/>}
            <main>
                <Modal />
                <section></section>
                <Aside/>
                <Content/>
                <Button text="My button" className="is--huge" type="submit"/>
                <Button text="" className="is--huge"/>
                <Greetings time="15" name="Вова"/>
                <Users users={[{firstName: 'Monya', lastName: 'Mon', age: 3, id: '1'}, {
                    firstName: 'Vova',
                    lastName: 'Dav',
                    age: 27,
                    id: '2'
                }, {
                    firstName: 'Ira',
                    lastName: 'Red',
                    age: 26,
                    id: '3'
                }]}/>
            </main>
            <Footer/>
        </>

    )
}

export default Homepage