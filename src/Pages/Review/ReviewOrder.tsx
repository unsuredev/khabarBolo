import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];


const ReviewOrder = () => {

  const [products, setProductS] = React.useState([])
  const [grandTotal, setGrandTotal]=React.useState(0)
  const percent = 2
  const deliveryCharge = 20

  React.useEffect(() => {
    document.title = "KhabarBolo | Checkout ";
    getItems()
  }, []);


  const getItems = () => {
    let grandTotal=0

    const result = localStorage.getItem('cartItems')
    if (result && result != undefined) {
     let itemsArray:any=JSON.parse(result)
      setProductS(itemsArray)
      itemsArray.forEach((item: any) => {
        grandTotal += item.totalPrice
        setGrandTotal(grandTotal)
      })
    }
  }


  return (
    <React.Fragment>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <TableContainer component={Paper}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                  Order summary

                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Qty.</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row:any) => (
                  < TableRow key = { row.id } >
                  <TableCell>{row.name}</TableCell>
                  < TableCell align = "right" > { row.quantity }</TableCell>
              <TableCell align="right">&#8377;{row.price}</TableCell>
     
              <TableCell align="right">&#8377;{row.quantity*row.price}</TableCell>
            </TableRow>
          ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">&#8377;{grandTotal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Convenice Fee</TableCell>
              <TableCell align="right">2%</TableCell>
              <TableCell align="right">&#8377;{Math.ceil(grandTotal+grandTotal/100*percent)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Delivery Charge</TableCell>
              <TableCell align="right">{deliveryCharge}</TableCell>
              <TableCell align="right">{grandTotal+deliveryCharge}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Grand Total</TableCell>
              <TableCell align="right"><b>&#8377;{grandTotal+deliveryCharge}</b></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
      </Grid >
    </React.Fragment >
  );
}

export default ReviewOrder