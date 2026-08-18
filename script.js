function establishPage(topic) {
    if (confirm("Do you want to start this topic?") == true) {
        localStorage.setItem('topicNo',topic)
        window.location.href='course.html'
        let guideNo
        guideNo = 0
    }
}

function goToHome(page) {
    if (confirm("Do you want to leave topic?\nProgress will not be saved.") == true) {
        window.location.href=page
    }
}