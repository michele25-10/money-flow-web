import React from "react";
import { Modal } from "react-bootstrap";

type Props = {
  title: string;
  body: string;
  show: boolean;
  id: number;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  callback: (params: any) => any;
};

const DeleteModal = (props: Props) => {
  return (
    <div className="deleteModal">
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.body}</p>
        </Modal.Body>
        <Modal.Footer>
          <div className="buttonClose">
            <button
              className="btn btn-secondary me-2"
              onClick={() => props.setShow(false)}
            >
              Annulla
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.setShow(false);
                props.callback(props.id);
              }}
            >
              Confermo
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteModal;
