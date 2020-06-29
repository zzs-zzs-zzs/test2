<template>
    <div>
        <div class="login-container">
            <div class="left-container">
                <div class="title">登录</div>
                <div class="input--container">
                    <input type="text" name="userNmae" placeholder="用户名" v-model="username">
                    <input type="password" name="password" placeholder="密码" v-model="password">
                </div>
                <div class="message-container">
                    <span>忘记密码</span>
                </div>
            </div>
            <div class="right-container">
                <div class="action-container">
                    <span @click="login()">提交</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    export default({
        data:function(){
            return{
                username:null,
                password:null
            }
        },
        methods:{
            login(){
                const username=this.username;
                const password=this.password;
               // alert(uesrname);
               // alert(password);
                this.$http.post("http://127.0.0.1:3000/login",{password:password,username:username},{emulateJSON:true}).then((result)=>{
                    if(result.body=="true"){
                        this.$router.replace('/user')
                        
                    }
                    else{
                        alert("密码或账号错误");
                    }
                });
            }
        }
    })
</script>


<style scoped>
    .login-container{
        height: 320px;
        width: 600px;
        margin: 0 auto;
        border-radius: 15px;
        margin-top: 10%;
        box-shadow: 0 10px 50px 0px rgb(59,45,159);
        background-color: rgb(95,76,194);
    }

    .login-container .left-container{
        background-image: linear-gradient(to bottom right,rgb(118,76,163),rgb(92,103,211));
        width: 330px;
        display: inline-block;
        border-top-left-radius: 15px ;
        border-bottom-right-radius: 15px ;
        padding: 60px;
    }

    .title{
        color: white;
        font-size: 18px;
        font-weight: 200;
    }

    .title:hover{
        cursor: pointer;
    }

    .login-container .left-container .title span{
        border-bottom: 3px solid rgb(237,221,22);
    }

    .login-container .left-container .input--container{
        padding: 20px 0;
    }

    ::-webkit-input-placeholder{
        color: rgb(199,191,219);
    }

    .login-container .left-container .input--container input{
        border: 0;
        background: none;
        outline: 0;
        color: white;
        margin: 20px 0 ;
        padding: 5px 0;
        border-bottom: 1px solid rgb(199,191,219);
        display: block;
        width: 100%;
        transition: 0.2s;
    }

    .login-container .left-container .input--container input:hover{
        border-bottom-color: white;
    }

    .login-container .left-container .message-container{
        font-size: 14px;
        color: rgb(199,191,219);
        cursor: pointer;
    }

    .login-container .left-container .message-container:hover{
        color: rgb(199,191,219) ;
    }


    .login-container .right-container{
        width: 145px;
        display: inline-block;
        height: calc(100% - 120px);
        vertical-align: top;
        padding: 60px 0;
        text-align: center;
    }

    .login-container .right-container .regist{

        color: white;
        font-size: 18px;
        font-weight: 200;
    }

    .login-container .right-container .regist:hover{
        cursor: pointer;
    }

    .login-container .right-container span{
        border-bottom: 3px solid rgb(237,221,22);
    }

    .login-container .right-container .action-container{
        font-size: 14px;
        color: white;
        position: relative;
        height: 100%;
    }

    .login-container .right-container .action-container span{
        border: 1px solid rgb(237,221,22);
        padding: 10px;
        display: inline-block;
        line-height: 25px;
        border-radius: 50%;
        position: absolute;
        bottom: 70px;
        left: 50px;
        transition: 0.2s;
    }

    .login-container .right-container .action-container span:hover{
        background-color: rgb(237,221,22);
        cursor: pointer;
        color: rgb(95,76,194);
    }
</style>