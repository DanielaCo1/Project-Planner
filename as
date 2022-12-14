/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; }

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block; }

body {
  line-height: 1; }

ol, ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

* {
  box-sizing: border-box; }

body {
  background-color: #1F2020; }

.button {
  background-color: #0096C7;
  border: none;
  padding: 9px;
  border-radius: 10px;
  display: inline-block; }
  .button--icon {
    background-repeat: no-repeat;
    background-position: right;
    padding-right: 20px; }
    .button--icon--up {
      background-image: url("../img/up.svg");
      background-size: 15px; }
    .button--icon--down {
      background-image: url("../img/down.svg");
      background-size: 15px; }
    .button--icon--sens {
      background-image: url("../img/sens.svg");
      background-size: 20px; }
    .button--icon--trash {
      background-image: url("../img/trash.svg");
      background-size: 25px;
      padding-right: 25px; }
    .button--icon--solo {
      height: 18px;
      padding: 0;
      width: 18px;
      display: block;
      background-color: transparent; }

.taskCardList {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 450px;
  background-color: #0096C7;
  padding: 10px;
  border-radius: 18px; }

.taskCard {
  display: flex;
  flex-direction: column;
  gap: 18px;
  border: 2px solid black;
  border-radius: 18px;
  padding: 18px;
  background-color: white; }
  .taskCard__main {
    display: flex;
    justify-content: space-between;
    align-items: center; }
    .taskCard__main__right {
      display: flex;
      gap: 9px;
      align-items: center; }
  .taskCard__title {
    font-weight: 700; }
  .taskCard__cd {
    font-weight: 700; }
  .taskCard__content {
    display: flex;
    flex-direction: column;
    gap: 18px; }
  .taskCard__buttons {
    display: flex;
    justify-content: space-between; }

main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 450px;
  margin: 0 auto; }

.navButton {
  display: flex;
  justify-content: space-between; }

/*# sourceMappingURL=as.map */
