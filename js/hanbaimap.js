
function callHanbaiData() { 
	var fileName = "data/hanbai.csv";
	var fileData = readTextFile2(fileName) ;
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
	callMap(headers,result);
}

function readTextFile2(file) { 
	var rawFile = new XMLHttpRequest(); 
	rawFile.open("GET", file, false); 
	rawFile.send(null);
	return rawFile.responseText;
} 

function callMap(headers,result) { 	

	<!-- 地図の表示 -->
	var map = L.map('map').setView([35.014168, 135.748239], 12);
	var gsi = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
		attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
	});
	var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: "© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
	});
	var baseMaps = {
		"地理院地図" : gsi,
		"OpenStreetMaps" : osm,
	};
	L.control.layers(baseMaps).addTo(map);
	gsi.addTo(map);
	map.addLayer(gsi);
	
	var text = "";
	for(var i=0;i<result.length;i++){
		
		text = "店名：" + result[i]["店名"] + "<br>";
		text += "販売先住所：" + result[i]["販売先住所"] + "<br>";
		text += "販売形態：" + result[i]["販売形態"] + "<br>";
		text += "備考：" + result[i]["備考"] + "<br>";
		text += "緯度：" + result[i]["緯度"] + "<br>";
		text += "経度：" + result[i]["経度"] ;
		
		if(result[i]["緯度"] != ""){
			L.marker([Number(result[i]["緯度"]), Number(result[i]["経度"])]).bindPopup(text).addTo(map);
		}
		
	}

	//L.marker([35.017649, 135.779191]).bindPopup("ここは僕の家").addTo(map);
	//L.marker([35.017590, 135.778027]).bindPopup("ここは熊野神社").addTo(map);
	//L.marker([35.019137, 135.776634]).bindPopup("ここは京大病院").addTo(map);


}
