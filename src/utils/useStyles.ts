import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#2196f3',
        color: '#fff'
    },
    footer: {

    },
    button: {
        color: "white !important",
        backgroundColor: '#2196f3' + " !important",
        border: "5px dashed" + '#fff' + "!important",
        borderRadius: "50% !important",
        padding: "15px 50px !important",
        "&:hover": {
            backgroundColor: "#ffff55 !important"
        }
    },
    marginTop: {
        marginTop: 50
    },
    test: {
        color: theme.palette.error.main,
        backgroundColor: theme.palette.secondary.main
    }
}));