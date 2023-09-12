import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';


function createData(
    nome: string,
    descricao: string
  ) {
    return { nome, descricao };
  }
  
  const rows = [
    createData('material escolar', 'testedesc21'),
    createData('material de construção', 'testedesc2'),
    createData('material de limpeza', 'testedesc3'),
    createData('material escolar', 'testedesc4'),
    createData('material de construção', 'testedesc5'),
  ];
  
  export default function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome da Categoria(100g serving)</TableCell>
              <TableCell align="right">Descrição</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.nome}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell align="right">{row.descricao}</TableCell>
                    <TableCell align="right"><Grid item xs={4}>
                        <Typography>Filled</Typography>
                    </Grid></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }