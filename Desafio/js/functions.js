
$(function(){
    var iconeResponsivo = $('#id-topo-responsivo');
    var menuResponsivo =$('#id-topo-opcoes-responsivo');
    var checkMenu = false;
    var checkScreenSize = true;  

    //Esse script é responsável por fazer com que o menuResponsivo não apareça caso o usuário redimensione a tela
    //Clique para abrir o menu, e maximize a tela. USAR SOMENTE EM PRODUÇÃO!    
    
    $(window).resize(function()
      {location.reload();
        var screenWidth = $(window).width();
          console.log(screenWidth);
        if (screenWidth > 888) {
          menuResponsivo.css('display','none');
          checkMenu = false;
        }
      });    

    //Responsável pelo Menu
    iconeResponsivo.click(function(){
    menuResponsivo.slideToggle();
    })

    //Responsável pela biblioteca das Cidades e estados junto com o código inicial na página HTML
      new dgCidadesEstados({
      estado: document.getElementById('estado'),
      cidade: document.getElementById('cidade'),
      estadoVal: '<%=Request("estado") %>',
      cidadeVal: '<%=Request("cidade") %>'
  });
    
});