console.log("in main.ts")

class FetchSW extends HTMLElement{
    async connectedCallback(){
        console.log("connected");
        const oResponse = await fetch("sw.js");
        const oBlob = await oResponse.blob();
        const objectURL = URL.createObjectURL(oBlob);
        new Worker(objectURL);
        this.innerHTML = "<p>connected</p>";
    }
}

customElements.define("x-connected", FetchSW);