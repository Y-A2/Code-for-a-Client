    // Time Line

// Day 1: Planning
// Day 2: Starting
// Day 3: First Part Finished
// Day 4/5: Second Part
// Day 6: Fixing errors/cleaning up project
// Day 7/8: Thrid part finished with error emoji function
// Day 9: Final Part Finished
// Day 10: Final Cleanup

// Initial Startup
document.getElementById("input").addEventListener("change", inInventory);

// Default Inventory
const inventory = [
    { title: "Harry Potter II", author: "J.J. Bowlen", genre: "Fantasy", stock: 3 },
    { title: "Smile", author: "Tiny Flake", genre: "Drama", stock: 1 },
    { title: "The Fearful Night", author: "Mascrow", genre: "Horror", stock: 4 },
    { title: "Invisible Criminal", author: "Duba Durpe", genre: "Thriller", stock: 2 }
];
// Only Added Books
const addedBooks = []

// Table generator and flagger
function addBookRow(book) {

    let warning = "";

    if (book.stock < 3) {
        warning = " ⚠️";
    }

    document.getElementById("table").innerHTML +=
        `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.stock}${warning}</td>
        </tr>`;
}

function inInventory() {
    // Get user input change event
    const input = document.getElementById("input").value;

    document.getElementById("table").innerHTML =
        "<tr><th>Title</th><th>Author</th><th>Genre</th><th>Stock</th></tr>";

    if (input === "inventory") {

        document.getElementById("lowish").innerHTML =
            "Inventory!<br><br>";
        // Shows all inventory even added books
        for (let i = 0; i < inventory.length; i++) {
            addBookRow(inventory[i]);
        }
    }

    else if (input === "add") {

        let times = +prompt("How many books would you like to add?");
    
        for (let i = 0; i < times; i++) {
    
            alert(`Add Information to Book: ${i + 1}`);
    
            let title = prompt("What's the book's name?");
            let author = prompt("What's the author's name?");
            let genre = prompt("What's the genre?");
            let stock = +prompt("How many do you have?");
    
            let book = {
                title: title,
                author: author,
                genre: genre,
                stock: stock
            };
    
            inventory.push(book);
            addedBooks.push(book)
        }
    
        document.getElementById("lowish").innerHTML =
            "Added Books!<br><br>";
        // Added Books Inventory
        for (let i = 0; i < addedBooks.length; i++) {
            addBookRow(addedBooks[i]);
        }
    }

    else if (input === "lowstock") {

        document.getElementById("lowish").innerHTML =
            "Books Low of Stock!<br><br>";

        for (let i = 0; i < inventory.length; i++) {
            // Checks books low of stocks
            if (inventory[i].stock < 3) {
                addBookRow(inventory[i]);
            }
        }
    }

    else if (input === "title") {

        document.getElementById("lowish").innerHTML =
            "Search Book By Title<br><br>";

        let search = prompt("Enter title:");

        for (let i = 0; i < inventory.length; i++) {

            if (inventory[i].title.toLowerCase().includes(search.toLowerCase())) 
            {
                addBookRow(inventory[i]);
            }
        }
    }
}

