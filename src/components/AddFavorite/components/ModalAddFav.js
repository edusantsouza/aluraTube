import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  height: 200px;
  width: 300px;
  background-color: ${({ theme }) => theme.backgroundLevel2};
  position: fixed;
  border-radius: 5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.3);

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
    width: auto;
  }

  p {
    font-weight: 500;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  input {
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 2px;
    outline: none;
    padding: 10px 6px;
    background-color: ${({ theme }) => theme.backgroundLevel1};
    color: ${({ theme }) => theme.textColorBase};
    font-size: 12px;
  }

  #sumbmit-button {
    width: 200px;
    padding: 10px 10px;
    display: inline-block;
    border: none;
    border-radius: 2px;
    margin: 0;
    text-decoration: none;
    background: red;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 550;
    cursor: pointer;
    text-align: center;
  }
`;

export function OpenModal({
  supabase,
  addFav,
  setAddFav,
  isVisible,
  setIsVisible,
  reload,
  setReload,
}) {
  const [result, setResult] = useState("");
  //RegEx que verifica se a string recebida tem conteúdo ou só espaço em branco
  const isBlank = (str) => {
    return !str || /^\s*$/.test(str);
  };
  const insertFav = () => {
    supabase
      .from("list_favorites")
      .insert({
        name: result,
      })
      .then((response) => {});
  };
  const getValue = (e) => {
    setResult(e.target.value);
  };
  const clearAddFav = () => {
    setAddFav("");
  };
  const toggleReload = () => {
    !reload ? setReload(true) : setReload(false);
    reload ? setReload(false) : setReload(true);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!isBlank(result)) {
      setAddFav(result);
      insertFav();
      setIsVisible(false);
    } else {
      alert("Você deve inserir um nome antes.");
    }
  };

  useEffect(() => {}, []);

  return (
    isVisible && (
      <StyledModal className="modal-open">
        <div className="modal-open">
          <h2 className="modal-open">Adicionar Favorito</h2>
          <form className="modal-open" onSubmit={(e) => onSubmit(e)}>
            <input
              placeholder="Nome do perfil"
              name="profile-name"
              type="text"
              className="modal-open"
              id="input-value"
              onChange={(e) => getValue(e)}
            />
            <input
              id="sumbmit-button"
              type="submit"
              value="Adicionar"
              className="modal-open"
            />
          </form>
        </div>
      </StyledModal>
    )
  );
}
