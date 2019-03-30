(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css?family=Major+Mono+Display|Overpass\");\n/* You can add global styles to this file, and also import other style files */\n/*\n.theme_dark {\n\n    $color-bg: #111111;\n    $color-fg: #ffffff;\n    $shadow-light: 0pt 3pt 8pt rgba(255, 255, 255, 0.2);\n    $shadow-dark: 0pt 5pt 8pt rgba(255, 255, 255, 0.4);\n\n    a {\n        text-decoration: underline;\n        color: #888888;\n    }\n\n    background-color: $color-bg;\n\n    p, h1, h2, h3, h4, h5, h6 {\n        color: $color-fg;\n    }\n\n    body {\n        background-color: $color-bg;\n    }\n\n    .header {\n\n        box-shadow: $shadow-light;\n\n        .header_content {\n            background-color: $color-bg;\n        }\n\n        .header_item {\n\n            a:hover {\n                text-shadow: $shadow-light;\n            }\n\n        }\n\n    }\n\n    .footer {\n\n        box-shadow: 0pt -3pt 8pt rgba(255, 255, 255, 0.2);\n\n    }\n\n    .card {\n        background-color: $color-bg;\n        color: $color-fg;\n        box-shadow: $shadow-light;\n    }\n\n    .card:hover {\n        box-shadow: $shadow-dark;\n    }\n\n}\n*/\n* {\n  margin: 0;\n  font-family: 'Overpass', 'Segoe UI Emoji', sans-serif;\n  flex-wrap: wrap; }\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Major Mono Display', 'Segoe UI Emoji', monospace; }\na {\n  text-decoration: underline;\n  color: #888888; }\n.banner {\n  width: 100%;\n  height: 360pt;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n  background-size: cover;\n  background-attachment: local;\n  color: #ffffff;\n  transition: 0.5s; }\n.banner .banner_content {\n    margin: auto;\n    padding: 24pt; }\n/*\n.banner:hover::before {\n    width: 2000pt;\n    height: 460pt;\n    content: \"\";\n    //position: absolute;\n    top: -100pt;\n    left: 100pt;\n    bottom: 0;\n    right: 0;\n    background: inherit;\n    box-shadow: inset 0 0 0 2000pt rgba(255,255,255,0.2);\n    filter: blur(25px);\n}\n*/\n.content {\n  max-width: 720pt;\n  margin: 24pt auto 48pt auto;\n  padding: 24pt; }\n.card {\n  margin: auto;\n  padding: 20pt;\n  max-width: 30%;\n  min-width: 200pt;\n  height: 380pt;\n  background-color: #ffffff;\n  box-shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n  transition: 0.5s; }\n.card h1, .card h2, .card h3, .card h4, .card h5, .card h6 {\n    text-align: center; }\n.card .card-start {\n    justify-self: flex-start;\n    margin: 0 auto auto auto; }\n.card .card-content {\n    justify-self: center;\n    text-align: left;\n    margin: auto; }\n.card .card-end {\n    justify-self: flex-end;\n    margin: auto auto 0 auto; }\n.card:hover {\n  box-shadow: 0pt 6pt 16pt rgba(0, 0, 0, 0.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGp1c3RpXFxQcm9ncmFtbWluZ1xcanVzdGluc2NoYWFmLmNvbVxcanVzdGluc2NoYWFmLmNvbS9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcanVzdGlcXFByb2dyYW1taW5nXFxqdXN0aW5zY2hhYWYuY29tXFxqdXN0aW5zY2hhYWYuY29tL3NyY1xcdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxrRkFBWTtBQUxaLDhFQUFBO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NxREM7QURPRDtFQUNJLFNBQVM7RUFDVCxxREFBcUQ7RUFDckQsZUFBZSxFQUFBO0FBR25CO0VBQ0ksOERBQThELEVBQUE7QUFHbEU7RUFDSSwwQkFBMEI7RUFDMUIsY0U3RWtCLEVBQUE7QUZnRnRCO0VBRUksV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFFaEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUU1QixjRWhHaUI7RUZpR2pCLGdCRTFGa0IsRUFBQTtBRjBFdEI7SUFvQlEsWUFBWTtJQUNaLGFBQWEsRUFBQTtBQU9yQjs7Ozs7Ozs7Ozs7Ozs7Q0NMQztBRHFCRDtFQUNJLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsYUFBYSxFQUFBO0FBR2pCO0VBRUksWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFFYix5QkUzSWlCO0VGNElqQiwwQ0V4SW1DO0VGMEluQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBRWpCLGdCRTdJa0IsRUFBQTtBRjRIdEI7SUFvQlEsa0JBQWtCLEVBQUE7QUFwQjFCO0lBd0JRLHdCQUF3QjtJQUN4Qix3QkFBd0IsRUFBQTtBQXpCaEM7SUE2QlEsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7QUEvQnBCO0lBbUNRLHNCQUFzQjtJQUN0Qix3QkFBd0IsRUFBQTtBQUtoQztFQUNJLDJDRXhLMEMsRUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL3ZhcnMuc2Nzc1wiO1xuXG4vLyBJbXBvcnQgZm9udHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWFqb3IrTW9ubytEaXNwbGF5fE92ZXJwYXNzJyk7XG5cbi8qXG4udGhlbWVfZGFyayB7XG5cbiAgICAkY29sb3ItYmc6ICMxMTExMTE7XG4gICAgJGNvbG9yLWZnOiAjZmZmZmZmO1xuICAgICRzaGFkb3ctbGlnaHQ6IDBwdCAzcHQgOHB0IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAkc2hhZG93LWRhcms6IDBwdCA1cHQgOHB0IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblxuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnO1xuXG4gICAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZmc7XG4gICAgfVxuXG4gICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZztcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcblxuICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LWxpZ2h0O1xuXG4gICAgICAgIC5oZWFkZXJfY29udGVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmc7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyX2l0ZW0ge1xuXG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdy1saWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcblxuICAgICAgICBib3gtc2hhZG93OiAwcHQgLTNwdCA4cHQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXG4gICAgfVxuXG4gICAgLmNhcmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmc7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZmc7XG4gICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctbGlnaHQ7XG4gICAgfVxuXG4gICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LWRhcms7XG4gICAgfVxuXG59XG4qL1xuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdPdmVycGFzcycsICdTZWdvZSBVSSBFbW9qaScsIHNhbnMtc2VyaWY7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICBmb250LWZhbWlseTogJ01ham9yIE1vbm8gRGlzcGxheScsICdTZWdvZSBVSSBFbW9qaScsIG1vbm9zcGFjZTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICRjb2xvci1tZWRpdW07XG59XG5cbi5iYW5uZXIge1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNjBwdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGxvY2FsO1xuXG4gICAgY29sb3I6ICRjb2xvci1saWdodDtcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi10aW1lO1xuXG4gICAgLmJhbm5lcl9jb250ZW50IHtcblxuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDI0cHQ7XG5cbiAgICB9XG5cbn1cblxuLy8gRnJvc3RlZCBHbGFzcyB3aGVuIGhvdmVyIC0tIG1heWJlIGZvciBhbm90aGVyIGRheS4uLiA9LChcbi8qXG4uYmFubmVyOmhvdmVyOjpiZWZvcmUge1xuICAgIHdpZHRoOiAyMDAwcHQ7XG4gICAgaGVpZ2h0OiA0NjBwdDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwMHB0O1xuICAgIGxlZnQ6IDEwMHB0O1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDIwMDBwdCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgZmlsdGVyOiBibHVyKDI1cHgpO1xufVxuKi9cblxuLmNvbnRlbnQge1xuICAgIG1heC13aWR0aDogNzIwcHQ7XG4gICAgbWFyZ2luOiAyNHB0IGF1dG8gNDhwdCBhdXRvO1xuICAgIHBhZGRpbmc6IDI0cHQ7XG59XG5cbi5jYXJkIHtcblxuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB0O1xuICAgIG1heC13aWR0aDogMzAlO1xuICAgIG1pbi13aWR0aDogMjAwcHQ7XG4gICAgaGVpZ2h0OiAzODBwdDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodDtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcblxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLXRpbWU7XG5cbiAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5jYXJkLXN0YXJ0IHtcbiAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87XG4gICAgfVxuXG4gICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgLmNhcmQtZW5kIHtcbiAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gMCBhdXRvO1xuICAgIH1cblxufVxuXG4uY2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1ob3Zlcjtcbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1ham9yK01vbm8rRGlzcGxheXxPdmVycGFzc1wiKTtcbi8qXG4udGhlbWVfZGFyayB7XG5cbiAgICAkY29sb3ItYmc6ICMxMTExMTE7XG4gICAgJGNvbG9yLWZnOiAjZmZmZmZmO1xuICAgICRzaGFkb3ctbGlnaHQ6IDBwdCAzcHQgOHB0IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAkc2hhZG93LWRhcms6IDBwdCA1cHQgOHB0IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblxuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnO1xuXG4gICAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZmc7XG4gICAgfVxuXG4gICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZztcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcblxuICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LWxpZ2h0O1xuXG4gICAgICAgIC5oZWFkZXJfY29udGVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmc7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyX2l0ZW0ge1xuXG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdy1saWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcblxuICAgICAgICBib3gtc2hhZG93OiAwcHQgLTNwdCA4cHQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXG4gICAgfVxuXG4gICAgLmNhcmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmc7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZmc7XG4gICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctbGlnaHQ7XG4gICAgfVxuXG4gICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LWRhcms7XG4gICAgfVxuXG59XG4qL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdPdmVycGFzcycsICdTZWdvZSBVSSBFbW9qaScsIHNhbnMtc2VyaWY7XG4gIGZsZXgtd3JhcDogd3JhcDsgfVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdNYWpvciBNb25vIERpc3BsYXknLCAnU2Vnb2UgVUkgRW1vamknLCBtb25vc3BhY2U7IH1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzg4ODg4ODsgfVxuXG4uYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzYwcHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IDAuNXM7IH1cbiAgLmJhbm5lciAuYmFubmVyX2NvbnRlbnQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyNHB0OyB9XG5cbi8qXG4uYmFubmVyOmhvdmVyOjpiZWZvcmUge1xuICAgIHdpZHRoOiAyMDAwcHQ7XG4gICAgaGVpZ2h0OiA0NjBwdDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwMHB0O1xuICAgIGxlZnQ6IDEwMHB0O1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDIwMDBwdCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgZmlsdGVyOiBibHVyKDI1cHgpO1xufVxuKi9cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA3MjBwdDtcbiAgbWFyZ2luOiAyNHB0IGF1dG8gNDhwdCBhdXRvO1xuICBwYWRkaW5nOiAyNHB0OyB9XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB0O1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgbWluLXdpZHRoOiAyMDBwdDtcbiAgaGVpZ2h0OiAzODBwdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB0IDNwdCA4cHQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgdHJhbnNpdGlvbjogMC41czsgfVxuICAuY2FyZCBoMSwgLmNhcmQgaDIsIC5jYXJkIGgzLCAuY2FyZCBoNCwgLmNhcmQgaDUsIC5jYXJkIGg2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNhcmQgLmNhcmQtc3RhcnQge1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87IH1cbiAgLmNhcmQgLmNhcmQtY29udGVudCB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IGF1dG87IH1cbiAgLmNhcmQgLmNhcmQtZW5kIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgIG1hcmdpbjogYXV0byBhdXRvIDAgYXV0bzsgfVxuXG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBwdCA2cHQgMTZwdCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiIsIlxyXG4kY29sb3ItbGlnaHQ6ICNmZmZmZmY7XHJcbiRjb2xvci1tZWRpdW06ICM4ODg4ODg7XHJcbiRjb2xvci1kYXJrOiAjMTExMTExO1xyXG5cclxuJHNoYWRvdzogMHB0IDNwdCA4cHQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kc2hhZG93LWhvdmVyOiAwcHQgNnB0IDE2cHQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuJHRyYW5zaXRpb24tdGltZTogMC41cztcclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\justi\Programming\justinschaaf.com\justinschaaf.com\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map