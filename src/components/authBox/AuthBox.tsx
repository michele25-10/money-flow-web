import { useState, useEffect } from "react";

//SASS
import "./authBox.scss";

//function
import { editAuthUser, getAuthUser } from "./function/api";

//icons
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import { OverlayTrigger, Popover } from "react-bootstrap";

type Props = {
  itemData: Data;
};

type Data = {
  id: string;
  img: string;
  name_surname: string;
  email: string;
};

type AuthData = {
  nome: string;
  descrizione?: string;
  valore: boolean;
  id: number;
};

const AuthBox = (props: Props) => {
  const [authList, setAuthList] = useState([]);

  useEffect(() => {
    refreshAuthData();
  }, [props.itemData.id]);

  const refreshAuthData = () => {
    const result = getAuthUser(props.itemData.id);
    result.then((res) => {
      setAuthList(res);
    });
  };

  return (
    <div className="authBox">
      <div className="infoBox">
        <div className="imgBox">
          <img
            src={props.itemData.img ? props.itemData.img : "/user.svg"}
            alt=""
            className="profile"
          />
        </div>
        <h1>{props.itemData.name_surname}</h1>
      </div>
      <div className="listItem">
        {authList
          ? authList.map((item: AuthData) => (
              <div className="item" key={item.id}>
                <div className="iconBox">
                  <OverlayTrigger
                    trigger="click"
                    key="top"
                    placement="top"
                    overlay={
                      <Popover id="popover-positioned-top">
                        <Popover.Header
                          as="h3"
                          style={{
                            backgroundColor: "#222b3c",
                            color: "white",
                            borderBottomColor: "white",
                          }}
                        >
                          Gestione autorizzazione
                        </Popover.Header>
                        <Popover.Body
                          style={{
                            backgroundColor: "#222b3c",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            gap: "20px",
                          }}
                        >
                          <div className="popoverBox">
                            <span
                              style={{
                                cursor: item.valore ? "not-allowed" : "pointer",
                              }}
                              onClick={() => {
                                const result = editAuthUser(
                                  item.id,
                                  true,
                                  props.itemData.id,
                                  item.valore
                                );
                                result.then((res) => {
                                  if (res === true) {
                                    refreshAuthData();
                                    document.body.click(); //per chiudere il popover
                                  }
                                });
                              }}
                            >
                              <LockOpenTwoToneIcon
                                style={{
                                  color: "limegreen",
                                  height: "40px",
                                  width: "40px",
                                }}
                              />
                            </span>
                            <span
                              style={{
                                cursor: !item.valore
                                  ? "not-allowed"
                                  : "pointer",
                              }}
                              onClick={() => {
                                const result = editAuthUser(
                                  item.id,
                                  false,
                                  props.itemData.id,
                                  item.valore
                                );
                                result.then((res) => {
                                  if (res) {
                                    refreshAuthData();
                                    document.body.click(); //per chiudere il popover
                                  }
                                });
                              }}
                            >
                              <LockTwoToneIcon
                                style={{
                                  color: "#fe0000",
                                  height: "40px",
                                  width: "40px",
                                }}
                              />
                            </span>
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                    rootClose
                  >
                    {item.valore ? (
                      <LockOpenTwoToneIcon
                        style={{
                          color: "limegreen",
                          height: "40px",
                          width: "40px",
                        }}
                      />
                    ) : (
                      <LockTwoToneIcon
                        style={{
                          color: "#fe0000",
                          height: "40px",
                          width: "40px",
                        }}
                      />
                    )}
                  </OverlayTrigger>
                </div>
                <div className="infoItem">
                  <h3>{item.nome}</h3>
                  <span>{item.descrizione}</span>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default AuthBox;
