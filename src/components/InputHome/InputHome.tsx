import React from 'react'
import { TextField, InputAdornment, Button } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { useStyles } from './InputHome.style'

export const InputHome : React.FC = () => {
    const styles = useStyles()
    return <TextField variant="outlined" className={styles.input} placeholder="Search for destination"
    InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                <Search className={styles.iconstyle}/>
            </InputAdornment>      
        ),

        endAdornment: (
            <Button className={styles.btnsearch}>
                Search
            </Button>
        )
    }}/>
}