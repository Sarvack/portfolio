// about section tabs
(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        if(event.target.classList.contains("tab-item") && 
            !event.target.classList.contains("active")){

                const target = event.target.getAttribute("data-target");
                
                tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");

                event.target.classList.add("active","outer-shadow");

                aboutSection.querySelector(".tab-content.active").classList.remove("active");

                aboutSection.querySelector(target).classList.add("active");
            }
    })
})();


// portfolio filter and pop up 

(() =>{
        const filterContainer = document.querySelector(".portfolio-filter"),
        portfolioItemsContainer = document.querySelector(".portfolio-items"),
        portfolioItems = document.querySelectorAll('.portfolio-item'),
        popup = document.querySelector(".portfolio-popup"),
        prevBtn = document.querySelector(".pp-prev"),
        nextBtn = document.querySelector(".pp-next"),
        close = popup.querySelectorAll(".pp-close"),
        projectDetailsContainer = popup.querySelector(".pp-details"),
        projectDetailsBtn = popup.querySelector(".pp-project-details-btn");

        let itemIndex, slideIndex, screenshots;

        // filter portfolio

        filterContainer.addEventListener("click", (event)=>{
            if (event.target.classList.contains("filter-item") && 
            !event.target.classList.contains("active")){
                filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
                // activate new 'filter item'
                event.target.classList.add("active","outer-shadow");
                const target = event.target.getAttribute("data-target");
                portfolioItems.forEach((item) =>{
                    if(target === item.getAttribute("date-category")){
                        
                    }
                })
            }
        })
})();