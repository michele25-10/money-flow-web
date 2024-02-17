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
  return (
    <div>
      <Snackbar
        open={props.open}
        autoHideDuration={5000}
        onClose={() => props.setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => props.setOpen(false)}
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
