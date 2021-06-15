window.onload = ()=>{
    let option = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    }
    
    let io = new IntersectionObserver((entries, observer) => {
        
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.src = entry.target.dataset.src
                observer.unobserve(entry.target)
            }
        })
    },option)
    let lazyImgs = document.querySelectorAll(".lazy-img");
    lazyImgs.forEach(el=>{
        io.observe(el);
    })
    
}