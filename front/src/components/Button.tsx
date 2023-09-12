import Button from '@mui/material/Button';
type Props = {
    children: string | JSX.Element | JSX.Element[];
    variant: "text" | "outlined" | "contained" | undefined;
  }
export default function ButtonTeste({children, variant}: Props) {
    return (
        <Button variant={variant}>{children}</Button>
    )
}