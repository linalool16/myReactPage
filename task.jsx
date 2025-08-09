import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography
} from "@mui/material";

function Task({id, name}) {
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    ID:{id}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">done</Button>
            </CardActions>
        </Card>
    );
}

export default Task;