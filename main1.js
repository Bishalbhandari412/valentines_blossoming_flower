window.onload = () => {
  const c = setTimeout(() => {
    // 1. This triggers the blooming animation
    document.body.classList.remove("not-loaded");
    
    // 2. This waits 4 seconds for growth, then fades in the message
    setTimeout(() => {
        const message = document.getElementById("finalMessage");
        if (message) {
            message.style.opacity = "1";
        }
    }, 4500); 

    clearTimeout(c);
  }, 1000);
};
