import React from 'react';

import './LeftSideOptions.scss';

import AddIcon from '@material-ui/icons/Add';

import PrimaryInboxIcon from '@material-ui/icons/InboxRounded';
import StarFilledIcon from '@material-ui/icons/StarRounded';
import WatchLaterIcon from '@material-ui/icons/WatchLaterRounded';
import SendIcon from '@material-ui/icons/SendRounded';
// import DraftIcon from '@material-ui/icons/PendingActionsRounded';
import JunkIcon from '@material-ui/icons/LabelRounded';
import LabelImportant from '@material-ui/icons/LabelImportant';
import ChatIcon from '@material-ui/icons/SpeakerNotesRounded';
import AllMailsIcon from '@material-ui/icons/MarkunreadRounded';
import SpanIcon from '@material-ui/icons/ReportRounded';
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import SettingIcon from '@material-ui/icons/SettingsRounded';
import { Component } from 'react';
import { DraftsRounded } from '@material-ui/icons';

const Item = (props) =>{
    console.log("name ", props.name);
    return(
        <div className='left-item-model'>
            {props.compo}
            <p>{props.name}</p>
            
        </div>
    );
}

function LeftSideOptions(){

    return (
        <div className="main-div-left">
            <div className='compose-div'>
                <AddIcon/>
                <p>Compose</p>
            </div>
            <span className='vertical-line'/>
            <Item compo = {<PrimaryInboxIcon />}  name = {"Inbox"} />
            <Item compo = {<StarFilledIcon />}  name = {"Starred"} />
            <Item compo = {<WatchLaterIcon />}  name = {"Snoozed"} />
            <Item compo = {<SendIcon />}  name = {"Send"} />
            <Item compo = {<DraftsRounded />}  name = {"Draft"} />
            <Item compo = {<JunkIcon />}  name = {"Junk"} />
            <Item compo = {<ChatIcon />}  name = {"Chat"} />
            <Item compo = {<LabelImportant />}  name = {"Important"} />
            <Item compo = {<AllMailsIcon />}  name = {"All Mails"} />
            <Item compo = {<SpanIcon />}  name = {"Span"} />
            <Item compo = {<DeleteIcon />}  name = {"Trash"} />
            <Item compo = {<SettingIcon />}  name = {"Manage labels"} />

            <span className='vertical-line'/>

        </div>
    );

}
export default LeftSideOptions;