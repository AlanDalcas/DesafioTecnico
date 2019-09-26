	$(function(){
	   
		 $(document).ready(function(){
	       $("input").blur(function(){
	         if($(this).val() == "" )
	             {
					$(this).css({"border-color" : "#F00"});
	             }
	          });
	        })

     $(document).ready(function(){
       $("select").blur(function(){
         if($(this).val() == "")
             {
                 $(this).css({"border-color" : "#F00"});
             }
           });
         })

    //Responsável por enviar o Ajax ao servidor
    $('form.ajax').on('submit', function(){ 

     var that = $(this),
     url = that.attr('action'),
     type = that.attr('method'),
     data = {};

     that.find('[name]').each(function(index, value){
     var that = $(this),
     name = that.attr('name'),
     value = that.val()

     data[name] = value;
    });      

    $.ajax({
      url: 'https://desafiotecnico.free.beeceptor.com', 
      type: type,
      data: data,
      success: function(data) { 
      alert('Cadastro Realizado com Sucesso');
      $('form')[0].reset();

      }
    })
   return false;
  });
});