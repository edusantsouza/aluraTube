import styled from "styled-components";
import config from "../../../../config.json";

const StyledModal = styled.div`
  height: 200px;
  width: 300px;
  background-color: ${({ theme }) => theme.backgroundLevel2};
  position: fixed;
  border-radius: 5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  button {
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
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button:hover {
    opacity: 1;
  }
`;

export function OpenModal({
  supabase,
  addFav,
  setAddFav,
  isVisible,
  setIsVisible,
}) {
  // const insertFav = (addFav) => {
  //   //Mudar isso depois para cadastrar essas infos no banco de dados
  //   config.favoritos.push({ name: addFav });
  // };

  //RegEx que verifica se a string recebida tem conteúdo ou só espaço em branco
  const isBlank = (str) => {
    return !str || /^\s*$/.test(str);
  };

  return (
    isVisible && (
      <StyledModal className="modal-open">
        <div className="modal-open">
          <h2 className="modal-open">Adicionar Favorito</h2>
          <form className="modal-open">
            <input
              placeholder="Nome do perfil"
              name="profile-name"
              type="text"
              className="modal-open"
              onChange={(e) => {
                setAddFav(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                function runFav() {
                  supabase
                    .from("list_favorites")
                    .insert({
                      name: addFav,
                    })
                    .then((response) => {
                      console.log(response);
                    });
                }
                // console.log(isBlank(addFav))s
                !isBlank(addFav)
                  ? runFav()
                  : alert("Você deve inserir um nome antes.");

                setAddFav("");
              }}
            >
              Adicionar
            </button>
          </form>
        </div>
      </StyledModal>
    )
  );
}
