window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}

 
function hui1(){
    var documentID11 = document.getElementById("product12");
    documentID11.innerHTML = "click on download!!!";
    document.getElementById("rt").classList.add("lo")


}
function hui11(){
    var documentID11 = document.getElementById("product121");
    documentID11.innerHTML = "clicked";
    
    
    document.getElementById("rt").classList.remove("lo");



}
