$(".sexo").on ("change",function(){
  var opcion=$(this).val();
  switch(opcion){
    case"valor0":{
      $(".foto").attr("src","fotos/anonimo.jpg");
      break;
    }
    case"valor1":{
      $(".foto").attr("src","fotos/nino.jpg");
      break;
    }
    case"valor2":{
      $(".foto").attr("src","fotos/nina.jpg");
      break;
    }

}
});
