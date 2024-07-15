let dataa = document.querySelector("#categoryData");
let countymealdiv = document.querySelector("#countymealdiv");
let countymealcontainer = document.querySelector(".countymealdiv");
let details = document.querySelector(".details");
let container = document.querySelector(".container");
let allcountries = {};
let countymeals = {};
let mealid = {};

// ////////first//////////////
async function getcountries() {
  $("#loading").addClass("d-flex");
  let url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

  let response = await fetch(url);
  let data = await response.json();


  allcountries = data;
   
  $("#loading").removeClass("d-flex");
  $("#loading").addClass("d-none");
  console.log(allcountries);
  displaycountries(data);
  console.log("Area111111")
}
getcountries();


function displaycountries(data) {
  var box = '';
  for (var i = 0; i < data.meals.length; i++) {
    box += ` <div class="col-md-3 " onclick="getcountryname('${data.meals[i].strArea}')">
        <div class="d-flex flex-column">

       <i class="fa-solid fa-house-laptop fa-2xl" style="color: #ffffff;"></i><br>
        <h3 class="text-white fs-2"  >${data.meals[i].strArea}</h3>
        
        </div>
      </div>
        `
    dataa.innerHTML = box;

  }
}
///////////second//////////////////////
async function getcountryname(cat) {

  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cat}`;

  let response = await fetch(url);
  let data = await response.json();
  console.log(data)

  countymeals = data;
  console.log(countymeals);
  doo(countymeals);
  console.log("area222");

}
function doo(countymeals) {
  dataa.classList.add("d-none");

  displaycountrymeals(countymeals);

}


function displaycountrymeals(countymeals) {
  var box = '';
  for (var i = 0; i < countymeals.meals.length; i++) {
    box += ` <div class="col-md-3">
        <div
  
          class="meal position-relative overflow-hidden rounded-2 cursor-pointer " onclick="getmealid('${countymeals.meals[i].idMeal}')"  >
          
        >
          <img
            class="w-100"
            src=${countymeals.meals[i].strMealThumb} alt=""  />
          <div
            class="meal-layer position-absolute d-flex align-items-center text-black p-2 start-0 end-0 "
          >
            <h3>${countymeals.meals[i].strMeal}</h3>
          </div>
        </div>
      </div>
        `
    countymealdiv.innerHTML = box;

  }
}


// // //////////third//////////////////////////////////
async function getmealid(id) {



  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  let response = await fetch(url);
  let data = await response.json();
  mealid = data;
  undoo(mealid);
  console.log(mealid);

  console.log("area333");

}
function undoo(mealid) {

  container.classList.add("d-none");
  details.classList.replace("d-none", "d-flex");
  displayDetails(mealid);
}

function displayDetails(mealid) {
  let box = `  <div class="container position-relative">
                    <i
                      class="fa-solid fa-x fa-lg position-absolute top-0 end-0 p-3"
                      style="color: #898a8756"
                   ></i>
                    <div class="row">
                     
    
                      <div class="col-lg-5">
                        <img class="w-75 ms-5 ps-5" src="${mealid.meals[0].strMealThumb


    }"  alt="" />
    <P class="text-white fs-2 ms-5 ps-5">${mealid.meals[0].strMeal}</P>
                         <h2 class="text-white"></h2>
                      </div>
                      <div class="col-lg-7">
                        <h3 class="text-white fs-2">Instructions</h3>
                        <p class="text-white">  ${mealid.meals[0].
      strInstructions
    } </p>
                  
                        <p class="text-white fs-1">
                          Area:<span class="badge ">  ${mealid.meals[0].
      strArea


    }</span>
                        </p>
                        <p class="text-white fs-1">
                          Categories:<span class="badge ">  ${mealid.meals[0].

      strCategory
    }</span>
                        </p>
                        <p class="text-white fs-1">
                        Recepies:
                        <span class="badge bg-primary fs-5"> ${mealid.meals[0].strMeasure1
    } ${mealid.meals[0].strIngredient1
    }</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure2
    } ${mealid.meals[0].strIngredient2
    }</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure3
    } ${mealid.meals[0].strIngredient3
    }</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure4
    } ${mealid.meals[0].strIngredient4
    }</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure5
    } ${mealid.meals[0].strIngredient5
    }</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure6
    } ${mealid.meals[0].strIngredient6
    }</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure7
    } ${mealid.meals[0].strIngredient7
    }</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure8
    } ${mealid.meals[0].strIngredient8
    }</span>
  <span class="badge bg-primary fs-5"> 
   ${mealid.meals[0].strMeasure9} ${mealid.meals[0].strIngredient9}
</span>               
   </p>
                       
                        <p class="text-white fs-2">
                          Tags:<br>
                          <span class="badge bg-light fs-5 text-black"> ${mealid.meals[0].strTags}</span>

                        </p>
                     
                      <div class="d-flex">
    <button class="btn badge bg-danger fs-4">source</button>
    <button class="btn badge bg-success fs-4">YouTube</button>
</div>
//${mealid.meals[0].strYoutube}
                        
                      </div>
                    </div>
                  </div> `;
  details.innerHTML = box;
}


// nav
$(".iconn").click(function(){
  if( $(".side-nav-menu").css('left')==='0px'){
  $(".side-nav-menu").animate({ left: `-260px` }, 500);
  $(".iconn").removeClass('fa-x').addClass('open-close-icon')
}
else{
  $(".side-nav-menu").animate({ left: `0px` }, 500);
  $(".iconn").removeClass('open-close-icon').addClass('fa-x')
}
 
})
/////////////////
function closeSideNav(){
  $(".side-nav-menu").animate({ left: `-260px` }, 500);
}

