function execute() { // ボタンクリック時の動作
	document.getElementById("results").innerHTML = "通信中　<img src='img/wait_img.gif' style='vertical-align:middle;'>";
    var endpoint = 'https://dydra.com/haychmash/yasai/sparql'; //Endpointをセット
    var method = "POST"; //メソッド（POST or GET）
    //クエリ文字列をセット
	var query = document.getElementById("query").value;
    sparqlQuery(query,endpoint,method) ; //スパークルクエリ送信
}
function sparqlQuery(queryStr,endpoint,method) { // XMLHttpRequestでクエリ送信
    var querypart = "query=" + encodeURIComponent(queryStr);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(method, endpoint, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.setRequestHeader("Accept", "application/sparql-results+json");
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4) {
            if(xmlhttp.status == 200 || xmlhttp.status == 201 ) {
                onSuccessQuery(xmlhttp.responseText);
            } else {
                document.getElementById("results").innerHTML = "エラー" ;
            }
        }
    }
    xmlhttp.send(querypart);
}
function onSuccessQuery(text) { // 結果(JSON文字列)を配列に格納
    var jsonObj = JSON.parse(text);
    var head , rows ;
    if (jsonObj.responseJSON) {
        head = jsonObj.responseJSON.head.vars;
        rows = jsonObj.responseJSON.results.bindings;
    } else {
        if(!(jsonObj.head)){
            document.getElementById("results").innerHTML = "スパークル構文エラー" ;
            return;
        }
        head = jsonObj.head.vars;
        rows = jsonObj.results.bindings;
    }
    if (rows.length === 0) {
        document.getElementById("results").innerHTML = "検索条件の該当データなし" ;
        return;
    }
    makeTable(head, rows);
}
function makeTable(head, rows) { // 配列をテーブルにして出力
    var html = "<table class='type1'><tr>";
    for (var i=0; i<head.length; i++) { //ヘッダ部分の書込み
        html += "<th>" + head[i] + "</th>";
    }
    html += "</tr>";
    for (var i=0; i<rows.length; i++) { //内容の書込み
        html += "<tr>";
        for (var j=0; j<head.length; j++) {
            var col = head[j];
            if(rows[i][col] != null){
				
				if(rows[i][col].value.slice(0,4) == "http"){
					
					html += "<td>" + "<a href ='" + rows[i][col].value + "' target='_blank'>" + rows[i][col].value + "</a>" + "</td>";
					
				}else{
					html += "<td>" + rows[i][col].value + "</td>";
				}
            }else{
                html += "<td></td>";
            }
        }
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("results").innerHTML = html;
}