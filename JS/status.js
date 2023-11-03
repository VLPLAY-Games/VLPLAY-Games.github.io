const status = {
    'botVersion': "1.4.2",
    'qlakeVersion': "2.0.1",
    'xcVersion': "0.4.2",
    'sdVersion': "- - -",
    'siteVersion': "0.9.0",

    'botDate': "13.10.2023",
    'qlakeDate': "03.11.2023",
    'xcDate': "28.08.2023",
    'sdDate': "- - -",
    'siteDate': "03.11.2023",
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