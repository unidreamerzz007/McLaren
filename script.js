//toggle menu button
function toggleMenu(){
  const menu=document.querySelector('.menu')
  const nav=document.querySelector('.nav')
  menu.classList.toggle('active')
  nav.classList.toggle('active')
}

// change the video when click on the gallery image
function changeVideo(name){
  const bgVideoList=document.querySelectorAll('.bg-video')
  const trailers=document.querySelectorAll('.trailer')
  const models=document.querySelectorAll('.model')

  bgVideoList.forEach(video=>{
    video.classList.remove('active');
    if(video.classList.contains(name))
    {
      video.classList.add('active');
    }
  });

  //mapping model name change
  models.forEach(model=>{
    model.classList.remove('active');
    if(model.classList.contains(name))
    {
      model.classList.add('active');
    }
  });

  //mapping trailer vidoe change
 
  trailers.forEach(video=>{
    video.classList.remove('active');
    if(video.classList.contains(name))
    {
      video.classList.add('active');
    }
  });
}

function pauseVideo(){
  const bgVideoList=document.querySelectorAll('.bg-video')
  bgVideoList.forEach(video=>{
    video.pause();
  })

}