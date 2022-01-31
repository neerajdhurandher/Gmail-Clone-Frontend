import React, { useState } from "react";

import '../../App.scss';
import './MailList.scss';

import PrimaryMailModel from './PrimaryMailModel.jsx';

function MailList(props) {
        
    // alert(props.modelType);

    // console.log(props.modelType)

    return (
        <div className="mail-list-main-div" >

            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />
            <PrimaryMailModel />

        </div>
    );

}
export default MailList;