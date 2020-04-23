import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {ArtService} from "./artApp.js";


const carTop = `<div id="carousel-art" class="carousel slide" data-ride="carousel" interval=1000>
<div class="carousel-inner">`
const carBottom = ` </div>   <a class="carousel-control-prev" href="#carousel-art" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carousel-art" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>
</div>`

$(document).ready(function (){
  (async () => {
    let artService = new ArtService();
    const response = await artService.getArt();
    let {title, people, images} =  response;
    $('.art').html(`<h1>${title}</h1><br><div class="car-div"></div> `)
    if(images.length < 1){
      $(".car-div").html(`<img src='https://www.cowgirlcontractcleaning.com/wp-content/uploads/sites/360/2018/05/placeholder-img-3.jpg' alt='placeholder'></img> <br><br> <footer>-${people? people[0].name : "Anonymous" }</footer>`)
    }else if(images.length>1){
      $(".car-div").html(carTop+carBottom);
      images.forEach((image,i)=>{
        if(i===0){
          $('#carousel-art').append(`<div class="carousel-item active">
          <img class="d-block w-100" src="${image.baseimageurl}" alt="First slide">
          <br><br><footer>-${people? people[0].name : "Anonymous" }</footer>
        </div>`)
        }else{
          $('#carousel-art').append(`<div class="carousel-item ">
          <img class="d-block w-100" src="${image.baseimageurl}" alt="First slide">
          <br><br><footer>-${people? people[0].name : "Anonymous" }</footer>
        </div>`)
        }
      })
    }else{
      $(".car-div").html(`<img src='${images[0].baseimageurl}' alt='${title}'></img> <br><br> <footer>-${people? people[0].name : "Anonymous" }</footer>`)
    }
  })();

  $('#button').click(function() {
    (async () => {
      let artService = new ArtService();
      const response = await artService.getArt();
      let {title, people, images} = response;
      $('.art').html(`<h1>${title}</h1><br><div class="car-div"></div> `)
      if(images.length < 1){
        $(".car-div").html(`<img src='https://www.cowgirlcontractcleaning.com/wp-content/uploads/sites/360/2018/05/placeholder-img-3.jpg' alt='placeholder'></img> <br><br> <footer>-${people? people[0].name : "Anonymous" }</footer>`)
      }else if(images.length>1){
        $(".car-div").html(carTop+carBottom);
        images.forEach((image,i)=>{
          if(i===0){
            $('#carousel-art').append(`<div class="carousel-item active">
            <img class="d-block w-100" src="${image.baseimageurl}" alt="First slide">
            <br><br><footer>-${people? people[0].name : "Anonymous" }</footer>
          </div>`)
          }else{
            $('#carousel-art').append(`<div class="carousel-item ">
            <img class="d-block w-100" src="${image.baseimageurl}" alt="First slide">
            <br><br><footer>-${people? people[0].name : "Anonymous" }</footer>
          </div>`)
          }
        })
      }else{
        $(".car-div").html(`<img src='${images[0].baseimageurl}' alt='${title}'></img> <br><br> <footer>-${people? people[0].name : "Anonymous" }</footer>`)
      }
    })();
    
  });
});
