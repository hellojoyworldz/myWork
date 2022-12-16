// external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope(".js-list", {
  itemSelector: ".js-item",
  layoutMode: "fitRows",
});

// filter functions
var filterFns = {
  // show if name ends with -ium
  ium: function (itemElem) {
    var name = itemElem.querySelector(".name").textContent;
    return name.match(/ium$/);
  },
};

// bind filter button click
var filtersElem = document.querySelector(".js-filters-group");
filtersElem.addEventListener("click", function (event) {
  // only work with buttons
  if (!matchesSelector(event.target, "button")) {
    return;
  }
  var filterValue = event.target.getAttribute("data-filter");
  // use matching filter function
  filterValue = filterFns[filterValue] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll(".js-button-group");
for (var i = 0, len = buttonGroups.length; i < len; i++) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener("click", function (event) {
    // only work with buttons
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    buttonGroup.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
  });
}

/*
//date
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
	if(xhttp.readyState == 4 && xhttp.status == 200){
		jsonfunc(this.responseText); 
	}
}
xhttp.open("GET","/work/assets/js/data.json", true);
xhttp.send();

function jsonfunc( jsonText ) {

	let json = JSON.parse(jsonText); // String -> json으로 변환
	
	let txt = "";

	for(i=0; i<json.length; i++){
		for(key in json[i]){ 

      txt += '<li class="card__item js-item desktop mobile" data-category="desktop">';
      txt += '<a href="http://orientalfoodkorea.co.kr" target="_blank" >';
      txt += '<div class="card__header">';
      txt += '<strong class="card__tit">오리엔탈푸드코리아</strong>';
      txt += '<span class="card__date">2018.05 ~ 2018.06</span>';
      txt += '<span class="card__view">바로가기</span>';
      txt += '</div>';
      txt += '<div class="card__body">';
      txt += '<div class="card__thumb">';
      txt += '<img class="card__thumbImg" src="./assets/img/mainSite__thumb14.jpg" width="1240" height="874" alt="">';
      txt += '</div>';
      txt += '</div>';
      txt += '</a>';
      txt += '<div class="card__footer">';
      txt += '<div class="card__type">';
      txt += '<a href="http://orientalfoodkorea.co.kr" target="_blank" class="card__typeLink type--desktop">데스크탑</a>';
      txt += '<a href="http://orientalfoodkorea.co.kr/m" target="_blank" class="card__typeLink type--mobile">모바일</a>';
      txt += '</div>';
      txt += '</div>';
      txt += '</li>';
    
			txt += json[i].name + " " + json[i].start + " " +
			   json[i].end+ " " + json[i].pc + "<br>";
         
		}
		txt += "<br>";
	} 
	document.getElementById('demo').innerHTML= txt;
}
*/
