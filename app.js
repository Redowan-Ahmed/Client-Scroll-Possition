window.addEventListener("scroll", () => {
  let scroll = scrollY;
  pdata = document.body.scrollHeight - 545;
  mdata = (scroll/pdata)*100;
  document.querySelector('div#progres').style.width = `${mdata}%`;
  console.log(mdata)
});
