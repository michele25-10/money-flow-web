import { GridColDef } from "@mui/x-data-grid";

type Props = {
  title: string;
  columns: GridColDef[];
};

const AddModal = (props: Props) => {
  /*  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
    //e.preventDefault();
    //api creation or update
  };*/

  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {props.title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form>
            <div className="modal-body">
              {props.columns.map((column) => (
                <div className="item" key={column.field}>
                  <label>
                    {column.required ? (
                      <span style={{ color: "tomato" }}>*</span>
                    ) : (
                      <></>
                    )}
                    {column.headerName}
                  </label>

                  {column.type === "select" ? (
                    <>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1"></option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </>
                  ) : (
                    <>
                      {" "}
                      <input type={column.type} placeholder={column.field} />
                    </>
                  )}
                </div>
              ))}
              <button>Invia</button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Invia
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
