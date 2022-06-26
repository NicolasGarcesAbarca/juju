import css from 'styled-jsx/css'
import { fonts, colors, breakpoints } from '../../styles/theme'

export const globalStyles = css.global`
        *{
            box-sizing:border-box;
            margin:0;
            padding:0;
        }
        html,body{
            font:${fonts.base};
            background-image:
              radial-gradient(${colors.mainBrand} 1px,transparent 1px),
              radial-gradient(${colors.mainBrand} 1px,transparent 1px);
            background-position:0 0,30px 30px;
            background-size:50px 50px;

        }
   
`

export default css`
    div{
        display:grid;
        place-items:center;
        height:100vh;
    }
    main{
        background:#fff;
        border-radius:10px;
        box-shadow:0 10px 20px rgba(0,0,0,0.1);
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media (min-width: ${breakpoints.mobile}) {
        main{
            width:450px;
            heigh: 90vh;
    }
`
