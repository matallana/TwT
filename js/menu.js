    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $('.buton-conf').click(function() {
      var url = $(this).text();
      window.location.href = '/logout';
    });

    $('.buttonMenu').click(function(e) {
        var href = $(this).text();
        switch (href) {
          case 'Registro':
            $('#base-container').load('component/registro.html', function(data) {

            });
           
            break;

          case 'Empresas':
            $('#base-container').load('component/empresa.html', function(data) {
              
            });
            break;
          case 'Clientes':
            $('#base-container').load('component/prueba.html', function(data) {
              
            });
            break;
          case 'KPIs':
            $('#base-container').load('component/kpi.html', function(data) {

            });
            break;

           

        /*  case 'Gráficos':
            $('#base-container').load('static/modulos/grafico.html', function(data) {

            })
            break; */
        }
    });

