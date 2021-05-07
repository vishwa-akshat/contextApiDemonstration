import React, { Component } from 'react';
import {AppBar, Toolbar, IconButton, Typography, InputBase, Switch, withStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles/NavBarStyles';
import {ThemeContext} from './contexts/ThemeContext';
import {withLanguageContext} from './contexts/LanguageContext';

const content = {
    english:{
        search:'Search',
        flag:'EN'
    },
    french:{
        search:'Chercher',
        flag:'FE'
    },
    spanish:{
        search: 'Buscar',
        flag:'SP'
    }
}
class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        const {isDarkMode, toggleTheme} = this.context;
        const {classes} = this.props;
        const {language} = this.props.languageContext;
        const {search, flag} = content[language];
        return (
            <div className={classes.root}>
                <AppBar position="static" color={isDarkMode? "default": "primary"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span>{flag}</span>
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            color="inherit"
                        >
                            App title
                        </Typography>
                        <Switch onChange={toggleTheme}/>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder={`${search}...`} classes={{
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

export default withLanguageContext(withStyles(styles)(Navbar));