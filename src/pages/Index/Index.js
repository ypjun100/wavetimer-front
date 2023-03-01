import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setDarkTheme } from "../../slices/themeSlice";
import './index.css';

export default function Index() {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            dispatch(setDarkTheme());
        }
    }, []);

    useEffect(() => {
        console.log('change received');
    }, [theme]);

    return (
        <div className="index">
            <div className="header">
                <div className="logo" title="wavetimer">
                    <img src={require('../../assets/images/logo.png')} />
                    <h2>wavetimer</h2>
                </div>
                <div className="menu">
                    <button className="icon button-header"><img src={require(`../../assets/images/theme-${theme}.png`)}/></button>
                    <button className="icon button-header"><img src={require(`../../assets/images/settings-${theme}.png`)}/></button>
                    <button className={"button-header " + theme + "-gray"}>Feedback</button>
                    <button className="button-header blue">Sign In</button>
                </div>
            </div>
        </div>
    )
}