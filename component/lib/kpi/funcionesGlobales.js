//VARIABLES GLOBALES
var modoeditar = false;
var cantidadDias;
var fecha;
var fb_seguidores;
var fb_alcance;
var fb_impresiones;
var fb_interacciones;
var fb_publicaciones;
var tw_seguidores;
var tw_alcance;
var tw_impresiones;
var tw_contribuidores;
var tw_tweets_generados;
var tw_retweets;
var tw_respuestas;
var tw_menciones;
var ht_visitas;
var ht_rebote;
var ht_permanencia;
var fechasDesde;
var fechasHasta;
var jsonData;
var fechasResultado;
var validado;

//................

var kpifb1;
var kpifb2;
var kpifb3;
var kpifb4;
var kpitw1;
var kpitw2;
var kpitw3;
var kpitw4;
var kpiwb1;
var kpiwb2;
var kpiwb3;

//................

var obj1;
var obj2;
//FUNCIONES GLOBALES

function getFechas(editar = false){       //ajax que llama a la funcion getfechas del server.js
    $.ajax({type: "POST",
        url: "/ajax", //edit utl to url
        datatype:"JSON",
        data: { dato: 'getFechas'},
        success: function(data){
            fechasResultado = []
            fechasFormulario = []
            jsonData = JSON.parse(data)
            for(i=0;i<jsonData.length;i++)
            {       //iteración sobre las filas que trajo la base de datos de la tabla cuentasKpi

                if(jsonData[i].redSocial == 0)
                {
                    if($('input:radio[name=radioFormulario]:checked').val() == 'fb')
                        fechasFormulario.push(moment(jsonData[i].fechaInicial))
                    if($('input:radio[name=radioResultado]:checked').val() == 'fb')
                        fechasResultado.push(moment(jsonData[i].fechaInicial))
                }
                else if(jsonData[i].redSocial == 1)
                {
                    if($('input:radio[name=radioFormulario]:checked').val() == 'tw')
                        fechasFormulario.push(moment(jsonData[i].fechaInicial))
                    if($('input:radio[name=radioResultado]:checked').val() == 'tw')
                        fechasResultado.push(moment(jsonData[i].fechaInicial))
                }
                else if(jsonData[i].redSocial == 2)
                {
                    if($('input:radio[name=radioFormulario]:checked').val() == 'ht')
                        fechasFormulario.push(moment(jsonData[i].fechaInicial))
                    if($('input:radio[name=radioResultado]:checked').val() == 'ht')
                        fechasResultado.push(moment(jsonData[i].fechaInicial))
                }
            }

            if(fechasResultado.length > 0)
            {       //comprobacion del numero de fechas que hay, si es mayor que cero
                for(i=0;i<fechasResultado.length;i++)
                    $('#datepickerdesde').data("DateTimePicker").enabledDates(fechasResultado);
            }
            else if(fechasResultado.length == 0)
            {
                    $('#datepickerdesde').data("DateTimePicker").enabledDates([moment('0000-01-01')]);
            }
            if(fechasFormulario.length > 0)
            {
                for(i=0;i<fechasFormulario.length;i++)
                {
                    if(modoeditar)
                        $('#datepicker').data('DateTimePicker').enabledDates(fechasFormulario);
                    else
                        $('#datepicker').data('DateTimePicker').disabledDates(fechasFormulario);
                }
            }
            if(fechasFormulario.length == 0)
            {
                if(modoeditar)
                    $('#datepicker').data("DateTimePicker").enabledDates([moment('0000-01-01')]);
                else
                    $('#datepicker').data('DateTimePicker').disabledDates(null);
            }
        }
    });
}


function limpiarCamposDatos(){
    $('#datepicker').data('DateTimePicker').date(null);
    $('#datepicker4').data('DateTimePicker').date(null);
    $('#dias').val('');
    $('#formFacebook').trigger('reset');
    $('#formTwitter').trigger('reset');
    $('#formWeb').trigger('reset');
}


function modoEditar()
{
    limpiarCamposDatos();
    modoeditar = true;
    getFechas(modoeditar);
    $('#dias').prop('disabled', true);
    $('#btnEli').show();
    $('#tituloCrud').html("Modo Editar");
    $('#btnEdi').html("Volver al modo insertar");
    $('#btnEdi').removeClass("btn-warning");
    $('#btnEdi').addClass("btn-primary");
    $('#btnGua').removeClass("btn-success");
    $('#btnGua').addClass("btn-warning");
    $('#btnGua').html("Actualizar");
    $('#btnEli').removeClass('hidden');
    $('#panelIngreso').removeClass("panel-primary");
    //$('#panelIngreso').addClass("panel-warning");

    //glyphicons
    //input-group inputGroupLapiz
    //input-group-addon inputGroupAddonLapiz
    //glyphicon glyphicon-pencil glyphiconLapiz
    $('.inputGroupLapiz').addClass('input-group');
    $('.inputGroupAddonLapiz').addClass('input-group-addon');
    $('.glyphiconLapiz').addClass('glyphicon glyphicon-pencil');

    $('.inputNumero').prop('disabled', true)
    $('.hide_dp4').addClass('hidden');
}

function modoInsertar()
{
    getFechas();
    limpiarCamposDatos();
    modoeditar = false;
    $('#datepicker').data('DateTimePicker').enabledDates(null);
    $('#btnEli').hide();
    $('#tituloCrud').html("Modo Insertar");
    //$('#panelIngreso').addClass("panel-primary");
    $('#panelIngreso').removeClass("panel-warning");
    $('#btnEdi').addClass("btn-warning");
    $('#btnEdi').removeClass("btn-primary");
    $('#btnEdi').html("Editar");
    $('#btnGua').addClass("btn-success");
    $('#btnGua').removeClass("btn-warning");
    $('#btnGua').html("Guardar");
    $('#btnEli').removeClass('hidden');

    //glyphicons
    //input-group inputGroupLapiz
    //input-group-addon inputGroupAddonLapiz
    //glyphicon glyphicon-pencil glyphiconLapiz
    $('.inputGroupLapiz').removeClass('input-group');
    $('.inputGroupAddonLapiz').removeClass('input-group-addon');
    $('.glyphiconLapiz').removeClass('glyphicon glyphicon-pencil');
    $('.glyphiconLapiz').removeClass('glyphicon-remove');
    $('.inputNumero').prop('disabled', false);
    $('.hide_dp4').removeClass('hidden');
}

function camposAVariables(red_social){
    if(red_social == "facebook")
    {
        fb_seguidores = $("#fb_fan").val();
        fb_alcance = $("#fb_alc").val();
        fb_impresiones = $("#fb_imp").val();
        fb_interacciones = $("#fb_int").val();
        fb_publicaciones = $("#fb_pub").val();
    }
    else if(red_social == "twitter")
    {
        tw_seguidores = $('#tw_fol').val();
        tw_alcance = $('#tw_rea').val();
        tw_impresiones = $('#tw_imp').val();
        tw_contribuidores = $('#tw_con').val();
        tw_tweets_generados = $('#tw_gen').val();
        tw_retweets = $('#tw_rt').val();
        tw_respuestas = $('#tw_rep').val();
        tw_menciones = $('#tw_men').val();
    }
    else if(red_social == "web")
    {
        ht_visitas = $("#ht_vis").val();
        ht_rebote = $("#ht_reb").val();
        ht_permanencia = $("#ht_per").val();
    }
}

function campoResultados (red_social){
    if(red_social == "facebook")
    {
        kpifb1 = $("#evoFans").val();
        kpifb2 = $("#evoAlcan").val();
        kpifb3= $("#evoInterac").val();
        kpifb4 = $("#evoImpres").val();
    }
    else if(red_social == "twitter")
    {
        kpitw1 = $("#evoFansT").val();
        kpitw2= $("#evoAlcanT").val();
        kpitw3= $("#evoInteracT").val();
        kpitw4 = $("#evoImpresT").val();
    }
    else if(red_social == "web")
    {
        kpiwb1 = $("#evoFansW").val();
        kpiwb2 = $("#evoAlcanW").val();
        kpiwb3= $("#evoInteracW").val();
    }
}

function limpiarResultado(){
    $('.resultadosFacebook').addClass('hidden')
    $('.resultadosTwitter').addClass('hidden')
    $('.resultadosWeb').addClass('hidden')
    $('.datos-resultado').addClass('hidden')


    $('#evoFans').removeClass();
    $('#evoAlcan').removeClass();
   // $('#evoInterac1').removeClass();
    //$('#evoInterac2').removeClass();
    //$('#evoImpres1').removeClass();
    //$('#evoImpres2').removeClass();
    $('#evoInterac').removeClass();
    $('#evoImpres').removeClass();

    $('#evoFansT').removeClass();
    $('#evoAlcanT').removeClass();
    $('#evoInteracT').removeClass();
    $('#evoImpresT').removeClass();

    $('#evoFansW').removeClass();
    $('#evoAlcanW').removeClass();
    $('#evoInteracW').removeClass();


    $('#evoFansT').html('');
    $('#evoAlcanT').html('');
    //$('#evoInterac1').html('');
    //$('#evoInterac2').html('');
    //$('#evoImpres1').html('');
    //$('#evoImpres2').html('');
    $('#evoInterac').html('');
    $('#evoImpres').html(''); 

    $('#evoFansT').html('');
    $('#evoAlcanT').html('');
    $('#evoInteracT').html('');
    $('#evoImpresT').html(''); 

    $('#evoFansW').html('');
    $('#evoAlcanW').html('');
    $('#evoInteracW').html('');

}

function resetResultado(){
    $('#evolucionFans').html('<label for="evoFans" id="evoFans"></label>');
    $('#evolucionAlcance').html('<label for="evoAlcan" id="evoAlcan"></label>');
   // $('#interaccionSemana1').html('Evolución de Interacción Semana 1:  <label for="evoInterac1" id="evoInterac1"></label>');
    //$('#interaccionSemana2').removeClass('hidden');
    //$('#impresionesSemana1').removeClass('hidden');
    //$('#impresionesSemana2').removeClass('hidden');
    $('#interaccionSemana').html('<label for="evoInterac" id="evoInterac"></label>');
    $('#impresionesSemana').html('<label for="evoImpres" id="evoImpres"></label>');

    $('#evolucionFansT').html(' <label for="evoFansT" id="evoFansT"></label>');
    $('#evolucionAlcanceT').html('<label for="evoAlcanT" id="evoAlcanT"></label>');
    $('#interaccionSemanaT').html('<label for="evoInteracT" id="evoInteracT"></label>');
    $('#impresionesSemanaT').html('<label for="evoImpresT" id="evoImpresT"></label>');

    $('#evolucionFansW').html(' <label for="evoFansW" id="evoFansW"></label>');
    $('#evolucionAlcanceW').html('<label for="evoAlcanW" id="evoAlcanW"></label>');
    $('#interaccionSemanaW').html('<label for="evoInteracW" id="evoInteracW"></label>');
}
function resetDatePickersResultado()
{
    $('#datepickerdesde').data('DateTimePicker').date(null);
    $('#datepickerhasta').data('DateTimePicker').date(null);
}
function limpiarResetResultado()
{
    limpiarResultado();
    resetResultado();
}

function cerrarCampos(){
    $('.inputGroupLapiz').addClass('input-group');
    $('.inputGroupAddonLapiz').addClass('input-group-addon');
    $('.glyphiconLapiz').addClass('glyphicon glyphicon-pencil');
    $('.inputNumero').prop('disabled', true)
    $('.glyphicon').removeClass('glyphicon-remove')
}

function validaCampos(){
    if(modoeditar == false)
    {
        if($('#picker1-input').val() == ""){return false;}
        if($('#dias').val() == ""){return false;}
    }

    if($('input:radio[name=radioFormulario]:checked').val() == 'fb')
    {
        if($('#fb_fan').val() == ""){return false;}
        if($('#fb_alc').val() == ""){return false;}
        if($('#fb_imp').val() == "") {return false;}
        if($('#fb_int').val() == "") {return false;}
        if($('#fb_pub').val() == "") {return false;}
    }
    else if($('input:radio[name=radioFormulario]:checked').val() == 'tw')
    {
        if($('#tw_fol').val() == ""){return false;}
        if($('#tw_rea').val() == ""){return false;}
        if($('#tw_imp').val() == "") {return false;}
        if($('#tw_con').val() == "") {return false;}
        if($('#tw_gen').val() == "") {return false;}
        if($('#tw_rt').val() == "") {return false;}
        if($('#tw_rep').val() == "") {return false;}
        if($('#tw_men').val() == "") {return false;}
    }
    else if($('input:radio[name=radioFormulario]:checked').val() == 'ht')
    {
        if($('#ht_vis').val() == ""){return false;}
        if($('#ht_reb').val() == ""){return false;}
        if($('#ht_per').val() == ""){return false;}
    }
}
//VARIABLES JQUERY READY
