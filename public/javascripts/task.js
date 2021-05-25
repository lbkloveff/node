document.getElementById("add_button").onclick=function(){
    window.location.href='/product_list/addpage';
}
document.getElementById("update_button").onclick=function(){
    window.location.href='/product_list/up';
}


// Array.from(document.getElementsByClassName("del_button")).forEach(i=>{
//     i.onclick=function(){
//         let ind = this.getAttribute("data-id");
//         window.location.href='/delete/'+ind;
//     }
// });
// Array.from(document.getElementsByClassName("update_button")).forEach(i=>{
//     i.onclick=function(){
//         let ind = this.getAttribute("data-id");
//         window.location.href='/update/'+ind;
//     }
// })

