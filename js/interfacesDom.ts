const linsk = document.querySelectorAll('.link');

linsk.forEach((link) => {
    console.log(link);
});

if(linsk instanceof NodeList )  {
    linsk.forEach((link) => {
        console.log(link);
    });
} 