//Nav bar
var nav = document.getElementById("navBar");
function showMenu(){
    nav.style.right = "0";
}
function hideMenu(){
    nav.style.right = "-200px";
}

//Copy email
function copyEmail(){
    var copyText = "site.coleswinford@gmail.com";
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + '"'+copyText+'"' + " to clipboard.");
}

// Change experience display
function changeText(id) {
    var title = "";
    switch (id) {
      case "iGear":
        title = "Software Engineer Co-op";
        company = "iGear"
        link = "https://www.igear.com/"
        dates = "January - May 2023"
        desc = "Full stack engineer";
        break;
      case "company2":
        title = "title 2";
        company = "company 2"
        link = "link 2"
        dates = "dates 2"
        desc = "desc 2";
        break;
      case "company3":
        title = "title 3";
        company = "company 3"
        link = "link 3"
        dates = "dates 3"
        desc = "desc 3";
        break;
    }
    document.getElementById("title-display").innerHTML = title;
    
    document.getElementById("company-display").innerHTML = company;
    document.getElementById("company-display").href = link;

    document.getElementById("dates-display").innerHTML = dates;
    document.getElementById("desc-display").innerHTML = desc;
}
  

/*var scale = Math.min( 
availableWidth / contentWidth, 
availableHeight / contentHeight 
);*/