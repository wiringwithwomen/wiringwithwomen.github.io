(function(){
  var images = document.getElementsByClassName('execimage');

  var names = ['Jasmine Lu', 'Sarah Zhou', 'Emily Liu', 'Anika Mukherji',
   'Aninda Manocha', 'Alethea Toh', 'Cyan DeVeaux'];
  var positions = ['President', 'Vice President', 'Outreach External',
  'Outreach Internal', 'Treasurer', 'Lean In Coordinator', 'Marketing Chair']
  var bios = ['Hi everyone! I am currently a junior double majoring in ECE/CS and I\'m really passionate about doing projects related to the intersection between technology and other fields (health, humanities, art, etc). I am so excited to work with this team of lovely ladies to foster a stronger community among the women in tech at Duke. If you ever have any ideas or suggestions about things we can do as a group, feel free to reach out! I also love grabbing lunch to get to know people&nbsp;:)<br><br>CS Courses: Data Structures and Algorithms, Software Design for Biomedical Devices, Computer Architecture<br>Email: j.lu@duke.edu',
  'Hi everyone! I am currently a junior double majoring in ECE/CS and I\'m really passionate about doing projects related to the intersection between technology and other fields (health, humanities, art, etc). I am so excited to work with this team of lovely ladies to foster a stronger community among the women in tech at Duke. If you ever have any ideas or suggestions about things we can do as a group, feel free to reach out! I also love grabbing lunch to get to know people&nbsp;:)<br><br>CS Courses: Data Structures and Algorithms, Computer Architecture, Software Engineering Design<br>Email: sarah.zhou@duke.edu'
  ];
  images[0].onclick = jasmine();
  images[1].onclick = sarah();


  function jasmine(){
    document.getElementsByClassName('popupName')[0].innerText = 'Jasmine Lu';
  }

  function sarah(){
    document.getElementsByClassName('popupName')[0].innerHTML = 'Sarah Zhou';
  }
}) ();
