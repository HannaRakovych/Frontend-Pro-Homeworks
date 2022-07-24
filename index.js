let getData = document.querySelector('input');
getData.addEventListener('input', (e) => {
    console.log(e.target.value);
    obj.findNode(e.target.value);
});

let clearButton = document.querySelector('button[name="clear"]');
clearButton.addEventListener('click', () => {
    obj.clearColoredNodes();
});

let parentButton = document.querySelector('button[name="parent"]');
parentButton.disabled = true;
parentButton.addEventListener('click', () => {
    obj.coloredNode(obj.parentColoredElement, parentButton);
});

let firstChildButton = document.querySelector('button[name="firstChild"]');
firstChildButton.disabled = true;
firstChildButton.addEventListener('click', () => {
    obj.coloredNode(obj.firstChildColoredElement, firstChildButton);
});

let lastChildButton = document.querySelector('button[name="lastChild"]');
lastChildButton.disabled = true;
lastChildButton.addEventListener('click', () => {
    obj.coloredNode(obj.lastChildColoredElement, lastChildButton);
});

let nextChildButton = document.querySelector('button[name="next"]');
nextChildButton.disabled = true;
nextChildButton.addEventListener('click', () => {
    obj.coloredNode(obj.nextChildColoredElement, nextChildButton);
});

let previousChildButton = document.querySelector('button[name="previous"]');
previousChildButton.disabled = true;
previousChildButton.addEventListener('click', () => {
    obj.coloredNode(obj.previousChildColoredElement, previousChildButton);
});

var obj =  {

   thisColoredElement: null,
   parentColoredElement: null,
   firstChildColoredElement: null,
   lastChildColoredElement: null,
   nextChildColoredElement: null,
   previousChildColoredElement: null,


   coloredElements: [],

   findNode: function(value) {
      var arrElements = document.querySelectorAll(value); 
      if (arrElements.length) {
      	this.thisColoredElement = arrElements[0];
        this.thisColoredElement.classList.add('colored'); 

        this.lastColoredElement = this.thisColoredElement;

        if (arrElements[0].parentNode) { 
           this.parentColoredElement = arrElements[0].parentNode;

           parentButton.disabled = false;
        }
  
        if (arrElements[0].firstElementChild) {
           this.firstChildColoredElement = arrElements[0].firstElementChild; 

           firstChildButton.disabled = false;
        }	
        if (arrElements[0].lastElementChild) {
           this.lastChildColoredElement = arrElements[0].lastElementChild; 

           lastChildButton.disabled = false;
        } 

        this.nextPreviousColoredNode(); 
              
      	this.coloredElements.push(arrElements[0]); 
      }	
   },

   clearColoredElemets: function() {
   	  for (var i = 0; i < this.coloredElements.length; ++i) { 
         this.coloredElements[i].classList.remove('colored');
      }
   },

   clearColoredNodes: function() {
   	  for (var i = 0; i < this.coloredElements.length; ++i) { 
         this.coloredElements[i].classList.remove('colored');
      }

      getData.value = '';
      this.thisColoredElement = null;
      this.parentColoredElement = null; 
      this.firstChildColoredElement = null;
      this.lastChildColoredElement = null; 
      this.nextChildColoredElement = null;
      this.previousChildColoredElement = null;  
      this.coloredElements = [];   

      parentButton.disabled = true;
      firstChildButton.disabled = true;
      lastChildButton.disabled = true;
      nextChildButton.disabled = true;
      previousChildButton.disabled = true;
   },  

   coloredNode: function(elem, button) {
   	  if (elem) {
          this.clearColoredElemets();

	      elem.classList.add('colored'); 
	      this.coloredElements.push(elem); 

	      button.disabled = true;
      }
   },     

   nextPreviousColoredNode: function() {
   	  if (this.parentColoredElement) { 
	      for (var i = 0; i < this.parentColoredElement.children.length; ++i) {
             if (this.parentColoredElement.children[i] == this.thisColoredElement 
             	&& this.parentColoredElement.lastElementChild != this.thisColoredElement
             	&& this.parentColoredElement.children[i + 1].nodeName != 'SCRIPT') {
                this.nextChildColoredElement = this.parentColoredElement.children[i + 1];

                nextChildButton.disabled = false;
             } 
             if (this.parentColoredElement.children[i] == this.thisColoredElement 
             	&& this.parentColoredElement.firstElementChild != this.thisColoredElement) {
                this.previousChildColoredElement = this.parentColoredElement.children[i - 1];

                previousChildButton.disabled = false;
             }
	      }
      }
   },     
};
