//SASS
import "./addModal.scss";

//Modal di bootstrap
import { Modal } from "react-bootstrap";

//icons
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import PaymentIcon from "@mui/icons-material/Payment";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  callback: (params: any) => any;
  data: Data;
  edit: boolean;
};

type Data = {
  id: number;
  name_surname: string;
  place: string;
  date: Date;
  import: number;
  type_payment: string;
  description: string;
  category: string;
  document: HTMLInputElement;
};

const CarattereObbligatiorio = () => {
  return (
    <span style={{ fontSize: "16px", color: "red", fontWeight: "500" }}>*</span>
  );
};

const AddModal = (props: Props) => {
  const styleIcon = {
    color: "gray",
    height: "17px",
    width: "17px",
    alignItems: "center",
    marginRight: "4px",
  };

  return (
    <div className="addModal">
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.edit ? "Modifica " : "Aggiungi "} Spesa
          </Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <div className="form">
              <div className="inputLayer">
                <label className="label">
                  <div className="iconInput">
                    <PlaceIcon style={styleIcon} />
                  </div>
                  Luogo:
                  <CarattereObbligatiorio />
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="Luogo"
                  placeholder="Luogo..."
                  value={props.data.place ? props.data.place : ""}
                />
              </div>
              <div className="inputLayer">
                <label className="">
                  <div className="iconInput">
                    <CalendarMonthIcon style={styleIcon} />
                  </div>
                  Data:
                  <CarattereObbligatiorio />
                </label>
                <input
                  type="date"
                  className="form-control"
                  aria-describedby="Data"
                  placeholder="Data..."
                  value={props.data.date ? new Date(props.data.date) : null}
                />
              </div>
              <div className="inputLayer">
                <label className="">
                  <div className="iconInput">
                    <PointOfSaleIcon style={styleIcon} />
                  </div>
                  Importo:
                  <CarattereObbligatiorio />
                </label>
                <input
                  type="number"
                  className="form-control"
                  aria-describedby="Importo"
                  placeholder="Importo..."
                  value={props.data.import ? props.data.import : ""}
                />
              </div>
              <div className="inputLayer">
                <label className="">
                  <div className="iconInput">
                    <TextFieldsIcon style={styleIcon} />
                  </div>
                  Descrizione:
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="Descrizione"
                  placeholder="Descrizione..."
                  value={props.data.description ? props.data.description : ""}
                />
              </div>
              <div className="inputLayer">
                <label className="">
                  <div className="iconInput">
                    <PaymentIcon style={styleIcon} />
                  </div>
                  Tipo Pagamento:
                  <CarattereObbligatiorio />
                </label>
                <select className="form-select" aria-label="Tipo Pagamento">
                  <option value="0" selected>
                    Contante
                  </option>
                  <option value="1">Bancomat</option>
                </select>
              </div>
              <div className="inputLayer">
                <label className="">
                  <div className="iconInput">
                    <FormatListBulletedIcon style={styleIcon} />
                  </div>
                  Categoria:
                  <CarattereObbligatiorio />
                </label>
                <select className="form-select" aria-label="Tipo Pagamento">
                  <option value="0" selected>
                    Amici
                  </option>
                  <option value="1">Fattura elettricità</option>
                  <option value="2">Abbigliamento</option>
                  <option value="3">Cibo</option>
                  <option value="4">Carburante</option>
                </select>
              </div>
              <div className="inputLayer">
                <label className="">
                  <div className="iconInput">
                    <DocumentScannerIcon style={styleIcon} />
                  </div>
                  Documento:
                </label>
                <input
                  type="file"
                  className="form-control"
                  aria-describedby="Documento"
                  placeholder="Documento..."
                  accept=".pdf"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className={props.edit ? "btn btn-warning" : "btn btn-success"}
              onClick={() => {
                props.setShow(false);
                props.callback(props.data);
              }}
            >
              Salva
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AddModal;
