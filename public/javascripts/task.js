function add_button(){
    window.location.href="/product_list/addpage"
}

function update(){
    window.location.href="/update";
}

function add_order_list(){
    window.location.href="/order_list/addpage2"
}

function order_update(){
    window.location.href="/order_update";
}

// Array.from(document.getElementsByClassName("del_button")).forEach(i=>{
//     i.onclick=function(){
//         let ind = this.getAttribute("data-id");
//         window.location.href='/delete/'+ind;
//     }
// });
// Array.from(document.getElementsById("update_button")).forEach(i=>{
//     i.onclick=function(){
//         let ind = this.getAttribute("data-id");
//         window.location.href='/update/'+ind;
//     }
// })

