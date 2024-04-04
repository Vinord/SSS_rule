import React from "react";
import Button from './Button'
import Home from './Home'

const Lab2 = () => {
    function Heh() {
        print('Heh')
    }
    return (
        <div>
            <h2>Приложение Hello, World!</h2>
            <Home />
            <h2>Реализация кнопки</h2>
            <Button label="Нажми на меня" onclick={Heh}></Button>
        </div>

    )
}
export default Lab2