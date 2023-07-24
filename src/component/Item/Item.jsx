import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ data, addToCart }) => {
  const { id, title, image, price } = data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{
          height: 200,
          width: 200,
          objectFit: "cover",
        }}
        image={image}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link
            to={`/src/pages/Product${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> {addToCart}}>add to cart</Button>
        <Button size="small">go to cart</Button>
      </CardActions>
    </Card>
  );
};

Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  addToCart: PropTypes.func.isRequired,
};
export { Item };
