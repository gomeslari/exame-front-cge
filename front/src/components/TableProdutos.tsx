import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


function createData(
    nome: string,
    descricao: string,
    preco: number,
    categoria: string
  ) {
    return { nome, descricao, preco, categoria };
  }
  
  const rows = [
    createData('lapis de cor', 'testedesc21', 6.0, 'testecat1'),
    createData('cimento', 'testedesc2', 9.0, 'testecat1'),
    createData('desinfetante', 'testedesc3', 16.0, 'testecat1'),
    createData('Livro didático', 'testedesc4', 3.7, 'testecat1'),
    createData('Argamassa', 'testedesc5', 16.0, 'testecat1'),
  ];
  
  export default function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome do Produto(100g serving)</TableCell>
              <TableCell align="right">Descrição</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Categoria</TableCell>
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
                <TableCell align="right">{row.preco}</TableCell>
                <TableCell align="right">{row.categoria}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }