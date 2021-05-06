import React, { Component } from 'react';
import {AppBar, Toolbar, IconButton, Typography, InputBase, Switch, withStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles/NavBarStyles';

class Navbar extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span>flag</span>
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            color="inherit"
                        >
                            App title
                        </Typography>
                        <Switch/>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder="Search..." classes={{
                                root:classes.inputRoot,
                                input:classes.inputInput
                            }}/>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);