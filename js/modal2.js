var header;
var data;

function callYasaiData() { 
	var fileName = "data/yasai.csv";
	var fileData = readTextFile(fileName) ;
	var csvData = fileData;
	csvData = csvData.replace(/\r\n+$/g,''); //終端に改行コード（CR+LF）があれば削除
	var lines = csvData.split("\n");
	var result = [];
	var headers = lines[0].split(",");
	for(var i=1;i<lines.length;i++){
		var obj = {};
		var currentline=lines[i].split(",");
		for(var j=0;j<headers.length;j++){
			obj[headers[j]] = currentline[j];
		}
		result.push(obj);
	}
	
	header = headers; //グローバル変数に代入
	data = result; //グローバル変数に代入
}
function readTextFile(file) { 
	var rawFile = new XMLHttpRequest(); 
	rawFile.open("GET", file, false); 
	rawFile.send(null);
	return rawFile.responseText;
} 

function openModal(num){
	var kText = "";
	var urlcode = "";
	kText += "<div style='text-align:right;'><a class='button-link' href='javascript:void(0);' onclick='closeModal();'>×</a></div>";
	kText += "<table class='modal_table'>";	
	for(let i=0 ; i<header.length ; i++) {
		if(data[num][header[i]].slice(-3).toLowerCase() == "jpg" || data[num][header[i]].slice(-3).toLowerCase() == "png"){
			
			urlcode = "<div style='text-align:center;'><img src='" + data[num][header[i]] + "'class='cardimgcls'></div>" ;
			
		}else if(data[num][header[i]].slice(0,4) == "http"){
			urlcode = "<a href='" + data[num][header[i]] +"' target='_blank'>" + data[num][header[i]] + "</a>" ;
		}else{
			urlcode = data[num][header[i]]  ;
		}
		kText += "<tr><th>" + header[i] + "</th><td>" + urlcode + "</td></tr>";
	}
	kText += "</table>"
	document.getElementById('modal-content').innerHTML = kText ;

	//キーボード操作などにより、オーバーレイが多重起動するのを防止する
	$( this ).blur() ;	//ボタンからフォーカスを外す
	if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
	//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

	//オーバーレイを出現させる
	$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
	$( "#modal-overlay" ).fadeIn( "fast" ) ;

	//コンテンツをセンタリングする
	centeringModalSyncer() ;

	//コンテンツをフェードインする
	$( "#modal-content" ).fadeIn( "fast" ) ;

	//[#modal-overlay]、または[#modal-close]をクリックしたら…
	$( "#modal-overlay,#modal-close" ).unbind().click( function(){

		//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
		$( "#modal-content,#modal-overlay" ).fadeOut( "fast" , function(){

			//[#modal-overlay]を削除する
			$('#modal-overlay').remove() ;
		} ) ;
	} ) ;
}

function closeModal(){
		//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
		$( "#modal-content,#modal-overlay" ).fadeOut( "fast" , function(){

			//[#modal-overlay]を削除する
			$('#modal-overlay').remove() ;
		} ) ;
}
window.onresize = centeringModalSyncer();

//センタリングを実行する関数
function centeringModalSyncer(){

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		// コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
		var cw = $( "#modal-content" ).outerWidth();
		var ch = $( "#modal-content" ).outerHeight();
		
		//センタリングを実行する
		$( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;
		//$( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": (15) + "px"} ) ;
}

