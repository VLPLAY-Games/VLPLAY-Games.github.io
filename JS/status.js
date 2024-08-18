const status = {
    'botVersion': "1.5.0",
    'botDate': "17.01.2024",

    'qlakePCVersion': "2.0.1",
    'qlakePCDate': "03.11.2023",
    'qlakeAndVersion': "2.0.1",
    'qlakeAndDate': "03.11.2023",
    'qlakeVRVersion': "?",
    'qlakeVRDate': "?",
    
    'xcVersion': "0.9.0",
    'xcDate': "05.05.2024",

    'sdPCVersion': "1.1.0",
    'sdPCDate': "12.08.2024",
    'sdAndVersion': "Demo 2",
    'sdAndDate': "22.04.2024",

    'siteVersion': "1.1.0",
    'siteDate': "25.06.2024",
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
