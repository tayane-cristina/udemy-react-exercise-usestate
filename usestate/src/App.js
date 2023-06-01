import './App.css';
import PropertyDetails from './components/PropertyDetails';
import ConditionalRender from './components/ConditionalRender';
import ManagerData from './components/ManagerData';
import RenderList from './components/RenderList';
import ShowUserName from './components/ShowUserName';
import Content from './components/Content';
import ShowMessage from './components/ShowMessage';

function App() {
  const songs = [
    {title: "The freedom we knows", category:"International" , launch: 2006, favority: true,}, 
    {title: "Eu vejo uma luz", category: "rap", launch: 1999, favority: true,},
    {title: "Volte a sonhar", category: "religiosa", launch: 2016, favority: false,},
    {title: "Deixa o céu descer", category: "Worship", launch: 2016, favority: false,},
  ]

  const message = () => {
    console.log('Parabéns! Você conseguiu renderizar a menssagem.')
  }

  return (
    <div className="App">
      <ManagerData />
      <RenderList />
      <ConditionalRender />
      <ShowUserName name="Tayane Cristina"/>
      <PropertyDetails title="E o vento levou" category="Guerra, Romance, História" launch="1936" favority={true}/>
      <PropertyDetails title="A inquilina de widfell hall" category="Religião, romance, drama" launch="1848" favority={true}/>
      <PropertyDetails title="O estrangeiro" category="Psicologia, " launch="1942" favority={false}/>

      {songs.map((song) => (
        <PropertyDetails title={song.title} category={song.category} launch={song.launch} favority={song.favority}/>
      ))}

      <Content>
        <p>Esté é um código aleatorio que está sendo passado via children</p>
      </Content>

      <ShowMessage myFunction={message}/>
    </div>
  );
}

export default App;
