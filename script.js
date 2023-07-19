const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

let btns = ['okay', 'good']

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.innerText = sound;

  btn.classList.add('button')

  const Element = document.getElementById('button');
  Element.appendChild(btn);

  btn.addEventListener('click', function(){
    
    stopSounds();
    document.getElementById(sound).play();
  })

})

function stopSounds (){
   
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio =>{
    audio.pause();
    audio.currentTime = 0;
  })

}