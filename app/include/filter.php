<section class="az-filter">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1>ВСЕ КОТТЕДЖНЫЕ ПОСЕЛКИ</h1>
				<div class="az-center">
					<span class="az-subtitle">и земельные участки Ярославской области</span>
				</div>
				<div class="az-region hidden-sm hidden-md hidden-lg">
					<div class="az-select style2">
						<span class="az-baloon2"></span>
						<select name="" id="">
							<option value="Ярославская область">Ярославская область</option>
							<option value="Московская область">Московская область</option>
							<option value="Тверская область">Тверская область</option>
						</select>
					</div>
				</div>
			</div>
			<div class="hidden-xs col-sm-4"></div>
			<div class="col-xs-12 col-sm-8">
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
							<div class="clearfix az-range">
								<div class="az-col2-left">
									<div><span class="az-span-filter">От</span></div>
									<div><span class="az-DistSpan" id="startDistSpan">100 км</span></div>
									<input type="text" id="minDist" value="0"/>
									<input type="text" id="startDist" value="100"/>
								</div>
								<div class="az-col2-right">
									<div><span class="az-span-filter">До</span></div>
									<div><span class="az-DistSpan" id="endDistSpan">250 км</span></div>
									<input type="text" id="maxDist" value="300"/>
									<input type="text" id="endDist" value="250"/>
								</div>
							</div>
							<div class="az-range-slider">
								<div id="az-slider"></div>
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
									<div><span class="az-span-filter">От</span></div>
									<div><span class="az-DistSpan" id="startCostSpan">500 р</span></div>
									<input type="text" id="minCost" value="0"/>
									<input type="text" id="startCost" value="500"/>
								</div>
								<div class="az-col2-right">
									<div><span class="az-span-filter">До</span></div>
									<div><span class="az-DistSpan" id="endCostSpan">50000 р</span></div>
									<input type="text" id="maxCost" value="100000"/>
									<input type="text" id="endCost" value="50000"/>
								</div>
							</div>
							<div class="az-range-slider">
								<div id="az-slider2"></div>
							</div>
						</div>
						<div class="az-filter-sec3">
							<div class="clearfix az-sec-t1">
								<div class="az-col3-left"><span class="az-span-filter margin">Газ:</span></div>
								<div class="az-col3-right">
									<div class="az-select style2 style4">
										<select name="" id="">
											<option value="Сотку">Не важно</option>
											<option value="Акр">Важно</option>
										</select>
									</div>
								</div>
							</div>
							<div class="az-filter-submit">
								<input type="submit" value="подобрать участок">
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>