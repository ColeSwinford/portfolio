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
    bullet1 = null;
    bullet2 = null;
    bullet3 = null;
    bullet4 = null;
    bullet5 = null;
    var title = "";
    switch (id) {
      case "IGear Co-op I":
        title = "Software Engineer Co-op I";
        company = "IGear"
        link = "https://www.IGear.com/"
        dates = "January-May 2023"
        bullet1 = "Android Studio with Kotlin and Markup";
        bullet2 = "Fullstack Windows development using .NET with C#";
        bullet3 = "Prototyping implentations of new technology";
        break;
      case "IGear Co-op II":
        title = "Software Engineer Co-op II";
        company = "IGear"
        link = "https://www.IGear.com/"
        dates = "August-December 2023"
        bullet1 = "Docker, Kubernetes";
        bullet2 = "ASP .NET Razor/Blazor frameworks using HTML, CSS, JavaScript, and C#";
        bullet3 = "Microsoft Teams Adaptive Cards using Markup, Typescript, and .NET with C#";
        bullet4 = "Building foundation of Microsoft Teams integration feature for flagship Squeaks product";
        break;
      case "IGear Co-op III":
        title = "Software Engineer Co-op III";
        company = "IGear"
        link = "https://www.IGear.com/"
        dates = "May-August 2024"
        bullet1 = "Fullstack Windows development using .NET with C#";
        bullet2= "Enhancing new features of flagship Squeaks product";
        break;
      case "company n":
        title = "title n";
        company = "company n"
        link = "link n"
        dates = "dates n"
        bullet1 = "desc n";
        break;
    }
    document.getElementById("title-display").innerHTML = title;
    
    document.getElementById("company-display").innerHTML = company;
    document.getElementById("company-display").href = link;

    document.getElementById("dates-display").innerHTML = dates;
    // document.getElementById("desc-display").innerHTML = "<ul><li>" + bullet1 + "</li><li>" + bullet2 + "</li></ul>";
    var list = document.getElementById("desc-bullets");
    list.innerHTML = "<ul>";
    if (bullet1) {
      list.innerHTML += "<li>" + bullet1 + "</li>";
    }
    if (bullet2) {
      list.innerHTML += "<li>" + bullet2 + "</li>";
    }
    if (bullet3) {
      list.innerHTML += "<li>" + bullet3 + "</li>";
    }
    if (bullet4) {
      list.innerHTML += "<li>" + bullet4 + "</li>";
    }
    if (bullet5) {
      list.innerHTML += "<li>" + bullet5 + "</li>";
    }
    list.innerHTML += "</ul>";
}

// Display current company on page load
changeText('IGear Co-op II');


/*var scale = Math.min( 
availableWidth / contentWidth, 
availableHeight / contentHeight 
);*/