import React, { useState } from "react";

import '../../App.scss';
import '../../color.scss';
import './CenterPage.scss';

import TopOptionsBar from '../TopOptionsBar/TopOptionsBar.jsx';
import MailList from '../MailList/MailList.jsx';

import PrimaryIcon from '@material-ui/icons/InboxRounded';
import SocialIcon from '@material-ui/icons/PeopleAltRounded';
import PromotionIcon from '@material-ui/icons/LocalOfferRounded';

function MailTypeFun(props) {

    return (
        <div className={`mail-type-div-item
            ${props.type == "Primary" ? "primary" : props.type == "Social" ? "social" : props.type == "Promotion" ? "promotion" : ""}
        `} >
            <span className="mail-type-item-icon">
                {props.icon}
            </span>
            <span className="mail-type-title">
                {props.type}
            </span>
            <span className="new-block">
                30 New
            </span>

        </div>
    );
}

function CeneterPage() {
    const [currentType, setCurrentType] = useState("0");

    function setType(props) {
        setCurrentType(props);
    }
    return (
        <div className="main-div-center">
            <span className='top-options-bar-div'>
                <TopOptionsBar />
            </span>
            <div className='mail-list-div'>
                <section className="mail-type-div">
                    <span onClick={() => setType("0")}>
                    <MailTypeFun icon = {<PrimaryIcon/>} type="Primary" />
                    </span>

                    <span onClick={() => setType("1")}>
                    <MailTypeFun icon ={<SocialIcon />} type="Social" />
                    </span>

                    <span onClick={() => setType("2")}>
                    <MailTypeFun icon ={<PromotionIcon />} type="Promotion" />
                    </span>
                </section>

                <div className='mail-list'>
                    <MailList modelType = {currentType} />
                </div>
            </div>
        </div>
    );
}
export default CeneterPage;