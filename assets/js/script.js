window.onload = () =>{
    var collapse = document.getElementById("collapse");
    var menu = document.getElementById("menu");
    var lists = document.querySelectorAll(".header-left ul li")

    if(collapse){
        collapse.addEventListener("click", ()=>{
            menu.style.display = "block"
        })

        if(menu){
            menu.addEventListener("mouseleave", ()=>{
                menu.style.display = "none"
            })

            for (let index = 0; index < lists.length; index++) {
                const list = lists[index];
                
                list.addEventListener("click", ()=>{
                    menu.style.display = "none"
                })
            }

        }

    }
}