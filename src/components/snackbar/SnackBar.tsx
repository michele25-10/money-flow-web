//COMPONENT MATERIAL
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";

//global state
import { setGlobalState, useGlobalState } from "../../utils/state";

/*type Props = {
  message: string;
  type: any;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};*/

const SnackBar = (/*props: Props*/) => {
  const handleClose = (
    _: Event | React.SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason
  ): any => {
    if (reason === "clickaway") {
      return;
    }

    setGlobalState("open", false);
  };

  //Variabili globali
  const [openSnackbar]: any = useGlobalState("open");
  const [type]: any = useGlobalState("type");
  const [message]: any = useGlobalState("message");

  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
