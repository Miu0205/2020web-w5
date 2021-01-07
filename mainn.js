const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '今日は華氏150度でとても暑かった。 :insertx: は :inserty: へ遊びに出かけた。歩いていると 20ポンドくらいの:inserts:が :insertz: 。それを見て :insertx: は驚いたが、梅子は全く驚かなかった。梅子からするとそれはよくあることだった。';
let insertX = ['クマ','パンダ','コアラ'];
let insertY = ['新宿','原宿','渋谷'];
let insertZ = ['空に浮かんでいた','一生懸命踊っていた','大声で歌っていた'];
let insertS = ['ゾウ','キリン','ライオン'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let sItem = randomValueFromArray(insertS);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':inserts:',sItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('梅子',name);
    newStory = newStory.replace('梅子',name);
  }

  if(document.getElementById("jp").checked) {
    const weight = Math.round(20 / 2.2046) + ' kg';
    const temperature =  '摂氏'+Math.round((150-32) / 1.8) ;
    newStory = newStory.replace('華氏150',temperature);
    newStory = newStory.replace('20ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
