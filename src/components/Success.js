import { Modal, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  padding: 10,
  fontWeight: 700,
};

export default function Success({ showSuccess, setShowSuccess }) {
  const handleClose = () => {
    setShowSuccess(false);
  };
  return (
    <Modal open={showSuccess} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          component="h2"
          textAlign="center"
          style={{ fontSize: "1.5rem", fontWeight: 700 }}
        >
          SUCCESS
        </Typography>
      </Box>
    </Modal>
  );
}
