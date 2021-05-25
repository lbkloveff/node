$(function(){
   $("#nextpage").click(function(){
       $.ajax({
           type:"post",
           url:"/nextpage",
           success:function(data){
            document.getElementById("showdata").innerHTML=data.map((i,ind)=>
                  `
                  <tr>
					<td>${i.name}</td>
                    <td>${i.age}</td>
                    <td>${i.sex}</td>
					<td>${i.s1}</td>
					<td>${i.s2}</td>
					<td>${i.s3}</td>
					<td>${i.amount}</td>
					<td>
						<input data-id=${ind} type="button" value="删除" class="del_button">
						<input data-id=${ind} type="button" value="修改" class="update_button">
					</td>
				</tr>
                  `
              ).join("");
           }
       })
   })
});