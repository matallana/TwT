

$(document).ready(function(e){
    $('[data-toggle=confirmation]').confirmation({
    rootSelector: '[data-toggle=confirmation]',
    title: '¿Estás segur@?',
    btnOkLabel: 'Sí'
    });


    var $dtp1 = $('#datepicker').datetimepicker({
        useCurrent: false,
        calendarWeeks: true,
        format: 'D [de] MMMM [de] YYYY',
        ignoreReadonly: true,
        locale: 'es',
        viewMode: 'days'
    });
    var $dtp2 = $('#datepickerdesde').datetimepicker({
        useCurrent: false,
        calendarWeeks: true,
        format: 'D [de] MMMM [de] YYYY',
        ignoreReadonly: true,
        locale: 'es',
        viewMode: 'months'
    });
    var $dtp3 = $('#datepickerhasta').datetimepicker({
        useCurrent: false,
        calendarWeeks: true,
        format: 'D [de] MMMM [de] YYYY',
        ignoreReadonly: true,
        locale: 'es',
        viewMode: 'months'
    });
    var $dtp4 = $('#datepicker4').datetimepicker({
        useCurrent: false,
        calendarWeeks: true,
        format: 'D [de] MMMM [de] YYYY',
        ignoreReadonly: true,
        locale: 'es',
        viewMode: 'days'
    });

    modoInsertar();
    //radio buttons
    moment.locale('es');
    Fecha();
    setInterval(Fecha, 500);
    getFechas();


    //variables de campos (fb, tw, web)


    //
    var idCampo;
    var idactual;
    var idRrss;

    function soloNumeros(e){
        if (e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode <37 || e.keyCode > 40) && !(e.keycode<187 || e.keycode >190))
                return false;
    }
    $('.inputNumero').keydown(soloNumeros(e)); //48 - 57
    $('#dias').keydown(soloNumeros(e)); //48 - 57

    $('.inputGroupAddonLapiz').click(function(){
        limpiarResetResultado();
        if($dtp1.data('DateTimePicker').date() != null)
        {
            if($(this).children().hasClass('glyphicon-pencil'))
            {
                //valoranterior = $(this).prev().val();
                idCampo = ($(this).prev().attr('id'));
                if($('input:radio[name=radioFormulario]:checked').val() == 'fb')
                {
                    if(idCampo == 'fb_fan')fb_seguidores = $(this).prev().val();
                    if(idCampo == 'fb_alc')fb_alcance = $(this).prev().val();
                    if(idCampo == 'fb_imp')fb_impresiones = $(this).prev().val();
                    if(idCampo == 'fb_int')fb_interacciones = $(this).prev().val();
                    if(idCampo == 'fb_pub')fb_publicaciones = $(this).prev().val();
                }
                else if($('input:radio[name=radioFormulario]:checked').val() == 'tw')
                {
                    if(idCampo == 'tw_fol')tw_seguidores = $(this).prev().val();
                    if(idCampo == 'tw_rea')tw_alcance = $(this).prev().val();
                    if(idCampo == 'tw_imp')tw_impresiones = $(this).prev().val();
                    if(idCampo == 'tw_con')tw_contribuidores = $(this).prev().val();
                    if(idCampo == 'tw_gen')tw_tweets_generados = $(this).prev().val();
                    if(idCampo == 'tw_rep')tw_respuestas = $(this).prev().val();
                    if(idCampo == 'tw_men')tw_menciones = $(this).prev().val();
                }
                else if($('input:radio[name=radioFormulario]:checked').val() == 'ht')
                {
                    if(idCampo == 'ht_vis')ht_visitas = $(this).prev().val();
                    if(idCampo == 'ht_reb')ht_rebote = $(this).prev().val();
                    if(idCampo == 'ht_per')ht_permanencia = $(this).prev().val();
                }

                $(this).prev().prop('disabled',false);
                $(this).children().removeClass('glyphicon-pencil');
                $(this).children().addClass('glyphicon-remove');
            }
            else
            {
                idCampo = ($(this).prev().attr('id'));
                if(idCampo == 'dias')$(this).prev().val(cantidadDias);
                if($('input:radio[name=radioFormulario]:checked').val() == 'fb')
                {
                    if(idCampo == 'fb_fan')$(this).prev().val(fb_seguidores);
                    if(idCampo == 'fb_alc')$(this).prev().val(fb_alcance);
                    if(idCampo == 'fb_imp')$(this).prev().val(fb_impresiones);
                    if(idCampo == 'fb_int')$(this).prev().val(fb_interacciones);
                    if(idCampo == 'fb_pub')$(this).prev().val(fb_publicaciones);
                }
                else if($('input:radio[name=radioFormulario]:checked').val() == 'tw')
                {
                    if(idCampo == 'tw_fol')$(this).prev().val(tw_seguidores);
                    if(idCampo == 'tw_rea')$(this).prev().val(tw_alcance);
                    if(idCampo == 'tw_imp')$(this).prev().val(tw_impresiones);
                    if(idCampo == 'tw_con')$(this).prev().val(tw_contribuidores);
                    if(idCampo == 'tw_gen')$(this).prev().val(tw_tweets_generados);
                    if(idCampo == 'tw_rt')$(this).prev().val(tw_retweets);
                    if(idCampo == 'tw_rep')$(this).prev().val(tw_respuestas);
                    if(idCampo == 'tw_men')$(this).prev().val(tw_menciones);
                }
                else if($('input:radio[name=radioFormulario]:checked').val() == 'ht')
                {
                    if(idCampo == 'ht_vis')$(this).prev().val(ht_visitas);
                    if(idCampo == 'ht_reb')$(this).prev().val(ht_rebote);
                    if(idCampo == 'ht_per')$(this).prev().val(ht_permanencia);
                }
                //aca debería volver al valor original.
                $(this).prev().prop('disabled',true);
                $(this).children().addClass('glyphicon-pencil');
                $(this).children().removeClass('glyphicon-remove');
            }
        }

    });

    $('#btnEli').hide();
    $('#datepickerhasta > .form-control').prop('disabled',true)
    $('#datepicker4 > .form-control').prop('disabled',true)

    $dtp1.on('dp.change', function(e){       //on change del datepicker de ingreso.
        limpiarResetResultado();
        $dtp4.data('DateTimePicker').date(null);
        if($dtp1.data('DateTimePicker').date() != null)
        {
            $('#datepicker4 > .form-control').prop('disabled',false)
            $dtp4.data('DateTimePicker').minDate($dtp1.data('DateTimePicker').date())
            fecha = moment($dtp1.data('DateTimePicker').date()).format('YYYY-MM-DD');
            if(modoeditar)
            {
                if($('input:radio[name=radioFormulario]:checked').val() == 'fb')
                {
                    //alert(e.date)
                    $.ajax({
                        type: "POST",
                        url: "/ajax", //edit utl to url
                        datatype:"JSON",
                        data: {
                            dato:"get_facebook",
                            fecha:fecha
                        }, //edit to include
                        success: function(data) {
                            //pasar datos a los campos en el modo editar.
                            jsonData = JSON.parse(data)
                            //alert(jsonData[0].fans);             //function success retorna los datos desde la bd
                            idactual = jsonData[0].idCalculo;
                            idRrss = jsonData[0].idFb;
                            $('#dias').val(jsonData[0].cantidadDias);
                            $('#fb_fan').val(jsonData[0].fans);
                            $('#fb_alc').val(jsonData[0].alcance);
                            $('#fb_imp').val(jsonData[0].impresiones);
                            $('#fb_int').val(jsonData[0].interacciones);
                            $('#fb_pub').val(jsonData[0].publicaciones);
                        },
                        error: function() {
                            //error condition code
                        }
                    });
                }
                else if($('input:radio[name=radioFormulario]:checked').val() == 'tw')
                {
                    $.ajax({
                        type: "POST",
                        url: "/ajax", //edit utl to url
                        datatype:"JSON",
                        data: {
                            dato:"get_twitter",
                            fecha:fecha
                        }, //edit to include
                        success: function(data) {
                            //pasar datos a los campos en el modo editar.
                            jsonData = JSON.parse(data)
                            //alert(jsonData[0].fans);             //function success retorna los datos desde la bd
                            idactual = jsonData[0].idCalculo;
                            idRrss = jsonData[0].idTw;
                            $('#dias').val(jsonData[0].cantidadDias);
                            $('#tw_fol').val(jsonData[0].seguidores);
                            $('#tw_rea').val(jsonData[0].alcance);
                            $('#tw_imp').val(jsonData[0].impresiones);
                            $('#tw_con').val(jsonData[0].contribuidores);
                            $('#tw_gen').val(jsonData[0].tweetsGenerados);
                            $('#tw_rt').val(jsonData[0].retweets);
                            $('#tw_rep').val(jsonData[0].respuestas);
                            $('#tw_men').val(jsonData[0].menciones);
                        },
                        error: function() {
                            //error condition code
                        }
                    });
                }
                else if($('input:radio[name=radioFormulario]:checked').val() == 'ht')
                {
                    $.ajax({
                        type: "POST",
                        url: "/ajax", //edit utl to url
                        datatype:"JSON",
                        data: {
                            dato:"get_web",
                            fecha:fecha
                        }, //edit to include
                        success: function(data) {
                            //pasar datos a los campos en el modo editar.
                            jsonData = JSON.parse(data)
                            //alert(jsonData[0].fans);             //function success retorna los datos desde la bd
                            idactual = jsonData[0].idCalculo;
                            idRrss = jsonData[0].idWeb;
                            $('#dias').val(jsonData[0].cantidadDias);
                            $('#ht_vis').val(jsonData[0].visitas);
                            $('#ht_reb').val(jsonData[0].rebote);
                            $('#ht_per').val(jsonData[0].permanencia);
                        },
                        error: function() {
                            //error condition code
                        }
                    });
                }
                getFechas();
            }
        }
    })
    $dtp4.on("dp.change", function(e){
        if(e.date != false){
            var a = moment($dtp4.data('DateTimePicker').date());
            var b = moment($dtp1.data('DateTimePicker').date());
            $('#dias').val((a.diff(b, 'days') + 1))   // =1
        }
        else
            $('#dias').val("");
    });
    $dtp2.on("dp.change",function(e){ //ACA FALTA PARTE DEL CODIGO PORQUE NECESITO QUE EN EL SEGUNDO DTP NO HAYA NINGUNA FECHA DENTRO DEL RANGO DEL PRIMERO
        $dtp3.data('DateTimePicker').date(null);
        fechasHasta = [];
        limpiarResetResultado();


        if($dtp2.data('DateTimePicker').date() != null)
        {

            $.ajax({
            type: "POST",
            url: "/ajax",
            datatype:"JSON",
            data:{
                dato:"getCantidadDias",
                redSocial:function(){if($('input:radio[name=radioResultado]:checked').val() == 'fb') return 0;
                                    else if($('input:radio[name=radioResultado]:checked').val() == 'tw') return 1;
                                    else if($('input:radio[name=radioResultado]:checked').val() == 'ht') return 2;}
            },
            success:function(data)
            {
                var cantidadDiasFechaActual;
                for(i=0; i < fechasResultado.length; i++)
                    fechasHasta[i] = fechasResultado[i];
                for(i = 0; i < fechasHasta.length; i++)
                {
                    if(moment(fechasHasta[i]).format('YYYY-MM-DD') == moment(e.date).format('YYYY-MM-DD'))
                        fechasHasta.splice(i,1);
                    console.log(fechasHasta);
                }
                jsonData = JSON.parse(data)
                for(i=0; i < jsonData.length; i++)
                {
                    if(moment(jsonData[i].fechaInicial).format('YYYY-MM-DD') == moment(e.date).format('YYYY-MM-DD'))
                        {
                            cantidadDiasFechaActual = jsonData[i].cantidadDias
                        }
                }
                var o = 0;
                for(i=0; i < jsonData.length; i++)
                {
                    if(moment(jsonData[i].fechaInicial).format('YYYY-MM-DD') == moment(e.date).format('YYYY-MM-DD')) {fechasHasta.splice(o,1); o--}
                    if(jsonData[i].cantidadDias != cantidadDiasFechaActual)
                    {
                        fechasHasta.splice(o,1);
                        o--
                        console.log('la cantidad de dias de la fecha ' + jsonData[i].fechaInicial+ ' es '+ jsonData[i].cantidadDias)
                    }
                    o++
                }
                if(fechasHasta.length == 0)
                {
                    $dtp3.data("DateTimePicker").enabledDates([moment('0000-01-01')]);
                    alert('No existen fechas para establecer una comparación; la comparación de fechas solo se realiza cuando ambos datos tienen la misma cantidad de días establecida')
                }
                else
                    $dtp3.data('DateTimePicker').enabledDates(fechasHasta);
                //$('#picker2-input').val($('#picker2-input').val() + ' - ' + moment(e.date).add(cantidadDiasFechaActual - 1,'d').format('D [de] MMMM [de] YYYY'));
                $dtp2.data('DateTimePicker').format('D [de] MMMM [de] YYYY - ['+moment(e.date).add(cantidadDiasFechaActual - 1,'d').format('D [de] MMMM [de] YYYY')+']');
                console.log($('#picker2-input').val());
            }
        })


            if(moment(e.date).format('YYYY-MM-DD') != moment(e.oldDate).format('YYYY-MM-DD'))
            {
                $('#datepickerhasta > .form-control').prop('disabled',false);
                //fechasHasta = fechasDesde;
                //fechasHasta.push(moment(e.date));
                //console.log(fechasHasta);
                //$('#datepickerhasta').data('DateTimePicker').enabledDates(fechasHasta);
            }
        }
        else
            $('#datepickerhasta > .form-control').prop('disabled',true);
    });
    $dtp3.on("dp.change",function(e){
        if($dtp3.data('DateTimePicker').date() != null)
        {
            limpiarResultado();
            fecha1 = moment($dtp2.data('DateTimePicker').date()).format('YYYY-MM-DD');
            fecha2 = moment($dtp3.data('DateTimePicker').date()).format('YYYY-MM-DD');
            if($('input:radio[name=radioResultado]:checked').val() == 'fb')
            {
                $.ajax({
                    type: "POST",
                    url: "/ajax",
                    datatype:"JSON",
                    data: {
                        modo:'compara',
                        dato:"get_facebook",
                        fechaInicial:fecha1,
                        fechaFinal:fecha2,
                        //kpif1: kpifb1,
                        //kpif2: kpifb2,
                        //kpif3: kpifb3,
                        //kpif4: kpifb4
                    },  
                    success: function(data) {
                        console.log("entro en success de fb");
                        jsonData = JSON.parse(data)
                        console.log(jsonData);

                        if(moment(jsonData[0].fechaInicial).format('YYYY-MM-DD') == fecha1)
                        {
                            obj1 = (jsonData[0]);
                            obj2 = (jsonData[1]);
                        }
                        else
                        {
                            obj1 = (jsonData[1]);
                            obj2 = (jsonData[0]);
                        }
                        $dtp3.data('DateTimePicker').format('D [de] MMMM [de] YYYY - ['+moment(obj2.fechaInicial).add(obj2.cantidadDias - 1,'d').format('D [de] MMMM [de] YYYY')+']')
                        console.log('fecha inicial objeto 1: ' + obj1.fechaInicial);
                        console.log('fecha inicial objeto 2: ' + obj2.fechaInicial);

                        $('.datos-resultado').removeClass('hidden');
                        $('.resultadosFacebook').removeClass('hidden');
                        //datos semana 1
                        $('#resultadoFansFbS1').html(obj1.fans);
                        $('#resultadoAlcanceFbS1').html(obj1.alcance);
                        $('#resultadoImpresionesFbS1').html(obj1.impresiones);
                        $('#resultadoInteraccionesFbS1').html(obj1.interacciones);
                        $('#resultadoPublicacionesFbS1').html(obj1.publicaciones);
                        //datos semana 2
                        $('#resultadoFansFbS2').html(obj2.fans);
                        $('#resultadoAlcanceFbS2').html(obj2.alcance);
                        $('#resultadoImpresionesFbS2').html(obj2.impresiones);
                        $('#resultadoInteraccionesFbS2').html(obj2.interacciones);
                        $('#resultadoPublicacionesFbS2').html(obj2.publicaciones);



                        console.log('semana 1. fans: ' + obj1.fans + ' alcance: ' + obj1.alcance + ' impresiones: ' + obj1.impresiones + ' interacciones: ' + obj1.interacciones);
                        console.log('semana 2. fans: ' + obj2.fans + ' alcance: ' + obj2.alcance + ' impresiones: ' + obj2.impresiones + ' interacciones: ' + obj2.interacciones);

                        //KPI 1 y 2 : ((Semana 2 - Semana 1)/Semana 1)*100
                        console.log('KPI1 (Evolución de Fans): ' + Math.round( ( (obj2.fans - obj1.fans) / obj1.fans) * 100)+'%');
                        console.log('KPI2 (Evolución de Alcance): ' + Math.round( ( (obj2.alcance - obj1.alcance) / obj1.alcance) * 100)+'%');
                        //KPI 3 : (Interacciones / Alcance)*100
                        //console.log('KPI3 Semana 1 (Evolución de Interacción): ' + Math.round((obj1.interacciones / obj1.alcance) * 100 )+'%');
                        //console.log('KPI3 Semana 2 (Evolución de Interacción): ' + Math.round((obj2.interacciones / obj2.alcance) * 100 )+'%');
                        console.log('KPI3 TotalSemana (Evolución de Interacciones): ' + Math.round(((obj2.interacciones / obj2.alcance) * 100 ) - ((obj1.interacciones / obj1.alcance) * 100 ))+ '%');
                        
                        //KPI 4 : (Impresiones / Alcance)*100
                        //console.log('KPI4 Semana 1 (Evolución de Impresiones): ' + Math.round((obj1.impresiones / obj1.alcance) * 100)+'%');
                        //console.log('KPI4 Semana 2 (Evolución de Impresiones): ' + Math.round((obj2.impresiones / obj2.alcance) * 100)+'%');
                        console.log('KPI4 TotalSemana (Evolución de Impresiones): ' + Math.round(((obj2.impresiones / obj2.alcance) * 100) - ((obj1.impresiones / obj1.alcance) * 100)) + '%');

                        kpifb1 = Math.round(((obj2.fans - obj1.fans) / obj1.fans) * 100);
                        kpifb2 = Math.round(((obj2.alcance - obj1.alcance) / obj1.alcance) * 100);
                        //var kpi3_1 = Math.round((obj1.interacciones / obj1.alcance) * 100 );
                        //var kpi3_2 = Math.round((obj2.interacciones / obj2.alcance) * 100 );
                        //var kpi4_1 = Math.round((obj1.impresiones / obj1.alcance) * 100);
                        //var kpi4_2 = Math.round((obj2.impresiones / obj2.alcance) * 100);
                        kpifb3 = Math.round(((obj2.interacciones / obj2.alcance) * 100 ) - ((obj1.interacciones / obj1.alcance) * 100 ));
                        kpifb4 = Math.round(((obj2.impresiones / obj2.alcance) * 100) - ((obj1.impresiones / obj1.alcance) * 100));

                        if(kpifb1 < 0 ) $('#evoFans').addClass('resultadoNegativo'); else $('#evoFans').addClass('resultadoPositivo')
                        if(kpifb2 < 0 ) $('#evoAlcan').addClass('resultadoNegativo'); else $('#evoAlcan').addClass('resultadoPositivo')
                        //if(kpi3_1 < 0 ) $('#evoInterac1').addClass('resultadoNegativo'); else $('#evoInterac1').addClass('resultadoPositivo')
                        //if(kpi3_2 < 0 ) $('#evoInterac2').addClass('resultadoNegativo'); else $('#evoInterac2').addClass('resultadoPositivo')
                       // if(kpi4_1 < 0 ) $('#evoImpres1').addClass('resultadoNegativo'); else $('#evoImpres1').addClass('resultadoPositivo')
                        //if(kpi4_2 < 0 ) $('#evoImpres2').addClass('resultadoNegativo'); else $('#evoImpres2').addClass('resultadoPositivo')
                        if(kpifb3 < 0 ) $('#evoInterac').addClass('resultadoNegativo'); else $('#evoInterac').addClass('resultadoPositivo')
                        if(kpifb4 < 0 ) $('#evoImpres').addClass('resultadoNegativo'); else $('#evoImpres').addClass('resultadoPositivo')

                        $('#evoFans').html( kpifb1 +'%');
                        $('#evoAlcan').html( kpifb2 +'%');
                        //$('#evoInterac1').html(Math.round((obj1.interacciones / obj1.alcance) * 100 )+'%');
                        //$('#evoInterac2').html(Math.round((obj2.interacciones / obj2.alcance) * 100 )+'%');
                        //$('#evoImpres1').html(Math.round((obj1.impresiones / obj1.alcance) * 100)+'%');
                        //$('#evoImpres2').html(Math.round((obj2.impresiones / obj2.alcance) * 100)+'%')
                        $('#evoInterac').html( kpifb3 + '%');
                        $('#evoImpres').html( kpifb4 + '%');

                        console.log("realizo calculos kpi");
                    },
                    //...
                   /* data: {
                        dato: function (){"compara"},
                        id: idRrss, 
                        kpif1: kpifb1,
                        kpif2: kpifb2,
                        kpif3: kpifb3,
                        kpif4: kpifb4
                    },*/
                    error: function() {
                    }
                    //....
                });
            }
            else if($('input:radio[name=radioResultado]:checked').val() == 'tw')
            {
                $.ajax({
                    type: "POST",
                    url: "/ajax", //edit utl to url
                    datatype:"JSON",
                    data: {
                        modo:'compara',
                        dato:"get_twitter",
                        fechaInicial:fecha1,
                        fechaFinal:fecha2
                    }, //edit to include
                    success: function(data) {
                        console.log("entro en success tw");
                        jsonData = JSON.parse(data)
                        if(moment(jsonData[0].fechaInicial).format('YYYY-MM-DD') == fecha1)
                        {
                            obj1 = (jsonData[0]);
                            obj2 = (jsonData[1]);
                        }
                        else
                        {
                            obj1 = (jsonData[1]);
                            obj2 = (jsonData[0]);
                        }
                        $('.datos-resultado').removeClass('hidden');
                        $('.resultadosTwitter').removeClass('hidden');
                        //datos semana 1
                        $('#resultadoFollowersTwS1').html(obj1.seguidores);
                        $('#resultadoReachTwS1').html(obj1.alcance);
                        $('#resultadoImpressionsTwS1').html(obj1.impresiones);
                        $('#resultadoContribuidoresTwS1').html(obj1.contribuidores);
                        $('#resultadoTweets-GeneradosTwS1').html(obj1.tweetsGenerados);
                        $('#resultadoRetweetsTwS1').html(obj1.retweets);
                        $('#resultadoRepliesTwS1').html(obj1.respuestas);
                        $('#resultadoMentionsTwS1').html(obj1.menciones);
                        //datos semana 2
                        $('#resultadoFollowersTwS2').html(obj2.seguidores);
                        $('#resultadoReachTwS2').html(obj2.alcance);
                        $('#resultadoImpressionsTwS2').html(obj2.impresiones);
                        $('#resultadoContribuidoresTwS2').html(obj2.contribuidores);
                        $('#resultadoTweets-GeneradosTwS2').html(obj2.tweetsGenerados);
                        $('#resultadoRetweetsTwS2').html(obj2.retweets);
                        $('#resultadoRepliesTwS2').html(obj2.respuestas);
                        $('#resultadoMentionsTwS2').html(obj2.menciones);


                        console.log('semana 1. fans: ' + obj1.seguidores + ' alcance: ' + obj1.alcance + ' impresiones: ' + obj1.impresiones + ' interacciones: ' + obj1.interacciones);
                        console.log('semana 2. fans: ' + obj2.seguidores + ' alcance: ' + obj2.alcance + ' impresiones: ' + obj2.impresiones + ' interacciones: ' + obj2.interacciones);

                        //KPI 1 y 2 : ((Semana 2 - Semana 1)/Semana 1)*100
                        console.log('KPI1 (Evolución de Fans): ' + Math.round( ( (obj2.seguidores - obj1.seguidores) / obj1.seguidores) * 100)+'%');
                        console.log('KPI2 (Evolución de Alcance): ' + Math.round( ( (obj2.alcance - obj1.alcance) / obj1.alcance) * 100)+'%');
                        //KPI 3 : (Interacciones / Alcance)*100
                        //console.log('KPI3 Semana 1 (Evolución de Interacción): ' + Math.round((obj1.interacciones / obj1.alcance) * 100 )+'%');
                        //console.log('KPI3 Semana 2 (Evolución de Interacción): ' + Math.round((obj2.interacciones / obj2.alcance) * 100 )+'%');
                        console.log('KPI3 TotalSemana (Evolución de Interacciones): ' + Math.round((((obj2.retweets + obj2.respuestas + obj2.menciones) / obj2.alcance) * 100 ) - (((obj1.retweets + obj1.respuestas + obj1.menciones) / obj1.alcance) * 100 )));
                        //KPI 4 : (Impresiones / Alcance)*100
                        //console.log('KPI4 Semana 1 (Evolución de Impresiones): ' + Math.round((obj1.impresiones / obj1.alcance) * 100)+'%');
                        //console.log('KPI4 Semana 2 (Evolución de Impresiones): ' + Math.round((obj2.impresiones / obj2.alcance) * 100)+'%');
                        console.log('KPI4 TotalSemana (Evolución de Impresiones): ' + Math.round(((obj2.impresiones / obj2.alcance) * 100) - ((obj1.impresiones / obj1.alcance) * 100)));

                        kpitw1 = Math.round( ( (obj2.seguidores - obj1.seguidores) / obj1.seguidores) * 100);
                        kpitw2 = Math.round( ( (obj2.alcance - obj1.alcance) / obj1.alcance) * 100);
                        //(RT + Replies + Mentions/ Reach)*100
                        //var kpi3_1 = Math.round(((obj1.retweets + obj1.respuestas + obj1.menciones) / obj1.alcance) * 100 );
                        //var kpi3_2 = Math.round(((obj2.retweets + obj2.respuestas + obj2.menciones) / obj2.alcance) * 100 );
                        kpitw3 = Math.round((((obj2.retweets + obj2.respuestas + obj2.menciones) / obj2.alcance) * 100 ) - (((obj1.retweets + obj1.respuestas + obj1.menciones) / obj1.alcance) * 100 ));
                        //(Impressions / Reach)*100
                        //var kpi4_1 = Math.round((obj1.impresiones / obj1.alcance) * 100);
                        //var kpi4_2 = Math.round((obj2.impresiones / obj2.alcance) * 100);
                        kpitw4 = Math.round(((obj2.impresiones / obj2.alcance) * 100) - ((obj1.impresiones / obj1.alcance) * 100));

                        if(kpitw1 < 0 ) $('#evoFansT').addClass('resultadoNegativo'); else $('#evoFansT').addClass('resultadoPositivo')
                        if(kpitw2 < 0 ) $('#evoAlcanT').addClass('resultadoNegativo'); else $('#evoAlcanT').addClass('resultadoPositivo')
                        //if(kpi3_1 < 0 ) $('#evoInterac1T').addClass('resultadoNegativo'); else $('#evoInterac1T').addClass('resultadoPositivo')
                        //if(kpi3_2 < 0 ) $('#evoInterac2T').addClass('resultadoNegativo'); else $('#evoInterac2T').addClass('resultadoPositivo')
                        if(kpitw3 < 0 ) $('#evoInteracT').addClass('resultadoNegativo'); else $('#evoInteracT').addClass('resultadoPositivo')
                        //if(kpi4_1 < 0 ) $('#evoImpres1T').addClass('resultadoNegativo'); else $('#evoImpres1T').addClass('resultadoPositivo')
                        //if(kpi4_2 < 0 ) $('#evoImpres2T').addClass('resultadoNegativo'); else $('#evoImpres2T').addClass('resultadoPositivo')
                        if(kpitw4 < 0 ) $('#evoImpresT').addClass('resultadoNegativo'); else $('#evoImpresT').addClass('resultadoPositivo')

                        $('#evoFansT').html(kpitw1 +'%');
                        $('#evoAlcanT').html(kpitw2 +'%');
                        //$('#evoInterac1T').html(kpi3_1+'%');
                        //$('#evoInterac2T').html(kpi3_2+'%');
                        //$('#evoImpres1T').html(kpi4_1+'%');
                        //$('#evoImpres2T').html(kpi4_2+'%');
                        $('#evoInteracT').html(kpitw3 + '%');
                        $('#evoImpresT').html(kpitw4 + '%');

                        console.log("realizo calculo kpi tw");
                    },
                    error: function() {
                    }
                });
            }
            else if($('input:radio[name=radioResultado]:checked').val() == 'ht')
            {
                $.ajax({
                    type: "POST",
                    url: "/ajax",
                    datatype:"JSON",
                    data: {
                        modo:'compara',
                        dato:"get_web",
                        fechaInicial:fecha1,
                        fechaFinal:fecha2
                    }, //edit to include
                    success: function(data) {
                        jsonData = JSON.parse(data)
                        if(moment(jsonData[0].fechaInicial).format('YYYY-MM-DD') == fecha1)
                        {
                            obj1 = (jsonData[0]);
                            obj2 = (jsonData[1]);
                        }
                        else
                        {
                            obj1 = (jsonData[1]);
                            obj2 = (jsonData[0]);
                        }
                        $('.datos-resultado').removeClass('hidden');
                        $('.resultadosWeb').removeClass('hidden');
                        //datos semana 1
                        $('#resultadoVisitas-UnicasHtS1').html(obj1.visitas);
                        $('#resultadoReboteHtS1').html(obj1.rebote);
                        $('#resultadoPremanenciaHtS1').html(obj1.permanencia);
                        //datos semana 2
                        $('#resultadoVisitas-UnicasHtS2').html(obj2.visitas);
                        $('#resultadoReboteHtS2').html(obj2.rebote);
                        $('#resultadoPremanenciaHtS2').html(obj2.permanencia);

                        console.log('semana 1. visitas: ' + obj1.visitas + ' rebote: ' + obj1.rebote + ' permanencia: ' + obj1.permanencia);
                        console.log('semana 2. visitas: ' + obj2.visitas + ' rebote: ' + obj2.rebote + ' permanencia: ' + obj2.permanencia);

                        //KPI 1, 2 y 3 = ((Semana 1 - Semana 2)/Semana 1)*100
                        console.log('KPI1 (Evolución de Visitas): ' + Math.round(((obj2.visitas - obj1.visitas) / obj1.visitas) * 100)+'%');
                        console.log('KPI2 (Evolución de Rebote): ' + Math.round(((obj2.rebote - obj1.rebote) / obj1.rebote) * 100)+'%');
                        //KPI 3 : (Interacciones / Alcance)*100
                        console.log('KPI3 (Evolución de Permanencia): ' + Math.round(((obj2.permanencia - obj1.permanencia) / obj1.permanencia) * 100)+'%');

                        kpiwb1 = Math.round(((obj2.visitas - obj1.visitas) / obj1.visitas) * 100);
                        kpiwb2 = Math.round(((obj2.rebote - obj1.rebote) / obj1.rebote) * 100);
                        kpiwb3 = Math.round(((obj2.permanencia - obj1.permanencia) / obj1.permanencia) * 100);

                        if(kpiwb1 < 0 ) $('#evoFansW').addClass('resultadoNegativo'); else $('#evoFansW').addClass('resultadoPositivo')
                        if(kpiwb2 < 0 ) $('#evoAlcanW').addClass('resultadoNegativo'); else $('#evoAlcanW').addClass('resultadoPositivo')
                        if(kpiwb3 < 0 ) $('#evoInteracW').addClass('resultadoNegativo'); else $('#evoInteracW').addClass('resultadoPositivo')

                        $('#evoFansW').html( kpiwb1 +'%');
                        $('#evoAlcanW').html( kpiwb2 +'%');
                        $('#evoInteracW').html( kpiwb3 +'%');
                    },
                    error: function() {
                    }
                });
            };

            if($('input:radio[name=radioResultado]:checked').val() == 'fb'){
                console.log('Este es el kpi1 de FB: ' + kpifb1); 
            }
            else if ($('input:radio[name=radioResultado]:checked').val() == 'tw'){
                console.log('Este es el kpi1 de TW: ' + kpitw1); 
            }else if ($('input:radio[name=radioResultado]:checked').val() == 'ht'){
                console.log('Este es el kpi1 de WB: ' + kpiwb1); 
            };

            

            if($('input:radio[name=radioResultado]:checked').val() == 'fb'){
                $.ajax({
                    type: "POST",
                    url: "/ajax",
                    datatype:"JSON",
                    data: {
                        modo:'resultado',
                        dato:"get_facebook",
                        fechaInicial:fecha1,
                        fechaFinal:fecha2,
                        kpi1f:kpifb1,
                        kpi2f:kpifb2,
                        kpi3f:kpifb3,
                        kpi4f:kpifb4
                    },  
                });
            }
            else if($('input:radio[name=radioResultado]:checked').val() == 'tw'){
                $.ajax({
                    type: "POST",
                    url: "/ajax", //edit utl to url
                    datatype:"JSON",
                    data: {
                        modo:'resultado',
                        dato:"get_twitter",
                        fechaInicial:fecha1,
                        fechaFinal:fecha2,
                        kpi1t:kpitw1,
                        kpi2t:kpitw2,
                        kpi3t:kpitw3,
                        kpi4t:kpitw4
                    }
                });
            }else if($('input:radio[name=radioResultado]:checked').val() == 'ht'){
                $.ajax({
                    type: "POST",
                    url: "/ajax", //edit utl to url
                    datatype:"JSON",
                    data: {
                        modo:'resultado',
                        dato:"get_twitter",
                        fechaInicial:fecha1,
                        fechaFinal:fecha2,
                        kpi1w:kpiwb1,
                        kpi2w:kpiwb2,
                        kpi3w:kpiwb3
                    }
                });
            };
        }
    });


    function Fecha(){
            $("label[for='fecha']").html(moment().format('D [de] MMMM [de] YYYY h:mm:ss a'));
        }
    /*jQuery('.numbersOnly').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g,'');
});*/
//validaciones radiobuttons
    $("input[name=radioFormulario]").change(function(){
        limpiarCamposDatos();
        if($('input:radio[name=radioFormulario]:checked').val() == 'fb'){
            if(!$('#grpTw').hasClass('hidden'))
                $('#grpTw').addClass('hidden');
            if(!$('#grpHt').hasClass('hidden'))
                $('#grpHt').addClass('hidden');
            $('#grpFb').removeClass('hidden');
        }
        else if($('input:radio[name=radioFormulario]:checked').val() == 'tw'){
            if(!$('#grpFb').hasClass('hidden'))
                $('#grpFb').addClass('hidden');
            if(!$('#grpHt').hasClass('hidden'))
                $('#grpHt').addClass('hidden');
            $('#grpTw').removeClass('hidden');
        }
        else if($('input:radio[name=radioFormulario]:checked').val() == 'ht'){
            if(!$('#grpTw').hasClass('hidden'))
                $('#grpTw').addClass('hidden');
            if(!$('#grpFb').hasClass('hidden'))
                $('#grpFb').addClass('hidden');
            $('#grpHt').removeClass('hidden');
        }
        getFechas();
    });
    $("input[name=radioResultado]").change(function(){
        getFechas();
        $dtp2.data('DateTimePicker').date(null);
        $dtp3.data('DateTimePicker').date(null);
        limpiarResultado();
        if($('input:radio[name=radioResultado]:checked').val() == 'ht')
        {
           
            $('#evolucionFansW').html('Evolución Fans:   <label for="evoFansW" id="evoFansW"></label>');
            $('#evolucionAlcanceW').html('Evolución Alcance:   <label for="evoAlcanW" id="evoAlcanW"></label>');
            $('#interaccionSemanaW').html('Evolución Interacciones:   <label for="evoInteracW" id="evoInteracW"></label>');
        }
        else if($('input:radio[name=radioResultado]:checked').val() == 'fb'){

            $('#evolucionFans').html('Evolución Fans:   <label for="evoFans" id="evoFans"></label>');
            $('#evolucionAlcance').html('Evolución Alcance:   <label for="evoAlcan" id="evoAlcan"></label>');
            $('#interaccionSemana').html('Evolución Interacciones:   <label for="evoInterac" id="evoInterac"></label>');
            $('#impresionesSemana').html('Evolución Interacciones:   <label for="evoImpres" id="evoImpres"></label>');
        }
        else if($('input:radio[name=radioResultado]:checked').val() == 'tw'){

            $('#evolucionFansT').html('Evolución Fans:   <label for="evoFansT" id="evoFansT"></label>');
            $('#evolucionAlcanceT').html('Evolución Alcance:   <label for="evoAlcanT" id="evoAlcanT"></label>');
            $('#interaccionSemanaT').html('Evolución Interacciones:   <label for="evoInteracT" id="evoInteracT"></label>');
            $('#impresionesSemanaT').html('Evolución Interacciones:   <label for="evoImpresT" id="evoImpresT"></label>');
        }
        else
            resetResultado();
    });

    //funcion de la botonera
    $('#btnLim').click(function(){
        limpiarResetResultado();
        limpiarCamposDatos();
    })
    //funciones boton guardar evento click
    $("#btnGua").click(function(){
        cantidadDias = $("#dias").val();
        //transicion
        //if($("#resKpi").hasClass('hidden'))
        //{
            if(validaCampos() == false)
            {
                $("#resKpiError").fadeIn(500);
                $("#resKpiError").removeClass("hidden");
                $("#resKpiError").delay(2000).addClass("in").fadeOut(500);
                return;
            }

            if(modoeditar)
            {
                cerrarCampos();
                $("#resKpiEdited").fadeIn(500);
                $("#resKpiEdited").removeClass("hidden");
                $("#resKpiEdited").delay(2000).addClass("in").fadeOut(500);
            }
            else
            {
                $("#resKpiSuccess").fadeIn(500);
                $("#resKpiSuccess").removeClass("hidden");
                $("#resKpiSuccess").delay(2000).addClass("in").fadeOut(500);
            }


        //}

        //calculo

        //facebook
    if($('input:radio[name=radioFormulario]:checked').val() == 'fb')
    {
        //ids campos: fb_fan fb_alc fb_imp fb_int fb_pub
        camposAVariables("facebook");

        //POST hora del insert en la base de datos, solo para tabla facebook
        $.ajax({
            type: "POST",
            url: "/ajax", //edit utl to url
            datatype:"JSON",
            data: {
                redSocial:0,
                dato:function(){if(modoeditar) return "edit_facebook"; else return "insert_facebook";},
                id:idRrss,
                fecha:fecha,
                cantidadDias:cantidadDias,
                seguidores:fb_seguidores,
                alcance:fb_alcance,
                impresiones:fb_impresiones,
                interacciones:fb_interacciones,
                publicaciones:fb_publicaciones
            }, //edit to include
            success: function(data) {
                jsonData = JSON.parse(data);
                limpiarCamposDatos();
                limpiarResetResultado()
                resetDatePickersResultado();
                getFechas();

                //alert(JSON.stringify(data));             //function success retorna los datos desde la bd
            },
            error: function() {
                //error condition code
            }
        });
    }//fin facebook
    //twitter
    else if($('input:radio[name=radioFormulario]:checked').val() == 'tw'){
        camposAVariables("twitter");

        $.ajax({
            type: "POST",
            url: "/ajax", //edit utl to url
            datatype:"JSON",
            data: {
                redSocial:1,
                dato:function(){if(modoeditar) return "edit_twitter"; else return "insert_twitter";},
                id:idRrss,
                fecha:fecha,
                cantidadDias:cantidadDias,
                seguidores:tw_seguidores,
                alcance:tw_alcance,
                impresiones:tw_impresiones,
                contribuidores:tw_contribuidores,
                tweetsGenerados:tw_tweets_generados,
                retweets:tw_retweets,
                respuestas:tw_respuestas,
                menciones:tw_menciones
            }, //edit to include
            success: function(data) {
                jsonData = JSON.parse(data);
                limpiarCamposDatos();
                limpiarResetResultado()
                resetDatePickersResultado();
                getFechas();

                //alert(JSON.stringify(data));             //function success retorna los datos desde la bd
            },
            error: function() {
                //error condition code
            }
        });


    }//fin twitter
    //web
    else if($('input:radio[name=radioFormulario]:checked').val() == 'ht'){
        camposAVariables("web");

        $.ajax({
            type: "POST",
            url: "/ajax", //edit utl to url
            datatype:"JSON",
            data: {
                id:idRrss,
                redSocial:2,
                dato:function(){if(modoeditar) return "edit_web"; else return "insert_web";},
                fecha:fecha,
                cantidadDias:cantidadDias,
                visitas:ht_visitas,
                rebote:ht_rebote,
                permanencia:ht_permanencia
            }, //edit to include
            success: function(data) {
                jsonData = JSON.parse(data);
                limpiarCamposDatos();
                limpiarResetResultado()
                resetDatePickersResultado();
                getFechas();

                //alert(JSON.stringify(data));             //function success retorna los datos desde la bd
            },
            error: function() {
                //error condition code
            }
        });
    }//fin web



    }); //fin evento click boton guardar
    $('#btnEdi').click(function(e){
        if(modoeditar)
            modoInsertar();
        else
            modoEditar();
    });
    $('#btnEli').click(function(e){     //boton eliminar.
        if($('#picker1-input').val() == ""){
            $("#resKpiErrorEli").fadeIn(500);
            $("#resKpiErrorEli").removeClass("hidden");
            $("#resKpiErrorEli").delay(2000).addClass("in").fadeOut(500);
            return false;
        }
        $.ajax({
            type:"POST",
            url: "/ajax",
            datatype:"JSON",
            data:{
                dato:'delete',
                id:idactual
            }
        });
        $("#resKpiDeleted").fadeIn(500);
        $("#resKpiDeleted").removeClass("hidden");
        $("#resKpiDeleted").delay(2000).addClass("in").fadeOut(500);
        getFechas();
        limpiarCamposDatos();
        limpiarResetResultado();
        cerrarCampos();
    });     //fin editar

    if($('input:radio[name=radioResultado]:checked').val() == 'fb')
    {
        campoResultados("facebook");

        //POST hora del insert en la base de datos, solo para tabla resultadosF
        $.ajax({
            type: "POST",
            url: "/ajax", //edit utl to url
            datatype:"JSON",
            data: {
                dato:function(){"insert_resultado_facebook"},
                kpi1f: kpifb1,
                kpi2f: kpifb2,
                kpi3f: kpifb3,
                kpi4f: kpifb4
            }, //edit to include
            success: function(data) {
                jsonData = JSON.parse(data);
                limpiarResetResultado()
                resetDatePickersResultado();
                getFechas();

                //alert(JSON.stringify(data));             //function success retorna los datos desde la bd
            },
            error: function() {
                //error condition code
            }
        });
    }
    else if($('input:radio[name=radioResultado]:checked').val() == 'tw')
    {
        campoResultados("twitter");

        //POST hora del insert en la base de datos, solo para tabla  resultadosT
        $.ajax({
            type: "POST",
            url: "/ajax", //edit utl to url
            datatype:"JSON",
            data: {
                dato:function(){"insert_resultado_twitter"},
                kpi1t: kpitw1,
                kpi2t: kpitw2,
                kpi3t: kpitw3,
                kpi4t: kpitw4
            }, //edit to include
            success: function(data) {
                jsonData = JSON.parse(data);
                limpiarResetResultado()
                resetDatePickersResultado();
                getFechas();

                //alert(JSON.stringify(data));             //function success retorna los datos desde la bd
            },
            error: function() {
                //error condition code
            }
        });
    }
    else if($('input:radio[name=radioResultado]:checked').val() == 'ht')
    {
        campoResultados("web");

        //POST hora del insert en la base de datos, solo para tabla  resultadosT
        $.ajax({
            type: "POST",
            url: "/ajax", //edit utl to url
            datatype:"JSON",
            data: {
                dato:function(){"insert_resultado_web"},
                kpi1w: kpiwb1,
                kpi2w: kpiwb2,
                kpi3w: kpiwb3
            }, //edit to include
            success: function(data) {
                jsonData = JSON.parse(data);
                limpiarResetResultado()
                resetDatePickersResultado();
                getFechas();

                //alert(JSON.stringify(data));             //function success retorna los datos desde la bd
            },
            error: function() {
                //error condition code
            }
        });
    }


});
