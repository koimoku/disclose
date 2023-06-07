const openingConfession = {color:"#2596be", text:"Welcome to <strong>disclose</strong>.wtf.<br><br>A place to <strong>anonymously</strong> share your secrets."};

const contactConfession = {color:"#2596be", text:"Contact us at <strong>wassup@disclose.wtf</strong>."};

let confIndex = 0;

const confessions = [
    {color:"#ff0000", text:"I am a foot and a half taller than my wife. So when I take a shower I make sure to set the shower head as high as possible. Then when she gets in she can’t reach it to lower it and she has to call me in. So I get to see her naked. She has yet to realize that setting is too high for even me.<br><br>Not that I can’t see her naked pretty much any time but still. It’s the little things."},
    {color:"#00ff00", text:"I fake an accent at my job<br><br>My heart is pounding writing this because I literally haven’t told anyone this. So I work at this one store, and I work on the sales floor; but before all that, I was just one person interviewing for a position at the store. Before I arrived for my interview, a friend of mine dared me to interview in a British accent. I said I’d do it only if they paid me, and to my surprise, they sent me like $10 through venmo (which was more than enough for me). I went into the interview with the mindset that I wasn’t gonna get hired and they inevitably hired me on the spot. Accent and all. I was nervous because I had already talked to a whole bunch of higher ups with the accent and decided to just go through with it -thinking it was only going to be a summer job. I was so wrong. It’s been like 7 months that I’ve been working there and I still use the accent to this day. When people ask me where I’m from I just tell them my hometown because I have several brits from that town whom I grew up with. The accent hasn’t really posed a problem until now cause my bf is friends with one of my coworkers so I’m gonna have to find the right time to come clean.. thanks for coming to my TedTalk "},
    {color:"#0000ff", text:"I ghosted my longterm BF<br><br>Got into an argument which lead him to say “I could care less about you. If you died tomorrow, I wouldn’t go to your funeral”. I didn’t say anything back, just never spoke to him again. He’s tried to contact me several times since, but I want those to be the last words he’s ever said to me. Bitchass bitch"},
    {color:"#2596be", text:"I am extremely happy my cousin died<br><br>I know this sounds terrible, but I have my reasons:<br><br>When I was 10, my cousin started showing me porn and touching me innapropriately, since I was a little dumb fuck I had no idea what he was doing and why he was doing it but I was uncomfortable, after a few months, when me, my friend and him were having a sleepover and my grandma's house, he made us play a game of truth or dare where he would touch us and make us touch him, and, when it was over and we went to sleep, he raped me in my sleep, I woke up midway through it but was too scared to do anything because he was bigger, taller and older than me, my mom just called me and told me he died in a motorcycle accident and I am ecstatic."},
    {color:"#2596be", text:"I have a dumb super power<br><br>If a girl dates me for awhile, she will magically meet the man of her dreams….right after me.<br><br>This has happened 3 times where they tell me “I’m just not in love with you” followed by a month or two later announcing they had gotten married. Each spending years with me prior.<br><br>I’m like a college preparing you for your dream job while also overpaying you for your internship. So glad I get to be the one to help so many women realize their potential. Just so happy."},
    {color:"#2596be", text:"I’m so tired of living paycheck to paycheck<br><br>For context I’m a 21 F living on my own in CA where everything is crazy expensive. I had to give up a lot of things including college when my father abruptly sold our home, moved away and sent me off on own over a year ago. I have worked since 15 and always considered myself very independent. I currently work one full time job and one part time, I work 6 days a week usually 7 shifts. I never have time for anything, nor money to even go out to dinner. My rent and car payment take up most of my checks so gas and other essentials suck up the last of them. I have had $0 in savings since the move and honestly feel like I’m drowning. Most of my friends still live at home or with a partner splitting the bills, so no one really gets how hard this is on me. My friends always invite me out but I seriously can’t even afford to go out even though I’m 21. You would think working six days a week I would have something to show for it or money to put in my savings or go on little trips but I am barely paying my bills. I’ve maxed out my credit card and really don’t know what to do. My main job pays decently well and has full benefits so I really don’t want to let it go and it’s also in the field I love. But at the same time half of me wants to move out of CA and somewhere I can actually afford to live. I am a lover of nature and I can never even spend time outdoors, I constantly feel exhausted and I don’t have a support system to fall back on in case things go wrong. I had so many goals when I was younger and now my biggest stress is simply keeping a roof over my head. I am tired of this. Working to live or living to work? Edit: I didn’t chose to be in California, I grew up here and once I was on my own I was already located here! I also do have a roommate but between us two the rent is still very expensive as the cost of living is just so extreme here right now. I moved when inflation was at a peak. Thank you to everyone for the helpful advice I appreciate you guys <3 will update eventually"},
    {color:"#2596be", text:"I cant afford to eat<br><br>Today is the third day of me having nothing to eat.. I’ve survived off water & one can of pears since i think Saturday night.. i found stale crackers & il try to eat that. The food pantry is closed til Wednesday. I dont know what to do. This happens more frequently now,im out of work waiting for approval to go back This happens alot since we got our EBT refused, they keep thinking we make more money than we do, and we have shown them multiple times that we are below the standard dollar amount.but the same women refuses us every time. Ive tried to talk to a supervisor & she wont return my calls or meet me in office. They keep denying us,and theres no one to follow up to make complaints to, I don’t understand this country anymore. Is this normal all over? Does any one else have to go thru this? Surviving on cans of beans or fruits, because you cant afford food where you live? How do you do it?"},
    {color:"#2596be", text:"My girlfriend just did something that made me melt<br><br>I've been with my girlfriend for 1 year. Very pretty face aside, one of the reasons I love her is that she's always been incredibly sweet and genuine. Maybe this will sound dumb, but... here's what happened earlier:<br><br>her left nipple was sore because she accidentally got a cut on it a few hours ago. She took painkillers before going to bed (she's sleeping right now), she was complaining about the soreness.<br><br>We were in bed (it's 1:22 am in France right now), at some point she said ''can you please....can you please... kiss my tit? It hurts'' and gave me the puss in boots stare.<br><br>I couldn't help but laugh, I wasn't expecting that. She was disappointed because she felt dumb for asking that question, but then I explained that I just didn't see that coming and that's why I was laughing, I was surprised. In the end I said yes<br><br>I started kissing her tit and she liked it, but she started giggling because she's ticklish literally everywhere and she starts laughing uncontrollably as soon as you touch her.<br><br>She's so unintentionally sweet she makes me melt."},
];

document.addEventListener("DOMContentLoaded", function() {
    shuffle(confessions);

    main();
});

function main() {
    loadConfession(openingConfession);
}

function loadConfession(confession) {
    document.querySelector(".confession").innerHTML = confession.text;

    switch (confession) {
        case openingConfession:
            document.querySelector(".back").style.display = "none";
            document.querySelector(".confess").style.display = "none";
            document.querySelector(".contact").style.display = "none";
            document.querySelector(".start").style.display = "inline-block";
            document.querySelector(".next").style.display = "none";
            document.querySelector(".end").style.display = "none";
            break;
        case contactConfession:
            document.querySelector(".back").style.display = "inline-block";
            document.querySelector(".confess").style.display = "none";
            document.querySelector(".contact").style.display = "none";
            document.querySelector(".start").style.display = "none";
            document.querySelector(".next").style.display = "none";
            document.querySelector(".end").style.display = "none";
            break;
        case confessions[confessions.length - 1]:
            document.querySelector(".back").style.display = "inline-block";
            document.querySelector(".confess").style.display = "inline-block";
            document.querySelector(".confess").style.display = "none";
            document.querySelector(".contact").style.display = "inline-block";
            document.querySelector(".start").style.display = "none";
            document.querySelector(".next").style.display = "none";
            document.querySelector(".end").style.display = "inline-block";
            break;
        default:
            document.querySelector(".back").style.display = "inline-block";
            document.querySelector(".confess").style.display = "inline-block";
            document.querySelector(".confess").style.display = "none";
            document.querySelector(".contact").style.display = "inline-block";
            document.querySelector(".start").style.display = "none";
            document.querySelector(".next").style.display = "inline-block";
            document.querySelector(".end").style.display = "none";
    }

    for (let blob of document.getElementsByClassName("blob")) {
        let newColor = confession.color + "20";

        //blob.style.background = newColor;

        blob.animate({backgroundColor: newColor}, {duration: 1000, fill: 'forwards'});
    }
}

document.addEventListener('click', function(e) {
    let target = e.target || e.srcElement;

    let classes = target.className.split(" ");

    if (!classes.includes("button")) {
        return;
    }

    if (classes.includes("start")) {
        loadConfession(confessions[confIndex]);
    }

    if (classes.includes("next")) {
        if (confIndex < confessions.length - 1) {
            confIndex++;

            loadConfession(confessions[confIndex]);
        }
    }

    if (classes.includes("back")) {
        if (confIndex > 0) {
            confIndex -= 1;

            loadConfession(confessions[Math.min(confIndex, confessions.length - 1)]);
        } else {
            loadConfession(openingConfession);
        }
    }

    if (classes.includes("contact")) {
        confIndex++;
        loadConfession(contactConfession);
    }

    if (classes.includes("confess")) {
        confIndex++;
        loadConfession(contactConfession);
        document.querySelector(".back").style.display = "inline-block";
        document.querySelector(".next").style.display = "none";
        document.querySelector(".end").style.display = "none";
    }

}, false);

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}