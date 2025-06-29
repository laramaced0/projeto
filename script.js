function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');
     // Toggle the 'light' class on the HTML element//

    const img = document.querySelector("#profile img");

    if (html.classList.contains('light')) 
        {
        img.setAttribute("src","assets/icon_light.jpg");
    } else {
        img.setAttribute("src","assets/icon_dark.jpg");
    }

}
