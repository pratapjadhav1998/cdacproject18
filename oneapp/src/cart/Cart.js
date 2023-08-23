// import React, { Component } from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
// import Button from '@mui/material/Button';

// export class Cart extends Component {

//     render() {

//         return (
//             // <div>
//             //         <div className="container" style={{margin:"10px",border:"5px",borderRadius:"10px"}}>
//             //             <div className ="card" style={{margin:"10px",borderRadius:"5px",borderRadius:"10px"}}>
//             //                 <div className = "card-title">
//             //                     <img src={this.props.obj.image} style={{width:"100px",height:"100px"}}/>
//             //                     {this.props.obj.name}
//             //                 </div>
//             //                 <div classname ="card-body">
//             //                     <p>
//             //                     {this.props.obj.price}
//             //                     </p>
//             //                     <p>
//             //                     <button onClick={()=>this.props.addUnits(this.props.obj)}>+</button>
//             //                     {this.props.obj.units}
//             //                     <button onClick={()=>this.props.subUnits(this.props.obj)}>-</button>
//             //                     </p>
//             //                     <p><button onClick={()=>this.props.remove(this.props.obj)}>Remove Item</button></p>
//             //                 </div>
//             //             </div>
//             //         </div>
//             // </div>
//             <>
//     <Card sx={{ display: 'inline-block', maxHeight: 400, minHeight: 160, width: 450, marginTop: '10px' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', float: 'left', maxHeight: '100px'  }}>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5">
//           {this.props.obj.name}
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//           Price: {this.props.obj.price}
//           </Typography>
//         </CardContent>
//         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
//           <Button onClick={()=>this.props.addUnits(this.props.obj)}>
//             <AddBoxIcon  sx={{ height: 30, width: 38 }} />
//           </Button>
//             {this.props.obj.units}
//           <Button onClick={()=>this.props.subUnits(this.props.obj)}>
//             <IndeterminateCheckBoxIcon sx={{ height: 30, width: 38 }}/>
//           </Button>
//           <Button variant="outlined" color="error" size="small" onClick={()=>this.props.remove(this.props.obj)}>Remove Item</Button>
//         </Box>
//       </Box>
//       <CardMedia
//         component="img"
//         sx={{ maxWidth: 151, maxHeight: 160,  float: 'right'}}
//         image={this.props.obj.image}
//         alt="Live from space album cover"
//       />
//     </Card>

//             </>
//             )
//     };
// }

// export default Cart;
