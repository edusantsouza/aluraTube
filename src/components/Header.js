import styled from "styled-components";
import config from "../../config.json";


const StyledHeader = styled.div`
  .banner {
    width: 100vw;
    height: calc(16.1290322581vw - -100px);
  }

  .profile-pic {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user {
    font-family: Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 112px;
    gap: 10px;
    width: 100%;
    padding: 16px 16px;
  }

  .user-info p,
  .user-info h2 {
    margin-block: 0;
  }

  .user-info p {
    line-height: 18px;
    font-size: 16px;
    color: grey;
  }

  .user-info h2 {
    line-height: 28px;
    font-size: 24px;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <div>
        <img 
        className="banner" 
        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4970&q=150"
        />
          <section className="user">
            <img    
            className="profile-pic"
            src={`https://github.com/${config.github}.png`}/>
            <div className="user-info">
              <h2>{config.name}</h2>
              <p>{config.position}</p>
            </div>
          </section>
      </div>
    </StyledHeader>
  )
}