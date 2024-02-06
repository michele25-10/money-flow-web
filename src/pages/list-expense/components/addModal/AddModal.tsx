//SASS
import "./addModal.scss";

//Modal di bootstrap
import { Modal } from "react-bootstrap";

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
                <label className="">
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
                <label className="">Descrizione:</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="Descrizione"
                  placeholder="Descrizione..."
                />
              </div>
              <div className="inputLayer">
                <label className="">
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
                <label className="">Documento:</label>
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
              style={{
                width: "100px",
                fontSize: "18px",
                borderRadius: "10px",
                borderColor: "orange",

                backgroundColor: "orange",
                color: "white",
                fontWeight: "400",
              }}
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
