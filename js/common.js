document.addEventListener("DOMContentLoaded", function () {
    // Code für die index.html (Startseite)
    const form = document.getElementById('inputForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Eingabedaten sammeln
            const topic = document.getElementById('topic').value;
            const understanding = document.getElementById('understanding').value;
            const skills = document.getElementById('skills').value;
            const reflection = document.getElementById('reflection').value;

            // Daten im lokalen Speicher speichern
            localStorage.setItem('topic', topic);
            localStorage.setItem('understanding', understanding);
            localStorage.setItem('skills', skills);
            localStorage.setItem('reflection', reflection);

            // Weiter zur Ergebnis-Seite
            window.location.href = 'result.html';
        });
    }

    // Code für die result.html (Ergebnis-Seite)
    const outputTopic = document.getElementById('outputTopic');
    const outputUnderstanding = document.getElementById('outputUnderstanding');
    const outputSkills = document.getElementById('outputSkills');
    const outputReflection = document.getElementById('outputReflection');
    const copyButton = document.getElementById('copyButton');

    if (outputTopic && outputUnderstanding && outputSkills && outputReflection) {
        // Daten aus dem lokalen Speicher holen
        const topic = localStorage.getItem('topic');
        const understanding = localStorage.getItem('understanding');
        const skills = localStorage.getItem('skills');
        const reflection = localStorage.getItem('reflection');

        // Daten in die HTML-Elemente einsetzen
        outputTopic.textContent = topic;
        outputUnderstanding.textContent = understanding;
        outputSkills.textContent = skills;
        outputReflection.textContent = reflection;
    }

    // Kopierfunktion
    if (copyButton) {
        copyButton.addEventListener('click', function () {
            const resultText = document.getElementById('resultText').innerText;
            navigator.clipboard.writeText(resultText).then(() => {
                alert('Text wurde kopiert!');
            }).catch(err => {
                console.error('Kopieren fehlgeschlagen: ', err);
            });
        });
    }
});
