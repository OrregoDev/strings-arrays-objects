// Event managment system

// Falta por inicializar programa

let events = [];

function crearEvento() {
  const eventName = prompt('Enter the name of the event').toLowerCase().trim();
  const date = prompt('Enter the date of the event (YYYY-MM-DD):');
  const description = prompt('Enter the description of the event:').trim();

  const newEvent = {
    id: events.length + 1,
    name: eventName,
    date: date,
    description: description,
  };

  events.push(newEvent);
}

function listEvents() {
  events.forEach((event) => {
    console.log(
      `ID: ${event.id}, Name: ${event.name}, Date: ${event.date}, Description: ${event.description}`
    );
  });
}

function searchEvents() {
  const searchName = prompt('Enter the name of the event to search:')
    .toLowerCase()
    .trim();
  const foundEvents = events.filter((event) => event.name.includes(searchName));

  if (foundEvents.length > 0) {
    foundEvents.forEach((event) => {
      console.log(
        `ID: ${evento.id}, Name: ${evento.name}, Date: ${evento.date}, Description: ${evento.description}`
      );
    });
  } else {
    console.log('There were not found any events with that name.');
  }
}

function updateEvent() {
  const id = parseInt(prompt('Enter the ID of the event to update:'));
  const event = events.find((event) => event.id === id);

  if (event) {
    const nombre = prompt('Enter the new name of the event:')
      .toLowerCase()
      .trim();
    const fecha = prompt('Enter the new date of the event (YYYY-MM-DD):');
    const descripcion = prompt(
      'Enter the new description of the event:'
    ).trim();

    Object.assign(evento, {
      name: nombre,
      date: fecha,
      description: descripcion,
    });
    console.log('The event was updated successfully.');
  } else {
    console.log('Event not found.');
  }
}

function removeEvent() {
  const id = parseInt(prompt('Enter the ID of the event to remove:'));
  evento = evento.filter((event) => event.id !== id);
  console.log('The event was removed successfully.');
}
