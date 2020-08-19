import { appUrls } from "@app/routing/appUrls";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { IAppTheme } from "@shared/themes/IAppTheme";
import { Location } from "history";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: IAppTheme) => ({
    navbar: {
        backgroundColor: theme.colors.primary.main,
        padding: 24,
        width: 96,
    },
    logo: {
        cursor: "pointer",
        height: 48,
        width: 48,
    },
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
    },
}));

export interface INavbarProps {
    location: Location;
}

export interface INavbarCallProps {
    redirect: (url) => void;
}

type Props = INavbarProps & INavbarCallProps;

const Navbar: FunctionComponent<Props> = (props) => {
    const { location, redirect } = props;
    const classes = useStyles({});

    const redirectToRoot = () => {
        redirect(appUrls.rootPath);
    };

    const navigationProps: INavbarProps & INavbarCallProps = {
        location,
        redirect,
    };

    return (
        <div className={classes.root}>
            <AppBar position={"static"}>
                <Toolbar>
                    <Grid container justify={"space-between"}>
                        <Grid item>
                            <Tooltip title={"Sample Text"}>
                                <Typography variant="h6">
                                    Core React
                                </Typography>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Button color="inherit">Login</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export { Navbar };
