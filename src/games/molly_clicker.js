let bedrockGained = 0;
let bedrockGainedTotal = 0;

let bedrockPerClick = 1;
let extraBPC = 0;
let bedrockMultiplier = 1;
let cooldownSpeed = 3000;

let unlockedAbigail = false;
let unlockedCookie = false;
let unlockedElizabeth = false;
let unlockedPhoebe = false;

let heavyCharges = 0;
let generousCharges = 0;
let luckCharges = 0;
let efficientCharges = 0;

const heavyChargesText = document.getElementById("heavyCharges");
const generousChargesText = document.getElementById("generousCharges");
const luckChargesText = document.getElementById("luckCharges");
const efficientChargesText = document.getElementById("efficientCharges");

const bedrock = document.getElementById("bedrock");
const bedrockTotal = document.getElementById("bedrockTotal");
const progress = document.getElementById("progress");

const gatherBedrock = document.getElementById("gatherBedrock");

const ownedAbigail = document.getElementById("ownedAbigail");
const ownedCookie = document.getElementById("ownedCookie");
const ownedElizabeth = document.getElementById("ownedElizabeth");
const ownedPhoebe = document.getElementById("ownedPhoebe");

let isCooldown = false;

// gathering bedrocks
function clickMolly() {
    if ((luckCharges > 0) && (unlockedElizabeth)) {
        luckCharges -= 1;
        bedrockMultiplier = 4;
    } else if (unlockedElizabeth) {
        bedrockMultiplier = 2;
    } else {
        bedrockMultiplier = 1;
    }

    if ((efficientCharges > 0) && (unlockedPhoebe)) {
        efficientCharges -= 1;
        cooldownSpeed = 0;
    } else if (unlockedPhoebe) {
        cooldownSpeed = 1000;
    } else {
        cooldownSpeed = 3000;
    }

    if ((generousCharges > 0) && (unlockedCookie)) {
        extraBPC = 200;
    } else if (unlockedCookie) {
        extraBPC = 50;
    } else {
        extraBPC = 0;
    }

    if ((heavyCharges > 0) && (unlockedAbigail)) {
        heavyCharges -= 1;
        bedrockPerClick = 25;
    } else if (unlockedAbigail) {
        bedrockPerClick = 5;
    } else {
        bedrockPerClick = 1;
    }

    bedrockGained += (bedrockPerClick * bedrockMultiplier);
    bedrockGainedTotal += (bedrockPerClick * bedrockMultiplier);
    updateBedrocks();

    if (isCooldown) return;
    extraBedrocks();
    if (generousCharges > 0) {
        generousCharges -= 1;
        updateBedrocks();
    }
    isCooldown = true;
    setTimeout(() => {
        isCooldown = false;
    }, cooldownSpeed);
}

// extra bedrock per click
function extraBedrocks() {
    if (unlockedCookie) {
        bedrockGained += (extraBPC * bedrockMultiplier);
        bedrockGainedTotal += (extraBPC * bedrockMultiplier);
        updateBedrocks();
    }
}

// buying characters
function buyCharacter(character) {
    if ((character === 'Abigail') && (unlockedAbigail !== true) && (bedrockGained >= 100)) {
        bedrockGained -= 100;
        unlockedAbigail = true;
        updateBedrocks();
    } else if ((character === 'Cookie') && (unlockedCookie !== true) && (bedrockGained >= 5000)) {
        bedrockGained -= 5000;
        unlockedCookie = true;
        updateBedrocks();
    } else if ((character === 'Elizabeth') && (unlockedElizabeth !== true) && (bedrockGained >= 22500)) {
        bedrockGained -= 22500;
        unlockedElizabeth = true;
        updateBedrocks();
    } else if ((character === 'Phoebe') && (unlockedPhoebe !== true) && (bedrockGained >= 55000)) {
        bedrockGained -= 55000;
        unlockedPhoebe = true;
        updateBedrocks();
    }
}

// buying boosts
function buyBoost(boost) {
    if ((boost === 'Heavier') && (bedrockGained >= 750) && (unlockedAbigail === true)) {
        bedrockGained -= 750;
        heavyCharges += 50;
        updateBedrocks();
    } else if ((boost === 'Generous') && (bedrockGained >= 1000) && (unlockedCookie === true)) {
        bedrockGained -= 1000;
        generousCharges += 20;
        updateBedrocks();
    } else if ((boost === 'Immense') && (bedrockGained >= 550) && (unlockedElizabeth === true)) {
        bedrockGained -= 550;
        luckCharges += 10;
        updateBedrocks();
    } else if ((boost === 'Efficient') && (bedrockGained >= 2000) && (unlockedPhoebe === true)) {
        bedrockGained -= 2000;
        efficientCharges += 30;
        updateBedrocks();
    }
}

// update counters
function updateBedrocks() {
    bedrock.textContent = bedrockGained;
    bedrockTotal.textContent = bedrockGainedTotal;

    heavyChargesText.textContent = heavyCharges;
    generousChargesText.textContent = generousCharges;
    luckChargesText.textContent = luckCharges;
    efficientChargesText.textContent = efficientCharges;

    progress.value = bedrockGainedTotal;
    if (bedrockGainedTotal >= 500000) {
        document.getElementById("goal").textContent = "Goal: Achieved!";
    }

    if (unlockedAbigail) {
        ownedAbigail.textContent = "Yes";
        ownedAbigail.style.color = "lime";
    } else {
        ownedAbigail.textContent = "No";
        ownedAbigail.style.color = "red";
    }

    if (unlockedCookie) {
        ownedCookie.textContent = "Yes";
        ownedCookie.style.color = "lime";
    } else {
        ownedCookie.textContent = "No";
        ownedCookie.style.color = "red";
    }

    if (unlockedElizabeth) {
        ownedElizabeth.textContent = "Yes";
        ownedElizabeth.style.color = "lime";
    } else {
        ownedElizabeth.textContent = "No";
        ownedElizabeth.style.color = "red";
    }

    if (unlockedPhoebe) {
        ownedPhoebe.textContent = "Yes";
        ownedPhoebe.style.color = "lime";
    } else {
        ownedPhoebe.textContent = "No";
        ownedPhoebe.style.color = "red";
    }
}

// auto save progress
function progressSaved() {
    localStorage.setItem("bedrockSaved", bedrockGained);
    localStorage.setItem("bedrockSavedTotal", bedrockGainedTotal);

    localStorage.setItem("abigailUpgrade", JSON.stringify(unlockedAbigail));
    localStorage.setItem("cookieUpgrade", JSON.stringify(unlockedCookie));
    localStorage.setItem("elizabethUpgrade", JSON.stringify(unlockedElizabeth));
    localStorage.setItem("phoebeUpgrade", JSON.stringify(unlockedPhoebe));

    localStorage.setItem("storedHeavy", heavyCharges);
    localStorage.setItem("storedGenerous", generousCharges);
    localStorage.setItem("storedLuck", luckCharges);
    localStorage.setItem("storedEfficient", efficientCharges);

    document.getElementById("autoSaving").textContent = "Saved progress!";
    setTimeout(resetText, 3000);

    function resetText() {
        document.getElementById("autoSaving").textContent = "AutoSaving in 60 seconds...";
    }
}

const autoSave = setInterval(progressSaved, 60000);

// clicking
gatherBedrock.addEventListener("click", clickMolly);

// dialog
dialogIndex = 0;
const dialogues = [
    { textContent: '"Please d-do not poke me!"' },
    { textContent: '"Agh!"' },
    { textContent: '"Hahaha, p-please stop!"' },
    { textContent: '"Ungh~ Not there please!"' },
    { textContent: '*Sigh*' },
    { textContent: '"Can you be more gentle?"' }
];
const dialog = document.getElementById("dialog");

gatherBedrock.addEventListener("click", () => {
    dialogIndex = (dialogIndex + 1) % dialogues.length;
    const dialogSwitch = dialogues[dialogIndex];
    dialog.textContent = dialogSwitch.textContent;
})

// load saved progress
window.addEventListener("DOMContentLoaded", () => {
    const savedMoney = localStorage.getItem("bedrockSaved");
    const savedMoneyTotal = localStorage.getItem("bedrockSavedTotal");
    if ((savedMoney !== null) || (savedMoneyTotal !== null)) {
        bedrockGained = parseInt(savedMoney);
        bedrockGainedTotal = parseInt(savedMoneyTotal);
    }

    const savedAbigail = JSON.parse(localStorage.getItem("abigailUpgrade"));
    const savedCookie = JSON.parse(localStorage.getItem("cookieUpgrade"));
    const savedElizabeth = JSON.parse(localStorage.getItem("elizabethUpgrade"));
    const savedPhoebe = JSON.parse(localStorage.getItem("phoebeUpgrade"));
    if ((savedAbigail) || (savedCookie) || (savedElizabeth) || (savedPhoebe)) {
        unlockedAbigail = savedAbigail;
        unlockedCookie = savedCookie;
        unlockedElizabeth = savedElizabeth;
        unlockedPhoebe = savedPhoebe;
    }
    
    const savedHeavy = localStorage.getItem("storedHeavy");
    const savedGenerous = localStorage.getItem("storedGenerous");
    const savedLuck = localStorage.getItem("storedLuck");
    const savedEfficient = localStorage.getItem("storedEfficient");
    if ((savedHeavy !== null) || (savedGenerous !== null) || (savedLuck !== null) || (savedEfficient !== null)) {
        heavyCharges = parseInt(savedHeavy);
        generousCharges = parseInt(savedGenerous);
        luckCharges = parseInt(savedLuck);
        efficientCharges = parseInt(savedEfficient);
    }
    updateBedrocks();
});

// reset
let resetIndex = 0;
const confirmResetMessage = [
    { buttonText: "Clear Progress" },
    { buttonText: "CONFIRM CLEAR?" },
    { buttonText: "Progress Cleared..."}
];
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    resetIndex = (resetIndex + 1) % confirmResetMessage.length;
    const confirmReset = confirmResetMessage[resetIndex];
    reset.textContent = confirmReset.buttonText;
    if (resetIndex === 2) {
        bedrockGained = 0;
        bedrockGainedTotal = 0;

        unlockedAbigail = false;
        unlockedCookie = false;
        unlockedElizabeth = false;
        unlockedPhoebe = false;

        heavyCharges = 0;
        generousCharges = 0;
        luckCharges = 0;
        efficientCharges = 0;
        
        localStorage.clear();
        progressSaved();
        updateBedrocks();
        document.getElementById("goal").textContent = "Goal: Not achieved...";
    }
});

// mobile only
function about(mode) {
    if (mode === 'show') {
        document.getElementById("about").style.display = "inherit";
        document.getElementById("showAboutButton").style.display = "none";
    } else if (mode === 'hide') {
        document.getElementById("about").style.display = "none";
        document.getElementById("showAboutButton").style.display = "inherit";
    }
}

// menu
shop = document.getelementbyid("shop");
counter = document.getelementbyid("counter");
settings = document.getelementbyid("settings");
changelog = document.getelementbyid("changelog");

function showSubMenu(submenu) {
    if (submenu === 'shop') {
        shop.style.display = "block";
        counter.style.display = "none";
        settings.style.display = "none";
        changelog.style.display = "none";
    } else if (submenu === 'counter') {
        shop.style.display = "none";
        counter.style.display = "block";
        settings.style.display = "none";
        changelog.style.display = "none";
    } else if (submenu === 'settings') {
        shop.style.display = "none";
        counter.style.display = "none";
        settings.style.display = "block";
        changelog.style.display = "none";
    } else if (submenu === 'changelog') {
        shop.style.display = "none";
        counter.style.display = "none";
        settings.style.display = "none";
        changelog.style.display = "block";
    }
}
