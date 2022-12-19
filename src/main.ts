import './style.scss'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

interface Animal {
  owner?: string;
}

interface User {
  name: string | number | boolean;
  address?: {
    zip: string;
  }
}

function logUser(u?: User) {
  console.log(u);
}
const user: User = {name: 10};
user.name = 'Ayalla';

logUser();

console.log('Zip: ', user.address?.zip);



const x = 10

if (user.name === 'Ayalla' && x === 10 ){

}

let i = 0;
setTimeout(() => {
  console.log('Inside setTimeout', i++);
} , 1000);


window.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.ctrlKey && event.key === 'z') {
    console.log('UNDO!')
  }
});

console.log('User: ', user);



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
