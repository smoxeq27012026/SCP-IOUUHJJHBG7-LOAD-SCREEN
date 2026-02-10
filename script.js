var tips_array = [
    "You can disarm a player by interacting with them while holding a firearm.<br><br>Grenades can be used to destroy doors.<br><br>Grenades can be thrown with less force using the right mouse button.<br><br>SCP-500 not only heals you but removes most negative effects, and provides regeneration afterwards.",
    "Scientists and Class-D must reach the surface to escape.<br><br>Escaped Class-D join the Chaos Insurgency, while escaped Scientists become MTF.<br><br>Mobile Task Force units and Chaos Insurgents arrive at opposite ends of the Surface Zone.",
    "The Alpha Warhead kills anything inside the Facility when it detonates. It can be activated from the Surface Zone.<br><br>The Alpha Warhead detonation sequence can be canceled from its room in Heavy Containment.",
    "Maximize your advantage by adjusting your weapon attachments based on the situation you find yourself in.<br><br>The more attachments a weapon has on it, the heavier it gets. This affects stamina usage and movement speed.<br><br>Not only do suppressors muffle gunshots, they also hide muzzle flashes.<br><br>Longer and heavier weapons are less accurate if fired while running.",
    "The Micro H.I.D. can kill most SCPs very quickly but has a limited power supply. Use it wisely!<br><br>The Micro H.I.D. requires about 5 seconds of charging before it can fire.<br><br>Holding right mouse button will keep the Micro H.I.D. at its ready-to-fire state; slowly draining energy.<br><br>The Micro H.I.D. is very loud while charging. Make sure to use it while your targets can’t run away.<br><br>Charging the Micro H.I.D. produces an intimidating sound which is enough to ruin your enemies' plans.",
    "There are four main zones in the Facility: Light Containment, Heavy Containment, Entrance, and Surface.<br><br>The entrance zone has two gates, that provide access to the surface. You'll need a keycard to open them.<br><br>The Intercom room in the Entrance Zone can be used to broadcast a voice message to all players.<br><br>The Light Containment zone will lock down after 15 minutes; killing anyone left inside. Escape while you can!",
    "SCP-914 can change all items, including weapons and ammunition.<br><br>SCP-914 can recharge radios and the Micro H.I.D.",
    "SCP-079 starts off relatively weak but gets more powerful as a match goes on.<br><br>SCP-079 can lock doors, turn off lights, overcharge tesla gates, scan zones, interact with A.C.E.S and use turrets on surface.<br><br>SCP-079 can’t turn off lights in a room with a broken door.<br><br>SCP-079 is recontained using generators found in Heavy Containment.<br><br>A camera being used by SCP-079 will glow blue. You never know when it's watching.",
    "SCP-173 can move freely in dark rooms, even if it's being looked at. Bring a flashlight!<br><br>SCP-173 can kill stealthily from behind.",
    "SCP-106 is resistant to bullets but not explosives and electricity.<br><br>SCP-106 can quickly be recontained using the femur breaker that is found in its containment chamber.<br><br>SCP-106 can walk through doors.",
    "SCP-096 is at its weakest when it has just begun to calm down.<br><br>SCP-096 can charge forward while enraged – breaking doors and killing targets.<br><br>SCP-096 will destroy doors and pry open closed gates when enraged.",
    "SCP-939 can sprint indefinitely and is completely silent when walking.",
    "SCP-049 can kill any human instantly, if it gets close.<br><br>SCP-049 can only reanimate corpses if they’re fresh.<br><br>SCP-049-2 is vulnerable to headshots.<br><br>SCP-049-2s make good scouts and are dangerous in large numbers."
],
    tips_headers = [
        "ITEMS",
        "GAME",
        "ALPHA WARHEAD",
        "WEAPONS",
        "Micro H.I.D",
        "ZONES",
        "SCP-914",
        "SCP-079",
        "SCP-173",
        "SCP-106",
        "SCP-096",
        "SCP-939",
        "SCP-049/049-2"
    ],
    tip_index = 0,
    tip_interval = 10000,
    img_index = 0,
    img_interval = 8000;

// Функция для запуска музыки
function playBackgroundMusic() {
    var music = document.getElementById('backgroundMusic');
    if (music) {
        // Устанавливаем небольшую громкость для комфорта
        music.volume = 0.7;
        
        // Пытаемся включить музыку
        var playPromise = music.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log("Музыка успешно запущена");
            }).catch(error => {
                console.log("Автовоспроизведение заблокировано, ждем взаимодействия с пользователем");
                
                // Создаем обработчик для запуска музыки при клике
                function startMusicOnInteraction() {
                    music.play().then(() => {
                        console.log("Музыка запущена после взаимодействия");
                        // Удаляем обработчики после успешного запуска
                        document.removeEventListener('click', startMusicOnInteraction);
                        document.removeEventListener('keydown', startMusicOnInteraction);
                        document.removeEventListener('touchstart', startMusicOnInteraction);
                    });
                }
                
                // Добавляем обработчики для различных событий взаимодействия
                document.addEventListener('click', startMusicOnInteraction);
                document.addEventListener('keydown', startMusicOnInteraction);
                document.addEventListener('touchstart', startMusicOnInteraction);
            });
        }
    }
}

// Основная функция инициализации
function initPage() {
    // Запускаем музыку
    playBackgroundMusic();
    
    // Настройка подсказок
    window.onclick = changeTip;
    changeTip();

    function changeTip() {
        tip_index = Math.floor(Math.random() * tips_array.length);
        document.getElementById('hintText').innerHTML = `${tips_array[tip_index]}`;
        document.getElementById('hintHeader').innerHTML = `${tips_headers[tip_index]}`;
    };

    changeBg();

    function changeBg() {
        img_index = Math.floor(Math.random() * 10) + 1;
        document.getElementById('background').style.backgroundImage = `url('images/${img_index}.png')`;
        setTimeout(changeBg, img_interval);
    };
}

// Запускаем инициализацию когда страница полностью загрузится
window.onload = initPage;

// Альтернативный вариант: запускаем когда DOM готов
document.addEventListener('DOMContentLoaded', function() {
    // Можно попробовать запустить музыку раньше
    playBackgroundMusic();
});
