import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './Home.style'
import { InputHome } from '../../components/InputHome'
import imgbg from '_assets/img/bg.png'
import { ContentPlaces } from 'components/ContentPlaces'
import { Cards } from '../../components/Cards'

export const Home : React.FC = () => {
    const style = useStyles()
    return (
        <Box className={style.homepage}>
            <Box className={style.sectionone}>
                <Box className={style.left}>
                    <Box>
                        <Typography className={style.lefttext}>
                            Life is short and the world is wide!
                        </Typography>
                        <Typography className={style.leftsubtext}>
                        To get the best of your adventure you just need to leave and go where you like. We are waiting for you.
                        </Typography>
                    </Box>
                    <Box>
                    <InputHome />
                    </Box>
                </Box>

                <Box className={style.right}>
                    <img src={imgbg} alt="bg"/>
                </Box>
            </Box>
            <Box className={style.sectiontwo}>
                <ContentPlaces />
                <Cards/>
            </Box>
        </Box>
    )
}