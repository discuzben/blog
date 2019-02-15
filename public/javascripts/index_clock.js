// window.onload=function(){
//     var c=document.querySelector("canvas");
//     var box=document.querySelector("#box");
//     var cxt=c.getContext("2d");
//     cxt.translate(box.offsetWidth/2,box.offsetHeight/2);
//     var r=box.offsetWidth/2-6;
//     function clock(){
//         // 返回重新映射画布之前的画布区域大小清除像素
//         cxt.clearRect(-r,-r,2*r,2*r);
//         // 循环绘制钟的线条
//         for (var i = 0; i < 60; i++) {
//             cxt.beginPath();
//             cxt.strokeStyle="white";
//             cxt.moveTo(0,-r);
//             if (i%5==0) {
//                 if (i%3==0) {
//                     cxt.lineWidth=3;
//                     cxt.lineTo(0,10-r);
//                 }
//                 cxt.lineWidth=2;
//                 cxt.lineTo(0,8-r);
//
//             }else{
//                 cxt.lineWidth=1;
//                 cxt.lineTo(0,6-r);
//             }
//             cxt.stroke();
//             cxt.rotate(2*Math.PI/60);
//
//         }
//         // 中心圆点
//         cxt.beginPath();
//         cxt.fillStyle="white";
//         cxt.strokeStyle="white";
//         cxt.arc(0,0,10,0,2*Math.PI,true);
//         cxt.fill();
//         cxt.stroke();
//
//         // 获取实时时间
//         var date=new Date();
//         var hour=date.getHours();
//         var minute=date.getMinutes();
//         var second=date.getSeconds();
//         // 秒
//         cxt.save();//保存当前环境的状态
//         // 开始一条新路径
//         cxt.beginPath();
//         //旋转当前绘图6度
//         cxt.rotate(second*2*Math.PI/60);
//         cxt.strokeStyle="#3299CC";//设置笔触的颜色
//         cxt.lineWidth=1;
//         cxt.moveTo(0,10);
//         cxt.lineTo(0,15-r);
//         // 根据moveTo和lineTo绘制路径
//         cxt.stroke();
//         cxt.restore();//返回之前保存过的路径状态和属性
//
//         // 分钟
//         cxt.save();
//         cxt.beginPath();
//         cxt.rotate(minute*2*Math.PI/60+second*2*Math.PI/60/60);
//         cxt.moveTo(0,5);
//         cxt.strokeStyle="green";
//         cxt.lineWidth=2;
//         cxt.lineTo(0,20-r);
//         cxt.stroke();
//         cxt.restore();
//         // 小时
//         cxt.save();
//         cxt.beginPath();
//         cxt.rotate(hour*2*Math.PI/12+minute*2*Math.PI/60/12);
//         cxt.moveTo(0,5);
//         cxt.strokeStyle="#FF2400";
//         cxt.lineWidth=3;
//         cxt.lineTo(0,25-r);
//         cxt.stroke();
//         cxt.restore();
//     }
//     // 获取与实时时间对应的钟表样式
//     clock();
//     // 设置定时器
//     setInterval(clock,1000);
// }