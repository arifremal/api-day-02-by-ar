const load =(serachsText) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${serachsText}`
    fetch(url)
    .then(res=>res.json())
    .then(data => display(data.meals))
}


const display = meals =>{
    for (const meal of meals){
        console.log(meal);
        const mealContainer = document.getElementById('container')
        mealContainer.innerText=''
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('card')
        mealDiv.innerHTML=`
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button type="button" onclick="mealDetails(${meal.idMeal})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
        </div>
        `
        mealContainer.appendChild(mealDiv)
    }
}

const search=()=>{
const serachsText = document.getElementById('s').value;
console.log(serachsText);

 load(serachsText)
}

const mealDetails= idMeal=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data => displayMeals(data.meals[0]) )
    .catch (error=> console.log(error))

}

const newass = async(idMeal)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

}


const displayMeals=meal=>{
    document.getElementById('exampleModalLabel').innerText= meal.strMeal
    const mdetail= document.getElementById('m')
    mdetail.innerHTML=`
    <img class="img-fluid" src="${meal.strMealThumb}" class="card-img-top" alt="...">
    
    `

}

load('rice')