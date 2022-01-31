import React from 'react';

import '../../App.scss';
import './RightSideOptions.scss';

import AddIcon from '@material-ui/icons/Add';


function RightSideOptions(){
    return (
        <div className="main-div-right">
           <img src="https://img.icons8.com/color/36/000000/google-calendar--v2.png"/>
           <img src="https://img.icons8.com/fluency/36/000000/google-meet.png"/>
           <img src="https://img.icons8.com/color/36/000000/google-contacts.png"/>
           <img src="https://img.icons8.com/color/36/000000/google-drive--v2.png"/>
           <img src="https://img.icons8.com/fluency/36/000000/google-keep.png"/>
           <img src="https://img.icons8.com/fluency/36/000000/google-photos.png"/>
           <img src="https://img.icons8.com/fluency/36/000000/google-maps-new.png"/>
            <AddIcon/>
        </div>
    );
}
export default RightSideOptions;