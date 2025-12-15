export function formatDate(dateStr) {
  if (!dateStr) return null;
  const date = new Date(`${dateStr}T00:00:00`);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function buildWhatsAppUrl(config, date, people) {
  const phone = config.phone || '385951966734';
  const tourName = config.tourName || 'a tour';
  const formattedDate = date ? formatDate(date) : 'a flexible date';
  const numPeople = people && people > 0 ? people : 2;

  const message = `Hello, I'm contacting you from the Mare Boats website. I'm interested in the ${tourName} on ${formattedDate} for ${numPeople} ${
    numPeople === 1 ? 'person' : 'people'
  }. Could you please confirm availability?`;

  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
}


