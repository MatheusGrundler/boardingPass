import { render, screen } from '../../utils/test-utils'

import PassagerInfo from '.';

const props = {
 name:'Rodrigo Terron',
 seat:'28A'
};
describe('FlightInfo', async () => {
  it('should rende a component', () => {
    render(<PassagerInfo {...props} />);
    expect(screen.getByText('Rodrigo Terron')).toBeInTheDocument()
    expect(screen.getByText('28A')).toBeInTheDocument()
  });
});
