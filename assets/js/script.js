window.onscroll = function() {myFunction()};

var mySkill = document.getElementById("skills");
var myPers = document.getElementById("personal");
var skillBtn = document.getElementById("coding-btn");
var edBtn = document.getElementById("personal-btn");
var moreworks= document.getElementById("more-works");
var resume = document.getElementById("resume");
var moreWork = document.getElementById("more-work");
var lessWorkBtn = document.getElementById("less_work_button");
var moreWorkBtn = document.getElementById("more_work_button");

// mavbar


function codingskills() {
    mySkill.style.display="block";
    myPers.style.display="none";
    skillBtn.style.borderBottom="2px solid rgb(3, 33, 58)";
    edBtn.style.borderBottom="none";
}

function personalskills() {
    mySkill.style.display="none";
    myPers.style.display="block";
    edBtn.style.borderBottom="2px solid rgb(3, 33, 58)";
    skillBtn.style.borderBottom="none";
}

function openCv() {
    resume.style.transform="scale(1,1)";
}
function closeCv() {
    resume.style.transform="scale(0,0)";
}
// more work
function openMoreWork() {
  moreWork.style.height="100%";
  lessWorkBtn.style.display="block";
  moreWorkBtn.style.display="none";
}
function closeMoreWork() {
  moreWork.style.height="0";
  lessWorkBtn.style.display="none";
  moreWorkBtn.style.display="block";
}