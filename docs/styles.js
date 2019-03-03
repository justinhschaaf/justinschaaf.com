(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css?family=Major+Mono+Display|Overpass\");\n/* You can add global styles to this file, and also import other style files */\n.theme_dark {\n  background-color: #111111; }\n.theme_dark a {\n    text-decoration: underline;\n    color: #888888; }\n.theme_dark p, .theme_dark h1, .theme_dark h2, .theme_dark h3, .theme_dark h4, .theme_dark h5, .theme_dark h6 {\n    color: #ffffff; }\n.theme_dark body {\n    background-color: #111111; }\n.theme_dark .header {\n    box-shadow: 0pt 3pt 8pt rgba(255, 255, 255, 0.2); }\n.theme_dark .header .header_content {\n      background-color: #111111; }\n.theme_dark .header .header_item a:hover {\n      text-shadow: 0pt 3pt 8pt rgba(255, 255, 255, 0.2); }\n.theme_dark .footer {\n    box-shadow: 0pt -3pt 8pt rgba(255, 255, 255, 0.2); }\n.theme_dark .card {\n    background-color: #111111;\n    color: #ffffff;\n    box-shadow: 0pt 3pt 8pt rgba(255, 255, 255, 0.2); }\n.theme_dark .card:hover {\n    box-shadow: 0pt 5pt 8pt rgba(255, 255, 255, 0.4); }\n* {\n  margin: 0;\n  font-family: 'Overpass', 'Segoe UI Emoji', sans-serif;\n  flex-wrap: wrap; }\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Major Mono Display', 'Segoe UI Emoji', monospace; }\na {\n  text-decoration: underline;\n  color: #888888; }\n.banner {\n  width: 100%;\n  height: 360pt;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n  background-size: cover;\n  background-attachment: local;\n  color: #FFFFFF;\n  transition: 0.3s; }\n.banner .banner_content {\n    margin: auto;\n    padding: 25pt; }\n/*\n.banner:hover::before {\n    width: 2000pt;\n    height: 460pt;\n    content: \"\";\n    //position: absolute;\n    top: -100pt;\n    left: 100pt;\n    bottom: 0;\n    right: 0;\n    background: inherit;\n    box-shadow: inset 0 0 0 2000pt rgba(255,255,255,0.2);\n    filter: blur(25px);\n}\n*/\n.content {\n  max-width: 720pt;\n  margin: 24pt auto 48pt auto;\n  padding: 24pt; }\n.card {\n  margin: auto;\n  padding: 20pt;\n  max-width: 30%;\n  min-width: 200pt;\n  background-color: #ffffff;\n  box-shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2);\n  transition: 0.3s; }\n.card h1, .card h2, .card h3, .card h4, .card h5, .card h6 {\n    text-align: center; }\n.card:hover {\n  box-shadow: 0pt 5pt 8pt rgba(0, 0, 0, 0.4); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGp1c3RpXFxQcm9ncmFtbWluZ1xcanVzdGluc2NoYWFmLmNvbVxcanVzdGluc2NoYWFmLmNvbS9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxrRkFBWTtBQUhaLDhFQUFBO0FBS0E7RUFZSSx5QkFWa0IsRUFBQTtBQUZ0QjtJQVFRLDBCQUEwQjtJQUMxQixjQUFjLEVBQUE7QUFUdEI7SUFlUSxjQVpjLEVBQUE7QUFIdEI7SUFtQlEseUJBakJjLEVBQUE7QUFGdEI7SUF3QlEsZ0RBcEIrQyxFQUFBO0FBSnZEO01BMkJZLHlCQXpCVSxFQUFBO0FBRnRCO01BaUNnQixpREE3QnVDLEVBQUE7QUFKdkQ7SUEwQ1EsaURBQWlELEVBQUE7QUExQ3pEO0lBK0NRLHlCQTdDYztJQThDZCxjQTdDYztJQThDZCxnREE3QytDLEVBQUE7QUFKdkQ7SUFxRFEsZ0RBaEQ4QyxFQUFBO0FBcUR0RDtFQUNJLFNBQVM7RUFDVCxxREFBcUQ7RUFDckQsZUFBZSxFQUFBO0FBR25CO0VBQ0ksOERBQThELEVBQUE7QUFHbEU7RUFDSSwwQkFBMEI7RUFDMUIsY0FBYyxFQUFBO0FBR2xCO0VBRUksV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFFaEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUU1QixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUFoQnBCO0lBb0JRLFlBQVk7SUFDWixhQUFhLEVBQUE7QUFPckI7Ozs7Ozs7Ozs7Ozs7O0NDcENDO0FEb0REO0VBQ0ksZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixhQUFhLEVBQUE7QUFHakI7RUFFSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFFaEIseUJBQXlCO0VBQ3pCLDBDQUEwQztFQUUxQyxnQkFBZ0IsRUFBQTtBQVZwQjtJQWFRLGtCQUFrQixFQUFBO0FBSzFCO0VBQ0ksMENBQTBDLEVBQUEiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4vLyBJbXBvcnQgZm9udHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWFqb3IrTW9ubytEaXNwbGF5fE92ZXJwYXNzJyk7XG5cbi50aGVtZV9kYXJrIHtcblxuICAgICRjb2xvci1iZzogIzExMTExMTtcbiAgICAkY29sb3ItZmc6ICNmZmZmZmY7XG4gICAgJHNoYWRvdy1saWdodDogMHB0IDNwdCA4cHQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICRzaGFkb3ctZGFyazogMHB0IDVwdCA4cHQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG4gICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogIzg4ODg4ODtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmc7XG5cbiAgICBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1mZztcbiAgICB9XG5cbiAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuXG4gICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctbGlnaHQ7XG5cbiAgICAgICAgLmhlYWRlcl9jb250ZW50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZztcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXJfaXRlbSB7XG5cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAkc2hhZG93LWxpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5mb290ZXIge1xuXG4gICAgICAgIGJveC1zaGFkb3c6IDBwdCAtM3B0IDhwdCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZztcbiAgICAgICAgY29sb3I6ICRjb2xvci1mZztcbiAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1saWdodDtcbiAgICB9XG5cbiAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctZGFyaztcbiAgICB9XG5cbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MnLCAnU2Vnb2UgVUkgRW1vamknLCBzYW5zLXNlcmlmO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgZm9udC1mYW1pbHk6ICdNYWpvciBNb25vIERpc3BsYXknLCAnU2Vnb2UgVUkgRW1vamknLCBtb25vc3BhY2U7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjODg4ODg4O1xufVxuXG4uYmFubmVyIHtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzYwcHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbDtcblxuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAuYmFubmVyX2NvbnRlbnQge1xuXG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogMjVwdDtcblxuICAgIH1cblxufVxuXG4vLyBGcm9zdGVkIEdsYXNzIHdoZW4gaG92ZXIgLS0gbWF5YmUgZm9yIGFub3RoZXIgZGF5Li4uID0sKFxuLypcbi5iYW5uZXI6aG92ZXI6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDIwMDBwdDtcbiAgICBoZWlnaHQ6IDQ2MHB0O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTAwcHQ7XG4gICAgbGVmdDogMTAwcHQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjAwMHB0IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICBmaWx0ZXI6IGJsdXIoMjVweCk7XG59XG4qL1xuXG4uY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA3MjBwdDtcbiAgICBtYXJnaW46IDI0cHQgYXV0byA0OHB0IGF1dG87XG4gICAgcGFkZGluZzogMjRwdDtcbn1cblxuLmNhcmQge1xuXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHQ7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgbWluLXdpZHRoOiAyMDBwdDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB0IDNwdCA4cHQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG4gICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHQgNXB0IDhwdCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NYWpvcitNb25vK0Rpc3BsYXl8T3ZlcnBhc3NcIik7XG4udGhlbWVfZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7IH1cbiAgLnRoZW1lX2RhcmsgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICM4ODg4ODg7IH1cbiAgLnRoZW1lX2RhcmsgcCwgLnRoZW1lX2RhcmsgaDEsIC50aGVtZV9kYXJrIGgyLCAudGhlbWVfZGFyayBoMywgLnRoZW1lX2RhcmsgaDQsIC50aGVtZV9kYXJrIGg1LCAudGhlbWVfZGFyayBoNiB7XG4gICAgY29sb3I6ICNmZmZmZmY7IH1cbiAgLnRoZW1lX2RhcmsgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTsgfVxuICAudGhlbWVfZGFyayAuaGVhZGVyIHtcbiAgICBib3gtc2hhZG93OiAwcHQgM3B0IDhwdCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IH1cbiAgICAudGhlbWVfZGFyayAuaGVhZGVyIC5oZWFkZXJfY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExOyB9XG4gICAgLnRoZW1lX2RhcmsgLmhlYWRlciAuaGVhZGVyX2l0ZW0gYTpob3ZlciB7XG4gICAgICB0ZXh0LXNoYWRvdzogMHB0IDNwdCA4cHQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyB9XG4gIC50aGVtZV9kYXJrIC5mb290ZXIge1xuICAgIGJveC1zaGFkb3c6IDBwdCAtM3B0IDhwdCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IH1cbiAgLnRoZW1lX2RhcmsgLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB0IDNwdCA4cHQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyB9XG4gIC50aGVtZV9kYXJrIC5jYXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHQgNXB0IDhwdCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdPdmVycGFzcycsICdTZWdvZSBVSSBFbW9qaScsIHNhbnMtc2VyaWY7XG4gIGZsZXgtd3JhcDogd3JhcDsgfVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdNYWpvciBNb25vIERpc3BsYXknLCAnU2Vnb2UgVUkgRW1vamknLCBtb25vc3BhY2U7IH1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzg4ODg4ODsgfVxuXG4uYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzYwcHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRyYW5zaXRpb246IDAuM3M7IH1cbiAgLmJhbm5lciAuYmFubmVyX2NvbnRlbnQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyNXB0OyB9XG5cbi8qXG4uYmFubmVyOmhvdmVyOjpiZWZvcmUge1xuICAgIHdpZHRoOiAyMDAwcHQ7XG4gICAgaGVpZ2h0OiA0NjBwdDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwMHB0O1xuICAgIGxlZnQ6IDEwMHB0O1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDIwMDBwdCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgZmlsdGVyOiBibHVyKDI1cHgpO1xufVxuKi9cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA3MjBwdDtcbiAgbWFyZ2luOiAyNHB0IGF1dG8gNDhwdCBhdXRvO1xuICBwYWRkaW5nOiAyNHB0OyB9XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB0O1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgbWluLXdpZHRoOiAyMDBwdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB0IDNwdCA4cHQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzOyB9XG4gIC5jYXJkIGgxLCAuY2FyZCBoMiwgLmNhcmQgaDMsIC5jYXJkIGg0LCAuY2FyZCBoNSwgLmNhcmQgaDYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBwdCA1cHQgOHB0IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxuIl19 */", '', '']]

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