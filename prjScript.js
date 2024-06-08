function loadall(links){
    const bucket = [];
    bucket[0] = [];
    bucket[1] = [];
    links.forEach(e => {
        bucket[0].push(`${e.id}`);
        bucket[1].push(`${e.href}`);
    });
    return bucket;
}

window.onload =  () => {
    const link = document.querySelectorAll('.C-link');
    const results = loadall(link);
    for(let i in results[0]){
        let current_link = document.getElementById(results[0][i]);
        if(window.screen.width < 600){
            current_link.innerHTML = 'link';
        }else{
            current_link.innerHTML = results[1][i];
        }
    }
}