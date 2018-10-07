import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import ContactPhone from '@material-ui/icons/ContactPhone';
import Tooltip from '@material-ui/core/Tooltip';
import friendArray from './friendArray'

class AlertDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
  }


  handleClickOpen = () => {
    this.setState({ open: true });
    this.props.onPhone();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  chooseResponse = (questionNum) => {
    let goodAns = "'I got this', your friend says triumphantly. 'I was just reading about this last week. The answer is " + this.props.answer.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"') + "'.";
    let badAns = "There is a long silence on the other end of the phone line. 'Sorry, I don't even understand the question,' your friend replies.";
    if (questionNum < 5) {
        return goodAns
    } else if (questionNum < 10 ) {
        if (Math.floor(Math.random() * 3) === 0) {
            return badAns
        } else {
            return goodAns
        }
    } else {
        if (Math.floor(Math.random() * 3) === 0) {
            return goodAns
        } else {
            return badAns
        }
    }
  }

  num = Math.floor(Math.random() * friendArray.length)
  render() {
    let ans = this.chooseResponse(this.props.currentQuestion);
    return (
      <div style={{display: "inline-block"}}>
        <Tooltip title="Phone a friend"><IconButton onClick={this.handleClickOpen} aria-label="Phone A Friend"><ContactPhone style={{color: 'white'}}/></IconButton></Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Phone a friend:"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You call {friendArray[this.num]} and repeat the question. {ans}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              End Call
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;