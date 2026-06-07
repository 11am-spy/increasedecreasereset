    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const countLabel = document.getElementById("countLabel");
    const darkModeBtn = document.getElementById("darkModeBtn");
    let count = 0;

    increaseBtn.onclick = function(){
        count++;
        countLabel.textContent = count; 
    }

    decreaseBtn.onclick = function(){
        count--;
        countLabel.textContent = count; 
    }
    resetBtn.onclick = function(){
        count = 0;
        countLabel.textContent = count; 
    }
    darkModeBtn.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            darkModeBtn.textContent = "☀️ Light Mode";
        } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
    }
