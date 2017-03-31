<section class="ah-map0">
    <div class="container">
    	<div class="row">
	    	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	    		<span class="ah-popular-title ah-map-title">Все объекты на карте</span>
	    	</div>
		</div>
	</div>
</section>

<script src="//api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
 <script type="text/javascript">
   ymaps.ready(init);
     var myMap,
         myPlacemark;

     function init(){     
         myMap = new ymaps.Map("ah-map", {
             center: [57.626569,39.893787],
             zoom: 8
             // zoom: 8,
             // controls: []
         });

        myMap.behaviors.disable('scrollZoom'); 

         var myPlacemark = new ymaps.Placemark([57.626569,39.893787], {}, {
          iconLayout: 'default#image',
          iconImageHref: '/img/balun.png',
          iconImageSize: [48, 57],
          iconImageOffset: [-3, -42]
      });
         myMap.geoObjects.add(myPlacemark);
         myMap.controls.add('mapTools');
     }
 </script>
 <div id="ah-map"></div>
				