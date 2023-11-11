// add a new item to the page
const addNewItem = (day, week, activity) => {

  const weekElem = document.querySelector(`#week-${week}`)
  const dayElem = weekElem.querySelector(`.${day}`);
  const placeholder = dayElem.children[0].querySelector('.placeholder');
  if (placeholder) placeholder.remove();

  const li = document.createElement('li');
  li.innerText = activity;
  dayElem.children[0].append(li)
}

// Handle form submit
document.querySelector('#new-activity').addEventListener('submit', (e => {
  e.preventDefault();
  // get elements with their values
  const activity = e.target.querySelector('#activity');
  const day = e.target.querySelector('#day');
  const week = e.target.querySelector('#week-selection');

  // handle for not all values being populated
  // invoke addNewItem function
  console.log(day.value);
  addNewItem(day.value, week.value, activity.value)
  // clear the values
  
}))





// Populate default values
const addPlaceholder = (week) => {
  // console.log(week);
  for (const td of week.children) {
    const li = document.createElement('li');
    li.innerText = 'no events scheduled';
    li.classList.add('placeholder')
    // console.log(td);
    // console.log(td.children[0]);
    td.children[0].append(li);
  }
}

const week1 = document.querySelector('#week-1');
// console.log(week1);
addPlaceholder(week1);
const week2 = document.querySelector('#week-2');
// console.log(week2);
addPlaceholder(week2);
