let clickCount = 0;
const sounds = [
    new Audio('sound1.wav'),
    new Audio('sound2.wav'),
    new Audio('sound3.wav')
];
const images = [
    'image1.png',
    'image2.png',
    'image3.png'
];

// BGMの設定
const bgm = new Audio('bgm.mp3');
bgm.loop = true;  // BGMをループ再生
bgm.play();  // ページがロードされたときにBGMを再生

document.getElementById('clickButton').addEventListener('click', () => {
    sounds[clickCount % sounds.length].play();
    document.getElementById('displayImage').src = images[clickCount % images.length];
    clickCount++;
});
