import logo from './logo.svg';
import './App.css';
import Cards from './cards/Cards';

function App() {
  return (
    <div className='pt-4 pl-4 pr-4 bg-light'>
      <h4 className='text-danger ml-4'> Related Articles</h4>
      <div className='row mb-4 ml-2'>
        <div className='col-md-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem rerum tempore ad deserunt temporibus maiores quisquam
          quia odit laborum cumque, nesciunt est similique, recusandae culpa
          accusamus nobis dolorem possimus explicabo? Magni quod optio sunt
          nulla assumenda, alias itaque rem veniam!
        </div>
      </div>
      <Cards></Cards>
    </div>
  );
}

export default App;
