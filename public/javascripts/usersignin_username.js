$(function () {
   $.post('../usersignin_name_backstage',function (data,status) {
       $("nav .signin a p").text(data[0].username);
   });
});