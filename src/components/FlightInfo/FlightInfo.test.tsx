import { render, screen } from '../../utils/test-utils'

import FlightInfo from '.';

const props = {
  flightNumber: 'RS995',
  flightDate: '23/05/2023',
  departure: {
    city: 'São Paulo',
    country: 'Brasil',
    airport: 'GRU',
    time: '17:00',
  },
  arrival: {
    city: 'São Francisco',
    country: 'EUA',
    airport: 'SFO',
    time: '04:48',
    daysAfter: 1,
  },
};
describe('FlightInfo', async () => {
  it('should rende a component', () => {
    render(<FlightInfo {...props} />);
    expect(screen.getByText('RS995')).toBeInTheDocument()
  });
});
