import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TourCard = () => {
    return (
    <Grid item xs={3}>
        <Paper elevation={3}>
            <
                img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dSZjbjf5WPOmXQmjiBBiET5cT0N2VluEXw&usqp=CAU" 
                alt="Niaraga" 
                className='img'
            />
            <Box padding={1}>
                <Typography varient="subtitle1"component="h2">
                    Immerse into the falls
                </Typography>
            
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Typography varient="body2" componente="p">
                            5 hours
                        </Typography>
                    </Box>
            </Box>
        </Paper>
    </Grid>
    );
}

export default TourCard;