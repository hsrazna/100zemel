<section class="az-filter">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 pull-right">
				<h1>ВСЕ КОТТЕДЖНЫЕ ПОСЕЛКИ</h1>
				<div class="az-center">
					<span class="az-subtitle">и земельные участки Ярославской области</span>
				</div>
				<div class="az-region hidden-sm hidden-md hidden-lg">
					<div class="az-select style2 style5 change-region">
						<span class="az-baloon2"></span>
						<select name="" id="">
							<option value="Ярославская область">Ярославская область</option>
							<option value="Костромская область">Костромская область</option>
							<option value="Ивановская область">Ивановская область</option>
							<option value="Владимирская область">Владимирская область</option>
							<option value="Тверская область">Тверская область</option>
							<option value="Московская область">Московская область</option>
						</select>
					</div>
				</div>
			</div>
			<div class="hidden-xs col-sm-4 col-md-4 col-lg-4 pull-left">
				<div id="az-obls">
					<div class="az-obl az-obl1">
						<img src="img/yaroslavskaya.jpg" alt="Ярославская область">
						<div class="az-region-name">
							<div class="az-region-name-top"><span>Ярославская</span></div>
							<div class="az-region-name-bottom"><span>область</span></div>
							<div class="az-change-reg"><a href="#">сменить область</a></div>
						</div>
					</div>
					<div class="az-obl az-obl2" style="display: none;">
						<img src="img/kostromskaya.jpg" alt="Костромская область">
						<div class="az-region-name">
							<div class="az-region-name-top"><span>Костромская</span></div>
							<div class="az-region-name-bottom"><span>область</span></div>
							<div class="az-change-reg"><a href="#">сменить область</a></div>
						</div>
					</div>
					<div class="az-obl az-obl3" style="display: none;">
						<img src="img/ivanovsk.jpg" alt="Ивановская область">
						<div class="az-region-name">
							<div class="az-region-name-top"><span>Ивановская</span></div>
							<div class="az-region-name-bottom"><span>область</span></div>
							<div class="az-change-reg"><a href="#">сменить область</a></div>
						</div>
					</div>
					<div class="az-obl az-obl4" style="display: none;">
						<img src="img/vladimirskaya.jpg" alt="Владимирская область">
						<div class="az-region-name">
							<div class="az-region-name-top"><span>Владимирская</span></div>
							<div class="az-region-name-bottom"><span>область</span></div>
							<div class="az-change-reg"><a href="#">сменить область</a></div>
						</div>
					</div>
					<div class="az-obl az-obl5" style="display: none;">
						<img src="img/tverskaya.jpg" alt="Тверская область">
						<div class="az-region-name">
							<div class="az-region-name-top"><span>Тверская</span></div>
							<div class="az-region-name-bottom"><span>область</span></div>
							<div class="az-change-reg"><a href="#">сменить область</a></div>
						</div>
					</div>
					<div class="az-obl az-obl6" style="display: none;">
						<img src="img/mosk.jpg" alt="Московская область">
						<div class="az-region-name">
							<div class="az-region-name-top"><span>Московская</span></div>
							<div class="az-region-name-bottom"><span>область</span></div>
							<div class="az-change-reg"><a href="#">сменить область</a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-right">
				<form action="/">
					<div class="az-filter-wrap">
						<div class="az-filter-sec1">
							<div class="clearfix az-sec-t2">
								<div class="az-col1-left"><span class="az-span-filter">Удаленность от города:</span></div>
								<div class="az-col1-right">
									<div class="az-select style2 style3">
										<select name="" id="">
											<option value="Ярославль">Ярославль</option>
											<option value="Ярославль2">Ярославль2</option>
											<option value="Ярославль3">Ярославль3</option>
										</select>
									</div>
								</div>
							</div>
							<div class="clearfix az-range hidden-sm hidden-md hidden-lg">
								<div class="az-col2-left">
									<div><span class="az-span-filter">От</span></div>
									<!-- <div><span class="az-DistSpan" id="startDistSpan">100 км.</span></div> -->
									<input type="text" id="minDist" value="0"/>
									<input type="text" id="startDist" value="100 км." class="az-DistSpan"/>
								</div>
								<div class="az-col2-right">
									<div><span class="az-span-filter">До</span></div>
									<!-- <div><span class="az-DistSpan" id="endDistSpan">250 км.</span></div> -->
									<input type="text" id="maxDist" value="300"/>
									<input type="text" id="endDist" value="250 км." class="az-DistSpan"/>
								</div>
							</div>
							<div class="az-shkola hidden-xs">
								<span>0</span>
								<span>50 км.</span>
								<span>100 км.</span>
								<span>150 км.</span>
								<span>200 км.</span>
								<span>250 км.</span>
								<span>300 км.</span>
							</div>
							<div class="az-range-slider">
								<div id="az-slider"></div>
								<span class="az-before"></span>
								<span class="az-after"></span>
							</div>
						</div>
						<div class="az-filter-sec2">
							<div class="clearfix az-sec-t2">
								<div class="az-col1-left"><span class="az-span-filter margin">Стоимость за:</span></div>
								<div class="az-col1-right">
									<div class="az-select style2 style3">
										<select name="" id="">
											<option value="Сотку">Сотку</option>
											<option value="Акр">Акр</option>
											<option value="Гектар">Гектар</option>
										</select>
									</div>
								</div>
							</div>
							<div class="clearfix az-range">
								<div class="az-col2-left">
									<div><span class="az-span-filter hidden-sm hidden-md hidden-lg">От</span></div>
									<!-- <div><span class="az-DistSpan" id="startCostSpan">500 р.</span></div> -->
									<input type="text" id="minCost" value="0"/>
									<input type="text" id="startCost" value="500 р." class="az-DistSpan"/>
								</div>
								<div class="az-col2-right">
									<div><span class="az-span-filter hidden-sm hidden-md hidden-lg">До</span></div>
									<!-- <div><span class="az-DistSpan" id="endCostSpan">50000 р.</span></div> -->
									<input type="text" id="maxCost" value="100000"/>
									<input type="text" id="endCost" value="50000 р." class="az-DistSpan"/>
								</div>
							</div>
							<div class="az-range-slider">
								<div id="az-slider2"></div>
								<span class="az-before"></span>
								<span class="az-after"></span>
							</div>
						</div>
						<div class="az-filter-sec3 clearfix">
							<div class="az-col4-left">
								<!-- az-sec-t1 -->
								<div class="clearfix az-sec-t1">
								<!-- az-col3-left, az-col3-right-->
									<div class="az-col3-left"><span class="az-span-filter margin">Газ:</span></div>
									<div class="az-col3-right">
										<!-- style4 -->
										<div class="az-select style2 style3">
											<select name="" id="">
												<option value="Сотку">Не важно</option>
												<option value="Акр">Важно</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div class="az-col4-right">
								<div class="az-filter-submit">
									<input type="submit" value="подобрать участок">
								</div>
							</div>
							<div class="pull-right hidden-xs"><a href="#" class="az-adv-search">Расширенный поиск</a></div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>