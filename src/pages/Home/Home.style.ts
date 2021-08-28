import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    homepage: {
        height: '100%'
    },

    sectionone: {
        height: '70%',
        width: '100%',
        backgroundColor: '#3759bc',
        display: 'flex',
        justifyContent: 'center'
    },

    left: {
        width: '40%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: '157px'
    },

    right: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    lefttext: {
        color: '#FFF',
        fontFamily: 'Prompt',
        fontSize: 35,
        width: '80%',
        lineHeight: 1.2
    },

    leftsubtext: {
        color: '#FFF',
        fontFamily: 'Prompt',
        fontWeight: 300,
        width: '60%',
        fontSize: 12,
        lineHeight: 1.8,
        marginTop: 10
    },

    sectiontwo: {
        width: '100%',
        height: '100%',
    }
})