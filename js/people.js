(function(){
  var images = document.getElementsByClassName('execimage');

  var overlays = document.getElementsByClassName('nameoverlay');
  for(var i = 0; i < overlays.length; i++){
    overlays[i].setAttribute("style","width:"+images[0].width + "px");
    console.log(images[0].width);
    console.log(images[0].height);
    console.log(overlays[i].width);
  }
  images[0].onclick = function () {jasmine();};
  images[1].onclick = function() {sarah();};
  images[2].onclick = function(){emily();};
  images[3].onclick = function() {anika();};
  images[4].onclick = function() {aninda();};
  images[5].onclick = function() {alethea();};
  images[6].onclick = function() {cyan();};


  function jasmine(){
    document.getElementsByClassName('popupImage')[0].src = 'images/Jasmine-fb-pic.jpg';
    document.getElementsByClassName('popupImage')[0].srcset = "images/Jasmine-fb-pic-p-500.jpeg 500w, images/Jasmine-fb-pic.jpg 653w";
    document.getElementsByClassName('popupName')[0].innerText = 'Jasmine Lu';
    document.getElementsByClassName('popupPosition')[0].innerText = 'President';
    document.getElementsByClassName('popupText')[0].innerHTML = 'Hi everyone! I am currently a junior double majoring in ECE/CS and I\'m really passionate about doing projects related to the intersection between technology and other fields (health, humanities, art, etc). I am so excited to work with this team of lovely ladies to foster a stronger community among the women in tech at Duke. If you ever have any ideas or suggestions about things we can do as a group, feel free to reach out! I also love grabbing lunch to get to know people&nbsp;:)<br><br>CS Courses: Data Structures and Algorithms, Software Design for Biomedical Devices, Computer Architecture<br>Email: j.lu@duke.edu';
  }

  function sarah(){
    document.getElementsByClassName('popupImage')[0].src = 'images/Sarah-fb-pic.jpg';
    document.getElementsByClassName('popupImage')[0].srcset = "images/Sarah-fb-pic-p-500.jpeg 500w, images/Sarah-fb-pic.jpg 653w";
    document.getElementsByClassName('popupName')[0].innerText = 'Sarah Zhou';
    document.getElementsByClassName('popupPosition')[0].innerText = 'Vice President';
    document.getElementsByClassName('popupText')[0].innerHTML = 'What drew me in to Wiring With Women was the positive energy, and genuine support among the members. I am so so excited to be playing a more integral role in this community that has inspired me both professionally and on a personal level! Becoming more aware of the magnitude and manifestations of various biases in the field of technology has made me so grateful for the existence of this community here at Duke. I look forward to the next chapter of WWW and continuing the tradition of mentorship, as well as exciting new programs and events we have in store!<br><br>Email: sarah.zhou@duke.edu';
  }

  function emily() {
    document.getElementsByClassName('popupImage')[0].src = 'images/Emily-fb-pic.jpg';
    document.getElementsByClassName('popupImage')[0].srcset = "images/Emily-fb-pic-p-500.jpeg 500w, images/Emily-fb-pic.jpg 653w";
    document.getElementsByClassName('popupName')[0].innerText = 'Emily Liu';
      document.getElementsByClassName('popupPosition')[0].innerText = 'Outreach External';
      document.getElementsByClassName('popupText')[0].innerHTML = 'The disparity in representation in tech hurts everyone. According to the New York Times, 57% of occupations in the workforce are held by women, but in computing occupations, the number falls to 25%. In fact, only 0.4% of female college freshmen overall say that they intend to major in computer science. <br>I’m excited for Wiring with Women because it serves as a platform and support system for women in computing. It’s amazing the difference that seeing someone like you in an industry dominated by others can make— if they can do it, what’s stopping you?<br><br>Email: emily.f.liu@duke.edu';
  }

  function anika(){
    document.getElementsByClassName('popupImage')[0].src = 'images/Anika-fb-pic.jpg';
    document.getElementsByClassName('popupImage')[0].srcset = "images/Anika-fb-pic-p-500.jpeg 500w, images/Anika-fb-pic.jpg 653w";
    document.getElementsByClassName('popupName')[0].innerText = 'Anika Mukherji';
    document.getElementsByClassName('popupPosition')[0].innerText = 'Outreach Internal';
    document.getElementsByClassName('popupText')[0].innerHTML = 'Hey! I’m Anika and I am an upcoming junior undergraduate pursuing a Computer Science/Neuroscience Interdepartmental Major…which pretty means I just smushed two majors together and decided to call it “Minds and Machines”. I am thrilled to be on the Wiring With Women exec for a whole host of reasons, but mostly because I am excited to grow this support network for women who are trying to enter this male-dominated industry. The tech industry can be daunting at times, and having a group that supports you through the academic and occupational process is an invaluable resource. As Outreach Coordinator, I hope I can spread the word about this incredible group and create a strong campus presence<br><br>CS Courses: Data Structures and Algorithms, Artificial Intelligence<br>Email: anika.mukherji@duke.edu';
  }

  function aninda(){
    document.getElementsByClassName('popupImage')[0].src = 'images/Aninda-fb-pic.jpg';
    document.getElementsByClassName('popupImage')[0].srcset = "images/Aninda-fb-pic-p-500.jpeg 500w, images/Aninda-fb-pic.jpg 653w";
      document.getElementsByClassName('popupName')[0].innerText = 'Aninda Manocha';
      document.getElementsByClassName('popupPosition')[0].innerText = 'Treasurer';
      document.getElementsByClassName('popupText')[0].innerHTML = 'I am currently a sophomore studying Electrical and Computer Engineering and Computer Science. Ever since I first learned how to program, I have been passionate about coding and using my skills to develop technology that can solve a variety of problems. I enjoy designing and building software from scratch, and am always eager to learn new tools, skills, languages, and frameworks. I want to continue doing so as part of a career either in academia or in the industry, and ultimately want to create technology that will greatly benefit society with an emphasis on assisting third-world countries and those who are less privileged. I am excited to be a part of Wiring with Women so I can share with others how great the field of computer science is and encourage aspiring women in technology to follow their passions and pursue careers in their fields of interest! <br><br>Email: aninda.manocha@duke.edu';
  }

  function alethea(){
    document.getElementsByClassName('popupImage')[0].src = 'images/Alethea-fb-pic.jpg';
    document.getElementsByClassName('popupImage')[0].srcset = "images/Alethea-fb-pic-p-500.jpeg 500w, images/Alethea-fb-pic.jpg 653w";
      document.getElementsByClassName('popupName')[0].innerText = 'Aletha Toh';
      document.getElementsByClassName('popupPosition')[0].innerText = 'Lean In Coordinator';
      document.getElementsByClassName('popupText')[0].innerHTML = 'My name is Alethea Toh and I’m a first-year intending on majoring in computer science. I was born and raised in Singapore, but spent the last three years of high school in Thailand (happy Songkran!)<br> Duke is where I stumbled upon my interest in CS, and WWW is where I discovered kindred spirits in tech. In light of the huge gender gap in tech, I really appreciate the positivity and inspiration that WWW offers, where women can encourage and support each other. I am honored to have been given the opportunity to serve as an WWW’s Lean In Coordinator, and I can’t wait to help, guide and mentor WWW members towards building better relationships and solutions.<br><br>Email: alethea.toh@duke.edu';
  }

  function cyan(){
    document.getElementsByClassName('popupImage')[0].src = 'images/Cyan-fb-pic.jpg';
    document.getElementsByClassName('popupImage')[0].srcset = "images/Cyan-fb-pic-p-500.jpeg 500w, images/Cyan-fb-pic.jpg 653w";
      document.getElementsByClassName('popupName')[0].innerText = 'Cyan DeVeaux';
      document.getElementsByClassName('popupPosition')[0].innerText = 'Marketing Chair';
      document.getElementsByClassName('popupText')[0].innerHTML = 'Hey everyone. My name is Cyan and I am so excited to be part of the WWW exec team! I\'m a first year student from New York interested in double majoring in Computer Science and Visual & Media Studies. I look forward to watching this organization continue to grow over the course of my time here at Duke.<br><br>Email: cyan.deveaux@duke.edu';
  }
}) ();
