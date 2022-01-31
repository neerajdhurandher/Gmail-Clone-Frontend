import React, { useState } from "react";

import '../../App.scss';
import './PrimaryMailModel.scss';

import DragIndicatorIcon from '@material-ui/icons/DragIndicatorRounded';
import CheckBoxBlankIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import CheckBoxIcon from '@material-ui/icons/CheckBoxRounded';
import StarOutlineIcon from '@material-ui/icons/StarOutlineRounded';
import StarFilledIcon from '@material-ui/icons/StarRounded';

import MoreHorizIcon from '@material-ui/icons/MoreHorizRounded';
import ArchiveIcon from '@material-ui/icons/ArchiveRounded';
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import MarkunreadIcon from '@material-ui/icons/MarkunreadRounded';
import WatchLaterIcon from '@material-ui/icons/WatchLaterRounded';


function MailModel(props) {
    const [select_checkbox, setCheckbox] = useState(false);
    const [starBox, setStarBox] = useState(false);

    function revert_checkbox(evt) {
        evt.preventDefault();
        setCheckbox(!select_checkbox);
    }
    function revert_starBox(evt) {
        evt.preventDefault(select_checkbox);
        setStarBox(!starBox);
    }

    function click() {
        // console.log("clicked");
    }

    return (
        <div className="main-div" onClick={click()}>

            <div className={`mail-model-main-div ${select_checkbox ?
                "selected-mail-bg" : "normal-mail-bg"}`}>

                <section className="left-icons">

                    <section className="left-icon-hover">
                        <DragIndicatorIcon />
                    </section>

                    <section className={`${select_checkbox ?
                        "on-select-hide" : "on-select-show"}`}>
                        <CheckBoxBlankIcon onClick={revert_checkbox} />
                    </section>
                    <section className={`${select_checkbox ?
                        "on-select-show" : "on-select-hide"}`}>
                        <CheckBoxIcon onClick={revert_checkbox} />
                    </section>

                    <section className={`${starBox ?
                        "on-select-hide" : "on-select-show"}`}>
                        <StarOutlineIcon onClick={revert_starBox} />
                    </section>
                    <section className={`${starBox ?
                        "on-select-show" : "on-select-hide"}`}>
                        <StarFilledIcon onClick={revert_starBox} />
                    </section>

                </section>

                <section className="mail-sender">
                    Sender Name
                    <span className="new-mail-sec">
                        New
                    </span>
                </section>

                <section className="mail-description">
                    <p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
                </section>

                <section className="right-icons">
                    <span className="date-time-span">8.30 pm 10 jan</span>
                </section>

            </div>

            <div className="right-icons-hover">
                <MoreHorizIcon />
                <ArchiveIcon />
                <DeleteIcon />
                <MarkunreadIcon />
                <WatchLaterIcon />
            </div>
        </div>
    );
}
export default MailModel;