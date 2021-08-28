import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './AppBar.style'
import { Link } from 'react-router-dom'

export const AppBar: React.FC = () => {
    const styles = useStyles()
    return (
        <Box className={styles.appbar}>
            <Box>
                <Typography className={styles.title}>
                    <Link to='/' className={styles.link}>
                        Travel
                    </Link>
                </Typography>
            </Box>
            <ul className={styles.ul}>
                <li className={styles.menuitem}>Reviews</li>
                <li className={styles.menuitem}>FeedBack</li>
                <li className={styles.menuitem}>
                    <Link to='/Pricing' className={styles.link}>
                        Pricing
                    </Link>
                </li>
                <li className={styles.menuitem_button}>Contact us</li>
            </ul>
        </Box>
    )
}