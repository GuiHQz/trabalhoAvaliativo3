import React from 'react'
import { useStyles } from './Pricing.style'
import { Box } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PricingController from './PricingController.js'

export const Pricing: React.FC = () => {
    const style = useStyles()

    const RenderTable = (destino: any, index: any) => {
        return (
            <TableRow key={index}>
                <TableCell className={style.bodytext}>{destino.origem}</TableCell>
                <TableCell className={style.bodytext}>{destino.destino}</TableCell>
                <TableCell className={style.bodytext}>{destino.horario}</TableCell>
                <TableCell className={style.bodytext}>{destino.preco}</TableCell>
            </TableRow>
        )
    }
    return (
        <Box className={style.box}>
            Viagens disponíveis
            <TableContainer>
                <Table className={style.tabela}>
                    <TableHead className={style.header}>
                        <TableRow>
                            <TableCell className={style.headertext}>Origem</TableCell>
                            <TableCell className={style.headertext}>Destino</TableCell>
                            <TableCell className={style.headertext}>Horário</TableCell>
                            <TableCell className={style.headertext}>Preço</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {PricingController.Read().map(RenderTable)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    )
}