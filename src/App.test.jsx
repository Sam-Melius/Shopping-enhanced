import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
    it('should display shopping list and add an item to list', async () =>{
        render(
            <App />
        );
        const listPage = await screen.findByText('Shopping List');
        expect(listPage).toBeInTheDocument();

        const textBox = screen.getByRole('textbox');
        userEvent.type(textBox, 'Pizza');
        const submit = await screen.findByRole('button', {name: 'Submit'})
        userEvent.click(submit);
        const pizza = await screen.getByText('Pizza');
        expect(pizza).toBeInTheDocument();


    })
})
