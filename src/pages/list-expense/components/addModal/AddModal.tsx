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
  callBack: () => void;
  edit: boolean;
};

const CarattereObbligatiorio = () => {
  return (
    <span style={{ fontSize: "16px", color: "red", fontWeight: "500" }}>*</span>
  );
};

const AddModal = (props: Props) => {
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
            Aggiungi Spesa
          </Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <div className="form">
              <div className="inputLayer">
                <label className="label">
                  <PlaceIcon
                    style={{
                      color: "gray",
                      height: "17px",
                      width: "17px",
                      alignItems: "center",
                      marginRight: "5px",
                    }}
                  />
                  Luogo:
                  <CarattereObbligatiorio />
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="Luogo"
                  placeholder="Luogo..."
                />
              </div>
              <div className="inputLayer">
                <label className="">
                  <CalendarMonthIcon
                    style={{
                      color: "gray",
                      height: "17px",
                      width: "17px",
                      alignItems: "center",
                      marginRight: "5px",
                    }}
                  />
                  Data:
                  <CarattereObbligatiorio />
                </label>
                <input
                  type="date"
                  className="form-control"
                  aria-describedby="Data"
                  placeholder="Data..."
                />
              </div>
              <div className="inputLayer">
                <label className="">
                  <PointOfSaleIcon
                    style={{
                      color: "gray",
                      height: "17px",
                      width: "17px",
                      alignItems: "center",
                      marginRight: "5px",
                    }}
                  />
                  Importo:
                  <CarattereObbligatiorio />
                </label>
                <input
                  type="number"
                  className="form-control"
                  aria-describedby="Importo"
                  placeholder="Importo..."
                />
              </div>
              <div className="inputLayer">
                <label className="">
                  <TextFieldsIcon
                    style={{
                      color: "gray",
                      height: "17px",
                      width: "17px",
                      alignItems: "center",
                      marginRight: "5px",
                    }}
                  />
                  Descrizione:
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="Descrizione"
                  placeholder="Descrizione..."
                />
              </div>
              <div className="inputLayer">
                <label className="">
                  <PaymentIcon
                    style={{
                      color: "gray",
                      height: "17px",
                      width: "17px",
                      alignItems: "center",
                      marginRight: "5px",
                    }}
                  />
                  Tipo Pagamento:
                  <CarattereObbligatiorio />
                </label>
                <select className="form-select" aria-label="Tipo Pagamento">
                  <option selected>Tipo Pagamento...</option>
                  <option value="0">Contante</option>
                  <option value="1">Bancomat</option>
                </select>
              </div>
              <div className="inputLayer">
                <label className="">
                  <FormatListBulletedIcon
                    style={{
                      color: "gray",
                      height: "17px",
                      width: "17px",
                      alignItems: "center",
                      marginRight: "5px",
                    }}
                  />
                  Categoria:
                  <CarattereObbligatiorio />
                </label>
                <select className="form-select" aria-label="Tipo Pagamento">
                  <option selected>Categoria...</option>
                  <option value="0">Amici</option>
                  <option value="1">Fattura elettricità</option>
                  <option value="2">Abbigliamento</option>
                  <option value="3">Cibo</option>
                  <option value="4">Carburante</option>
                </select>
              </div>
              <div className="inputLayer">
                <label className="">
                  <DocumentScannerIcon
                    style={{
                      color: "gray",
                      height: "17px",
                      width: "17px",
                      alignItems: "center",
                      marginRight: "5px",
                    }}
                  />
                  Documento:
                </label>
                <input
                  type="file"
                  className="form-control"
                  aria-describedby="Documento"
                  placeholder="Documento..."
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-success"
              onClick={() => {
                props.setShow(false);
                props.callBack();
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
