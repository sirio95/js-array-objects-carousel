function createDivClass(domain, classeDiv, classeImg, image_src, classeDot){
    //contenitore immagine
    let newEl= document.createElement('div');
    newEl.classList.add(classeDiv);
    
    //immagine
    let img= document.createElement('img');
    img.src= image_src;
    img.classList.add(classeImg);

    //dots
    let dots= document.createElement('span');
    dots.classList.add('dot', classeDot);

    //prev & next
    let prev= document.createElement('button');
    prev.classList.add('icon', 'prev');
    prev.setAttribute('id', 'prev_button');
    prev.innerHTML= `<i class="fa-solid fa-up-long"></i>`

    let next= document.createElement('button');
    next.classList.add('icon', 'next');
    next.setAttribute('id', 'next_button');
    next.innerHTML= `<i class="fa-solid fa-down-long"></i>`

    newEl.append(img);
    domain.append(newEl, dots, prev, next);
}

