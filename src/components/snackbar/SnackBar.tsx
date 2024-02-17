import { useState } from "react";

//COMPONENT MATERIAL
import { Alert, Snackbar } from "@mui/material";

type Props = {
  message: string;
  type: any;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SnackBar = (props: Props) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    props.setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={props.open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={props.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
