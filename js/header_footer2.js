function makeHeaderFooter(){
	var header_txt = (function() {/*

	<!-- ヘッダー部分（メニュー等）を修正したい場合は，以下を修正すること。 -->
	<div style="text-align:center;"><a href="https://kyoyasai.mirko.jp/"><img src="img/title.jpg" id="titleimg"></a></div>
	<ul id="fade-in" class="dropmenu">
	  <li class="liClassA"><a href="https://kyoyasai.mirko.jp/" style="text-decoration: none;"><span>ＴＯＰ</span></a></li>
	  <li class="liClassB"><a href="battle.html" style="text-decoration: none;"><span>京育カードバトル</span></a></li>
	  <!-- <li class="liClassB"><a href="ar.html" style="text-decoration: none;"><span>京野菜カードＡＲ</span></a></li> -->
	  <li class="liClassB"><a href="card.html" style="text-decoration: none;"><span>カード一覧</span></a></li>
	  <li class="liClassB"><a href="link.html" style="text-decoration: none;"><span>関連リンク集</span></a></li>
	</ul>
	<!-- ヘッダー部分ここまで -->

	*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1].replace(/\n|\r/g, "");
	
	var footer_txt = (function() {/*

	<!-- フッター部分を修正したい場合は，以下を修正すること。-->
	<div style="height:30px;background-color:#004400;"></div>
	<div style="margin:0 10px 0 15px; padding:20px 0 30px 0;">
	<div style="margin:0 0 0 0; font-size:large; font-weight:bold;text-align:center;">&copy; アーバンデータチャレンジ2019京都府ブロック　チーム「<span style="color:#660033;">Kyoto Lovers</span>」</div>
	<div style="margin:20px 0 0 0;text-align:center;font-size:14px;">お問い合わせは<a href="mail/mail.html">こちら</a></div>
	<div style="margin:20px 0 0 0; font-size:large; font-weight:bold;text-align:center;"><img src="img/lovers.png" class="footimg"></div>
	</div>
	<!-- フッター部分ここまで -->

	*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1].replace(/\n|\r/g, "");
	document.getElementById('header-box').innerHTML = header_txt ;
	document.getElementById('footer-box').innerHTML = footer_txt ;
	document.getElementById('parent').style.display = 'block'; //ヘッダーとフッターを挿入してから最後にペアレントを表示
	
	<!-- フッター部分ここまで -->
	$(document).ready(function(){
		$('.slider').bxSlider({
			auto: true,
			pause: 5000,
		});
	});
	
	callHanbaiData(); //地図のデータを呼び出し
	
}
