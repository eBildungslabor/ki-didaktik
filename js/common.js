function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        // Moderne Browser mit Clipboard API
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text kopiert');
        }).catch(err => {
            console.error('Fehler beim Kopieren:', err);
        });
    } else {
        // Fallback für ältere Browser
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            console.log('Text kopiert (Fallback)');
        } catch (err) {
            console.error('Fehler beim Kopieren:', err);
        }
        document.body.removeChild(textArea);
    }
}

// Event Listener für alle Copy-Buttons
document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copyButton');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const textToCopy = targetElement.textContent.trim();
                copyToClipboard(textToCopy);
                
                // Visuelles Feedback
                const originalText = this.textContent;
                this.textContent = 'Kopiert!';
                this.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = '';
                }, 2000);
            }
        });
    });
});
