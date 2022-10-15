import styled from "styled-components"

export const Container = styled.main`
   margin: 0 auto;
   max-width: 1440px;
   padding-left: 0 2rem;
   width: 100%;

   nav {
      align-items: flex-end;
      color: ${(props) => props.theme.gray500};
      display: flex;
      flex-direction: row;
      font-size: 1.25rem;
      font-weight: 600;
      height: 7rem;
      justify-content: space-between;

      a {
         align-items: flex-end;
         display: flex;
         height: 7rem;
         padding: 0 1rem 1.5rem;
         position: relative;

         &:hover {
            color: ${(props) => props.theme.gray900};
            transition: 0.2s;
         }

         &.active {
            background-color: ${(props) => props.theme.cyan800};
            color: ${(props) => props.theme.white};
         }
      }

      div {
         align-items: center;
         display: flex;
         gap: 4rem;

         &:last-child {
            gap: 1rem;
         }
      }
   }
`
