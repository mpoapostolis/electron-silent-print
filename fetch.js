fetch(
  'https://stg-playgames-admin-api.playventure.gr/api/betslips/receipt/1k1500692R2/raw?game=keno&jwt=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OTRiODEzNDFhZjUxNDNiODRlNjE5YWEiLCJpYXQiOjE1MDA1NDc5MTcsImV4cCI6MTUwMDU2NTkxNywiYXVkIjoiYmFja29mZmljZSIsImlzcyI6Ind3dy5wbGF5Z2FtZXMuY29tIiwicm9sZXMiOlsiQkFDS09GRklDRV9VU0VSIiwiQ0FTSElFUiJdLCJhdXRob3JpdGllcyI6IjAxMTAwMDAwMTAwMTQ0IiwicGFyIjoiYWdpY2UxNTEiLCJqdGkiOiI1NTU1NDVlY2I1ZmU0YWEyYmM0NDI5MjczM2M5MTBkYyIsIm90aCI6IjAwNy0wMDAtODA4OCIsImNoayI6MTUwMDU0Nzk0NzI0M30.l1Ygc-I2djdKIJ9hWSNV5Rh2C-ZvxVY4P83-MrSuxdQ'
)
  .then(a => a.json())
  .then(({ ticket, barcode }) => {
    const str = ticket.split(',')[1];
    fetch('http://localhost:8000', {
      method: 'POST',
      body: str,
    });
  });
