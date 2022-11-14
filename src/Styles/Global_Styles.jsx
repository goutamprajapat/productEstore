import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body{
    background-color: #fff;
  }
.bg{background: #395144;}
.color{color:#AA8B56;}
.pg{color:#4E6C50;}
.btn-color {color: #F0EBCE;}
.btn{
	 background: #AA8B56;
   border:none;
   font-weight: 900;
   border-radius:.3rem;
   padding: .8rem 1rem;
   color : #F0EBCE;
 }
 .hover{
   background: #4E6C5;
   color: #F0EBCE;
 }
 .Comn-Heading{
 	 display: flex;
 	 justify-content: center;
 	 margin: 4rem 0 2rem 0;
   	h1{
   		position: relative;
 	   	padding: 1rem;
 	  	font-size: 4rem;
 	  	color: #395144;
 	  	font-style: italic;
 	  	&::before{
 	  		content:'';
 	  		position: absolute;
 	  	  color: #AA8B56;
 	  		width: 100%;
 	  		top: 4rem;
 	  		transform: rotate(-3deg);
 	  		border-bottom: 3px solid ;
 	  	}
    	}
   }
 a{color: #fff;}
 a.active {color: #F0EBCE;}
 @media (max-width:768px){
   .mob-btn{
     background:#F0EBCE;
     color : #395144;
   }
   .Comn-Heading{
   	h1{font-size: 2.5rem;}
   }
 }
`;
/*#395144,
#4E6C50,
#AA8B56,
#F0EBCE*/
