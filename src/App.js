import logo from './logo.svg';
import './App.css';
import camera from './nora-potwora-tiger-poster.jpg';
import StudentForm from './components/student-form/studentForm';

function NavBar() {
  return(
    <h1>This is Hitler's Obersalzberg speech:</h1>
  )
}
function Banner(){
  return(
    <h1>SPEECH IN ENGLISH: Decision to attack Poland was arrived at in spring. Originally there was fear that because of the political constellation we would have to strike at the same time against England, France, Russia and Poland. This risk too we should have had to take. Goring had demonstrated to us that his Four-Year Plan is a failure and that we are at the end of our strength, if we do not achieve victory in a coming war.

    Since the autumn of 1938 and since I have realised that Japan will not go with us unconditionally and that Mussolini is endangered by that nitwit of a King and the treacherous scoundrel of a Crown Prince, I decided to go with Stalin. After all there are only three great statesmen in the world, Stalin, I and Mussolini. Mussolini is the weakest, for he has been able to break the power neither of the crown nor of the Church. Stalin and 1 are the only ones who visualise the future. So in a few weeks hence I shall stretch out my hand to Stalin at the common German-Russian frontier and with him undertake to re-distribute the world.
    
    Our strength lies in our quickness and in our brutality; Genghis Khan has sent millions of women and children into death knowingly and with a light heart. History sees in him only the great founder of States. As to what the weak Western European civilisation asserts about me, that is of no account. I have given the command and I shall shoot everyone who utters one word of criticism, for the goal to be obtained in the war is not that of reaching certain lines but of physically demolishing the opponent. And so for the present only in the East 1 have put my death-head formations' in place with the command relentlessly and without compassion to send into death many women and children of Polish origin and language. Only thus we can gain the living space [lebensraum] that we need. Who after all is today speaking about the destruction of the Armenians?
    
    Colonel-General von Brauchitsch has promised me to bring the war against Poland to a close within a few weeks. Had he reported to me that he needs two years or even only one year, I should not have given the command to march and should have allied myself temporarily with England instead of Russia for we cannot conduct a long war. To be sure a new situation has arisen. I experienced those poor worms Daladier and Chamberlain in Munich. They will be too cowardly to attack. They won't go beyond a blockade. Against that we have our autarchy and the Russian raw materials.
    
    Poland will be depopulated and settled with Germans. My pact with the Poles was merely conceived of as a gaining of time. As for the rest, gentlemen, the fate of Russia will be exactly the same as 1 am now going through with in the case of Poland. After Stalin's death-he is a very sick man-we will break the Soviet Union. Then there will begin the dawn of the German rule of the earth.
    
    The little States cannot scare me. After Kemal's [i.e. Ataturk] death Turkey is governed by cretins and half idiots. Carol of Roumania is through and through the corrupt slave of his sexual instincts. The King of Belgium and the Nordic kings are soft jumping jacks who are dependent upon the good digestions of their over-eating and tired peoples.
    
    We shall have to take into the bargain the defection of Japan. I save Japan a full year's time. The Emperor is a counterpart to the last Czar - weak, cowardly, undecided. May he become a victim of the revolution. My going together with Japan never was popular. We shall continue to create disturbances in the Far East and in Arabia. Let us think as "gentlemen" and let us see in these peoples at best lacquered half maniacs who are anxious to experience the whip.
    
    The opportunity is as favourable as never before. 1 have but one worry, namely that Chamberlain or some other such pig of a fellow (Saukerl) will come at the last moment with proposals or with ratting (Umfall). He will fly down the stairs, even if I shall personally have to trample on his belly in the eyes of the photographers.
    
    No, it is too late for this. The attack upon and the destruction of Poland begins Saturday early. 1 shall let a few companies in Polish uniform attack in Upper Silesia or in the Protectorate. Whether the world believes it is quite indifferent (scheissegal). The world believes only in success.
    
    For you, gentlemen, fame and honour are beginning as they have not since centuries. Be hard, be without mercy, act more quickly and brutally than the others. The citizens of Western Europe must tremble with horror. That is the most human way of conducting a war. For it scares the others off.
    
    The new method of conducting war corresponds to the new drawing of the frontiers. A war extending from Reval, Lublin, Kaschau to the mouth of the Danube. The rest will be given to the Russians. Ribbentrop has orders to make every offer and to accept every demand. In the West I reserve to myself the right to determine the strategically best line. Here one will be able to work with Protectorate regions, such as Holland, Belgium and French Lorraine.
    
    And now, on to the enemy, in Warsaw we will celebrate our reunion.</h1>
  )
}

function GermanSpeech(props){
  return(
    <h1>GERMAN SPEECH: Im Frühjahr wurde die Entscheidung getroffen, Polen anzugreifen. Ursprünglich bestand die Befürchtung, dass wir aufgrund der politischen Konstellation gleichzeitig gegen England, Frankreich, Russland und Polen zuschlagen müssten. Auch dieses Risiko hätten wir eingehen müssen. Göring hatte uns gezeigt, dass sein Vierjahresplan ein Misserfolg ist und dass wir am Ende unserer Kräfte sind, wenn wir in einem kommenden Krieg nicht den Sieg erringen.

    Seit Herbst 1938 und seit ich erkannt habe, dass Japan nicht bedingungslos mit uns gehen wird und dass Mussolini durch diesen Trottel eines Königs und den verräterischen Schurken eines Kronprinzen gefährdet ist, habe ich mich entschieden, mit Stalin zu gehen. Schließlich gibt es auf der Welt nur drei große Staatsmänner: Stalin, I. und Mussolini. Mussolini ist der Schwächste, denn er konnte weder die Macht der Krone noch der Kirche brechen. Stalin und ich sind die einzigen, die sich die Zukunft vorstellen. So werde ich in einigen Wochen an der gemeinsamen deutsch-russischen Grenze Stalin die Hand reichen und mit ihm die Neuverteilung der Welt in Angriff nehmen.
    
    Unsere Stärke liegt in unserer Schnelligkeit und in unserer Brutalität; Dschingis Khan hat wissentlich und leichten Herzens Millionen Frauen und Kinder in den Tod geschickt.

</h1>
  )
}
function GreetUser(props){
  return( 
  <div>
    <h1>Welcome respectable {props.race}</h1>
    <h1>Your email is {props.email}</h1>
    <h1>You may contact Mr. Adolf by calling on this toll free number: {props.phnum}</h1>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={camera} className="App-camera" alt="camera" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://youtu.be/6B6nZtDV9I0?si=y8L6LUxU1q8nb8DO"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
      <NavBar />
      <Banner />
      <GermanSpeech />
      <GreetUser race="Nazi"
      email="AdolfHitler100@gmail.com"
      phnum="120050"/>
      <StudentForm />
    </div>
  );
}

export default App;
