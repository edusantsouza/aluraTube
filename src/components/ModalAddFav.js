import styled from "styled-components";
import config from "../../config.json"

const StyledModal = styled.div`
height: 200px;
width: 300px;
background-color: #f5f5f5;
position: fixed;
border: .5px solid rgba(178, 184, 194) ;
border-radius: 10px;
left: 50%;
transform: translateX(-50%);
bottom: 50%;
transform: translateY(50%);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.3);

h2{
  font-size: 18px;
  margin: 0;
  margin-bottom: 10px;
}

p{
  font-weight: 500 ;
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px
}

input{
width: 160px;
height: 23px;
border: 1px solid rgba(178, 184, 194, .2) .5px;
border-radius: 2px;
outline: none;
}

button {
    width: 90px;
    height: 25px;
    display: inline-block;
    border: none;
    border-radius: 2px;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}
`

export function OpenModal({addFav, setAddFav, isVisible, setIsVisible}){
  const insertFav = (addFav) => {
    //Mudar isso depois para cadastrar essas infos no banco de dados
    //Se o input estiver vazio, exibir alerta
    config.favoritos.push({"name":addFav})
    }
  
  return(
    
    isVisible && <StyledModal className="modal-open">
      <div className="modal-open">
                <h2 className="modal-open">Adicionar Favorito</h2>
                <p className="modal-open">Digite o nome do perfil:</p>
                <form className="modal-open">
                  <input 
                  type="text" 
                  className="modal-open" 
                  onChange={(e)=>{
                    setAddFav(e.target.value)
                  }}/>
                  <button 
                      onClick={(e)=>{
                      insertFav(addFav)
                   }}>
                      Adicionar
                  </button>
                </form>         
      </div>
    </StyledModal>
)
}



