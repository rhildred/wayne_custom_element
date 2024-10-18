
class FetchSW extends HTMLElement{
    async connectedCallback(){
        const oScript = new URL((document.currentScript as any).src);
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