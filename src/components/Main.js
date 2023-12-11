import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import Loading from '../assets/loading.png'

const Main = () => {

   // const [books, setBooks] = useState([]);
    const [url,setUrl] = useState("http://localhost:8000/books");
    const {data:books, loading,error} = useFetch(url);

    console.log(books);

    // const fetchUrl = useCallback(
    //     async() => {
    //         const response = await fetch(url)
    //         const data = await response.json();
    //         setBooks(data);
    //     },[url]);

    // useEffect(() => {
    //     fetchUrl();
    // },[fetchUrl])


  return (
    <div className='main'>
        <div className='filter-btns'>
            <button onClick={()=>setUrl("http://localhost:8000/books")}>All Books</button>
            <button onClick={()=>setUrl("http://localhost:8000/books?best_author=true")}>Best Author</button>
        </div>
        <div className='loading'>
            {loading && <p> <img src={Loading} alt="" /> </p>}
            {error && <p>{error}</p>}
        </div>
        
        {books && books.map(book =>(
            <div key={book.book_id} className='card'>
                <h2>{book.book_name}</h2>
                <p>{book.description}</p>
                <p>Published in the year {book.year_published }</p>
                <h3>{book.best_author?"*****":"**"}</h3>
            </div>
        ))}

      
    </div>
  )
}

export default Main
