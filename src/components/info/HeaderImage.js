import styled from "styled-components";

function HeaderImage(props) {
  const StyledImage = styled.div`
    width: 100%;
    height: ${props.height};
    overflow: hidden;
    margin: 0 auto;
    background-image: url(${(props.image)});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: ${props.borderRadius};
  `;
  return (
    <StyledImage />
  );
}

export default HeaderImage;
