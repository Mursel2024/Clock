function updateClock(){
    const now=new Date();

    //Reqemsal Saat
    const hours=String(now.getHours()).padStart(2, '0');
    const minutes=String(now.getMinutes()).padStart(2, '0');
    const seconds=String(now.getSeconds()).padStart(2, '0');
    document.getElementById('digitalClock').textContent=`${hours}:${minutes}:${seconds}`;

    //Tarix ve gun
    const days=['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə'];
    const months=['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
    document.getElementById('date').textContent=`${now.getDate()} ${months[now.getMonth()]} ${days[now.getDay()]}`;

    //Analog saat
    const hourDeg=(now.getHours() % 12) *30 + now.getMinutes() * 0.5;
    const minuteDeg=now.getMinutes() * 6;
    const secondDeg=now.getSeconds() * 6;

    document.getElementById('hourHand').style.transform=`rotate(${hourDeg}deg)`;
    document.getElementById('minuteHand').style.transform=`rotate(${minuteDeg}deg)`;
    document.getElementById('secondHand').style.transform=`rotate(${secondDeg}deg)`;
}

//Fon rengini deyismek ucun
document.getElementById('changeBtn').addEventListener('click', function(){
    const colors=['#f0f8ff', '#e6f7ff', '#ff00f5', '#e6f7ff', '#fff8e1'];
    const randomColor=colors[Math.floor(Math.random() *colors.length)];
    document.body.style.backgroundColor=randomColor;
});

    //Her saniye saati yenile
    setInterval(updateClock, 1000);
    updateClock(); //Ilk defe derhal caqir