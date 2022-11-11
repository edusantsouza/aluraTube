import styled from "styled-components";





const FavoritesStyled = styled.div`
 li {
  padding: 16px;
  cursor: pointer;
 }
 
 a {
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  color: black
 }
 
img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  p{
    margin-top: 10px;
    font-weight: 600;
  }

  li {
    list-style: none;
  }

`

export function Favorites(props){
  return (
    <FavoritesStyled>
        <lightTheme/>
      
      <li>
          <a href={props.name}
           target="_blank">
            <img 
              src={`http://github.com/${props.name}.png`}
              alt="Foto de perfil"
              />
            <p>{props.name}</p>
          </a>
      </li>
    </FavoritesStyled>
  )
}