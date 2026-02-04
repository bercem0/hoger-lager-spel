# Hoger-Lager Dobbelspel (Dice Game)

Dit is een interactief webgebaseerd spel genaamd **Hoger-Lager**, waarbij gebruik wordt gemaakt van dobbelstenen. Ik heb dit project ontwikkeld om mijn vaardigheden in JavaScript (DOM-manipulatie), HTML5 en CSS3 te tonen en verder te verbeteren.

## 🎲 Hoe werkt het spel?
In dit spel draait alles om het voorspellen van de uitkomst van de dobbelstenen:
1. De speler start het spel en ziet de som van twee dobbelstenen.
2. De speler moet raden of de som van de **volgende (onzichtbare) worp** hoger of lager zal zijn dan de huidige som.
3. Bij een juiste gok stijgt de score met 1 punt, bij een foute gok gaat er 1 punt af.
4. **Winstconditie:** Het spel is gewonnen bij het bereiken van +10 punten.
5. **Verliesconditie:** Het spel eindigt als de score naar -10 punten zakt.

## 🚀 Technische Functies
* **Dynamische UI:** Elementen zoals knoppen en scores worden pas getoond via JavaScript (`style.display`) zodra het spel start.
* **Dobbelsteen Logica:** Gebruik van `Math.random()` voor eerlijke worpen en een `switch-case` structuur om de juiste Unicode dobbelsteen-iconen (`⚀` t/m `⚅`) weer te geven.
* **Feedback Systeem:** Directe visuele feedback (groen/rood) na elke ronde om de gebruikerservaring te verbeteren.
* **Statistieken:** Het bijhouden van het aantal kliks en de totale winst/verlies historie in een overzichtelijke tabel.

## 🛠️ Gebruikte Technologieën
* **HTML5:** Voor de semantische opbouw van de pagina.
* **CSS3:** Voor de vormgeving (Flexbox), animaties en het interactieve 'Rules' paneel.
* **JavaScript (ES6):** Voor de volledige spellogica, event listeners en DOM-manipulatie.

## 📂 Projectstructuur
* `index.html`: De hoofdstructuur van de applicatie.
* `css/style.css`: Alle styling en visuele effecten.
* `js/main.js`: De kernlogica van het dobbelspel.

---
*Ontwikkeld door [Jouw Naam] als onderdeel van mijn professionele ontwikkeling en stageportfolio.*
