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
var selectedButton = null;
function changeText(id, button) {
    bullet1 = null;
    bullet2 = null;
    bullet3 = null;
    bullet4 = null;
    bullet5 = null;
    var title = "";

    // Remove the class from the previously selected button
    if (selectedButton) {
        selectedButton.classList.remove('selected');
    }
    
    // Add the class to the currently selected button
    button.classList.add('selected');
    selectedButton = button;

    switch (id) {
      case "IGear Co-op I":
        title = "Software Engineer Co-op I";
        company = "IGear"
        link = "https://www.IGear.com/"
        dates = "January-May 2023"
        bullet1 = "Prototyped fullstack implementations of new technologies on Windows using .NET with C#";
        bullet2 = "Debugged apps using Android Studio with Kotlin and Markup";
        break;
      case "IGear Co-op II":
        title = "Software Engineer Co-op II";
        company = "IGear"
        link = "https://www.IGear.com/"
        dates = "August-December 2023"
        bullet1 = "Built foundation of Microsoft Teams integration feature for flagship Squeaks product";
        bullet2 = "Used Microsoft Teams Adaptive Cards using Markup, Typescript, and .NET with C#";
        bullet3 = "Implemented products using Docker containers and Kubernetes";
        bullet4 = "Built web apps using ASP .NET Razor/Blazor frameworks using HTML, CSS, JavaScript, and C#";
        break;
      case "IGear Co-op III":
        title = "Software Engineer Co-op III";
        company = "IGear"
        link = "https://www.IGear.com/"
        dates = "May-August 2024"
        bullet1 = "Enhanced new features of the flagship Squeaks product and integration with Microsoft Teams";
        bullet2 = "Used .NET with C# for fullstack Windows development";
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

// Set default experience on page load
document.addEventListener("DOMContentLoaded", function() {
  const defaultButton = document.querySelector('a[onclick*="IGear Co-op II"]');
  changeText('IGear Co-op II', defaultButton);
});

/*var scale = Math.min( 
availableWidth / contentWidth, 
availableHeight / contentHeight 
);*/