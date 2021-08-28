import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    input: {
        backgroundColor: '#FFF',
        borderRadius: 6,
        width: '75%',
        marginTop: 40
    },

    iconstyle: {
        color: '#3759BC'
    },

    btnsearch: {
        backgroundColor: '#16c5ec',
        color: '#FFF',
        textTransform: 'initial',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,

        "&:hover": {
            backgroundColor: '#16c5ec',
        }
    }
})