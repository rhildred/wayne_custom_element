/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

class FetchSW extends HTMLElement {
    async connectedCallback() {
        const oScript = new URL(document.currentScript.src);
        console.log(`connected to ${oScript.href}`);
        console.log(oScript);
        const oResponse = await fetch(oScript.href.replace("mfe", "sw"));
        const oBlob = await oResponse.blob();
        const objectURL = URL.createObjectURL(oBlob);
        new Worker(objectURL);
        this.innerHTML = "<p>connected</p>";
    }
}
customElements.define("x-connected", FetchSW);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWZlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNsYXNzIEZldGNoU1cgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGNvbnN0IG9TY3JpcHQgPSBuZXcgVVJMKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKTtcbiAgICAgICAgY29uc29sZS5sb2coYGNvbm5lY3RlZCB0byAke29TY3JpcHQuaHJlZn1gKTtcbiAgICAgICAgY29uc29sZS5sb2cob1NjcmlwdCk7XG4gICAgICAgIGNvbnN0IG9SZXNwb25zZSA9IGF3YWl0IGZldGNoKG9TY3JpcHQuaHJlZi5yZXBsYWNlKFwibWZlXCIsIFwic3dcIikpO1xuICAgICAgICBjb25zdCBvQmxvYiA9IGF3YWl0IG9SZXNwb25zZS5ibG9iKCk7XG4gICAgICAgIGNvbnN0IG9iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwob0Jsb2IpO1xuICAgICAgICBuZXcgV29ya2VyKG9iamVjdFVSTCk7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCI8cD5jb25uZWN0ZWQ8L3A+XCI7XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwieC1jb25uZWN0ZWRcIiwgRmV0Y2hTVyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=