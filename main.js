let call = document.getElementsByClassName('btn');
for(let i = 0; i < call.length; i++) {
    call[i].addEventListener('click',function () {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
}