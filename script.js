"use strict";
const apiUrl = 'http://www.omdbapi.com/?apikey=a0a4f157&';
const placeholderImg = 'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg';
let lastSearchText = '';
let template = `<div class="search-result">
<img class='search-img' src='$poster'/>
<div class="search-info">
    <span class='search-title'>$title</span>
    <span class='search-year'>$year</span>
</div>
</div>`;

document.addEventListener('DOMContentLoaded', function () {
    attachSearchListener();
});

function attachSearchListener() {
    const searchBox = document.getElementById('search-box');
    searchBox.addEventListener('keyup', function (e) {
        const searchText = e.target.value;
        if (searchText !== lastSearchText) {
            if (searchText.length > 2) {
                debouncedGetSearchResults(searchText);
            } else {
                emptySearchResults();
            }
            lastSearchText = searchText;
        }
    });
}

function getSearchResults(searchText) {
    const url = apiUrl + `s=${searchText}`;
    fetch(url).then(res => res.json()).then(data => populateSearchResults(data));
}

const debouncedGetSearchResults = debouce(getSearchResults, 1000);

function debouce(fn, interval) {
    let ref;
    return function (arg) {
        clearInterval(ref);
        ref = setTimeout(function () {
            fn(arg);
        }, interval);
    }
}

function populateSearchResults({ Search: searchData }) {
    const searchResults = document.querySelector('.search-results');
    searchResults.innerHTML = '';
    searchData && searchData.forEach(result => {
        let html = template.replace('$poster', result.Poster === 'N/A' ? placeholderImg : result.Poster);
        html = html.replace('$title', result.Title);
        html = html.replace('$year', result.Year);
        searchResults.innerHTML += html;
    });
}

function emptySearchResults() {
    const searchResults = document.querySelector('.search-results');
    searchResults.innerHTML = '';
}

