import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    Box:{
        width: '100%',
        height: '33%',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '130px'
    },

    secondBox:{
        width: '100%',
        height: '33%',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '70px'
    },

    root:{
        maxWidth: 345,
        maxHeight: 500
    },

    media:{
        height: 150
    }
})