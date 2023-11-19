import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Shir from '../../images/shir.png'

const font =  "'Open Sans', sans-serif";
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '5px solid black',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: 'none',
        height: '500px',
        width: '700px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        lineHeight: '27px',
        textAlign: 'center',
        fontFamily: font,
        fontSize: '17px'
    }
}));

export default function AnimatedModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
      <div className="about-title" onClick={handleOpen}>about me</div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <img src={Shir} alt="" className="shir"/>
                        <p>
                            Hello there!<br/>
I'm Shir, a web developer looking to continue his professional journey and growth.<br/>
Hello there! I'm Shir, an enthusiastic front-end developer with a strong foundation in web technologies and a keen interest in evolving into a technical product manager role. Passionate about user experience, design, and collaborative development.<br/>
I Would love to talk and tell you more about myself,<br/>
Shir Decker
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}