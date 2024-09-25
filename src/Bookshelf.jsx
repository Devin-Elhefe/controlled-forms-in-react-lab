import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
    ]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({
            ...newBook,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                            placeholder="Enter book title"
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            type="text"
                            name="author"
                            id="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                            placeholder="Enter book author"
                        />
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                <div className="bookCardsDiv">
                    {books.map((book, index) => (
                        <div key={index} className="bookCard">
                            <h4>{book.title}</h4>
                            <p>by {book.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
}; 
    
export default Bookshelf;