<section class="az-cat-tabs">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div id="cat-tabs">
					<ul>
						<li><a href="#cat-tabs-1" class="az-link az-list">Список</a></li>
						<li><a href="#cat-tabs-2" class="az-link az-map">На карте</a></li>
					</ul>
					<div id="cat-tabs-1">
						<div class="az-list-wrap">
							<div class="az-list-item">
								<div class="az-li-img">
									<img src="img/ah-onevellag.jpg" alt="village image">
								</div>
								<div class="az-li-cont">
									<span class="az-li-title">Коттеджный поселок «Отрадное»</span>
									<p>Удобный поселок расположенный в заволжском районе. В поселке есть электричество.</p>
									<p>В настоящее время закончено строительство линии электропередач и строительство дорог внутри поселка. Имеется возможность газификации. Первая очередь уже газифицирована. ШРП на границе участка. В настоящее время закончена внутренняя разводка газопровода и по второй очереди. Удачное место для постоянного места жительства: близость города, транспортная доступность, рядом жилые районы города.</p>
									<div class="az-right">
										<a href="#" class="az-link style4">Подробнее</a>
									</div>
								</div>
							</div>
							<div class="az-list-item">
								<div class="az-li-img">
									<img src="img/ah-onevellag.jpg" alt="village image">
								</div>
								<div class="az-li-cont">
									<span class="az-li-title">Коттеджный поселок «Отрадное»</span>
									<p>Удобный поселок расположенный в заволжском районе. В поселке есть электричество.</p>
									<p>В настоящее время закончено строительство линии электропередач и строительство дорог внутри поселка. Имеется возможность газификации. Первая очередь уже газифицирована. ШРП на границе участка. В настоящее время закончена внутренняя разводка газопровода и по второй очереди. Удачное место для постоянного места жительства: близость города, транспортная доступность, рядом жилые районы города.</p>
									<div class="az-right">
										<a href="#" class="az-link style4">Подробнее</a>
									</div>
								</div>
							</div>
							<div class="az-list-item">
								<div class="az-li-img">
									<img src="img/ah-onevellag.jpg" alt="village image">
								</div>
								<div class="az-li-cont">
									<span class="az-li-title">Коттеджный поселок «Отрадное»</span>
									<p>Удобный поселок расположенный в заволжском районе. В поселке есть электричество.</p>
									<p>В настоящее время закончено строительство линии электропередач и строительство дорог внутри поселка. Имеется возможность газификации. Первая очередь уже газифицирована. ШРП на границе участка. В настоящее время закончена внутренняя разводка газопровода и по второй очереди. Удачное место для постоянного места жительства: близость города, транспортная доступность, рядом жилые районы города.</p>
									<div class="az-right">
										<a href="#" class="az-link style4">Подробнее</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="cat-tabs-2">
						<div class="az-cat-map-wrap">
							<div id="cat-map"></div>
						</div>
						<script src="//api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
						<script type="text/javascript">
						ymaps.ready(init);
						 var azMap2,
						     azPlacemark2;

						 function init(){     
						     azMap2 = new ymaps.Map("cat-map", {
						         center: [57.626569,39.893787],
						         zoom: 8
						         // zoom: 8,
						         // controls: []
						     });

						    azMap2.behaviors.disable('scrollZoom'); 

						     var azPlacemark2 = new ymaps.Placemark([57.626569,39.893787], {}, {
						      iconLayout: 'default#image',
						      iconImageHref: '/img/balun.png',
						      iconImageSize: [48, 57],
						      iconImageOffset: [-3, -42]
						  });
						     azMap2.geoObjects.add(myPlacemark2);
						     azMap2.controls.add('mapTools');
						 }
						</script>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>