import { Button, Contact, List, ListItems } from "./ContactList.styled"

export const ContactList = ({ items, onDelete }) => {
    return (
        <List>
            {items.map(item => (
             <ListItems key={item.id}>
                <Contact>{item.name} : {item.number}</Contact>
                <Button onClick={() => onDelete(item.id)}>Delete</Button>
             </ListItems>   
            )
                )}
        </List>
    )
}