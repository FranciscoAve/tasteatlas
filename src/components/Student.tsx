import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Data {
    apellido: String;
    nombres: String;
    paralelo: String;
}

export default function Student( data: Data ) {
    return (
        <>
            <Typography component="p" variant="h4">
                
                {data.nombres} {data.apellido}

            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>

                
                Paralelo # {data.paralelo}

            </Typography>
        </>
    )
}
