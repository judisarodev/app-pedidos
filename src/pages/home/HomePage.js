import React from "react";
import { Menu } from "../../components/menu/Menu";
import { Button } from "../../components/button/Button";
import { Title } from "../../components/title/Title";
import './homePage.css';

const HomePage = () => {
    return(<div className="home-page__container">
        <Menu />
        <Title />
        <Button />
    </div>);
};

export { HomePage };