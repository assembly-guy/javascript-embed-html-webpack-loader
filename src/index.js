import TinyDOM from './libs/tinydom';

let count = 0;

function drawHTML() {
  count++;
  return <h1>Column ${count}</h1>;
}



const main = () => {
  return (
    <div>
      <div class="ui grid">
        <div class="four wide column">${drawHTML()}</div>
        <div class="four wide column" id="second">${drawHTML()}</div>

      </div>
    </div>
  );
};

TinyDOM.createApp(main).then(()=> {
  console.log('App created');
  const columns = TinyDOM.query("#second");
  console.log(columns);
});
