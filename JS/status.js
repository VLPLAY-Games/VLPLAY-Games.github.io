const status = {
    'botVersion': "1.31.0",
    'qlakeVersion': "1.2.0",
    'xcVersion': "0.4.2",
    'sdVersion': "- - -",
    'siteVersion': "0.8.1",

    'botDate': "18.05.2023",
    'qlakeDate': "02.05.2023",
    'xcDate': "28.08.2023",
    'sdDate': "- - -",
    'siteDate': "27.09.2023",
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