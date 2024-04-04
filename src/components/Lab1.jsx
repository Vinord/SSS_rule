import React, { useState } from "react";
import Button from "./Button";

const Lab1 = () => {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        setCounter(counter - 1)
    }
    function Verf() {
        const login = document.getElementById("log").value;
        const password = document.getElementById("pass").value;
        if (login == "admin" && password == "admin") {
            alert("Данные верны")
            Storage()
        } else {
            alert("Неверные данные!")
        }
    }
    function Storage() {
        const login = document.getElementById("log").value;
        const password = document.getElementById("pass").value;
        console.log(localStorage.setItem(login, password))
    }

    return (
        <div>
            <div>
                <h2>Создание Счётчика!</h2>
                <h3>Счётчик: {counter}</h3>
                <Button label={'Прибавить 1'} onclick={increment}></Button>
                <Button label={'Вычесть 1'} onclick={decrement}></Button>
            </div>

            <div>
                <h2>Форма</h2>
                <form onSubmit={Verf}>
                    <div>
                        <label>Введите логин:</label>
                        <input placeholder="Логин" type="text" maxLength="25" size="40" name="login" id='log'></input>
                    </div>
                    <div>
                        <label>Введите пароль:</label>
                        <input placeholder="Пароль" type="password" maxLength='30' size='40' name="password" id="pass"></input>
                    </div>
                    <div>
                        <input type="submit" value='Войти' onSubmit={Storage} />
                        <input type="reset" value='Сбросить' />
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Lab1