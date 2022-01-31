import React, { useState } from "react";

import '../../App.scss';
import './TopOptionsBar.scss';

import ArchiveIcon from '@material-ui/icons/ArchiveRounded';
import ReportIcon from '@material-ui/icons/ReportRounded';
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import MarkunreadIcon from '@material-ui/icons/MarkunreadRounded';
import WatchLaterIcon from '@material-ui/icons/WatchLaterRounded';
import AddTaskIcon from '@material-ui/icons/QueueRounded';
import NextWeekIcon from '@material-ui/icons/NextWeekRounded';
import LabelIcon from '@material-ui/icons/LabelRounded';
import RefreshIcon from '@material-ui/icons/RefreshRounded';
import MoreVertIcon from '@material-ui/icons/MoreVertRounded';
import CheckBoxBlankIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import CheckBoxIcon from '@material-ui/icons/CheckBoxRounded';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDownRounded';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { Add } from '@material-ui/icons';

function TopOptionsBar() {

    const [select_checkbox, setCheckbox] = useState(false);

    const sort_options = ['All', 'None', 'Read', 'Unread', 'Starred', 'Unstarred'];
    const default_sort_options = sort_options[0];

    let starting = 1;
    let pageLimit = 10;
    let totalMails = 69;

    function revert_checkbox(evt) {
        evt.preventDefault();
        setCheckbox(!select_checkbox);
    }

    function sortBy(props) {
        // alert(`sort,${sort_options[props]}`)

        openDropDown("close");
    }

    function openDropDown(props) {

        var x = document.getElementById("dropdown-content-id");
        if (props === "open") {
            x.style.display = "block";
            // x.addEventListener("mouseout",openDropDown("close"))
        } else if (props === "close") {
            x.style.display = "none";
        }
    }

    return (
        <div className='top-bar-main-div'>
            <section className='left-side-options'>
                <section className="spacing">
                    <section className={`${select_checkbox ?
                        "on-select-hide" : "on-select-show"}`}>
                        <CheckBoxBlankIcon onClick={revert_checkbox} />
                    </section>
                    <section className={`${select_checkbox ?
                        "on-select-show" : "on-select-hide"}`}>
                        <CheckBoxIcon onClick={revert_checkbox} />
                    </section>

                    <section className="dropdown" >
                        <ArrowDropDownIcon onClick={() => openDropDown("open")} />
                        <div id="dropdown-content-id" className="dropdown-content">
                            <span onClick={() => sortBy(0)}>All</span>
                            <span onClick={() => sortBy(1)}>None</span>
                            <span onClick={() => sortBy(2)}>Read</span>
                            <span onClick={() => sortBy(3)}>Unread</span>
                            <span onClick={() => sortBy(4)}>Starred</span>
                            <span onClick={() => sortBy(5)}>Unstarred</span>
                        </div>
                    </section>

                    <section className={`spacing ${select_checkbox ? "on-select-show" : "on-select-hide"}`}>
                        <ArchiveIcon />
                        <ReportIcon />
                        <DeleteIcon />
                        <MarkunreadIcon />
                        <WatchLaterIcon />
                        <AddTaskIcon />
                        <NextWeekIcon />
                        <LabelIcon />
                    </section>
                    <RefreshIcon />
                    <MoreVertIcon />
                </section>
            </section>
            <section className='right-side-options spacing'>
                <span>
                    {starting}-{pageLimit} of {totalMails}
                </span>
                <ArrowLeftIcon className="pointer"/>
                <ArrowRightIcon className="pointer"/>
            </section>
        </div>

    );
}
export default TopOptionsBar;