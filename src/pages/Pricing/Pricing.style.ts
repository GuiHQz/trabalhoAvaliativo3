import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    box:{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Prompt'
    },


    tabela:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderCollapse: 'collapse',
        textAlign: 'center',
    },

    header:{
        backgroundColor: '#778899',
        textAlign: 'center',
    },

    headertext:{
        color: '#FFF',
        fontFamily: 'Prompt'
    },

    bodytext:{
        fontFamily: 'Prompt'
    }
})