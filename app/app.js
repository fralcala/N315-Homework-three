import { changePage } from "../model/model.js";

// This function is used to grab the hashtag and load the correct page
function route() {
  let hashtag = window.location.hash;
  let pageID = hashtag.replace("#", "");
  console.log("route ", pageID);
  changePage(pageID);
}

// This function adds the url listener to the window
function initSite() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initSite();
});
