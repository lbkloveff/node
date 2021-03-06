    //用户名部分
    //获取username的span标签
    var usertip = document.getElementById("tipuser");
    //获取用户名
    var user=document.getElementById("username")
    var username=user.value;
                
    //给用户名文本框绑定blur事件
    user.onblur=function(){
    var username=user.value;
    //去除前后空白
    var username=username.trim();

    var regExp=/^[\u4e00-\u9fa5]+$/;//多个连续中文
                    
    //判断用户名是否为空
    if(username!==""){
    //username不为空
    //继续判断长度[6-14]
    if(user.value.length<2||user.value.length>4){
    //用户名长度非法
    usertip.innerText="对不起！用户名长度必须要在[2~4]位之间";
    }else{
                            
    var ok=regExp.test(username);
    if(ok){
    //用户名最终合法
    usertip.style.color="green";
    usertip.innerText="√用户名格式正确";
    }else{                     
    usertip.innerText="中文名不能含有非中文";
    }
    }

    }else {
    //username为空
    usertip.innerText="用户名不能为空！";
    }
    }
    //给username获取焦点函数
    user.onfocus =function(){
    //获取用户名
    var user=document.getElementById("username")
    var username=user.value;
                    
    if(usertip.innerText!=""){
    //注意不要获取错
    //之前一直username.value但是username其实就是user.value，容易记混
    user.value="";
                        
    }
    //清空span
    usertip.innerText="";
    }

    //密码部分
    //获取password的span标签
    var tippass = document.getElementById("tippass");
    var pass=document.getElementById("password")
    var password=pass.value;
    //确认密码
    //获取rpassword的span标签
    var tipemail = document.getElementById("tipemail");
    var checkpass=document.getElementById("rpassword")
    var rpassword=checkpass.value;

    //给密码文本框绑定blur事件
    pass.onblur=function(){
        var password=pass.value;
        //去除前后空白
        var password=password.trim();
        
        //判断密码是否为空
        if(password!==""){
            //password不为空
            //继续判断长度[6-14]
            if(pass.value.length<6||pass.value.length>14){
                //密码长度非法
                tippass.innerText="对不起！密码长度必须要在[6~14]位之间";
            }else{
                //密码度合法
                //继续判断是否含有特殊符号
                //使用正则表达式
                var regExp=/^[A-Za-z0-9]+$/;
                var ok=regExp.test(password);
                if(ok){
                    //密码最终合法
                    tippass.style.color="green";
                    tippass.innerText="√密码格式正确";
                }else{
                    //密码有特殊符号
                    tippass.innerText="密码只能由数字和字母组成";
                }
            }

        }else {
            //password为空
            tippass.innerText="密码不能为空！";
        }
    }

        checkpass.onblur=function(){
            var rpassword=checkpass.value;
            //去除前后空白
            var rpassword=rpassword.trim();
            //判断确认密码是否等于密码
            if(checkpass.value!==pass.value){
                tipemail.innerHTML="两次输入密码不一样"
            }else{
                tipemail.style.color="green";
                tipemail.innerHTML="√密码正确"
            }
        }

    //给password获取焦点函数
    pass.onfocus =function(){
    
        var pass=document.getElementById("password")
        var password=pass.password;
        
        if(tippass.innerText!=""){
            pass.value="";
            
        }
    
        tippass.innerText="";
    }
    //给rpassword获取焦点函数
    checkpass.onfocus =function(){
    
        var checkpass=document.getElementById("rpassword")
        var rpassword=checkpass.rpassword;
        
        if(checkpass.innerText!=""){
            checkpass.value="";
            
        }
    
        checkpass.innerText="";
    }
    
    //电话部分
    var telphone=document.getElementById("telphone");
    var phone=document.getElementById("telnum");
    var telnum=phone.value;

    phone.onblur=function(){
        var telnum=phone.value;
        //去除前后空白
        var telnum=telnum.trim();
        var regExp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
        var ok=regExp.test(telnum);
        if (!ok) {
            telphone.innerHTML="格式错误，请输入11位数手机号"
        } else {
            telphone.style.color="green";
            telphone.innerHTML="√手机号格式正确"
        
        }

    }

    phone.onfocus =function(){
    
        var phone=document.getElementById("telnum")
        var telnum=phone.telnum;
        
        if(phone.innerText!=""){
            phone.value="";
            
        }
    
        checkpass.innerText="";
    }
    
