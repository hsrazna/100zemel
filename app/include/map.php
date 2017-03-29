<section class="ah-map">
    <div class="container">
    	<div class="row">
	    	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	    		<span class="ah-popular-title ah-map-title">Все объекты на карте</span>
	    	</div>
		</div>
	</div>
</section>
<!-- <div class="ah-mapbox">
	<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4dbf5d7bf95818e9e58b357bb0466410693a840d8687531ad449ca6cbfcc3e26&amp;width=100%25&amp;height=540&amp;lang=ru_RU&amp;scroll=true"></script>
</div> -->
<script src="//api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
 <script type="text/javascript">
   ymaps.ready(init);
     var myMap,
         myPlacemark;

     function init(){     
         myMap = new ymaps.Map("map", {
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
 <div id="map"></div>
				