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
          <Modal.Body>Prova</Modal.Body>
          <Modal.Footer>
            <button
              style={{
                width: "100px",
                fontSize: "15px",
                borderRadius: "10px",
                borderColor: "orange",
                height: "25px",
                backgroundColor: "orange",
                color: "white",
                fontWeight: "500",
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
