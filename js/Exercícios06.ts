const link = document.getElementById("origamid");



if (link instanceof HTMLAnchorElement) {
  console.log(link.href);
  link.href = link.href.replace("http://", "https://");

}
console.log(link);