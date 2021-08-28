import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    appbar: {
        width: '100%',
        height: 60,
        backgroundColor: '#3759bc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    ul: {
        display: 'flex',
        listStyle: 'none',
    },

    menuitem: {
        color: '#FFFF',
        paddingLeft: 15,
        paddingRight: 15,
        fontFamily: 'Prompt',
        fontSize: 15
    },

    menuitem_button: {
        color: '#FFFF',
        paddingLeft: 15,
        paddingRight: 15,
        fontFamily: 'Prompt',
        fontSize: 15
    },

    title: {
        color: '#fff',
        fontFamily: 'Prompt',
        fontSize: 25,
    },

    link:{
        textDecoration: 'none',
        color: '#fff',
    }
})