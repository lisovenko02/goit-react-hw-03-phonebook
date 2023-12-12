import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";



export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    loading: false,
    error: false,
    filter: ''
  }

  async componentDidMount() { 
    const savedFilters = localStorage.getItem('contacts');
    if (savedFilters !== '') {
      this.setState({
        contacts: JSON.parse(savedFilters),
      });
    }

    try {
      this.setState({ loading: true, error: false });
      
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
   }

   componentDidUpdate(_, prevState) { 
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
   } 

  addForm = newListForm => {
    const checkContact = this.state.contacts.some(
      item => item.name.toLowerCase() === newListForm.name.toLowerCase()
    );
    
    if(checkContact) {
      return alert(`${newListForm.name} is already in contacts`);
    }
    
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          ...newListForm
        }
      ]
    }))
  };

  deleteForm = formId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(form => form.id !== formId)
    }))
  };

  changeFilter = newTopic => {
    this.setState({ 
      filter: newTopic,
     });
  };

  getVisibleCardItems = () => {
    const {contacts, filter} = this.state;

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  };

  render() {
    const items = this.getVisibleCardItems();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101'
        }}
      >
      <div>
      <h1>Phonebook</h1>
      <ContactForm addForm={this.addForm}/>

      <h2>Contacts</h2>
      <Filter filter={this.state.filter} onChangeFilter={this.changeFilter}/>
      <ContactList items={items} onDelete={this.deleteForm}/>
      </div>
      </div>
    );
  }
}




