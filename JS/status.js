const status = {
    'botVersion': "1.5.0",
    'botDate': "17.01.2024",

    'qlakePCVersion': "2.1.0",
    'qlakePCDate': "27.02.2025",
    'qlakeAndVersion': "2.0.1",
    'qlakeAndDate': "03.11.2023",
    
    'xcVersion': "0.9.0",
    'xcDate': "05.05.2024",

    'xenoosVersion': "0.2.3",
    'xenoosDate': "29.06.2025",

    'musicVersion': "0.3.0",
    'musicDate': "25.03.2025",

    'psVersion': "1.0.1",
    'psDate': "09.01.2025",

    'sd2Version': "---",
    'sd2Date': "---",

    'ftVersion': "1.0.0",
    'ftDate': "05.09.2025",

    'attsiVersion': "---",
    'attsiDate': "---",

    'sdPCVersion': "1.2.0",
    'sdPCDate': "30.03.2025",
    'sdAndVersion': "1.1.0.120 (Test)",
    'sdAndDate': "30.03.2025",

    'siteVersion': "2.0.0 preview 4",
    'siteDate': "07.10.2025",
};

function setStatus() {
    const elementsToStatus = document.querySelectorAll('[status-info]');
    elementsToStatus.forEach(element => {
        const statusKey = element.getAttribute('status-info');
        if (status[statusKey] && status[statusKey]) {
            element.textContent = status[statusKey];
        }
    });
}

setStatus();
