import React from 'react' ;
import "./SwipeButton.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';


function SwipeButton(){
	
	return (

	<div className="SwipeButtons">
       
       <IconButton className="SwipeButton_repeat">
       <ReplayIcon fontSize="large" />
       </IconButton>
        
       <IconButton className="SwipeButton_left">
       <CloseIcon fontSize="large" />
       </IconButton>

       <IconButton className="SwipeButton_star">
       <StarRateIcon Icon fontSize="large" />
       </IconButton>

       <IconButton className="SwipeButton_right">
       <FavoriteIcon fontSize="large" />
       </IconButton>

       <IconButton className="SwipeButton_lightning">
       <FlashOnIcon fontSize="large" />
       </IconButton>
       </div>

		);
}

export default SwipeButton;