import { useEffect, useState } from "react";

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
//import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

import moment from "moment";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  callback: (params: any) => any;
  data: any;
  edit: boolean;
  categorie: Categorie[];
};

type Categorie = {
  id: string;
  nome: string;
};

const AddModal = (props: Props) => {
  const [luogo, setLuogo] = useState("");
  const [date, setDate] = useState("");
  const [importo, setImporto] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [tipoPagamento, setTipoPagamento] = useState("0");
  const [categoria, setCategoria] = useState("1");
  const [documento, setDocumento] = useState<File | null>(null);
//  const [documentoName, setDocumentoName] = useState("");

  const CarattereObbligatiorio = () => {
    return (
      <span style={{ fontSize: "16px", color: "red", fontWeight: "500" }}>
        *
      </span>
    );
  };

  const resetVariable = () => {
    setLuogo("");
    setDate("");
    setImporto("");
    setDescrizione("");
    setTipoPagamento("0");
    setCategoria("1");
    setDocumento(null);
  };

  useEffect(() => {
    if (props.edit) {
      setLuogo(props.data.luogo);
      setDate(moment(props.data.data).format("YYYY-MM-DD"));
      setImporto(props.data.importo);
      setDescrizione(props.data.descrizione ? props.data.descrizione : "");
      if (props.data.tipo_pagamento == "Contante") {
        setTipoPagamento("0");
      } else if (props.data.tipo_pagamento == "Bancomat") {
        setTipoPagamento("1");
      }
      setCategoria(props.data.id_categoria);
      //setDocumento(props.data.documento ? props.data.documento : "");
    }
  }, [props.show]);

  const handleSave = async () => {
    console.log(documento);
    let result;
    if (props.edit) {
      result = await props.callback({
        id: props.data.id,
        luogo,
        date,
        importo,
        tipoPagamento,
        descrizione,
        categoria,
        documento,
      });
    } else {
      result = await props.callback({
        luogo,
        date,
        importo,
        tipoPagamento,
        descrizione,
        categoria,
        documento,
      });
    }

    if (result) {
      resetVariable();
      props.setShow(!result);
      props.setRefresh(true);
    }
  };

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
                value={luogo}
                onChange={(e) => setLuogo(e.target.value)}
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
                value={importo}
                onChange={(e) => setImporto(e.target.value)}
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
                value={descrizione}
                onChange={(e) => setDescrizione(e.target.value)}
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
              <select
                className="form-select"
                aria-label="Tipo Pagamento"
                value={tipoPagamento}
                onChange={(e) => setTipoPagamento(e.target.value)}
              >
                <option value="0">Contante</option>
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
              <select
                className="form-select"
                aria-label="Tipo Pagamento"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                {props.categorie?.map((item) => (
                  <>
                    <option key={item.id} value={item.id}>
                      {item.nome}
                    </option>
                  </>
                ))}
              </select>
            </div>
            {/*<div className="inputLayer">
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
                value={documentoName}
                onChange={(e) => {
                  setDocumento(e.target.files ? e.target.files[0] : null);
                  setDocumentoName(e.target.value);
                }}
              />
              </div>*/}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={props.edit ? "btn btn-warning" : "btn btn-success"}
            onClick={() => {
              handleSave();
            }}
          >
            Salva
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;
