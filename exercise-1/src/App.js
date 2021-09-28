import Header from './components/header';
import './App.css';
import Notification from './components/notifications';
import Mainsect from './components/mainsect';
import SideSect from './components/sidesect';

function App() {
  const notificationData = [
    {
      topic: 'Koronavirus',
      body: 'New Cases On The Rise'
    },
    {
      topic: 'Analyysi',
      body: 'Juoksemisen tulokset kunnon parantamiseen'
    },
    {
      topic:"Onnettomuus",
      body:"joku kaatui"
    }
  ];
  const MainsectionData = [
    {
      Mainsection: 'Afghanistan',
      category: 'new news',
      context: '”Kukaan ei auta vaimoani Afganistanissa” – Kauniaisissa asuva Hussein, 27, on yksi monista perheen­yhdistämistä pitkään odottaneista afganistanilaisista'
    },
    {
      Mainsection: 'Other news',
      category: 'Accident',
      context: 'Car had crashed into a tree, because of the icy road'
    },
    {
      Mainsection: 'More News',
      category: 'Sää',
      context: 'Pakkasta ja hallaa'
    }
  ];
  const SideSectData =[
    {
      number: '1',
      category: 'Ihmiset',
      context: 'Kävely lisääntyy',
    },
    {
      number: '2',
      category: 'Tietotekniikka',
      context: 'Uusia pidemti aikaisia paristoja keksitty',
    },
    {
      number:'3',
      category:'kirjat',
      context:'kirjat katoamassa'
    }
    ,
    {
      number:'4',
      category:'kirjat',
      context:'kirjat katoamassa awdwadaw saf asd as fasfsad '
    }
    ,
    {
      number:'5',
      category:'kirjat',
      context:'kirjat katoamassaa da a sfdsag dg sd f a'
    }
    ,
    {
      number:'6',
      category:'kirjat',
      context:'kirjat katoamassa'
    }
    ,
    {
      number:'7',
      category:'kirjat',
      context:'kirjat katoamassa'
    }
  ]; 

  return (
    <div className='header_back'>
      <Header />
      <div className="flex_back">
      {
        notificationData.map(element=><Notification topic={element.topic} body={element.body}/>)
      }
      
      <div className="header_flex">
        <ul>
        {
          MainsectionData.map(element=><Mainsect Mainsection={element.Mainsection} category={element.category} context={element.context}/>)
        }
        </ul>
        <ul>
        <SideSect data= {SideSectData}/>
        <SideSect data= {SideSectData}/>
        <SideSect data= {SideSectData}/>
        </ul>
        
      </div>
      
      </div>
    </div>
  );
}


export default App;


