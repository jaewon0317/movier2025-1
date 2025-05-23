let MovieObject = {
    init: function(){
    },

    getall: function(){
       $.ajax({
       // 실행할 코드
          type: "GET",
          url: "http://localhost:8000/all",
       }).done(function(response){
       // 성공코드
            console.log(response)
            movielist = response.result

            // topdiv = document.createElement("div")
            // topdiv.style = 'column-count:5'
            // document.body.appendChild(topdiv)

           topdiv = document.getElementById("alldiv");

           movielist.forEach(movie =>{
               cmovie = document.createElement("div")
               cmovie.className = "card"

               mimg = document.createElement("img")
               mimg.className = "card-img-top"
               mimg.src = movie.poster_path
               mimg.onclick = function(){
                   // window.location.href = movie.url <-- 현재창 변경
                   window.open(movie.url)
               }

               mimg.style.cursor = "pointer"

               cmovie.appendChild(mimg)
               topdiv.appendChild(cmovie)

           });
       }).fail(function(error){
           // 실패코드
           console.log(error)
       });
    },
    getgenres: function(){
        genre = document.getElementById("sgenre").value;
       $.ajax({
       // 실행할 코드
          type: "GET",
          url: "http://localhost:8000/genresbest/"+ genre,
       }).done(function(response){
           console.log(response)
           movielist = response.result

           topdiv = document.getElementById("genrediv");
           // topdiv.innerHTML = "" //기존 영화 내용을 없애는 첫번째 방법
           while(topdiv.firstChild){
               topdiv.removeChild(topdiv.firstChild);
           }

           movielist.forEach(movie =>{
               cmovie = document.createElement("div")
               cmovie.className = "card"

               mimg = document.createElement("img")
               mimg.className = "card-img-top"
               mimg.src = movie.poster_path
               mimg.onclick = function(){
                   window.open(movie.url)
               }

               mimg.style.cursor = "pointer"

               cmovie.appendChild(mimg)
               topdiv.appendChild(cmovie)

           });
       }).fail(function(error){
           console.log(error)
       });
    }
}

MovieObject.init();
MovieObject.getall();