import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    main: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    box: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        width: '70%',
        height: 120,
        position: 'absolute',
        boxShadow: '0px 10px 12px -4px rgba(0,0,0,0.26)',
        WebkitBoxShadow: '0px 10px 12px -4px rgba(0,0,0,0.26)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 15
    
    },

    boxtitle: {
        width: '100%'
    },

    boxoptions: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },

    title: {
        fontFamily: 'Prompt',
        fontSize: 20,
        color: '#3759bc'
    },

    listopts: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: 45,
        padding: 0,

    },

    listitem: {
        listStyle: 'none',
    },

    chip: {
        paddingLeft: 20,
        paddingRight: 20,
    }
})