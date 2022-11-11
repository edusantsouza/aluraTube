import styled from "styled-components";

const StyledModal = styled.div`
height: 200px;
width: 300px;
background-color: #f5f5f5;
position: absolute;
visibility: ${"hidden"};
border:solid rgba(178, 184, 194, .2) .5px;
border-radius: 10px;
left: 50%;
transform: translateX(-50%);
bottom: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 15px;

h2{
  font-size: 18px;
  margin: 0;

}

p{
  font-weight: 500 ;
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

export function OpenModal(){
  return(
    <StyledModal>
                <h2>Adicionar Favorito</h2>
                <p>Digite o nome do perfil:</p>
                <form>
                  <input type={`text`} />
                  <button>Adicionar</button>
                </form>
    </StyledModal>
  )
}