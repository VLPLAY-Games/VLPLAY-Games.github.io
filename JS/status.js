const status = {
    'botVersion': "1.4.2",
    'qlakeVersion': "2.0.1",
    'xcVersion': "0.5 Beta",
    'sdVersion': "0.1 Demo",
    'siteVersion': "1.0.1",

    'botDate': "13.10.2023",
    'qlakeDate': "03.11.2023",
    'xcDate': "15.12.2023",
    'sdDate': "30.11.2023",
    'siteDate': "08.12.2023",
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