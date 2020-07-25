var result,json_data,count=0;

document.addEventListener('DOMContentLoaded',function()
{    popularMovies();
    var input_element=document.getElementById('argument');
    input_element.addEventListener('input', function(e){
        getSearchResults(e.target.value);
        toggleSearchResults();
    })
    var suggested=document.getElementById('suggested');
    suggested.addEventListener('click', function(e){   
    var text=event.target.firstChild.nodeValue;
    const [title,year]=text.split(',')        
    getMovieDetails(title);
})
})


function popularMovies(){    
    url="https://api.themoviedb.org/3/trending/all/day?api_key=c99761f2c47d3fd4012859bb0b522971"
    fetch(url).then(response=>response.json().then(function(data){
            let parent=document.getElementById('popular_movies');
            let i=0;            
            while(i++<11){   
                const div=document.createElement('div');
                div.classList.add('popular_item');
                div.setAttribute('id',`${i}`);
                parent.appendChild(div);            
                let title=data.results[i].title ? data.results[i].title: data.results[i].original_name;      
                url="http://www.omdbapi.com/?apikey=a0a4f157&t="+title;
                fetch(url).then(response=>response.json()
                .then(function(data){
                    getImage(data,div);
                    if(data.Poster!='N/A')                    
                        div.innerHTML+=title;
                }
                ));    
                }
    }));
}

function getImage(data,div){ 
    if(div){          // not creating new li everytime, if li already created. for next time overwrite those. if li only 2, loop runs till 5 , so no li--> div present                  
    const img = new Image();
    img.onload = ()=>div.innerHTML += '<img src="'+img.src+'" />';
    img.src = data.Poster; 
    }
}

function getTitleYear(data,div,i){
    //console.log("here"+data.Search[i].Poster)
    if(data.Search[i].Poster!="N/A" && div){       
            div.innerHTML+=data.Search[i].Title+",";
            div.innerHTML+=data.Search[i].Year;
    }
}

function toggleSearchResults() {
    var x = document.getElementById("suggested");
    if (x.style.display === "none") 
      x.style.display = "flex";
    else 
      x.style.display = "none";
        
}

function getSearchResults(search){
    url="http://www.omdbapi.com/?apikey=a0a4f157&s="+search;
    fetch(url).then(response=>response.json().then(function(data){
        if(data.Response=='True'){//false when we get alot of responses
            let parent=document.getElementById('suggested');
            for(let i=0;i<5 && i<data.Search.length;i++){ 
                if(count<5)  {
                    var div=document.createElement('li');
                    div.classList.add('item');
                    div.setAttribute('id',`${'item'+i}`);
                    parent.appendChild(div); 
                    count++;}
                else{
                        var div=document.getElementById('item'+i);
                        div.innerHTML=" ";
                    }   
                getImage(data.Search[i],div); 
                getTitleYear(data,div,i);                     
            }   
        }
    }));
}

function getMovieDetails(movie_title){   
    toggleSearchResults();
    document.getElementById('movie_details').style.display='flex';
    document.getElementById('movie_details').style.justifyContent='space-evenly';
    var title=movie_title.replace(/^\s+/g, '');
    url="http://www.omdbapi.com/?apikey=a0a4f157&t="+title;
    fetch(url).then(response=>response.json()
    .then(function (data){ 
        document.getElementById('poster').innerHTML=" ";// to clear existing poster 
        getImage(data,document.getElementById('poster'));   
        let details =[data.Title,data.Genre,data.Runtime,data.Rated,"Imdb Rating : "+data.imdbRating,"Description",data.Plot];
        var cells = document.getElementsByTagName("td");
        for(var i = 0; i < cells.length; i++){
            var cell = cells[i];
            cell.innerText = details[i];
        }
 }))}