import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import InsertChart from '@material-ui/icons/InsertChart';
import Tooltip from '@material-ui/core/Tooltip';
import ReactChartkick, { PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class AlertDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
  }


  handleClickOpen = () => {
    this.setState({ open: true });
    this.props.onPoll();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  chooseResponse = (questionNum) => {
    let goodAns = <PieChart data={shuffle([[this.props.answer.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"'), 64], [this.props.wrongAns[0].replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"'), 3], [this.props.wrongAns[1].replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"'), 10], [this.props.wrongAns[2].replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"'), 23]])} />;
    let badAns = <PieChart data={shuffle([[this.props.answer.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"'), 25], [this.props.wrongAns[0].replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"'), 24], [this.props.wrongAns[1].replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"'), 31], [this.props.wrongAns[2].replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"'), 20]])} />;
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

  render() {
    let ans = this.chooseResponse(this.props.currentQuestion);
    return (
      <div style={{display: "inline-block"}}>
        <Tooltip title="Ask the Audience"><IconButton onClick={this.handleClickOpen} className="" aria-label="Ask The Audience"><InsertChart /></IconButton></Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Ask The Audience:"}</DialogTitle>
          <DialogContent>
            {ans}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close Poll
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;