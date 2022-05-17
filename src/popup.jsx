import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./pop.css"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 const recent = [
    {"id":8,"resturant":"Divavu","lat":50.7588162,"long":17.8529769},
  {"id":9,"resturant":"Lajo","lat":42.0912106,"long":19.089904},
  {"id":10,"resturant":"Voomm","lat":23.02579,"long":-8.8186886},
  {"id":11,"resturant":"Brightdog","lat":13.8170825,"long":101.3052635},
  {"id":12,"resturant":"Camido","lat":-8.0061188,"long":112.1132142},
  {"id":13,"resturant":"Twinder","lat":31.150681,"long":121.124178},
  {"id":14,"resturant":"Zoozzy","lat":46.208449,"long":106.7088124},
 ]
console.log(recent[0]);
  return (
    <div>
      <Button onClick={handleOpen}>Recent</Button>
      <Modal
        open={open}
       
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='Close'>
            <h3 onClick={ handleClose}>X</h3>

            </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
        Recent-Resturant
          </Typography>
          {recent.map((el)=>{    return    <Box>   
              
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         {el.resturant}
         
           </Typography>


           <hr />
           </Box>
           }
           
           )

}
        </Box>
      </Modal>
    </div>
  );
}
