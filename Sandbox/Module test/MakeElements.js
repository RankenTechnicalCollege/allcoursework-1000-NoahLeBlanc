//Creates the section, accepts a name
  export function section(sectionName){
    const s = document.createElement("section")
    s.id = sectionName
    s.classList.add()
    return s
  }
//Creates the Header, accepts a name
  export function makeDiv(divName, bodyORtext){
    const d = document.createElement("div")
    d.id = divName
    if(bodyORtext == "body"){
      d.classList.add("card-body")
    }
    else if(bodyORtext == "text"){
      d.classList.add("card-text")
    }
    return d
  }
//Creates the list Container Elements, accepts a list type and a name for the list
export function makeListElement(listType, name){
  if(listType == ("ul" || "unorganized list")){
    const ul = document.createElement("ul")
    ul.id = name
    return ul
  }
  if(listType == ("ol" || "organized list")){
    const ol = document.createElement("ol")
    ol.id = name
    return ol
  }
}
//Creates the list items, accepts a list Item (use with prev lists)
export function listItem(listItem){
  const li = document.createElement("li")
  li.id = listItem
  li.textContent = listItem
  return li
}

export function makeTextElement(element, id, text){
  //handles Header
  if(element == ("h" || "header")){
    const h = document.createElement("h2")
    h.id = id
    h.textContent = text
    h.classList.add("card-title", "p-2")
    return h
  }
  //handles paragraph
  else if(element == ("p" || "paragraph")){
    const p = document.createElement("p")
    p.id = id
    p.textContent = text
    return p
  }
  /*
  element = what element you want to make: h=header, p=paragraph, 
  id = the name of the id for the element
  text = what you want the text content to be
  */
}
