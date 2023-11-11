
// Handle form submit
document.querySelector('#new-activity').addEventListener('submit', (e => {
  e.preventDefault();
  const activity = e.target
}))


// Populate default values
const addPlaceholder = (week) => {
  for (const td of week.children) {
    const li = document.createElement('li');
    li.innerText = 'no events scheduled';
    li.classList.add('placeholder')
    console.log(td);
    console.log(td.children[0]);
    td.children[0].append(li);
  }
}

const week1 = document.querySelector('#week-1');
addPlaceholder(week1);
const week2 = document.querySelector('#week-2');
addPlaceholder(week2);
