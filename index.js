let allmeals = {};
let dataa = document.querySelector("#categoryData");
let countymealdiv = document.querySelector("#countymealdiv");
let countymealcontainer = document.querySelector(".countymealdiv");
let details = document.querySelector(".details");
let container = document.querySelector(".cont2");
let mealid = {};
///////////////

// ////////first//////////////
async function getmeals() {
$("#loading").addClass("d-flex");
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

  let response = await fetch(url);
  let data = await response.json();
  allmealsbyword = data;
  console.log(allmealsbyword );
 
  $("#loading").removeClass("d-flex");
  $("#loading").addClass("d-none");
  displayallmeals(data);
}
getmeals();


 function  displayallmeals(data){
  var box = '';
  for (var i = 0; i < data.meals.length; i++) {
    box += ` <div class="col-md-3 " onclick="getdetails('${data.meals[i].idMeal}')">
        <div
  
          class="meal position-relative overflow-hidden rounded-2 cursor-pointer " 
        >
          <img
            class="w-100"
            src=${data.meals[i].strMealThumb

      }
            alt=""
           
          />
          <div
            class="meal-layer position-absolute d-flex align-items-center text-white p-2 start-0 end-0 flex-column"
          >
            <h3 class=""fs-3>
            ${data.meals[i].strCategory}</h3>
         
          </div>
        </div>
      </div>
        `
    dataa.innerHTML = box;
   
  }
}

async function getdetails(id) {
    
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  let response = await fetch(url);
  let data = await response.json();
  mealid = data;
  console.log(mealid);
  doo(mealid);

}

function doo(mealid) {

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
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure9
} ${mealid.meals[0].strIngredient9
}</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure10}
 ${mealid.meals[0].strIngredient10}
</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure11}
 ${mealid.meals[0].strIngredient11}
</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure12}
 ${mealid.meals[0].strIngredient12}
</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure13}
 ${mealid.meals[0].strIngredient13}
</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure14}
 ${mealid.meals[0].strIngredient14}
</span>
                        <span class="badge bg-primary fs-5">  ${mealid.meals[0].strMeasure15}
 ${mealid.meals[0].strIngredient15}
</span>

                        </p>
                       
                        <p class="text-white fs-2">
                          Tags:<br>
                          <span class="badge bg-light fs-5 text-black"> ${mealid.meals[0].
                            strTags
                            }</span>
                        
                        </p>
                     
                      <div class="d-flex">
    <button class="btn badge bg-danger fs-4">source</button>
    <button class="btn badge bg-success fs-4">YouTube</button>
</div>

                        
                      </div>
                    </div>
                  </div> `;
  details.innerHTML = box;
}

// ....sidenav.........


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
// //////////////////spinner
// $(document).ready(function () {
 
//   $("#loading-icon").fadeOut(1000, function () {
//     $("#loading").slideUp(1000);
//   });
// });