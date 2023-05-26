const openTab = (evt, tabID) =>{
  
    // Get all elements with class="tabcontent" and hide them
    const tabcontents = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    const tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabID).style.display = "flex";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();