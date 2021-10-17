// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable functional/immutable-data */
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Grid } from '@mui/material'
const apiCall = {
  event: 'bts:subscribe',
  data: { channel: 'order_book_btcusd' },
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function Bitstamp() {
  const [bids, setBids] = useState([0])

  useEffect(() => {
    const ws = new WebSocket('wss://ws.bitstamp.net')
    ws.onopen = () => {
      ws.send(JSON.stringify(apiCall))
    }
    ws.onmessage = function (event) {
      const json = JSON.parse(event.data)
      try {
        if (json.event == 'data') {
          setBids(json.data.bids.slice(0, 12))
        }
      } catch (err) {
        console.log(err)
      }
    }
    //clean up function
    return () => ws.close()
  }, [])
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh' }}
    >
      <Grid item xs={8}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Asset</StyledTableCell>
                <StyledTableCell align="right">Market Cap</StyledTableCell>
                <StyledTableCell align="right">Last price</StyledTableCell>
                <StyledTableCell align="right">24h change</StyledTableCell>
                <StyledTableCell align="right">Favorite</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bids.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    Bitcoin BTC
                  </StyledTableCell>
                  <StyledTableCell align="right">1</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </StyledTableCell>
                  <StyledTableCell align="right">2</StyledTableCell>
                  <StyledTableCell align="right">3</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}
export default Bitstamp
