import { render, screen } from '../../utils/test-utils';

import BoardingInfo from '.';

const props = {
  time: '16:15',
  terminal: 2,
  gate: 15,
  boardingGroup: 3,
  gateClosesTime: '16:45',
};
describe('FlightInfo', async () => {
  it('should rende a component', () => {
    render(<BoardingInfo {...props} />);
    expect(screen.getByText('16:15')).toBeInTheDocument();
  });
});
