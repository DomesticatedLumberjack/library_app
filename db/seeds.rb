# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Book.destroy_all
User.destroy_all
BookInventory.destroy_all

books = Book.create!([
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        active: true,
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        active: true,
        image_url: "https://cdn11.bigcommerce.com/s-673ff/images/stencil/1280x1280/products/461/9696/25805_Front_Cover_LARGE__26495.1649712829.jpg?c=2"
    },
    {
        title: "The Iliad",
        author: "Homer",
        active: true,
        image_url: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781439163382/the-iliad-9781439163382_hr.jpg"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        active: true,
        image_url: "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        active: true,
        image_url: "https://i0.wp.com/stonesoup.com/wp-content/uploads/2018/05/2018-6-The-Hobbit.jpg?fit=306%2C500&ssl=1"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        active: true,
        image_url: "https://m.media-amazon.com/images/I/816v0rgEiTL._AC_UF894,1000_QL80_.jpg"
    },
    {
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        active: true,
        image_url: "https://m.media-amazon.com/images/I/71K7vFwsnwL._AC_UF1000,1000_QL80_.jpg"
    },
])

users = User.create!([
    {
        email: "admin@tybrary.com",
        password: "password",
        first_name: "Admin",
        last_name: "",
        admin: true
    }
])

books.each {|book|
    count = rand(1...10)
    for i in 1..count do
        BookInventory.create!({
            book_id: book.id,
            checked_out: false
        })
    end
}