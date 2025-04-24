document.addEventListener("mousemove", (e) => {
    const centerText = document.querySelector(".center-text");
    const nav = document.querySelector("nav");
  
    const { clientX: x, clientY: y } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    const offsetX = (x - centerX) * 0.01; // 속도 절반
    const offsetY = (y - centerY) * 0.01;
  
    centerText.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    nav.style.transform = `translateX(-50%) translate(${offsetX}px, ${offsetY}px)`;
  });
  