const status = {
    'botVersion': "1.5.0",
    'qlakeVersion': "2.0.1",
    'xcVersion': "0.6.0",
    'sdVersion': "Demo",
    'siteVersion': "1.0.3",

    'botDate': "17.01.2024",
    'qlakeDate': "03.11.2023",
    'xcDate': "26.12.2023",
    'sdDate': "30.11.2023",
    'siteDate': "17.01.2024",
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