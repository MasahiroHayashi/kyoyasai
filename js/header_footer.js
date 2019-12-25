function makeHeaderFooter(){
	var header_txt = (function() {/*

	<!-- ヘッダー部分（メニュー等）を修正したい場合は，以下を修正すること。 -->
	<a href="https://kyoyasai.mirko.jp/"><img src="img/title.png" id="titleimg"></a>
	<ul id="fade-in" class="dropmenu">
	  <li class="liClassA"><a href="https://kyoyasai.mirko.jp/" style="text-decoration: none;"><span>ＴＯＰ</span></a></li>
	  <li class="liClassB"><a href="battle.html" style="text-decoration: none;"><span>京育カードバトル</span></a></li>
	  <li class="liClassB"><a href="ar.html" style="text-decoration: none;"><span>京野菜カードＡＲ</span></a></li>
	  <li class="liClassB"><a href="card.html" style="text-decoration: none;"><span>カード一覧</span></a></li>
	  <li class="liClassB"><a href="link.html" style="text-decoration: none;"><span>関連リンク集</span></a></li>
	</ul>
	<!-- ヘッダー部分ここまで -->

	*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1].replace(/\n|\r/g, "");
	
	var footer_txt = (function() {/*

	<!-- フッター部分を修正したい場合は，以下を修正すること。 -->

	<hr style="height: 1px;  border: none;  border-top: 15px #CCFF66 solid;  margin: 20px 0 20px 0;">
	<!-- 所属情報 -->
	<div style="margin:0 10px 0 15px; padding-bottom:30px;">
	<div style="margin:0 0 0 0; font-size:large; font-weight:bold;text-align:center;">&copy; アーバンデータチャレンジ2019京都府ブロック　チーム「<span style="color:#660033;">Kyoto Lovers</span>」</div>
	<div style="margin:20px 0 0 0;text-align:center;font-size:14px;">お問い合わせは<a href="">こちら</a></div>
	<div style="margin:20px 0 0 0; font-size:large; font-weight:bold;text-align:center;"><img src="img/lovers.png" width="300px"></div>
	</div>

	<!-- フッター部分ここまで -->

	*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1].replace(/\n|\r/g, "");
	document.getElementById('header-box').innerHTML = header_txt ;
	document.getElementById('footer-box').innerHTML = footer_txt ;
	document.getElementById('parent').style.display = 'block'; //ヘッダーとフッターを挿入してから最後にペアレントを表示
}
