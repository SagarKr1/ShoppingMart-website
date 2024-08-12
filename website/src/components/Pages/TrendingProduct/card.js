import React from 'react';
import { Grid, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function Cards(props) {
    const [stock,setStock] = React.useState(props.product.stock);
    const [add,setAdd] = React.useState(0);
    // React.useEffect(()=>{
    //     function setProps(){
    //         setStock(props.product.stock);
    //     }
    //     setProps()
    // },[])
    const handlerAdd = () => {
        console.log("Add one");
        if(stock<1){
            return;
        }
        setAdd(add +1);
        setStock(stock-1);
    }

    const handlerSubtract = () => {
        console.log("Subtract");
        if(add<1){
            return;
        }
        const sub = add -1;
        setAdd(sub);
        setStock(stock+1);
    }

    const handlerCart = ()=>{
        console.log("Add To cart");
    }
    const handlerBuy = ()=>{
        console.log("Add To Buy");
    }
    return (
        <Grid item key={props.product.id} xs={5} md={2}>
            {console.log(props.product.image.images)}
            <Card sx={{}}>
                <CardMedia
                    sx={{
                        height: { sm: "250px", xs: "125px" },
                            backgroundImage: `url(${props.product.image.images})`,
                            position:"relative",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                    }}
                    // image={props.product.image.images}
                    title={props.product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {props.product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Brand : {props.product.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <CurrencyRupeeIcon />{props.product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Unit : {props.product.size+" "+props.product.unit}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Available : {stock}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handlerSubtract}><RemoveIcon /></Button>
                    <Typography>{add}</Typography>
                    <Button size="small" onClick={handlerAdd}><AddIcon /></Button>
                </CardActions>

                <CardActions>
                    <Button size="small" variant='contained' onClick={handlerCart}>Add Cart</Button>
                    <Button size="small" variant='contained' onClick={handlerBuy}>Buy</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
