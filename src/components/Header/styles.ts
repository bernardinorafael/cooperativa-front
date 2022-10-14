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
      height: 4.5rem;
      justify-content: space-between;
      z-index: 10;

      a {
         align-items: flex-end;
         display: flex;
         height: 4.5rem;
         padding: 0 1rem 1rem;
         position: relative;

         &:hover {
            color: ${(props) => props.theme.gray900};
            transition: 0.2s;
         }

         &.active {
            background-color: ${(props) => props.theme.cyan800};
            color: ${(props) => props.theme.white};
            z-index: 9;

            &::after {
               background: ${(props) => props.theme.cyan800};
               bottom: -30px;
               content: "";
               height: 2rem;
               left: 0;
               position: absolute;
               width: 100%;
            }
         }
      }

      div {
         align-items: center;
         display: flex;
         gap: 7.75rem;

         &:last-child {
            gap: 1rem;
         }
      }
   }
`
