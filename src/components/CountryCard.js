// export default function CountryCard(props){
//     return(
//         <div>
//             <p>{props.name}</p>
//             <p>{props.capital}</p>
//             <p>{props.population}</p>
//         </div>
//     );
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./CountryCard.css";

export default function CountryCard(props) {
  return (
    <Card className="country-card">
      <CardMedia className="country-flag" image={props.flagurl} />
      <CardContent className="card-details">
        <Typography variant="h2" component="div">
          {props.name}
        </Typography>
        <Typography variant="body1" component="p" className="capital">
          Capital: {props.capital}
        </Typography>
        <Typography variant="body1" component="p" className="population">
          Population: {props.population}
        </Typography>
      </CardContent>
    </Card>
  );
}