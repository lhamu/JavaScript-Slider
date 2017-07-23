function Slider(elementId) {
  var element = document.getElementById(elementId);
  this.intervalId;
  this.marginLeft = 0;
  this.current=0;
  var that=this;
  
  this.addEvents = function () {
    element.addEventListener('mouseover', that.stop);
    element.addEventListener('mouseleave', that.slide);
    document.getElementById("previous").addEventListener('click', that.gotoPrevious);
    document.getElementById("next").addEventListener('click', that.gotoNext);
    document.getElementById("button1").addEventListener('click', function(){that.change(0)});
    document.getElementById("button2").addEventListener('click', function(){that.change(1)});
    document.getElementById("button3").addEventListener('click', function(){that.change(2)});
    document.getElementById("button4").addEventListener('click', function(){that.change(3)});
    document.getElementById("button5").addEventListener('click', function(){that.change(4)});
    
  }

  this.slide = function () {
    that.intervalId = setInterval(function () {
      element.style.marginLeft = that.marginLeft;
      that.marginLeft -= 10;
      if(that.marginLeft==-3200){
        that.marginLeft=0;
      }
      that.setInactive();
          if (that.marginLeft == -10){
            that.pause();
            document.getElementById("button1").classList.add("active");
          }
          else if (that.marginLeft == (-640)){
            that.pause();
            document.getElementById("button2").classList.add("active");
          }
          else if (that.marginLeft == (-1280)){
            that.pause();
            document.getElementById("button3").classList.add("active");
          }
          else if (that.marginLeft == (-1920)){
            that.pause();
            document.getElementById("button4").classList.add("active");
          }
          else if (that.marginLeft == (-2560)){
            that.pause();
            document.getElementById("button5").classList.add("active");
          }
          if (0>that.marginLeft && that.marginLeft>(-640)){
            that.current=0;
            document.getElementById("button1").classList.add("active");
          }
          else if ((-1280)<that.marginLeft && that.marginLeft<(-640)){
            that.current=1;
            document.getElementById("button2").classList.add("active");
          }
          else if ((-1920)<that.marginLeft && that.marginLeft<(-1280)){
            that.current=2;
            document.getElementById("button3").classList.add("active");
          }
          else if ((-2560)<that.marginLeft && that.marginLeft<(-1920)){
            that.current=3;
            document.getElementById("button4").classList.add("active");
          }
          else if ((-3200)<that.marginLeft && that.marginLeft<(-2560)){
            that.current=4;
            document.getElementById("button5").classList.add("active");
          }
    }, 2000/ 60);
    console.log("slide",that.intervalId);
  }

/*   this.move=function(){
    intervalId=setInterval(function(){
      element.style.marginLeft=that.marginLeft;
      sum=that.current*640;
      that.marginLeft-=sum;
    }, 1000/60);
  } */
  //Function for the Previous button
  this.gotoPrevious = function () {
    if (that.current==0){
      element.style.marginLeft=that.marginLeft;
      that.marginLeft=-2560;
    }
    else {
      element.style.marginLeft=that.marginLeft;
      that.marginLeft=((-640)*(that.current-1));
    }
  }
  //Function for the Next button
  this.gotoNext= function () {
    console.log('Next')
    if (that.current==4){
      element.style.marginLeft=that.marginLeft+ 'px';
      that.marginLeft=0;
    }
    else {
      element.style.marginLeft=that.marginLeft+ 'px';
      that.marginLeft=((-640)*(that.current+1));
    }
  }
  
 //Function to pause the image for 2 seconds 
 this.pause=function(){
    //console.log("enter");
    clearInterval(that.intervalId);
    console.log("pause",that.intervalId);
    that.intervalId=setTimeout(function(){
      that.slide();
     },2000);
   }
  
/*   var indicator1=document.getElementbyId("button1");
  indicator1.addEventListener('click',that.change(0)); */
  
  this.change=function(i){
    that.marginLeft=0;
    var sum=(-640*i);
    indicator="button"+i;
    document.getElementById(indicator).classList.add("active");
    that.marginLeft=sum;
    element.style.marginLeft=that.marginLeft+'px';
    that.setInactive();
    var indicator;
    
    
  }
  
  this.stop = function () {
    //console.log(that);
    clearInterval(that.intervalId);
    console.log(that.intervalId, "stop");
  }

  this.setInactive=function(){
    var btn;
    for(i=1;i<6;i++){
      btn="button"+i;
      document.getElementById(btn).classList.remove('active');
    } 
  }
  this.init = function () {
    this.slide();
    this.addEvents();
  }
}
var slider = new Slider('slider');
slider.init();

