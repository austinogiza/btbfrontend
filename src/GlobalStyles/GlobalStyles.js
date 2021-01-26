import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}
/* font-family: 'DM Sans', sans-serif; */
body {
  background: var(--white);
  width: 100%;
  height: 100%;
  font-family: "DM Sans", sans-serif;
  overflow-x: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  scrollbar-color: var(--orange);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "DM Sans", sans-serif;
}
p,
a {
  font-family: "DM Sans", sans-serif;
}
ul,
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}

`