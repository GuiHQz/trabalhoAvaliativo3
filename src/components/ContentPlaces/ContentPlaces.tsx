import { Box, Typography, Chip } from '@material-ui/core'
import React from 'react'
import { useStyles } from './ContentPlaces.style'


export const ContentPlaces : React.FC = () => {
    const styles = useStyles()
    return (
        <Box className={styles.main}>
            <Box className={styles.box}>
                <Box className={styles.boxtitle}>
                    <Typography className={styles.title}>Best Places in the world</Typography>
                </Box>
                <Box className={styles.boxoptions}>
                    <ul className={styles.listopts}>
                        <li className={styles.listitem}>
                            <Chip label="Paris" className={styles.chip}/>
                        </li>
                        <li className={styles.listitem}>
                            <Chip label="Bora Bora" />
                        </li>
                        <li className={styles.listitem}>
                            <Chip label="Maui" className={styles.chip}/>
                        </li>
                        <li className={styles.listitem}>
                            <Chip label="Tahiti" className={styles.chip}/>
                        </li>
                        <li className={styles.listitem}>
                            <Chip label="London" className={styles.chip}/>
                        </li>
                        <li className={styles.listitem}>
                            <Chip label="Rome" className={styles.chip}/>
                        </li>
                        <li className={styles.listitem}>
                            <Chip label="Phuket" className={styles.chip}/>
                        </li>
                        <li className={styles.listitem}>
                            <Chip label="Tokyo" className={styles.chip}/>
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}