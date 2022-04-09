import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Success({ showSuccess, setShowSuccess }) {
  const handleClose = () => {
    setShowSuccess(false);
  };
  return (
    <Modal open={showSuccess} onClose={handleClose}>
      <Box sx={style}>
        <Typography component="h2" textAlign="center">
          SUCCESS
        </Typography>
      </Box>
    </Modal>
  );
}

export default Success;
