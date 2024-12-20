//Array mit den 26 Buchstaben des Alphabets
var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//"Wortschatz" aus dem ein zufälliges Wort gewählt wird
var words = ['achievement', 'administration', 'advertisement', 'air traffic controller', 'alphabet', 'alligator', 'Angkor Wat', 'Angstrom', 'antarctica', 'antique', 'Art Deco', 'Art Nouveau', 'asphyxia', 'atmosphere', 'avant-garde', 'balcony', 'barbecue', 'blizzard', 'blueberry', 'bicycle', 'Byzantine Empire', 'Cambridge', 'carry-on', 'cinammon', 'Commonwealth of Nations', 'comprehensive', 'constructivism', 'cubism', 'curiosity', 'currency', 'crayon', 'cylinder', 'cyprus', 'devil-may-care', 'district attorney', 'duty-free', 'Draw-a-Man-Test', "D'Hondt method", 'entertainment', 'environmentalist', 'European Union', 'expedition', 'expressionism', 'fashion', 'filmmaker', 'finishing line', 'flight attendant', 'floodwater', 'frequently', 'geography', 'government', 'greenhouse effect', 'Guano Islands Act', 'headmaster', "Heisenberg's uncertainty principle", 'hieroglyph', 'horizontal', 'hurricane', 'humidity', 'imagination', 'impressionism', 'impressive', 'jazz-funk', 'journalism', 'jurisdiction', 'kettledrum', 'kilogramme', 'kingdom', 'knowledge', 'language', 'lieutenant', 'lightning', 'Limburg a. d. Lahn', 'luggage', 'magical realism', 'Maxwell-Boltzmann distribution', "Maxwell's equations", 'mathematics', 'monarchy', 'Monday-morning quarterbacks', 'mountain', 'mysterious', 'naturalism', 'narcissism', 'neighborhood', 'Newcastle', 'observation', 'October', 'occidentally', 'opportunity', 'oscilloscope', 'particular', 'philosophy', 'photography', "Planck's law", 'plea bargaining', 'polytetrafluoroethylene', 'prescription', 'programmer', 'psychologist', 'quadrupedal', 'qualification', 'Quetzalcoatl', 'quotation', 'raspberry', 'realism', 'refreshment', 'requirement', 'restraining order', 'romanticism', "schroedinger's cat", 'scoville scale', 'self-evident', "six o'clock", 'spectator sport', "Spider-Man's alter ego", 'strawberry', 'surrealism', 'synthetism', 'technology', 'testimony', 'therapy', 'thunderstorm', 'toxicology', 'transcendence', 'troposphere', 'turbulence', 'universe', 'university', 'utilitarianism', 'Virginia', 'virtual reality', 'vector graphics', 'Wall Street', 'Washington D.C.', 'wizard', 'woodpecker', 'xenolith', 'xenophobia', 'xylophone', 'yellow', 'yoghurt', 'yoga session', 'yttrium', 'zabaione', 'zeppelin', 'zoology', 'zymology', 'zymurgy', 'zyzzyva'];

//zum Wortschatz gehörende Hinweise
var hints = ['Something that has been done through effort', 'The activities that relate to running a company, school, or other organization', 'Something that is shown to the public to help sell a product', 'A person whose job is to give instructions to aircraft pilots by radio', 'The letters of a language arranged in their usual order', 'A large reptile that has a long body, thick skin, and sharp teeth', 'A temple complex in Cambodia and the largest religious monument in the world', 'A unit of length equal to one hundred-millionth of a centimetre', 'A large landmass on the southern hemisphere', 'Old and often valuable', 'A style of art, design, and architecture that uses bold lines and simple shapes', 'A style of art, design, and architecture that uses curving lines and shapes that look like leaves and flowers', 'A condition arising when the body is deprived of oxygen', 'A mass of gases that surround a planet or star', 'A group of people who develop new and often very surprising ideas in art, literature', 'A platform projecting from the wall of a building', 'Used to cook food over hot coals or an open fire', 'A severe snowstorm that goes on for a long time', 'A small round fruit with blue, purple, or blackish skin', 'A 2-wheeled vehicle', 'An Empire in the East during Late Antiquity and the Middle Ages', 'A city in England', 'A small piece of luggage that a passenger can take onto an airplane', 'A sweet spice made from the bark of an Asian tree and used in cooking and baking', 'The countries that were once part of the British Empire', 'Including many, most, or all things', 'An artistic and architectural philosophy that originated in Russia beginning in 1919', 'A style of art in which objects are divided into and shown as a group of geometric shapes', 'The desire to learn or know more about something or someone', 'A specific kind of money', 'A stick of colored wax that is used for drawing', 'A shape that has straight sides and two circular ends', 'An island in the Mediterranean Sea', 'Relaxed and without worry', 'A lawyer who is responsible for starting legal cases against people accused of crimes', 'Not taxed when taken into another country', 'A psychological projective personality or cognitive test', 'A method for allocating seats after elections', 'The amusement or pleasure that comes from watching a performer, playing a game', 'A person who works to protect the natural world from pollution and other threats', 'An economic, scientific, and political organization of some European countries', 'A journey by a group of people to explore a distant place or to do research', 'A modernist movement originating in Germany at the beginning of the 20th century', 'A popular way of dressing during a particular time', 'A person who makes movies', 'A line that marks the end of a race', 'A person whose job is to help passengers who are traveling in an airplane', 'The overflow of water that submerges land which is usually dry', 'Acting or returning regularly or often', 'An area of study that deals with the location of countries, cities, rivers, mountains, lakes', 'The group of people who control and make decisions for a country, state', "The warming of the Earth's atmosphere that is caused by air pollution", 'A federal legislation passed by the U.S. Congress that enables citizens of the U.S. to take possession of islands containing guano deposits', 'A man who is the head of a British school', 'A limit to the precision with which certain pairs of physical properties of a particle can be known simultaneously', 'A written character that looks like a picture', 'Parallel to the ground', 'An extremely large, powerful, and destructive storm with very strong winds', 'The amount of moisture in the air', 'The ability to think of new things', 'A style of painting that began in France around 1870, that uses spots of color to show the effects of different kinds of light', 'Deserving attention, admiration, or respect', 'A subgenre of jazz music characterized by a strong back beat and electrified sounds', 'The activity or job of collecting, writing, and editing news stories for newspapers, magazines, television, or radio', 'The right to make judgments about the law, to arrest and punish criminals', 'A large drum that has a rounded bottom', 'The SI unit of mass', 'A country whose ruler is a king or queen', 'The information, understanding, or skill that you get from experience or education', 'The system of words or signs that people use to express thoughts and feelings to each other', 'An officer in the army, navy, or air force with a fairly low rank', 'The flashes of light that are produced in the sky during a storm', 'The district seat of Limburg-Weilburg in Hesse, Germany', 'The bags and suitcases that a person carries when traveling', 'A style of art in which the works share in common an acceptance of magic in the rational world', 'A particular probability distribution for describing particle speeds in idealized gases', 'A set of partial differential equations that form the foundation of classical electrodynamics, classical optics, and electric circuits', 'The science of numbers, quantities, and shapes and the relations between them', 'A country that is ruled by a monarch', 'A person who unfairly criticizes the decisions of other people after something has happened', 'An area of land that rises very high above the land around it', 'Strange, unknown, or difficult to understand', 'A style of art or literature that shows people and things as they actually are', 'Loving and admiring yourself and especially your appearance too much', 'The people who live near each other', 'A city in Tyne and Wear, England', 'The act of careful watching and listening', 'A month commonly associated with the season of Autumn', 'Synonym for the Western World', 'An amount of time or a situation in which something can be done', 'A type of electronic test instrument that allows observation of constantly varying signal voltages', 'Especially great or intense', 'The study of ideas about knowledge, truth, the nature and meaning of life', 'The art, process, or job of taking pictures with a camera', 'A physical law discribing the electromagnetic radiation emitted by a black body', 'A process in which a person who is accused of a crime is allowed to say that he or she is guilty of a less serious crime in order to be given a less severe punishment', 'Also known as Teflon', 'A written message from a doctor that officially tells someone to use a medicine', 'A person who creates computer programs', 'A scientist who specializes in the study and treatment of the mind and behavior', 'Using four limbs or legs', 'A special set of skills or type of experience that makes someone suitable to do a particular job or activity', 'A Mesoamerican deity whorshipped by the Nahuatl', 'Reciting something that a person said or wrote in a piece of writing or a speech', 'A soft, red berry that is sweet and juicy', 'A style of art or literature that shows or describes people and things as they are in real life', 'Drinks and small amounts of food', 'Something that is necessary for something else to happen or be done', 'A legal order saying that someone is not allowed to go near a particular person', 'A style of art or literature during the late 18th and early 19th centuries that emphasized the imagination and emotions', 'A thought experiment imagining a cat that may be simultaneously both alive and dead', 'A measurement of the pungency (spicy heat)', 'Clearly true and requiring no proof or explanation', 'A time of the day', 'Something that people watch other people do without becoming involved themselves', 'Peter Parker', 'A soft, juicy red fruit that grows on a low plant with white flowers', 'A 20th-century art form in which an artist or writer combines unrelated images or events in a very strange and dreamlike way', 'A style of art pioneered by Paul Gauguin, Emile Bernard and Louis Anquetin', 'The use of science in industry, engineering, to invent useful things or to solve problems', 'Something that someone says while formally promising to tell the truth', 'The treatment of physical or mental illnesses', 'A storm with lightning and thunder', 'The study of poisonous chemicals, drugs and how a person or other living thing reacts to them', 'Going beyond the limits of ordinary experience', "The lowest portion of Earth's atmosphere", 'Sudden, violent movements of air or water', 'All of space and everything in it including stars, planets and galaxies', 'A school that offers courses leading to a degree', 'The belief that a morally good action is one that helps the greatest number of people', 'State of the U.S.', 'An artificial world that consists of images and sounds created by a computer and that is affected by the actions of a person who is experiencing it', 'The use of polygons to represent images in computer graphics', 'A street in New York City where the New York Stock Exchange is located', 'The capital of the United States', 'A person who is skilled in magic or who has magical powers', 'A bird that has a very hard beak which it uses to make holes in trees to get insects for food', "A rock fragment which becomes enveloped in a larger rock during the latter's development and hardening", 'The fear or hatred of strangers or foreigners', 'A musical instrument that has a set of wooden bars of different lengths that are hit with hammers', 'The color of the sun', 'A food produced by bacterial fermentation of milk', 'A collection of exercises for mental and physical health', 'A silvery-metallic transition metal', 'An Italian dessert made with egg yolks, sugar, and a sweet wine', 'A large aircraft without wings that floats because it is filled with gas and that has a rigid frame inside its body', 'The branch of science that involves the study of animals', 'An applied science which studies the biochemical process of fermentation', 'An applied science which studies the biochemical process of fermentation', 'A yellowish weevil no longer than an ant'];

//zufällige Variable erstellen
var r = Math.floor(Math.random() * words.length);

//Wort auswählen und Wortbuchstaben in Array schieben
var secret = words[r].toUpperCase();
var secret_array = secret.split("");

//Array dient später zum entschleiern der Buchstaben
var letters =[];

//Bildverzeichnis (sources) als Array
var frm = ['assets/set_1/frame_0.png', 'assets/set_1/frame_1.png', 'assets/set_1/frame_2.png', 'assets/set_1/frame_3.png', 'assets/set_1/frame_4.png', 'assets/set_1/frame_5.png', 'assets/set_1/frame_6.png', 'assets/set_1/frame_7.png', 'assets/set_1/frame_8.png', 'assets/set_1/frame_9.png', 'assets/set_1/frame_10.png', 'assets/set_1/frame_11.png'];

var whitespace = 0;                                      //whitespace characters
var correct = 0;                                               //correct guesses
var fid = 0;                                                          //frame id
var wmsg = 'YOU WIN!';                                         //winning message
var lmsg = 'GAME OVER';                                        //loosing message
var userWord;

var txtbtn = document.getElementById('btn_textbox');            //textbox button
var txtbx = document.getElementById('textbox');                        //textbox
var hntbtn = document.getElementById('btn_hint');                  //hint button
var rpbtn = document.getElementById('btn_replay');               //replay button
var img = document.getElementById('image');

//Magic
var doSomeMagic = function () {
  hideSecret();
  createAlphabet();
  createExtra();
  createForm()
  draw();
};

//Wort verschleiern und Platzhalter zeichnen
var hideSecret = function () {
  var llist = document.createElement('ul');                        //letter list
  document.getElementById('placeholder').appendChild(llist);
  for ( i = 0 ; i < secret.length ; i++) {
    var litm = document.createElement('li');                         //list item
    if (secret_array[i] == ' ') {
      var lsp = document.createTextNode(' ');                       //list space
      litm.appendChild(lsp);
      whitespace += 1;
    } else if (secret_array[i] == '-') {
      var lhp = document.createTextNode('-');
      litm.appendChild(lhp);                                       //list hyphen
      whitespace += 1;
    } else if (secret_array[i] == "'") {
      var lap = document.createTextNode("'");
      litm.appendChild(lap);                                   //list apostrophe
      whitespace += 1;
    } else if (secret_array[i] == '.') {
      var lpt = document.createTextNode('.');
      litm.appendChild(lpt);                                        //list point
      whitespace += 1;
    } else {
      var ltxt = document.createTextNode('_');
      litm.appendChild(ltxt);
    }
    litm.className = 'secret-letter';
    llist.appendChild(litm);
    letters.push(litm);
  }
};

//Buchstabenbuttons erstellen
var createAlphabet = function () {
  var alist = document.createElement('ul');                      //alphabet list
  document.getElementById('alphabet-table').appendChild(alist);
  for ( i = 0 ; i < alphabet.length ; i++ ) {
    var aitm = document.createElement('li');                     //alphabet item
    var abtn = document.createElement('button');               //alphabet button
    var atxt = document.createTextNode(alphabet[i]);             //alphabet text
    abtn.className = 'button alphabet-btn unused';
    abtn.id = 'btn_' + alphabet[i];
    abtn.appendChild(atxt);
    aitm.appendChild(abtn);
    alist.appendChild(aitm);
    abtn.addEventListener('click', checkLetter);
  }
};

//Buttons für Hinweis und Neues Spiel erstellen
var createExtra = function () {
  hntbtn.addEventListener('click', getHint);                       //hint button
  rpbtn.addEventListener('click', newGame);                      //replay button
};

//Textbox und Button erstellen
var createForm = function () {
  txtbtn.addEventListener('click', checkWord);
  txtbx.addEventListener('keypress', enterKey);
};
//Entertaste
var enterKey = function (event) {
  var key = event.which || event.keyCode;
  if (key === 13) {             //13 ist der Unicode KEY code für die Entertaste
    checkWord();
  }
};

//Bild einfügen
var draw = function () {
  img.src = frm[fid];
  if (fid >= frm.length-1) fid = 11;
};

//geklickten Buchstaben abholen und prüfen
var checkLetter = function () {
  this.removeEventListener('click', checkLetter);
  this.className = 'button alphabet-btn used';
  var userLetter = this.innerHTML;
  var lidx = secret.indexOf(userLetter);                          //letter index
  if (lidx == -1) {
    document.getElementById('stroke').play();
    fid += 1;
    if (fid >= frm.length-1) {
      document.getElementById('hint').innerHTML = lmsg;
      draw();
      gameOver();
    } else {
      draw();
    }
  } else {
    document.getElementById('bingo').play();
    for ( i = 0 ; i < secret.length ; i++ ) {
      if (userLetter == secret_array[i]) {
        letters[i].innerHTML = userLetter;
        correct +=1;
        if (correct + whitespace == secret.length) {
          document.getElementById('hint').innerHTML = wmsg;
          gameOver();
        }
      }
    }
  }
};

//eingetipptes Wort abholen und prüfen
var checkWord = function () {
  userWord = txtbx.value.toUpperCase();                //Wort in GROSSBUCHSTABEN
  txtbx.value = '';                                       //Textbox zurücksetzen
  txtbtn.removeEventListener('click', checkWord);
  txtbtn.className = 'button used';
  hntbtn.className = 'hidden';
  rpbtn.className = 'button extra-btn unused visible';
  if (userWord == secret) {
    document.getElementById('bingo').play();
    document.getElementById('hint').innerHTML = wmsg;              //win message
    for ( i = 0 ; i < secret.length ; i++ ) {
      letters[i].innerHTML = secret_array[i];
    }
  } else if (userWord === 'VAULTBOY') {
    img.src = 'assets/pls_stand_by.gif';
  } else {
    document.getElementById('hint').innerHTML = lmsg;            //loose message
    img.src = 'assets/hangman_family.jpg';
  }
  gameOver();
};

//Hinweis anzeigen
var getHint = function () {
  document.getElementById('hint').innerHTML = 'Hint: ' + hints[r];
  hntbtn.removeEventListener('click', getHint);
  hntbtn.className = 'button extra-btn used visible';
};

//Buttons ausschalten
var gameOver = function () {
  txtbtn.removeEventListener('click', checkWord);
  txtbx.removeEventListener('keypress', enterKey);
  hntbtn.className = 'hidden';
  rpbtn.className = 'button extra-btn unused visible';
  txtbtn.className = 'button used';
  txtbx.className = 'button used'
  for ( i = 0 ; i < alphabet.length ; i++ ) {
    document.getElementById('btn_' + alphabet[i]).removeEventListener('click', checkLetter);
    document.getElementById('btn_' + alphabet[i]).className = 'button alphabet-btn used';
  }
};

//neues Spiel
var newGame = function () {
location.reload(true);                                             //reload Page
};

window.onload = doSomeMagic();
