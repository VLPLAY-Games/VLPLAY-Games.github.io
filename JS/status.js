const status = {
    'botVersion': "1.5.0",
    'botDate': "17.01.2024",

    'qlakePCVersion': "2.1.0",
    'qlakePCDate': "27.02.2025",
    'qlakeAndVersion': "2.0.1",
    'qlakeAndDate': "03.11.2023",
    
    'xcVersion': "0.9.0",
    'xcDate': "05.05.2024",

    'sdPCVersion': "1.1.0",
    'sdPCDate': "12.08.2024",
    'sdAndVersion': "1.0.0.110 (Test)",
    'sdAndDate': "14.10.2024",

    'siteVersion': "1.1.0",
    'siteDate': "20.03.2025",
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
