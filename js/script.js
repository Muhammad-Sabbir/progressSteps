const next = document.getElementById("next");
const prev = document.getElementById("prev");
const boxes = document.querySelectorAll(".box");
const inLine = document.getElementById("in-line");
let clickCount = 1;

//next button
next.addEventListener("click", () => {
  clickCount++;

  if (clickCount > boxes.length) {
    clickCount = boxes.length;
  }
console.log(clickCount);
  update();
});

//prev button
prev.addEventListener("click", () => {
  clickCount--;
  if (clickCount < 1) {
    clickCount = 1;
  }
  update();
  
});

const update = () => {
    boxes.forEach((box, idx) => {
        if(idx < clickCount) {
            box.classList.add('active')
        } else {
            box.classList.remove('active')
        }
        
    })
    progressStatus();
 buttonStatus();  
};

const buttonStatus= () =>{
    if (clickCount === 1) {
        prev.disabled = true;
      } else if (clickCount === boxes.length) {
        next.disabled = true;
      } else {
        prev.disabled = false;
        next.disabled = false;
      }
}

boxes.forEach((box, idx) => {
   
    box.addEventListener("click", () => {
        box.classList.toggle('active')
        clickCount = (idx);
        console.log(clickCount);
        buttonStatus();  
        progressStatus();
    })
})

const progressStatus = () => {
  const actives = document.querySelectorAll('.active');
    inLine.style.width = (actives.length - 1) / (boxes.length - 1) * 100 + '%'
}

