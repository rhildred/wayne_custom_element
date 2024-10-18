/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

console.log("in main.ts");
class FetchSW extends HTMLElement {
    async connectedCallback() {
        console.log("connected");
        const oResponse = await fetch("sw.js");
        const oBlob = await oResponse.blob();
        const objectURL = URL.createObjectURL(oBlob);
        new Worker(objectURL);
        this.innerHTML = "<p>connected</p>";
    }
}
customElements.define("x-connected", FetchSW);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWZlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNvbnNvbGUubG9nKFwiaW4gbWFpbi50c1wiKTtcbmNsYXNzIEZldGNoU1cgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkXCIpO1xuICAgICAgICBjb25zdCBvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcInN3LmpzXCIpO1xuICAgICAgICBjb25zdCBvQmxvYiA9IGF3YWl0IG9SZXNwb25zZS5ibG9iKCk7XG4gICAgICAgIGNvbnN0IG9iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwob0Jsb2IpO1xuICAgICAgICBuZXcgV29ya2VyKG9iamVjdFVSTCk7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCI8cD5jb25uZWN0ZWQ8L3A+XCI7XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwieC1jb25uZWN0ZWRcIiwgRmV0Y2hTVyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=