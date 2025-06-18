      // 1) Change button text on click
      let btn = document.getElementById("changeBtn");
      btn.addEventListener("click", function () {
        btn.textContent = " Clicked...";
      });

      // 2) Paragraph background color on mouseover/mouseout
      let para = document.getElementById("hoverPara");
      para.addEventListener("mouseover", () => {
        para.style.backgroundColor = "lightyellow";
      });
      para.addEventListener("mouseout", () => {
        para.style.backgroundColor = "white";
      });

      // 3) Show/hide image on mouse enter/leave
      let hoverDiv = document.getElementById("hoverDiv");
      let img = document.getElementById("hoverImg");
      hoverDiv.addEventListener("mouseenter", () => {
        img.style.display = "block";
      });
      hoverDiv.addEventListener("mouseleave", () => {
        img.style.display = "none";
      });

      // 4) Box color change on mousedown/mouseup
      let box = document.getElementById("colorBox");
      box.addEventListener("mousedown", () => {
        box.style.backgroundColor = "aqua";
      });
      box.addEventListener("mouseup", () => {
        box.style.backgroundColor = "aquamarine";
      });