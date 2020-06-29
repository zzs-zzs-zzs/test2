<template>
    <div>
        <el-menu style="padding:0px,margin:0px"
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal" 
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item index="1">&nbsp;&nbsp;智能晾衣架客户中心&nbsp;&nbsp;</el-menu-item>
            <el-menu-item index="2" style="float:right" @click=exit()>&nbsp;&nbsp;退出登录&nbsp;&nbsp;</el-menu-item>
        </el-menu>

        <br>
        <div style="width=100%">

            <div style="width:60%;float:left;">
                <el-row>
                    <el-col :span="11"  :offset="0">
                        <el-card :body-style="{ padding: '0px' }">
                        <img src="http://127.0.0.1:3000/img/temp.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>温度：{{temp}}℃</span>
                            <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            </div>
                        </div>
                        </el-card>
                    </el-col>
                    <el-col :span="11"  :offset="1">
                        <el-card :body-style="{ padding: '0px' }">
                        <img src="http://127.0.0.1:3000/img/humi.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>湿度：{{humi}}%</span>
                            <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            </div>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>

                <br>

                <el-row >
                    <el-col :span="11"  :offset="0">
                        <el-card :body-style="{ padding: '0px' }">
                        <img src="http://127.0.0.1:3000/img/light.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>光度：{{light}}%</span>
                            <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            </div>
                        </div>
                        </el-card>
                    </el-col>
                    <el-col :span="11" :offset="1">
                        <el-card :body-style="{ padding: '0px' }">
                        <img src="http://127.0.0.1:3000/img/pa.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>气压：{{pa}}pa</span>
                            <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            </div>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>

            </div>
                


            <div style="width:35%;float:right;">
                <el-row >
                    <el-col :span="20"  :offset="0">
                        <el-card :body-style="{ padding: '0px' }">
                        <img src="http://127.0.0.1:3000/img/humi1.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>衣服湿度：{{humiOfCloth}}%</span>
                            <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            </div>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
                <br>
                <br>
                <el-row >
                     <el-col :span="20"  :offset="0">
                        <el-card  :body-style="{ padding: '0px' }">
                           <el-tag style="width:100%;height:38px;font-size:18px;text-align:center" type="success">
                               晾衣架的状态：{{status}}
                           </el-tag>
                        </el-card>
                    </el-col>
                </el-row>
                <br>
                <br>
                <div style="width:100%">
                    
                    <el-button style="width:83%" type="warning"  @click="change()">根据环境自行控制</el-button>
                    <br>
                    <br>
                    <el-button style="width:83%" type="success"  @click="trunon()">伸出</el-button>
                    <br>
                    <br>
                    <el-button style="width:83%" type="success"  @click="trunoff()">收缩</el-button>
                </div>

                
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return {
                temp:null,
                humi:null,
                light:null,
                pa:null,
                humiOfCloth:null,
                status:"",
                activeIndex2: '1',
                currentDate:new Date(),
                time:0,
                control:0
            }
        },
        created(){
            
            this.timer();
            setInterval(this.timer, 60000);
        },
        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            /*timer(){
               this.$http.get("http://127.0.0.1:3000/getPa").then((result1)=>{
                   console.log(result1.body);
                   setInterval(2000);
                   if(result1.body=="getPa"){
                       this.$http.get("http://127.0.0.1:3000/getTemp").then((result2)=>{
                        console.log(result2.body);
                        setInterval(4000);
                        if(result2.body=="getTemp"){
                            this.$http.get("http://127.0.0.1:3000/getHumi").then((result3)=>{
                            console.log(result3.body);
                            setInterval(6000);
                            if(result3.body=="getHumi"){
                                this.$http.get("http://127.0.0.1:3000/getLight").then((result4)=>{
                                console.log(result4.body);
                                setInterval(8000);
                                if(result4.body=="getLight"){
                                    this.$http.get("http://127.0.0.1:3000/gethumiOfCloth").then((result5)=>{
                                    console.log(result5.body);
                                    setInterval(10000);
                                    if(result5.body=="gethumiOfCloth"){
                                        if(result1.body=="getPa" && result2.body=="getTemp" && result3.body=="getHumi" && result4.body=="getLight" && result5.body=="gethumiOfCloth"){

                                            
                                            this.$http.get("http://127.0.0.1:3000/pa").then((result)=>{
                                            console.log(result.body);
                                            this.pa=parseInt(result.body.pa);
                                            console.log(typeof this.pa);
                                            });
                                            setInterval(1000);
                                            this.$http.get("http://127.0.0.1:3000/humi").then((result)=>{
                                                console.log(result.body);
                                                this.humi=parseInt(result.body.humi);
                                            });
                                            setInterval(1000);
                                            this.$http.get("http://127.0.0.1:3000/light").then((result)=>{
                                                console.log(result.body);
                                                this.light=parseInt(result.body.light);
                                            });
                                            setInterval(1000);
                                            this.$http.get("http://127.0.0.1:3000/temp").then((result)=>{
                                                console.log(result.body);
                                                this.temp=parseInt(result.body.temp);
                                            });
                                            this.$http.get("http://127.0.0.1:3000/humiOfCloth").then((result)=>{
                                                console.log(result.body);
                                                this.humiOfCloth=parseInt(result.body.humiofcloth);
                                            });  
                                            setInterval(1000);
                                            if(this.humiOfCloth<40){
                                                this.status="收缩";
                                            }
                                            else{
                                                if(this.humi>80){
                                                    this.status="收缩";
                                                }
                                                else{
                                                    if(this.tempv<30 && this.humi>65 && this.pa>80 && this.light>350/10){
                                                            this.status="收缩";
                                                    }
                                                    else{
                                                        this.status="伸出";
                                                    }
                                            
                                                }
                                            }










                                        }
                                        }
                                    
                                
                                });
                                    }

                                    
                                    
                                });
                                }
                            
                        });
                        }
                        
                    });
                   }
                    

                });
                
                 
            },*/

            timer(){
                this.$http.get("http://127.0.0.1:3000/getPa").then((result)=>{
                    console.log(result.body);
                    if(result.body=="allOk"){
                        



                         this.$http.get("http://127.0.0.1:3000/pa").then((result)=>{
                            console.log(result.body);
                            this.pa=parseInt(result.body.pa);
                            console.log(typeof this.pa);
                             this.$http.get("http://127.0.0.1:3000/humi").then((result)=>{
                            console.log(result.body);
                            this.humi=parseInt(result.body.humi);
                             this.$http.get("http://127.0.0.1:3000/light").then((result)=>{
                            console.log(result.body);
                            this.light=parseInt(result.body.light);
                              this.$http.get("http://127.0.0.1:3000/temp").then((result)=>{
                                console.log(result.body);
                                this.temp=parseInt(result.body.temp);
                                  this.$http.get("http://127.0.0.1:3000/humiOfCloth").then((result)=>{
                                console.log(result.body);
                                this.humiOfCloth=parseInt(result.body.humiofcloth);

                                if(this.control==0){
                                     if(this.humiOfCloth<40){
                                        this.status="收缩"; 
                                    }
                                    else{
                                        if(this.humi>80){
                                            this.status="收缩";
                                        }
                                        else{
                                            if(this.tempv<30 && this.humi>65 && this.pa>80 && this.light>350/10){
                                                    this.status="收缩";
                                            }
                                            else{
                                                this.status="伸出";
                                            }
                                    
                                        }
                                    }
                                }

                                
                        }); 
                            });
                        });
                        });
                            });


                    }
                })
            },
                
            change () {  
                this.$http.get("http://127.0.0.1:3000/change").then((result)=>{
                    console.log(result.body);
                    this.control=0;
                    if(this.humiOfCloth<40){
                                        this.status="收缩"; 
                                    }
                                    else{
                                        if(this.humi>80){
                                            this.status="收缩";
                                        }
                                        else{
                                            if(this.tempv<30 && this.humi>65 && this.pa>80 && this.light>350/10){
                                                    this.status="收缩";
                                            }
                                            else{
                                                this.status="伸出";
                                            }
                                    
                                        }
                                    }
                })
                
            },
             trunon () {  
                this.$http.get("http://127.0.0.1:3000/turnon").then((result)=>{
                    console.log(result.body);
                    this.status="伸出";
                    this.control=1;
                })
                
            },  
             trunoff () {  
                this.$http.get("http://127.0.0.1:3000/turnoff").then((result)=>{
                    console.log(result.body);
                     this.status="收缩";
                    this.control=1;
                })
                
            },
            exit(){
                this.$router.replace("/app");
            }    
        }
    }
</script>


<style lang="scss" > 
    el-card{
        height: 20px;
    }
    .time {
        font-size: 13px;
        color: #999;
    }
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        height: 200px;
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
</style>