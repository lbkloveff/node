document.getElementById("add_button").onclick=function(){
    window.location.href='/addpage';
}


Array.from(document.getElementsByClassName("del_button")).forEach(i=>{
    i.onclick=function(){
        let ind = this.getAttribute("data-id");
        window.location.href='/delete/'+ind;
    }
});
// Array.from(document.getElementsByClassName("update_button")).forEach(i=>{
//     i.onclick=function(){
//         let ind = this.getAttribute("data-id");
//         window.location.href='/update/'+ind;
//     }
// })

// function order_update(){
//     window.location.href="/"
// }
