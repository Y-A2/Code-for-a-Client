    // Time Line

// Day 1: Planning
// Day 2: Starting
// Day 3: First Part Finished
// Day 4/5: Second Part
// Day 6: Fixing errors/cleaning up project
// Day 7/8: Thrid part finished with error emoji function
// Day 9: Final Part Finished
// Day 10: Final Cleanup

document.getElementById("input").addEventListener("change", inInventory);

let addedInventory = []
var bookCount = 4;

// Books Low of Stock Emoji
function addWarning(bookRow, stock) {
    if (stock < 3 && !bookRow.includes("⚠️")) {
        return bookRow.replace(
            `<td>${stock}</td>`,
            `<td>${stock} ⚠️</td>`
        );
    }
    return bookRow;
}

// Default books
var book1 = addWarning(
    "<tr><td>Harry Potter II</td><td>J.J. Bowlen</td><td>Fantasy</td><td>3</td></tr>",
    3
);

var book2 = addWarning(
    "<tr><td>Smile</td><td>Tiny Flake</td><td>Drama</td><td>1</td></tr>",
    1
);

var book3 = addWarning(
    "<tr><td>The Fearful Night</td><td>Mascrow</td><td>Horror</td><td>4</td></tr>",
    4
);

var book4 = addWarning(
    "<tr><td>Invisible Criminal</td><td>Duba Durpe</td><td>Thriller</td><td>2</td></tr>",
    2
);

// MAIN DATA SOURCE
const defaultInventory = [book1, book2, book3, book4];
function inInventory() {

    const input = document.getElementById("input").value;

    // Reset table every time
    document.getElementById("table").innerHTML =
        "<tr><th>Title</th><th>Author</th><th>Genre</th><th>Stock</th></tr>";

    // ---------------- INVENTORY ----------------
    if (input === "inventory") {

        document.getElementById("lowish").innerHTML = "Inventory!<br><br>";

        document.getElementById("table").innerHTML += defaultInventory.join(" ");
    }

    // ---------------- ADD BOOK ----------------
    else if (input === "add") {
        var times = +prompt("How many books would you like to add?");

        for (let i = 0; i < times; i++) {

            alert(`Add Information to Book: ${i + 1}`);

            var title = prompt("What's the book's name?");
            var author = prompt("What's the author's name?");
            var genre = prompt("What's the genre?");
            var stock = +prompt("How many do you have?");

            var book =
                `<tr><td>${title}</td><td>${author}</td><td>${genre}</td><td>${stock}</td></tr>`;

            book = addWarning(book, stock);

            addedInventory.push(book);
            defaultInventory.push(book)
        }

        document.getElementById("lowish").innerHTML = "Added Books!<br><br>";

        document.getElementById("table").innerHTML += addedInventory.join(" ");
    }

    // ---------------- LOW STOCK ----------------
    else if (input === "lowstock") {

        let lowStockBooks = [];

        for (let i = 0; i < defaultInventory.length; i++) {
            if (defaultInventory[i].includes("⚠️")) {
                lowStockBooks.push(defaultInventory[i]);
            }
        }

        document.getElementById("lowish").innerHTML =
            "Books Low of Stock!<br><br>";

        document.getElementById("table").innerHTML += lowStockBooks.join(" ");
    }

    // ---------------- TITLE ----------------
    else if (input === "title") {

        document.getElementById("lowish").innerHTML =
            "Search Book By Title<br><br>";
        
            var search = prompt("Enter title:");

            for (let i = 0; i < defaultInventory.length; i++) {
            
                if (defaultInventory[i].toLowerCase().includes(search.toLowerCase())) {
                    document.getElementById("table").innerHTML += defaultInventory[i];
                }
            }
    }
}

