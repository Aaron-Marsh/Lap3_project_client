import { default as CreateUser } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../redux/store';
// import { Provider } from 'react-redux';
// import store from '../../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('CreateUser', () => {
    let getResultMock;

    beforeEach(() => {
        getResultMock = jest.fn();
        render(<Provider store={store}>
            <Router>
            <CreateUser getResult={getResultMock}/>
            </Router>
          </Provider>);
        
        
       
    });

    test('it renders a form', () => {
        let form = screen.getByRole('form');
        expect(form).toBeInTheDocument();;
    });

    

    test('it calls on getResult prop on form submission', () => {
        let nameInput = screen.getByTestId('username');
        userEvent.type(nameInput, "George{enter}")
        expect(getResultMock).toHaveBeenNthCalledWith(1, 'George');
    })
});
