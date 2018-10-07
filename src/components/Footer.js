import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FaGithub } from 'react-icons/fa';
const styles = {
  root: {
    width: 500,
  },
};

function Footer(props) {
    return (
        <div style={{position: 'fixed', bottom: 0, backgroundColor: 'black', width: '100%', padding: '.5em'}}>  
          <Typography style={{color: 'white', textAlign: 'center'}}>
          <a style={styles.link} href="https://github.com/hrubert" rel="noopener noreferrer" target='_blank'><FaGithub style={{color: 'white'}} /></a> &nbsp;
          Tracy Herbert | 2018</Typography>
        </div>
    )
}

export default Footer;