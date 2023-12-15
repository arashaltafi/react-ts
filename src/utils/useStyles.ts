import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
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
    }
}));