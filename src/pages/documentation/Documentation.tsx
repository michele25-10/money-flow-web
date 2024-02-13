import SearchIcon from "@mui/icons-material/Search";

const Documentation = () => {
  return (
    <div className="documentation">
      <div className="headerform">
        <div className="title">
          <h1>Drive</h1>
        </div>
        <div className="searchForm">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="searchDoc"
              placeholder="Cerca..."
            />
          </div>
          <SearchIcon
            style={{
              height: "25px",
              width: "25px",
              cursor: "pointer",
              color: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
